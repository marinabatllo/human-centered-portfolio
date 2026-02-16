import { useEffect, useRef } from 'react';

/* ─── Config ─── */
const COLORS = {
    plum: '#B58CC8',
    coral: '#FF857E',
    gold: '#F0C965',
};

interface FloatingNode {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    radius: number;
    label: string;
    color: string;
    speed: number;
    phase: number;
    orbit: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
    size: number;
}

const NODE_DATA: { label: string; color: string }[] = [
    // Industries
    { label: 'Healthcare', color: COLORS.plum },
    { label: 'FMCG', color: COLORS.coral },
    { label: 'Consulting', color: COLORS.gold },
    // Deliverables
    { label: 'ML Models', color: COLORS.plum },
    { label: 'Data Pipelines', color: COLORS.coral },
    { label: 'BI Dashboards', color: COLORS.gold },
    // Tools / Skills
    { label: 'Python', color: COLORS.plum },
    { label: 'React', color: COLORS.coral },
    { label: 'TensorFlow', color: COLORS.gold },
    { label: 'UX Design', color: COLORS.plum },
    { label: 'Strategy', color: COLORS.coral },
    { label: 'AI', color: COLORS.gold },
];

function createNodes(w: number, h: number): FloatingNode[] {
    return NODE_DATA.map((data, i) => {
        const angle = (i / NODE_DATA.length) * Math.PI * 2;
        const radiusFromCenter = Math.min(w, h) * (0.25 + Math.random() * 0.2);
        const cx = w / 2;
        const cy = h / 2;
        return {
            x: cx + Math.cos(angle) * radiusFromCenter,
            y: cy + Math.sin(angle) * radiusFromCenter,
            baseX: cx + Math.cos(angle) * radiusFromCenter,
            baseY: cy + Math.sin(angle) * radiusFromCenter,
            radius: 3 + Math.random() * 4,
            label: data.label,
            color: data.color,
            speed: 0.0003 + Math.random() * 0.0004,
            phase: Math.random() * Math.PI * 2,
            orbit: 15 + Math.random() * 30,
        };
    });
}

export function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const nodesRef = useRef<FloatingNode[]>([]);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
            nodesRef.current = createNodes(rect.width, rect.height);
        };

        resize();
        window.addEventListener('resize', resize);

        const handleMouse = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        canvas.addEventListener('mousemove', handleMouse);

        // Spawn particles occasionally
        const spawnParticle = () => {
            const rect = canvas.getBoundingClientRect();
            if (particlesRef.current.length < 30) {
                const color = [COLORS.plum, COLORS.coral, COLORS.gold][Math.floor(Math.random() * 3)];
                particlesRef.current.push({
                    x: Math.random() * rect.width,
                    y: Math.random() * rect.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    life: 0,
                    maxLife: 3000 + Math.random() * 4000,
                    color,
                    size: 1 + Math.random() * 2,
                });
            }
        };

        const animate = (timestamp: number) => {
            const dt = timestamp - timeRef.current;
            timeRef.current = timestamp;
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            ctx.clearRect(0, 0, w, h);

            // Update nodes — gentle orbiting
            nodesRef.current.forEach((node) => {
                node.phase += node.speed * dt;
                node.x = node.baseX + Math.cos(node.phase) * node.orbit;
                node.y = node.baseY + Math.sin(node.phase * 0.7) * node.orbit * 0.6;

                // Mouse repulsion
                const dx = node.x - mouseRef.current.x;
                const dy = node.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    node.x += dx * force * 0.05;
                    node.y += dy * force * 0.05;
                }
            });

            // Draw connections
            const nodes = nodesRef.current;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = Math.min(w, h) * 0.35;

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.08;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `${nodes[i].color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw nodes
            nodes.forEach((node) => {
                // Glow
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 6);
                gradient.addColorStop(0, `${node.color}18`);
                gradient.addColorStop(1, `${node.color}00`);
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${node.color}60`;
                ctx.fill();

                // Pulsing ring
                const pulseScale = 1 + Math.sin(node.phase * 3) * 0.3;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * pulseScale * 1.8, 0, Math.PI * 2);
                ctx.strokeStyle = `${node.color}15`;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Label
                ctx.font = '9px monospace';
                ctx.fillStyle = `${node.color}35`;
                ctx.textAlign = 'center';
                ctx.fillText(node.label.toUpperCase(), node.x, node.y - node.radius * 3);
            });

            // Update and draw particles
            if (Math.random() < 0.02) spawnParticle();

            particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);
            particlesRef.current.forEach((p) => {
                p.life += dt;
                p.x += p.vx;
                p.y += p.vy;

                const progress = p.life / p.maxLife;
                const alpha = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${Math.floor(alpha * 30).toString(16).padStart(2, '0')}`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ opacity: 0.6 }}
        />
    );
}
