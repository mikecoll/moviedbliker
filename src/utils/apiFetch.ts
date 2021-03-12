import fetch from 'isomorphic-unfetch'

export const apiFetch = (path: string, options?: any) =>
	fetch(`${process.env.NEXT_PUBLIC_TMDB_API}${path}`, {
		headers: {
			Authorization: `Bearer ${process.env.TMDB_KEY}`,
		},
		...options,
	}).then((resp) => resp.json())
