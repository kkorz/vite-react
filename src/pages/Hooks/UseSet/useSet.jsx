import { useState, useMemo, useCallback } from "react";

export const useSet = (initialVal) => {
  // 处理初始值
  const _initialVal = useMemo(() => {
    let res = new Set();
    if (typeof initialVal === "string") {
      res = new Set(Array(initialVal));
    } else if (Array.isArray(initialVal)) {
      res = new Set(initialVal);
    }
    return res;
  }, []);
  const [arraySet, SetArraySet] = useState(_initialVal);

  const add = useCallback(
    (val) => {
      const temp = new Set(arraySet);
      temp.add(val);
      SetArraySet(temp);
    },
    [arraySet],
  );
  const has = useCallback(
    (val) => {
      return arraySet.has(val);
    },
    [arraySet],
  );

  const remove = useCallback(
    (val) => {
      const temp = new Set(arraySet);
      temp.delete(val);
      SetArraySet(temp);
    },
    [arraySet],
  );

  const reset = useCallback(() => {
    const temp = new Set(arraySet);
    temp.clear();
    SetArraySet(temp);
  }, []);

  return [arraySet, { add, has, remove, reset }];
};
