import { useEffect, useRef } from 'react';

/* ─── Config ─── */
const COLORS = [
    'rgba(181, 140, 200, 0.4)', // Softer Plum
    'rgba(255, 133, 126, 0.4)', // Softer Coral
    'rgba(240, 201, 101, 0.4)', // Softer Gold
];

const PARTICLE_COUNT = 4000;
const MORPH_SPEED = 0.03;
const ROTATION_SPEED = 0.001;

interface Particle {
    x: number;
    y: number;
    z: number;
    tx: number; // target x
    ty: number; // target y
    tz: number; // target z
    size: number;
    color: string;
}

type Shape = 'brain' | 'graph' | 'app' | 'ai';

export function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const currentShapeRef = useRef<Shape>('brain');
    const animRef = useRef<number>(0);
    const rotationRef = useRef({ x: 0, y: 0 });

    const getShapePoints = (shape: Shape, w: number, h: number): { x: number; y: number; z: number }[] => {
        const points: { x: number; y: number; z: number }[] = [];
        const baseSize = Math.min(w, h) * 0.75;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            let x = 0, y = 0, z = 0;

            if (shape === 'brain') {
                // More detailed brain lobes
                const lobe = Math.random() > 0.5 ? 1 : -1;
                const u = Math.random() * Math.PI * 2;
                const v = Math.random() * Math.PI;
                // Extended horizontally and centered
                x = (baseSize * 1.2 * Math.sin(v) * Math.cos(u) * 0.7) + (lobe * baseSize * 0.35);
                y = (baseSize * Math.sin(v) * Math.sin(u) * 1.1);
                z = (baseSize * 0.7 * Math.cos(v));
                // Add texture
                x += Math.sin(v * 12) * 20;
                y += Math.cos(u * 12) * 20;
            } else if (shape === 'graph') {
                // Wide horizontal network clusters
                const clusterCount = 12;
                const clusterIdx = i % clusterCount;
                const angle = (clusterIdx / clusterCount) * Math.PI * 2;
                // Full width spread
                const radiusX = (i % 3 === 0 ? w * 0.45 : w * 0.25);
                const radiusY = (i % 3 === 0 ? h * 0.4 : h * 0.15);
                const cx = Math.cos(angle) * radiusX;
                const cy = Math.sin(angle) * radiusY;
                const cz = (Math.random() - 0.5) * baseSize;
                const spread = baseSize * 0.4;
                x = cx + (Math.random() - 0.5) * spread;
                y = cy + (Math.random() - 0.5) * spread;
                z = cz + (Math.random() - 0.5) * spread;
            } else if (shape === 'app') {
                // 3D Wireframe App Window - wide and tall
                const u = (Math.random() - 0.5) * 2;
                const v = (Math.random() - 0.5) * 2;
                const face = Math.floor(Math.random() * 6);
                const width = w * 0.45;
                const height = h * 0.45;
                const depth = baseSize * 0.15;

                if (face === 0) { x = u * width; y = v * height; z = depth; }
                else if (face === 1) { x = u * width; y = v * height; z = -depth; }
                else if (face === 2) { x = width; y = u * height; z = v * depth; }
                else if (face === 3) { x = -width; y = u * height; z = v * depth; }
                else if (face === 4) { x = u * width; y = height; z = v * depth; }
                else { x = u * width; y = -height; z = v * depth; }
            } else if (shape === 'ai') {
                // Centered AI Halo / Sparkle
                if (i < PARTICLE_COUNT * 0.4) {
                    // Denser central core
                    x = (Math.random() - 0.5) * baseSize * 0.5;
                    y = (Math.random() - 0.5) * baseSize * 0.5;
                    z = (Math.random() - 0.5) * baseSize * 0.5;
                } else {
                    // Wide energy ring
                    const angle = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    x = baseSize * 1.6 * Math.sin(phi) * Math.cos(angle);
                    y = baseSize * 1.2 * Math.sin(phi) * Math.sin(angle);
                    z = baseSize * 1.0 * Math.cos(phi);
                }
            }
            points.push({ x, y, z });
        }
        return points;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            if (particlesRef.current.length === 0) {
                const initialPoints = getShapePoints('brain', window.innerWidth, window.innerHeight);
                particlesRef.current = initialPoints.map(p => ({
                    x: (Math.random() - 0.5) * window.innerWidth,
                    y: (Math.random() - 0.5) * window.innerHeight,
                    z: (Math.random() - 0.5) * 1000,
                    tx: p.x, ty: p.y, tz: p.z,
                    size: Math.random() * 1.2 + 0.8, // Smaller particles: 0.8 - 2.0px
                    color: COLORS[Math.floor(Math.random() * COLORS.length)]
                }));
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const shapes: Shape[] = ['graph', 'brain', 'ai', 'app'];
        let shapeIdx = 0;

        const cycleShape = () => {
            shapeIdx = (shapeIdx + 1) % shapes.length;
            currentShapeRef.current = shapes[shapeIdx];
            const newPoints = getShapePoints(currentShapeRef.current, window.innerWidth, window.innerHeight);
            particlesRef.current.forEach((p, i) => {
                p.tx = newPoints[i].x;
                p.ty = newPoints[i].y;
                p.tz = newPoints[i].z;
            });
        };

        const interval = setInterval(cycleShape, 7000);

        const animate = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            // CLEAR THE CANVAS COMPLETELY FOR THEME COMPATIBILITY
            ctx.clearRect(0, 0, w, h);

            rotationRef.current.y += ROTATION_SPEED;
            rotationRef.current.x += ROTATION_SPEED * 0.3;

            const cosY = Math.cos(rotationRef.current.y);
            const sinY = Math.sin(rotationRef.current.y);
            const cosX = Math.cos(rotationRef.current.x);
            const sinX = Math.sin(rotationRef.current.x);

            particlesRef.current.forEach(p => {
                p.x += (p.tx - p.x) * MORPH_SPEED;
                p.y += (p.ty - p.y) * MORPH_SPEED;
                p.z += (p.tz - p.z) * MORPH_SPEED;

                let xRotY = p.x * cosY - p.z * sinY;
                let zRotY = p.x * sinY + p.z * cosY;
                let yRotX = p.y * cosX - zRotY * sinX;
                let zRotX = p.y * sinX + zRotY * cosX;

                const perspective = 1200 / (1200 + zRotX);
                const px = xRotY * perspective + w / 2;
                const py = yRotX * perspective + h / 2;

                if (perspective > 0) {
                    ctx.beginPath();
                    ctx.arc(px, py, p.size * perspective, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = Math.min(0.6, perspective * 0.5); // Lower alpha for softening
                    ctx.fill();
                }
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            clearInterval(interval);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 1.0, zIndex: 0 }}
        />
    );
}
