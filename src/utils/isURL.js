export const isURL = (string) => {
  try { return Boolean(new URL(string)); } catch (e) { return false; }
};
