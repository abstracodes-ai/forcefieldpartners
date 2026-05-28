import Image from "next/image";

import { SITE_ASSETS } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  mode?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: {
    icon: "size-8",
    title: "text-xl",
    meta: "text-[9px] tracking-[0.38em]",
    subtitle: "text-[10px]",
    gap: "gap-3",
  },
  md: {
    icon: "size-10",
    title: "text-[1.65rem]",
    meta: "text-[10px] tracking-[0.42em]",
    subtitle: "text-[11px]",
    gap: "gap-3.5",
  },
  lg: {
    icon: "size-12",
    title: "text-[2rem]",
    meta: "text-[11px] tracking-[0.48em]",
    subtitle: "text-xs",
    gap: "gap-4",
  },
};

export function BrandLockup({
  mode = "dark",
  size = "md",
  showSubtitle = false,
  className,
}: BrandLockupProps) {
  const styles = sizeStyles[size];
  const isDark = mode === "dark";

  return (
    <div className={cn("flex items-center", styles.gap, className)}>
      <div
        className={cn(
          "logo-surface relative flex shrink-0 items-center justify-center rounded-2xl border backdrop-blur-sm",
          styles.icon,
        )}
      >
        <div className="absolute inset-1 rounded-[0.9rem] bg-linear-to-br from-teal-400/10 to-transparent" />
        <Image
          src={SITE_ASSETS.primaryCrest}
          alt="ForceField shield mark"
          width={72}
          height={72}
          className="relative z-10 h-[78%] w-[78%] object-contain"
        />
      </div>

      <div className="min-w-0">
        <div
          className={cn(
            "font-display font-semibold leading-none tracking-tight",
            styles.title,
            isDark ? "text-white" : "text-navy-950",
          )}
        >
          <span className={cn(isDark ? "text-white" : "text-navy-900")}>Force</span>
          <span className="bg-linear-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Field
          </span>
        </div>
        <div
          className={cn(
            "mt-1 font-semibold uppercase leading-none",
            styles.meta,
            isDark ? "text-slate-400" : "text-navy-800/72",
          )}
        >
          Partners LLP
        </div>
        {showSubtitle ? (
          <div
            className={cn(
              "mt-1.5 text-balance font-medium leading-5",
              styles.subtitle,
              isDark ? "text-slate-300" : "text-muted-foreground",
            )}
          >
            Field Partner, DevOps &amp; Workflow Automation
          </div>
        ) : null}
      </div>
    </div>
  );
}
