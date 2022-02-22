import type { QueryKey, QueryFunction } from "react-query";
import { useQuery } from "react-query";

import { queryClient } from "@root/utils";

type DataUpdateFunction<TInput, TOutput> = (input: TInput) => TOutput;
type Updater<TInput, TOutput> = TOutput | DataUpdateFunction<TInput, TOutput>;

export function useDefaultQuery<TData>(
  cacheKey: QueryKey,
  queryFunction: QueryFunction<TData | undefined>
) {
  const { data, ...rest } = useQuery<TData | undefined>(cacheKey, queryFunction);

  function getCache() {
    return queryClient.getQueryData<TData | undefined>(cacheKey);
  }

  function setCache(updater: Updater<TData | undefined, TData>) {
    return queryClient.setQueryData(cacheKey, updater);
  }

  function invalidateQuery() {
    queryClient.invalidateQueries(cacheKey, { exact: true });
  }

  return { data, getCache, setCache, invalidateQuery, ...rest };
}
