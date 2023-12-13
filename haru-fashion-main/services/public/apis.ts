export const NEXT_PUBLIC_API: any = process.env.NEXT_PUBLIC_API;

export class ApiHelper {
  static getListUri = <T>(
    domain: string,
    uriEnums: T
  ): {
    [key in keyof typeof uriEnums]: key;
  } => {
    const listUri: any = uriEnums as any;
    return Object.keys(listUri).reduce(
      (obj: any, item: any) =>
        Object.assign(obj, { [item]: domain + listUri[item] }),
      {}
    );
  };
}

export enum PublicAPIEnums {
  BASE_URL = "/api/v1",
}

export const PublicAPIs = ApiHelper.getListUri(NEXT_PUBLIC_API, PublicAPIEnums);
