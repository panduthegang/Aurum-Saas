import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Home, ArrowLeft, Compass } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 150);
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className="min-h-screen bg-stone-950 text-stone-50 relative overflow-hidden flex items-center justify-center">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Floating Orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-stone-800/30 to-transparent rounded-full blur-3xl animate-pulse"
                style={{
                    transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-stone-700/20 to-transparent rounded-full blur-3xl animate-pulse"
                style={{
                    animationDelay: '1s',
                    transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none" />

            {/* Scanlines */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* 404 Number with Glitch Effect */}
                <div className="relative mb-8">
                    <h1
                        className={`text-[12rem] md:text-[18rem] lg:text-[22rem] font-serif leading-none tracking-tighter select-none transition-all duration-100 ${glitchActive ? 'translate-x-1 text-red-500/50' : ''}`}
                        style={{
                            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                            transition: glitchActive ? 'none' : 'transform 0.5s ease-out',
                            textShadow: glitchActive
                                ? '-2px 0 cyan, 2px 0 magenta'
                                : '0 0 80px rgba(255,255,255,0.05)',
                        }}
                    >
                        404
                    </h1>

                    {/* Glitch Layers */}
                    {glitchActive && (
                        <>
                            <h1
                                className="absolute inset-0 text-[12rem] md:text-[18rem] lg:text-[22rem] font-serif leading-none tracking-tighter select-none text-cyan-500/30"
                                style={{ transform: 'translate(-4px, -2px)', clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
                            >
                                404
                            </h1>
                            <h1
                                className="absolute inset-0 text-[12rem] md:text-[18rem] lg:text-[22rem] font-serif leading-none tracking-tighter select-none text-red-500/30"
                                style={{ transform: 'translate(4px, 2px)', clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
                            >
                                404
                            </h1>
                        </>
                    )}
                </div>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-500" />
                    <Compass className="w-5 h-5 text-stone-500 animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-500" />
                </div>

                {/* Message */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-2xl md:text-4xl font-serif">
                        <span className="italic text-stone-500">Lost</span> in the Void
                    </h2>
                    <p className="text-stone-400 text-sm md:text-base max-w-md mx-auto leading-relaxed tracking-wide">
                        The space you seek does not exist within our architectural realm.
                        Perhaps it was never built, or has been deconstructed.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="flex justify-center gap-12 mb-12 border-y border-white/10 py-8">
                    <div className="text-center">
                        <span className="block text-3xl font-serif mb-1">∅</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Status</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-serif mb-1">—</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Page</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-serif mb-1">?</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Route</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/">
                        <Button
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white hover:text-stone-900 hover:border-white group flex items-center gap-3 px-8"
                        >
                            <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
                            Return Home
                        </Button>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors text-sm uppercase tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Go Back
                    </button>
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600">
                        Error Code: 404 • Page Not Found • Aurum Architecture
                    </p>
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
        </div>
    );
};

export default NotFoundPage;
