import { MutableRefObject } from "react";
import { MicrocmsParagraph } from "@/components/microcms/MicrocmsParagraph";

export const HeroArea = ({
  h1Ref,
  serviceName,
  shortDesc,
}: {
  h1Ref?: MutableRefObject<HTMLHeadingElement | null>;
  serviceName: string;
  shortDesc: string;
}) => (
  <div // Hero area
    className="mb-[-40px] flex min-h-screen-small max-w-full flex-col justify-center px-[20px] pb-[40px] text-white"
  >
    <div className="max-w-[800px] py-16">
      <h1
        ref={h1Ref}
        className="relative mb-8 inline-block pr-16 text-5xl font-bold lg:text-6xl"
      >
        <div className="animate-fade-slidein">
          {serviceName}
          <hr className="mt-6 w-full origin-left animate-[expand-title-underline_both] border-t-2 animate-duration-1000 animate-delay-500" />
        </div>
      </h1>
      <MicrocmsParagraph className="animate-fade-slidein  animate-delay-500">
        {shortDesc}
      </MicrocmsParagraph>
    </div>
  </div>
);
