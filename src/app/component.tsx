import { use } from "react";
import { AiFillAlert } from "react-icons/ai";
import { ParseBr } from "@/libs/microcms/ParseBr";
import { ParseHtml } from "@/libs/microcms/ParseHtml";
import { microcmsClient } from "@/libs/microcms/microcmsClient";

type Props = {
  contents: Array<{
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

const useMicrocmsServices = async () => {
  const res = await microcmsClient.get({ endpoint: "services" });
  console.log(res);
  return res as Props;
};
export const Comp = () => {
  // const { serviceName, backgroundImage, shortDesc, detailedDesc } = (
  //   await useMicrocmsServices()
  // ).contents[0];
  const { serviceName, backgroundImage, shortDesc, detailedDesc } = use(
    useMicrocmsServices()
  ).contents[0];

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
