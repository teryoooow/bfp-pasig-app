# Officer Images

This folder contains the headshot photos for BFP Taguig officers.

## Image Naming Convention

Images should be named after the officer's name (without rank prefix) in the following format:
- Convert to lowercase
- Replace spaces with hyphens
- Remove special characters
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Examples

- Officer: `FSUPT GARYNEL Z JULIAN` → Filename: `garynel-z-julian.jpg`
- Officer: `FCINSP ALBERTO B EDRADA` → Filename: `alberto-b-edrada.jpg`
- Officer: `SFO3 Nora R Intano` → Filename: `nora-r-intano.jpg`

## How It Works

The application automatically matches officer names to image filenames. Rank prefixes (FSUPT, FCINSP, FSINSP, FINSP, SFO1-4, etc.) are automatically removed when matching.

If an image is not found for an officer, a default placeholder icon will be displayed.
