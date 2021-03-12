import useSWR from "swr";

import { fetch } from "@utils";

export const useSearchMovie = (query: string, shouldFetch?: boolean) => {
  return useSWR(shouldFetch ? `/api/searchMovie?query=${query}` : null, fetch);
};
