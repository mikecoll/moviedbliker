import { apiFetch } from "@utils";

export default async (req, res) => {
  try {
    if (req.query.query) {
      const data = await apiFetch(`/search/movie?query=${req.query.query}`);
      res.json(data.results);

      return;
    }
  } catch (e) {
    console.log(e);
  }

  res.json([]);
};
