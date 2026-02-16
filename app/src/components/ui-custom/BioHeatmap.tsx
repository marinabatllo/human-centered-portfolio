import { useEffect, useRef, useCallback } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────
interface Neuron {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    glow: number;
    targetGlow: number;
    colorIdx: number; // 0=primary, 1=secondary, 2=accent
    connections: number[];
    pulsePhase: number;
}

interface Impulse {
    fromIdx: number;
    toIdx: number;
    progress: number;
    speed: number;
    colorIdx: number;
    intensity: number;
}

// ─── Color palettes ───────────────────────────────────────────────────
const LIGHT = {
    bg: [250, 250, 247] as const,
    colors: [
        [75, 30, 90],     // plum   #4B1E5A
        [240, 108, 100],  // coral  #F06C64
        [230, 184, 78],   // gold   #E6B84E
    ] as const,
    lineAlpha: 0.06,
    nodeAlpha: 0.12,
    glowAlpha: 0.18,
    impulseAlpha: 0.55,
};

const DARK = {
    bg: [13, 11, 16] as const,
    colors: [
        [181, 140, 200],  // plum   #B58CC8
        [255, 133, 126],  // coral  #FF857E
        [240, 201, 101],  // gold   #F0C965
    ] as const,
    lineAlpha: 0.08,
    nodeAlpha: 0.18,
    glowAlpha: 0.25,
    impulseAlpha: 0.7,
};

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

// ─── Component ─────────────────────────────────────────────────────────
interface NeuralPulseProps {
    className?: string;
}

export function BioHeatmap({ className = '' }: NeuralPulseProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const darkRef = useRef(0);

    // Exposed ref for the parent to attach events on a higher z-index element
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePointerMove = useCallback((e: PointerEvent) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
    }, []);

    const handlePointerLeave = useCallback(() => {
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = 0, h = 0;
        let animId: number;
        let neurons: Neuron[] = [];
        let impulses: Impulse[] = [];
        let time = 0;

        // ── Build neural network ──────────────────────────────────────────
        const buildNetwork = () => {
            const count = Math.max(40, Math.floor((w * h) / 18000));
            neurons = [];
            impulses = [];

            // Place neurons with organic spacing (Poisson-ish)
            const minDist = Math.min(w, h) * 0.06;
            let attempts = 0;
            while (neurons.length < count && attempts < count * 20) {
                attempts++;
                const nx = Math.random() * w;
                const ny = Math.random() * h;
                let tooClose = false;
                for (const n of neurons) {
                    const dd = Math.hypot(n.x - nx, n.y - ny);
                    if (dd < minDist) { tooClose = true; break; }
                }
                if (!tooClose) {
                    neurons.push({
                        x: nx,
                        y: ny,
                        baseX: nx,
                        baseY: ny,
                        radius: 1.5 + Math.random() * 2,
                        glow: 0,
                        targetGlow: 0,
                        colorIdx: Math.floor(Math.random() * 3),
                        connections: [],
                        pulsePhase: Math.random() * Math.PI * 2,
                    });
                }
            }

            // Connect nearby neurons (dendrites / axons)
            const maxConn = Math.min(w, h) * 0.22;
            for (let i = 0; i < neurons.length; i++) {
                for (let j = i + 1; j < neurons.length; j++) {
                    const d = Math.hypot(neurons[i].x - neurons[j].x, neurons[i].y - neurons[j].y);
                    if (d < maxConn && neurons[i].connections.length < 4 && neurons[j].connections.length < 4) {
                        neurons[i].connections.push(j);
                        neurons[j].connections.push(i);
                    }
                }
            }
        };

        // ── Resize ────────────────────────────────────────────────────────
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = container.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            buildNetwork();
        };

        resize();
        window.addEventListener('resize', resize);

        // Listen on the SECTION parent (closest section) for pointer events
        // so interaction works through the overlapping title text
        const section = container.closest('section') || container;
        section.addEventListener('pointermove', handlePointerMove as EventListener);
        section.addEventListener('pointerleave', handlePointerLeave as EventListener);

        // ── Spawn impulse ─────────────────────────────────────────────────
        const spawnImpulse = (fromIdx: number, toIdx: number) => {
            if (impulses.length > 60) return;
            impulses.push({
                fromIdx,
                toIdx,
                progress: 0,
                speed: 0.008 + Math.random() * 0.012,
                colorIdx: neurons[fromIdx].colorIdx,
                intensity: 0.7 + Math.random() * 0.3,
            });
        };

        // ── Animate ───────────────────────────────────────────────────────
        const animate = () => {
            time += 0.01;

            // Smooth theme interpolation
            const isDark = document.documentElement.classList.contains('dark');
            darkRef.current += ((isDark ? 1 : 0) - darkRef.current) * 0.025;
            const dt = darkRef.current;

            const pal = {
                bg: [lerp(LIGHT.bg[0], DARK.bg[0], dt), lerp(LIGHT.bg[1], DARK.bg[1], dt), lerp(LIGHT.bg[2], DARK.bg[2], dt)],
                colors: LIGHT.colors.map((lc, i) => {
                    const dc = DARK.colors[i];
                    return [lerp(lc[0], dc[0], dt), lerp(lc[1], dc[1], dt), lerp(lc[2], dc[2], dt)];
                }),
                lineAlpha: lerp(LIGHT.lineAlpha, DARK.lineAlpha, dt),
                nodeAlpha: lerp(LIGHT.nodeAlpha, DARK.nodeAlpha, dt),
                glowAlpha: lerp(LIGHT.glowAlpha, DARK.glowAlpha, dt),
                impulseAlpha: lerp(LIGHT.impulseAlpha, DARK.impulseAlpha, dt),
            };

            // Clear
            ctx.fillStyle = `rgb(${pal.bg[0]},${pal.bg[1]},${pal.bg[2]})`;
            ctx.fillRect(0, 0, w, h);

            // ── Micro-contractions: neurons breathe ─────────────────────────
            for (const n of neurons) {
                const breathe = Math.sin(time * 0.8 + n.pulsePhase) * 2;
                const drift = Math.sin(time * 0.3 + n.pulsePhase * 1.7) * 1.5;
                n.x = n.baseX + breathe;
                n.y = n.baseY + drift;
            }

            // ── Cursor proximity → fire neurons ─────────────────────────────
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const activationRadius = Math.min(w, h) * 0.18;

            for (const n of neurons) {
                const md = Math.hypot(n.x - mx, n.y - my);
                if (md < activationRadius) {
                    const strength = 1 - md / activationRadius;
                    n.targetGlow = Math.max(n.targetGlow, strength * 0.9);
                }
            }

            // ── Spontaneous firing (organic life) ───────────────────────────
            if (Math.random() < 0.02) {
                const idx = Math.floor(Math.random() * neurons.length);
                neurons[idx].targetGlow = 0.5 + Math.random() * 0.4;
            }

            // ── Draw connections (dendrites) ────────────────────────────────
            const drawn = new Set<string>();
            for (let i = 0; i < neurons.length; i++) {
                const n = neurons[i];
                for (const j of n.connections) {
                    const key = i < j ? `${i}-${j}` : `${j}-${i}`;
                    if (drawn.has(key)) continue;
                    drawn.add(key);

                    const m = neurons[j];
                    const avgGlow = (n.glow + m.glow) * 0.5;
                    const alpha = pal.lineAlpha + avgGlow * 0.12;
                    const c = pal.colors[n.colorIdx];

                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);

                    // Slightly curved dendrite
                    const cpx = (n.x + m.x) * 0.5 + Math.sin(time + i) * 8;
                    const cpy = (n.y + m.y) * 0.5 + Math.cos(time + j) * 8;
                    ctx.quadraticCurveTo(cpx, cpy, m.x, m.y);

                    ctx.strokeStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
                    ctx.lineWidth = 0.5 + avgGlow * 1.5;
                    ctx.stroke();
                }
            }

            // ── Update & draw impulses ──────────────────────────────────────
            impulses = impulses.filter(imp => {
                imp.progress += imp.speed;
                if (imp.progress >= 1) {
                    // Arrived: fire target neuron & cascade
                    const target = neurons[imp.toIdx];
                    target.targetGlow = Math.min(1, target.targetGlow + 0.4);
                    // Cascade to one random neighbor
                    if (Math.random() < 0.5 && target.connections.length > 0) {
                        const nextIdx = target.connections[Math.floor(Math.random() * target.connections.length)];
                        if (nextIdx !== imp.fromIdx) {
                            spawnImpulse(imp.toIdx, nextIdx);
                        }
                    }
                    return false;
                }

                const from = neurons[imp.fromIdx];
                const to = neurons[imp.toIdx];
                const cpx = (from.x + to.x) * 0.5 + Math.sin(time + imp.fromIdx) * 8;
                const cpy = (from.y + to.y) * 0.5 + Math.cos(time + imp.toIdx) * 8;

                // Quadratic bezier position at t
                const t = imp.progress;
                const mt = 1 - t;
                const px = mt * mt * from.x + 2 * mt * t * cpx + t * t * to.x;
                const py = mt * mt * from.y + 2 * mt * t * cpy + t * t * to.y;

                const c = pal.colors[imp.colorIdx];
                const pulseSize = 3 + imp.intensity * 3;
                const alpha = pal.impulseAlpha * imp.intensity * (1 - Math.abs(t - 0.5) * 0.6);

                // Glow
                const grad = ctx.createRadialGradient(px, py, 0, px, py, pulseSize * 3);
                grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${alpha * 0.4})`);
                grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
                ctx.fillStyle = grad;
                ctx.fillRect(px - pulseSize * 3, py - pulseSize * 3, pulseSize * 6, pulseSize * 6);

                // Core dot
                ctx.beginPath();
                ctx.arc(px, py, pulseSize * 0.6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
                ctx.fill();

                return true;
            });

            // ── Fire impulses from glowing neurons ──────────────────────────
            for (let i = 0; i < neurons.length; i++) {
                const n = neurons[i];
                if (n.targetGlow > 0.4 && n.glow < n.targetGlow * 0.5 && n.connections.length > 0) {
                    // Pick a random connection to fire
                    const jIdx = n.connections[Math.floor(Math.random() * n.connections.length)];
                    spawnImpulse(i, jIdx);
                }
            }

            // ── Draw neurons ────────────────────────────────────────────────
            for (const n of neurons) {
                // Ease glow
                n.glow += (n.targetGlow - n.glow) * 0.08;
                n.targetGlow *= 0.97; // decay

                const c = pal.colors[n.colorIdx];
                const baseAlpha = pal.nodeAlpha;

                // Glow aura
                if (n.glow > 0.05) {
                    const glowSize = n.radius * (4 + n.glow * 12);
                    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize);
                    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${pal.glowAlpha * n.glow})`);
                    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},${pal.glowAlpha * n.glow * 0.3})`);
                    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Core neuron
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius * (1 + n.glow * 0.5), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${baseAlpha + n.glow * 0.5})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            section.removeEventListener('pointermove', handlePointerMove as EventListener);
            section.removeEventListener('pointerleave', handlePointerLeave as EventListener);
        };
    }, [handlePointerMove, handlePointerLeave]);

    return (
        <div ref={containerRef} className={`absolute inset-0 ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.9 }}
            />
        </div>
    );
}
