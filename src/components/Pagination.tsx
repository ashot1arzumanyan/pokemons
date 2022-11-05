import { useMemo } from "react";

interface ComponentProps {
  count: number;
  limit: number;
}

const Pagination = ({ count, limit }: ComponentProps) => {
  const pages = useMemo(() => {
    const pagesCount = count / limit;
    const pagesArray = [];

    for (let i = 1; i <= pagesCount; i += 1) {
      pagesArray.push(i);
    }

    return pagesArray;
  }, [count, limit]);

  return (
    <div>
      {pages.map((page) => (
        <div key={page}>
          {page}
        </div>
      ))}
      {count}
    </div>
  );
};

export default Pagination;
