"use client";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center lg:justify-start">
      <div className="relative group animate-tilt">
        <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--primary)/0.2)] to-[hsl(var(--accent)/0.2)] rounded-full blur-2xl" />
        <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--primary)/0.3)] to-[hsl(var(--accent)/0.3)] rounded-full blur-xl" />
        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[hsl(var(--background))] shadow-2xl bg-[hsl(var(--muted)/0.5)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.1)] to-[hsl(var(--chart-2)/0.1)]" />
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[hsl(var(--background)/0.9)] backdrop-blur-sm rounded-full px-3 py-1.5 border border-[hsl(var(--border))]">
            <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full animate-pulse" />
            <span className="text-xs font-medium text-[hsl(var(--foreground))]">Available for work</span>
          </div>
        </div>
      </div>
    </div>
  );
}
