import { useQuery } from "react-query";
import { ErrorFormat, RequestQuery } from "./model";
import axios from "axios";

export const useRequest = ({
    queryKey,
    url,
    staleTime = 0,
    enabled,
    successCallback,
    errorCallback,
    query,
    refetchOnWindowFocus,
  }: RequestQuery) => {
    return useQuery({
      queryKey,
      queryFn: async () => {
        const response = await axios.get(url, query || {});
        return response.data;
      },
      staleTime: staleTime === 'Infinity' ? Infinity : staleTime,
      enabled,
      refetchOnWindowFocus: refetchOnWindowFocus,
      onSuccess: (data) => {
        successCallback?.(data);
      },
      onError: (error: ErrorFormat) => {
        errorCallback?.(error.message);
      },
    });
  };