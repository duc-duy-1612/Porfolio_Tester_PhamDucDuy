import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.08;
      targetMouseY = (e.clientY - height / 2) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const numStars = 130;
    const stars: Star[] = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 1,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const speed = 0.5;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for 3D parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= speed;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = (Math.random() - 0.5) * width * 1.5;
          star.y = (Math.random() - 0.5) * height * 1.5;
        }

        const k = 300 / star.z;
        const px = star.x * k + width / 2 + mouseX * (1000 - star.z) * 0.0008;
        const py = star.y * k + height / 2 + mouseY * (1000 - star.z) * 0.0008;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const depthAlpha = (1 - star.z / 1000) * star.alpha;
          const radius = (1 - star.z / 1000) * star.size + 0.3;

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 197, 253, ${depthAlpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-transparent">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.85 }}
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 70%)',
          willChange: 'transform, opacity'
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full transform-gpu"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0) 70%)',
          willChange: 'transform, opacity'
        }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full transform-gpu"
      />
    </div>
  );
}
