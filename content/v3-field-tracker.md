# V3 Content Field Tracker

The source-of-truth tracker is:

- `portfolio-v3-content-tracker.xlsx`

## Hierarchy

| Page | Name |
|---|---|
| `0` | Header |
| `1` | Profile / Home |
| `2` | Strategy |
| `3` | Selected Work |
| `4` | About / Resume / Contact |
| `5` | Footer |

Each field has:

- a location ID, such as `3.5.02.4`;
- a technical key, such as `work_02_summary`;
- guidance explaining what belongs in the field;
- an empty `Your Value` cell;
- a status: `pending`, `approved`, `filled`, or `not applicable`;
- a notes cell.

Example: `3.5.02.4` means Page 3 → project collection 5 → project 02 → summary field 4.

Regenerate the workbook after schema changes with:

```bash
python scripts/generate_v3_content_tracker.py
```
