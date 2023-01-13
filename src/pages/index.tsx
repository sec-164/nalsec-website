import { GetStaticProps } from "next";
import { ServiceListItem } from "@/components/serviceListItem";
import { microcmsClient } from "@/libs/microcms/microcmsClient";
import { Service, ServicesRes } from "@/types/microcms";

export const getStaticProps: GetStaticProps<{
  services: Service[];
}> = async () => {
  const res = await microcmsClient.get<ServicesRes>({
    endpoint: "services",
  });
  return {
    props: { services: res.contents },
  };
};

export default (props: { services: Service[] }) => {
  const { services } = props;
  return (
    <div>
      {[...services, ...services].map((service, index) => (
        <ServiceListItem key={index} {...service} />
      ))}
    </div>
  );
};
