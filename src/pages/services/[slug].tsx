import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { createRef, RefObject, useEffect, useRef } from "react";
import { AiFillAlert } from "react-icons/ai";
import { ParseBr } from "@/components/microcms/ParseBr";
import { ParseHtml } from "@/components/microcms/ParseHtml";
import { countElements } from "@/libs/microcms/countElements";
import { microcmsClient } from "@/libs/microcms/microcmsClient";

type Props = {
  contents: Array<{
    slug: string;
    serviceName: string;
    backgroundImage: {
      url: string;
      width: number;
      height: number;
    };
    shortDesc: string;
    detailedDesc: string;
  }>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await microcmsClient.get<Props>({ endpoint: "services" });
  const paths = res.contents.map((service) => "/services/" + service.slug);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await microcmsClient.get<Props>({
    endpoint: "services",
    // @ts-ignore
    queries: { filters: "slug[equals]" + params.slug },
  });
  return {
    props: res,
  };
};

export default (props: Props) => {
  const { serviceName, backgroundImage, shortDesc, detailedDesc } =
    props.contents[0];

  // const numberOfH1 = countElements(detailedDesc, "h1");
  // const h1Refs = useRef<RefObject<HTMLHeadingElement>[]>([]);
  // if (h1Refs.current.length !== numberOfH1) {
  //   h1Refs.current = Array(numberOfH1)
  //     .fill(null)
  //     .map((_, index) => h1Refs.current[index] || createRef());
  // }
  const h1Refs = useRef<HTMLHeadingElement[]>([]);

  // useEffect(() => {
  //   console.log(h1Refs.current);
  // }, []);
  useEffect(() => {
    h1Refs.current = Array.from(document.getElementsByTagName("h1"));
  }, []);

  return (
    <div>
      <div // Hero area
        className="relative flex h-screen items-center justify-center"
        style={{ height: "100svh" }}
      >
        <img // Background image
          src={backgroundImage.url}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <h1 className="relative block text-amber-500">{serviceName}</h1>
      </div>
      <hr />
      <p>
        <ParseBr text={shortDesc} />
      </p>
      <ParseHtml
        text={detailedDesc}
        replace={(props, children) => ({
          h1: (
            <h1 {...props} className="flex text-blue-400">
              <AiFillAlert />
              {children}
            </h1>
          ),
        })}
      />
    </div>
  );
};
