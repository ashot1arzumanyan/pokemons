import { useSearchParams } from "react-router-dom";

import { SearchParamsKeys } from "../util/constants/constants";

const useCurrentPage = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get(SearchParamsKeys.page)) || 1;

  return { page };
};

export default useCurrentPage;
