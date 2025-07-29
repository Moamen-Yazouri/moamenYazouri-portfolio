"use client";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-0">
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
        </div>
      </div>
    </div>
  );
}