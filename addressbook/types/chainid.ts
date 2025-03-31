export enum ChainId {
    mantle = 5000,
  }
  
  type ChainIdType = typeof ChainId;
  export type ChainIdMap = {
    [K in keyof ChainIdType as K extends string ? K : never]: ChainIdType[K];
  };
  export type ChainIdKey = keyof ChainIdMap;