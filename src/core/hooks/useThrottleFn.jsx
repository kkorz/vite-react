export const useThrottleFn = (fn, wait) => {
  const run = (() => {
    let canRun = true;
    return () => {
      if (!canRun) return;

      canRun = false;
      setTimeout(() => {
        fn();
        canRun = true;
      }, wait);
    };
  })();

  return { run };
};
