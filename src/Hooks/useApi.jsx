import axiosPublic from "../api/AxiosPublic";


import { useQuery } from "@tanstack/react-query";

const useApi = (api) => {
  const { refetch, isLoading, data } = useQuery({
    queryKey: ["table", api],
    queryFn: async () => {
      const { data } = await axiosPublic.get(api);
      return data;
    },
  });
  return [refetch, isLoading, data];
};

export default useApi;
