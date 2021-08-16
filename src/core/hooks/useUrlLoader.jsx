import { useState, useEffect } from "react";
import axios from "axios";

const useUrlLoader = (url, deps = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, deps);

  return [loading, data];
};

export default useUrlLoader;
