import { useSearchParams } from "react-router-dom";

import { SearchParamsKeys } from "../util/constants/constants";

const useSearch = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get(SearchParamsKeys.search) || '';

  return { search };
};

export default useSearch;
