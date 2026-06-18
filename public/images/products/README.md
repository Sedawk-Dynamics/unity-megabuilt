# Product photos

These photos power the cards on `/products`. The exact file → product mapping
lives in [`lib/products.ts`](../../../lib/products.ts) (the `image` field of each
product) and in [`INDEX.csv`](./INDEX.csv).

Notes:
- Filenames contain spaces, so paths are URL-encoded (`%20`) in `lib/products.ts`.
- Files tagged `DELETE*` and any duplicate shots are intentionally **not** shown.
- To swap a photo, replace the file in place (keep the same name) — no code change
  needed. To use a new name, update that product's `image` path in `lib/products.ts`.
- Any product whose image is missing falls back to a branded placeholder tile.
