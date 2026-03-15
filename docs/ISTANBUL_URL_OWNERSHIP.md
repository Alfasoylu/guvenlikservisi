# Istanbul URL Ownership

## Canonical winners

Istanbul is the primary lead city. For exact-match Istanbul commercial queries, the static Istanbul money pages are the canonical winners.

| Query cluster | Winner URL | Losing URL |
|---|---|---|
| Istanbul kamera sistemi kurulumu | `/istanbul-kamera-sistemi-kurulumu` | `/istanbul/kamera-sistemi-kurulumu` |
| Istanbul alarm sistemi kurulumu | `/istanbul-alarm-sistemi` | `/istanbul/alarm-sistemi-kurulumu` |
| Istanbul yangin alarm sistemi kurulumu | `/istanbul-yangin-alarm-sistemi` | `/istanbul/yangin-alarm-sistemi-kurulumu` |
| Istanbul kartli gecis sistemi kurulumu | `/istanbul-kartli-gecis-sistemi` | `/istanbul/kartli-gecis-sistemi-kurulumu` |

## Decision logic

- Exact-match Istanbul money pages win because they are more commercially focused and easier to control.
- The dynamic `/<city>/<service>` layer remains the canonical structure for non-Istanbul cities and non-overlapping Istanbul intents.
- Losing Istanbul dynamic routes should redirect to the winner static URLs.
- Internal links and sitemap entries should point to the winner URLs directly.

## Not merged in Task 1

These Istanbul pages are intentionally left separate for now because their intent is not a clean exact-match duplicate of a dynamic city/service page:

- `/istanbul-ip-kamera-montaji`
- `/istanbul-kamera-teknik-servis`
- `/istanbul-kamera-bakim-servisi`

These will be evaluated in later tasks under service-intent consolidation.
