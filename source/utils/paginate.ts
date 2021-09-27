export const getPagination = (page: number, size: number, msg?: boolean) => {
  const type = msg ? 50 : 10;
  const limit = size ? +size : type;
  const offset = page - 1 ? (page - 1) * limit : 0;

  return { limit, offset };
};
