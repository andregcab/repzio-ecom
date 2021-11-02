export const getData = async (path = "") => {
  const response = await fetch(`api/${path}`);
  return response.json();
};
