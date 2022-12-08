import { useCallback, useState } from "react";

export default function useFilter() {
  const [filter, setFilter] = useState({
    search: () => true,
    price: () => true,
    color: () => true,
  });
  const filterFn = useCallback(
    (p) => Object.values(filter).every((f) => f(p)),
    [filter]
  );
  return [filterFn, setFilter];
}
