export interface RequestQuery {
  queryKey: string | any[];
  url: string;
  staleTime?: number | "Infinity";
  enabled?: boolean;
  successCallback?: (data: any) => void;
  errorCallback?: (error: string) => void;
  query?: any;
  refetchOnWindowFocus?: any;
  token?: string;
}
export interface ErrorFormat {
  statusCode: number;
  message: string;
  timestamp: string;
}
export interface IaxiosConfig {
  "Access-Control-Allow-Origin": string;
  "Access-Control-Allow-Credentials": Boolean;
  "Access-Control-Allow-Methods": string;
  "Content-Type": string;
  "x-client-id": string;
  "Accept-Language": string;
  "Acccept-Encoding": string;
  "Access-Control-Max_Age": number;
  "Access-Control-Allow-Headers": string;
  Authorization: string;
}
