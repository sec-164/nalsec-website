import { GetStaticProps } from "next";
import { createRef, RefObject, useRef } from "react";
import { CompanyInfo } from "@/CompanyInfo";
import { ContactForm } from "@/components/ContactForm";
import { ServiceListItem } from "@/components/ServiceListItem";
import { SiteFooter } from "@/components/SiteFooter";
import { TopHeroArea } from "@/components/TopHeroArea";
import { TopTableOfContents } from "@/components/TopTableOfContents";
import { microcmsClient } from "@/libs/microcms/microcmsClient";
import { Main, Service, ServicesRes } from "@/types/microcms";

export const getStaticProps: GetStaticProps<{
  main: Main;
  services: Service[];
}> = async () => {
  const resMain = await microcmsClient.get<Main>({
    endpoint: "main",
  });
  const resServices = await microcmsClient.get<ServicesRes>({
    endpoint: "services",
  });
  return {
    props: { main: resMain, services: resServices.contents },
  };
};

export default (props: { main: Main; services: Service[] }) => {
  const { main, services } = props;
  const serviceList = useRef<[string, RefObject<HTMLDivElement>][]>(
    services.map((service) => [service.serviceName, createRef()])
  );

  return (
    <div>
      <TopTableOfContents serviceList={serviceList.current} />
      <TopHeroArea {...main} />
      {services.map((service, index) => (
        <ServiceListItem
          key={index}
          {...service}
          serviceRef={serviceList.current[index][1]}
        />
      ))}
      <CompanyInfo {...main} />
      <ContactForm isTopPage />
      <SiteFooter />
    </div>
  );
};
