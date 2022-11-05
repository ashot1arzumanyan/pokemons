import { useSearchParams } from "react-router-dom";

import { SEARCH_PARAMS_PAGE } from "../util/constants/constants";

const useCurrentPage = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get(SEARCH_PARAMS_PAGE)) || 1;

  return { page };
};

export default useCurrentPage;
