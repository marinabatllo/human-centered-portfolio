import { useEffect, useRef } from 'react';

/* ─── Config ─── */
const COLORS = [
    '#B58CC8', // Plum
    '#FF857E', // Coral
    '#F0C965', // Gold
];

const PARTICLE_COUNT = 3000;
const MORPH_SPEED = 0.05; // Smoothing for morph transitions
const ROTATION_SPEED = 0.002;

interface Particle {
    x: number;
    y: number;
    z: number;
    tx: number; // target x
    ty: number; // target y
    tz: number; // target z
    vx: number;
    vy: number;
    vz: number;
    size: number;
    color: string;
}

type Shape = 'brain' | 'graph' | 'app' | 'ai';

export function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const currentShapeRef = useRef<Shape>('brain');
    const animRef = useRef<number>(0);
    const timeRef = useRef(0);
    const rotationRef = useRef({ x: 0, y: 0 });

    // Generate points for different shapes
    const getShapePoints = (shape: Shape, w: number, h: number): { x: number; y: number; z: number }[] => {
        const points: { x: number; y: number; z: number }[] = [];
        const size = Math.min(w, h) * 0.65; // High scale for visibility

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            let x = 0, y = 0, z = 0;

            if (shape === 'brain') {
                const lobe = Math.random() > 0.5 ? 1 : -1;
                const u = Math.random() * Math.PI * 2;
                const v = Math.random() * Math.PI;
                x = (size * 0.8 * Math.sin(v) * Math.cos(u) * 0.7) + (lobe * size * 0.3);
                y = (size * Math.sin(v) * Math.sin(u) * 1.2);
                z = (size * 0.8 * Math.cos(v) * 0.8);
                x += Math.sin(v * 10) * 15;
                y += Math.cos(u * 10) * 15;
            } else if (shape === 'graph') {
                const clusterCount = 8;
                const clusterIdx = i % clusterCount;
                const angle = (clusterIdx / clusterCount) * Math.PI * 2;
                const radius = i % 2 === 0 ? size * 1.2 : size * 0.6;
                const cx = Math.cos(angle) * radius;
                const cy = Math.sin(angle) * radius;
                const cz = (Math.random() - 0.5) * size * 1.5;
                const spread = size * 0.5;
                x = cx + (Math.random() - 0.5) * spread;
                y = cy + (Math.random() - 0.5) * spread;
                z = cz + (Math.random() - 0.5) * spread;
            } else if (shape === 'app') {
                const face = Math.floor(Math.random() * 6);
                const u = (Math.random() - 0.5) * 2;
                const v = (Math.random() - 0.5) * 2;
                const depth = 0.2;
                if (face === 0) { x = u * size * 1.4; y = v * size * 0.9; z = size * depth; }
                else if (face === 1) { x = u * size * 1.4; y = v * size * 0.9; z = -size * depth; }
                else if (face === 2) { x = size * 1.4; y = u * size * 0.9; z = v * size * depth; }
                else if (face === 3) { x = -size * 1.4; y = u * size * 0.9; z = v * size * depth; }
                else if (face === 4) { x = u * size * 1.4; y = size * 0.9; z = v * size * depth; }
                else { x = u * size * 1.4; y = -size * 0.9; z = v * size * depth; }
            } else if (shape === 'ai') {
                if (i < PARTICLE_COUNT * 0.4) {
                    x = (Math.random() - 0.5) * size * 0.6;
                    y = (Math.random() - 0.5) * size * 0.6;
                    z = (Math.random() - 0.5) * size * 0.6;
                } else {
                    const angle = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    x = size * 1.4 * Math.sin(phi) * Math.cos(angle);
                    y = size * 1.4 * Math.sin(phi) * Math.sin(angle);
                    z = size * 1.4 * Math.cos(phi);
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
                    x: p.x, y: p.y, z: p.z,
                    tx: p.x, ty: p.y, tz: p.z,
                    vx: 0, vy: 0, vz: 0,
                    size: Math.random() * 2.5 + 1.2,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)]
                }));
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const shapes: Shape[] = ['brain', 'graph', 'app', 'ai'];
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

        const interval = setInterval(cycleShape, 6000);

        const animate = (t: number) => {
            timeRef.current = t;
            const w = window.innerWidth;
            const h = window.innerHeight;

            ctx.clearRect(0, 0, w, h);

            rotationRef.current.y += ROTATION_SPEED;
            rotationRef.current.x += ROTATION_SPEED * 0.5;

            const cosY = Math.cos(rotationRef.current.y);
            const sinY = Math.sin(rotationRef.current.y);
            const cosX = Math.cos(rotationRef.current.x);
            const sinX = Math.sin(rotationRef.current.x);

            particlesRef.current.forEach(p => {
                p.x += (p.tx - p.x) * MORPH_SPEED;
                p.y += (p.ty - p.y) * MORPH_SPEED;
                p.z += (p.tz - p.z) * MORPH_SPEED;

                let x = p.x;
                let y = p.y;
                let z = p.z;

                let x1 = x * cosY - z * sinY;
                let z1 = x * sinY + z * cosY;
                let y2 = y * cosX - z1 * sinX;
                let z2 = y * sinX + z1 * cosX;

                const perspective = 1200 / (1200 + z2);
                const px = x1 * perspective + w / 2;
                const py = y2 * perspective + h / 2;

                if (perspective > 0) {
                    ctx.beginPath();
                    ctx.arc(px, py, p.size * perspective, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = Math.max(0, perspective * 0.85);
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
            style={{ opacity: 1.0 }}
        />
    );
}
