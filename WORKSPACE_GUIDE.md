# CampusFit Workspace Guide

## Project Layout

- `mobile-uniapp/`: mobile client built with uni-app
- `backend-java/`: Java backend service based on JDK 21
- `admin-web/`: admin dashboard built with Vue 3 + Element Plus
- `database/`: MySQL schema and seed scripts
- `CampusFit_PRD.md`: user-side product PRD
- `CampusFit_Admin_PRD.md`: admin-side product PRD

## Recommended Startup Order

1. Prepare MySQL and run scripts from `database/`
2. Start `backend-java/`
3. Start `admin-web/`
4. Start `mobile-uniapp/`

## Notes

- The repository keeps the prototype assets in the root directory for design reference.
- Each runnable part is isolated in its own folder as requested.
- `admin-web` uses Vue 3 with Element Plus as the Vue 3 compatible Element UI solution.
