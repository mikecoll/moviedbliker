import ifetch from "isomorphic-unfetch";

export const fetch = async function (...args) {
  const res = await ifetch(...args);
  return res.json();
};
