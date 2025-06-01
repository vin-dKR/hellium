"use client"

import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function GlobeDemo({ className }: { className?: string }) {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <div className={cn("relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-40 pb-40 pt-8 md:pb-60 md:shadow-xl z-0", className)}>
            <span className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                {/* Larger toggle button with sliding circle */}
                <div
                    onClick={handleToggle}
                    className={`relative w-24 h-12 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 ${isToggled ? "bg-brown-500" : "bg-darkorg"
                        }`}
                >
                    <div
                        className={`absolute top-1 left-1 w-10 h-10 bg-white rounded-full shadow-md transition-transform duration-300 ${isToggled ? "transform translate-x-12" : ""
                            }`}
                    />
                </div>
            </span>

            <Globe className="top-28 w-full" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    );
}
