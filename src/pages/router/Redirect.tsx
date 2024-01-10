import React, { useEffect } from "react";

const Redirect = (props: { url: string }) => {
  const { url } = props;
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <h5>Redirecting...</h5>;
};

export default Redirect;
