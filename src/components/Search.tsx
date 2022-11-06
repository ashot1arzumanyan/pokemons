import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

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
  const [search, setSearch] = useState(searchFromUrl);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search.length >= LIMIT_TO_START_SEARCH) {
      searchParams.set(SearchParamsKeys.search, search);
    } else {
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
