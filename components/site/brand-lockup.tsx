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
  sm: { img: "h-10 w-auto", subtitle: "text-[10px]" },
  md: { img: "h-12 w-auto", subtitle: "text-[11px]" },
  lg: { img: "h-14 w-auto", subtitle: "text-xs" },
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
      <Image
        src={SITE_ASSETS.brandSignature}
        alt="ForceField Technologies Pvt Ltd logo"
        width={512}
        height={512}
        className={cn("object-contain", styles.img)}
      />
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
