export const useDebounceFn = (fn, delay) => {
  const run = (() => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    };
  })();

  return { run };
};
