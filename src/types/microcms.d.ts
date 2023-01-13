type MicroCMSListResponse<T> = {
  contents: (T & MicroCMSListContent)[];
  totalCount: number;
  limit: number;
  offset: number;
};

export type Service = {
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

export type ServicesRes = MicroCMSListResponse<Service[]>;
