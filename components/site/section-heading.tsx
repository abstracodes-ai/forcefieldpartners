import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-5", align === "center" && "mx-auto text-center")}>
      <Badge variant={dark ? "dark" : "light"} className={align === "center" ? "mx-auto" : undefined}>
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-navy-900",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-balance text-base leading-7 sm:text-lg",
            dark ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
