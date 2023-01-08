import { GetStaticPaths, GetStaticProps } from "next";
import { ServicePage } from "@/components/ServicePage";
import { microcmsClient } from "@/libs/microcms/microcmsClient";

export type Props = {
  slug: string;
  serviceName: string;
  backgroundImage: {
    url: string;
    width: number;
    height: number;
  };
  shortDesc: string;
  detailedDesc: string;
};

type Res = { contents: Props[] };

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await microcmsClient.get<Res>({ endpoint: "services" });
  const paths = res.contents.map((service) => "/services/" + service.slug);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await microcmsClient.get<Res>({
    endpoint: "services",
    queries: { filters: "slug[equals]" + params?.slug },
  });
  return {
    props: res.contents[0],
  };
};

export default ({
  serviceName,
  backgroundImage,
  shortDesc,
  detailedDesc,
}: Props) => {
  return (
    <ServicePage
      serviceName={serviceName}
      backgroundImage={backgroundImage}
      shortDesc={shortDesc}
      detailedDesc={detailedDesc}
    />
  );
};
