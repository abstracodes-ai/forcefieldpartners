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
    frame: "w-[122px] rounded-xl",
    subtitle: "text-[10px]",
  },
  md: {
    frame: "w-[148px] rounded-[0.95rem]",
    subtitle: "text-[11px]",
  },
  lg: {
    frame: "w-[176px] rounded-[1.05rem]",
    subtitle: "text-xs",
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
    <div className={cn("min-w-0", className)}>
      <div
        className={cn(
          "field-line inline-flex overflow-hidden border backdrop-blur-sm",
          styles.frame,
          isDark
            ? "border-white/14 bg-linear-to-br from-[#040b1b] via-[#07162f] to-[#063550] shadow-[0_18px_42px_rgba(0,0,0,0.35)]"
            : "border-teal-500/30 bg-linear-to-br from-[#030c1f] via-[#071a35] to-[#063550] shadow-[0_12px_28px_rgba(6,16,31,0.28)]",
        )}
      >
        <Image
          src={SITE_ASSETS.brandSignature}
          alt="ForceField Partners LLP logo"
          width={351}
          height={157}
          className="h-auto w-full object-contain"
        />
      </div>
      {showSubtitle ? (
        <div
          className={cn(
            "mt-2 text-balance font-medium leading-5",
            styles.subtitle,
            isDark ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          Field Partner, DevOps &amp; Workflow Automation
        </div>
      ) : null}
    </div>
  );
}
