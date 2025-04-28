import { useLocation } from "react-router";

export function useQuery() {
  // const { search } = useLocation();
  // console.log("useQuery-search", search);

  return new URLSearchParams(useLocation().search);
}

// function useQuery() {
//    const { search } = useLocation();
//    console.log("search", search);
//    return React.useMemo(() => new URLSearchParams(search), [search]);
//  }
