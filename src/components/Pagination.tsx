import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import useCurrentPage from "../hooks/useCurrentPage";
import { SearchParamsKeys } from "../util/constants/constants";

interface ComponentProps {
  count: number;
  limit: number;
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template: 1fr / 100px min-content 100px;
  padding: 16px;
  margin-bottom: 40px;
`;

const Page = styled.span`
  padding: 0 8px;
`;

const Pagination = ({ count, limit }: ComponentProps) => {
  const { page } = useCurrentPage();
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesCount = count / limit;

  const hasPrevious = page > 1;
  const hasNext = page < pagesCount;

  const handlePageChange = (control: 1 | -1) => () => {
    searchParams.set(SearchParamsKeys.page, String(page + control));
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <button
        disabled={!hasPrevious}
        onClick={handlePageChange(-1)}
      >
        Previous
      </button>
      <Page>{page}</Page>
      <button
        disabled={!hasNext}
        onClick={handlePageChange(1)}
      >
        Next
      </button>
    </Container>
  );
};

export default Pagination;
