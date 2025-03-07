export const generateUID = () => {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 12);
  return timestamp + randomString;
};
