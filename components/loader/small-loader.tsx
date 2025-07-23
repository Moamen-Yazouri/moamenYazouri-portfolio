import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils"; 

interface LoaderProps {
  size?: number | string;
  className?: string
}

export function Loader({ size = 16, className }: LoaderProps) {
  const sizeClass = typeof size === "number" ? `h-${size / 4} w-${size / 4}` : size
  return <Loader2 className={cn("animate-spin", sizeClass, className)} />
}
