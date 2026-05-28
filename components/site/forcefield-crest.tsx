import Image from "next/image";

import { SITE_ASSETS } from "@/lib/site-assets";

type ForceFieldCrestProps = {
  className?: string;
};

export function ForceFieldCrest({ className }: ForceFieldCrestProps) {
  return (
    <Image
      src={SITE_ASSETS.crest}
      alt="ForceField crest"
      width={512}
      height={512}
      className={className}
    />
  );
}
