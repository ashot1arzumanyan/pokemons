import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import useCurrentPage from "../hooks/useCurrentPage";
import useSearch from "../hooks/useSearch";
import { LIMIT_TO_START_SEARCH, SearchParamsKeys } from "../util/constants/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 48px 16px 32px 16px;
  box-sizing: border-box;
`;

const StyledSearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
`;

const Search = () => {
  const { search: searchFromUrl } = useSearch();
  const { page } = useCurrentPage();
  const [search, setSearch] = useState(searchFromUrl);
  const [searchParams, setSearchParams] = useSearchParams();
  const oldPage = useRef<{ page: number } | null>(null);

  useEffect(() => {
    if (search.length >= LIMIT_TO_START_SEARCH) {
      searchParams.set(SearchParamsKeys.search, search.toLowerCase());
      searchParams.set(SearchParamsKeys.page, '1');
      oldPage.current = { page };
    } else {
      if (oldPage.current && (!page || page !== oldPage.current.page)) {
        searchParams.set(SearchParamsKeys.page, String(oldPage.current.page));
        oldPage.current = null;
      }
      searchParams.delete(SearchParamsKeys.search);
    }
    setSearchParams(searchParams);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Container>
      <StyledSearchInput
        value={search}
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </Container>
  );
};

export default Search;
