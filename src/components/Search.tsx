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
  const oldPage = useRef({ page });

  useEffect(() => {
    if (search.length >= LIMIT_TO_START_SEARCH) {
      searchParams.set(SearchParamsKeys.search, search);
      searchParams.set(SearchParamsKeys.page, '1');
      oldPage.current.page = page;
    } else {
      searchParams.delete(SearchParamsKeys.search);
      searchParams.set(SearchParamsKeys.page, String(oldPage.current.page));
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
