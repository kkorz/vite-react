import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    if (document) {
      document.title = title;
    }
  }, [title]);
};
