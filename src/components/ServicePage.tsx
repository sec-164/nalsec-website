import { useEffect, useRef, useState } from "react";
import { MicrocmsHtml } from "@/components/microcms/MicrocmsHtml";
import { MicrocmsImage } from "@/components/microcms/MicrocmsImage";
import { MicrocmsParagraph } from "@/components/microcms/MicrocmsParagraph";
import { Props } from "@/pages/services/[slug]";

export const ServicePage = ({
  serviceName,
  backgroundImage,
  shortDesc,
  detailedDesc,
}: Omit<Props, "slug">) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const mainH1Ref = useRef<HTMLHeadingElement>(null);
  const [h1Elms, setH1Elms] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    if (contentRef.current)
      setH1Elms(Array.from(contentRef.current.getElementsByTagName("h1")));
  }, []);

  const scrollTo = (target: HTMLHeadingElement | null) => {
    if (!target) return;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 50,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div // Wrapper
        className="relative"
      >
        <div // Sticky Background
          className="sticky top-0 -mb-screen-large h-screen-large"
        >
          <div className="relative h-full">
            <MicrocmsImage src={backgroundImage.url} alt="" fill="cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/60" />
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div // Hero area
            className="mb-[-40px] mt-[-40px] flex min-h-screen-small max-w-full flex-col justify-center px-[20px] py-32 text-white"
          >
            <div className="max-w-[800px]">
              <h1
                ref={mainH1Ref}
                className="relative mb-8 inline-block animate-fade-slidein pr-16 text-5xl font-bold lg:text-6xl"
              >
                {serviceName}
                <hr className="mt-6 w-full origin-left animate-[expand-title-underline_both] border-t-2 animate-duration-1000 animate-delay-500" />
              </h1>
              <MicrocmsParagraph className="animate-fade-slidein  animate-delay-500">
                {shortDesc}
              </MicrocmsParagraph>
            </div>
          </div>
          <div // Content Area
            className="bg-content-gradient lg:bg-content-gradient-alt xl:bg-content-gradient relative z-10 flex w-full animate-slidein flex-col items-center justify-center rounded-[20px] bg-white/80 pb-32 pt-[20px]  animate-delay-[1500ms] lg:flex-row xl:pr-[240px]"
          >
            <div // Table of Contents
              className="bg-content-gradient sticky top-0 z-10 w-full self-start lg:w-[240px] lg:bg-none"
            >
              <ul className="flex w-full flex-row items-center justify-start space-x-4 overflow-x-auto whitespace-nowrap py-4 px-[20px] leading-none shadow-sm lg:flex-col lg:items-start lg:space-x-0 lg:space-y-4 lg:space-y-4 lg:whitespace-normal lg:py-16 lg:shadow-none">
                <li className="shrink-0 border-r pr-4 text-xl leading-none lg:border-r-0 lg:border-b lg:pr-0 lg:pb-4">
                  <a
                    className="cursor-pointer hover:opacity-50 motion-safe:transition-opacity"
                    onClick={() => scrollTo(mainH1Ref.current)}
                  >
                    {serviceName}
                  </a>
                </li>
                {h1Elms.map((elm, index) => (
                  <li key={index} className="shrink-0">
                    <a
                      className="cursor-pointer hover:opacity-50 motion-safe:transition-opacity"
                      onClick={() => scrollTo(elm)}
                    >
                      {elm.innerText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={contentRef} className="mt-16 px-[20px]">
              <MicrocmsHtml
                className="mx-auto max-w-[800px] space-y-4"
                replace={(props, children) => ({
                  h1: () => (
                    <h1
                      {...props}
                      className="inline-block border-b pb-2 pt-8 pr-8 text-2xl leading-none"
                    >
                      {children}
                    </h1>
                  ),
                  img: () => {
                    const url = new URL(props.src);
                    const width = parseInt(url.searchParams.get("w") || "");
                    const height = parseInt(url.searchParams.get("h") || "");
                    url.search = "";
                    if (width && height)
                      return (
                        <MicrocmsImage
                          alt=""
                          {...props}
                          src={url.href}
                          width={width}
                          height={height}
                          className="mx-auto"
                        />
                      );
                    // eslint-disable-next-line @next/next/no-img-element
                    else return <img alt="" {...props} className="mx-auto" />;
                  },
                  iframe: () => (
                    <iframe {...props} className="mx-auto">
                      {children}
                    </iframe>
                  ),
                })}
              >
                {detailedDesc}
              </MicrocmsHtml>
            </div>
          </div>
          <div className="mt-[-20px] w-full bg-black/20 py-32 px-[20px] text-white backdrop-blur">
            <h1 className="mb-8 text-center text-2xl">カタログ請求</h1>
            <form className="mx-auto max-w-[600px] space-y-4">
              <label className="flex flex-col">
                <span className="flex p-1">
                  お名前<sup className="top-[-.25em] text-xl">*</sup>
                </span>
                <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
              </label>
              <label className="flex flex-col">
                <span className="flex p-1">
                  メールアドレス<sup className="top-[-.25em] text-xl">*</sup>
                </span>
                <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
              </label>
              <label className="flex flex-col">
                <span className="flex p-1">
                  電話番号<sup className="top-[-.25em] text-xl">*</sup>
                </span>
                <input className="rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
              </label>
              <label className="flex flex-col">
                <span className="flex p-1">備考</span>
                <textarea className="min-h-[8em] rounded-sm border-[.5px] border-white/80 bg-black/40 px-2 py-1 font-sans" />
              </label>
              <div className="py-4">
                <button className="mx-auto mt-8 block rounded border bg-white/20 px-4 py-2">
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative z-10 bg-white py-8 text-center text-sm">
          <p>Copyright © NALSEC All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
