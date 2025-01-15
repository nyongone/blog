// eslint-disable-next-line
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  // eslint-disable-next-line
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
