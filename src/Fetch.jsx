import React, { useEffect } from "react";

function Fetch() {
  let Api = "http://hn.algolia.com/api/v1/search?query=";

  useEffect(() => {
    datafetch(Api);
  });

  const datafetch = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <></>;
}

export default Fetch;
