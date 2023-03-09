import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "16b29ff0899314dca";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((err) => console.log(err.message));
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
