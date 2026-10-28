# Matcha Space

An editorial landing page for a small matcha bar. Built with plain HTML, CSS, and a small amount of vanilla JavaScript. No build step and no dependencies.

## Preview

Open `index.html` in a browser, or serve the folder locally:

```bash
npx serve .
```

## Structure

```text
.
├── index.html          Page markup and content
├── style.css           Design tokens, layout, responsive styles
├── script.js           Mobile navigation, sticky header, reveal motion
├── assets/
│   ├── logo.png
│   ├── matcha-cake.jpg
│   ├── matcha-latte.jpg
│   ├── matcha-smoothie.jpg
│   ├── bg.webp         Original stock preview, unused
│   └── tea.webp        Original stock preview, unused
└── README.md
```

## Design notes

- Cream canvas, deep matcha green, and a restrained ochre accent.
- Fraunces for display type, Inter for body and labels. Both load from Google Fonts with local fallbacks.
- Arch-shaped hero image, numbered editorial sections, and a dark ritual band.
- Product photos were resized and converted from PNG to JPEG. Total image weight dropped from about 5.4 MB to about 600 KB.
- The old `web.html` duplicate and the invalid CSS at the top of the original stylesheet were removed.

## Accessibility

- Skip link, semantic landmarks, and labelled sections.
- Visible focus styles and a keyboard-operable mobile menu.
- Descriptive image alternatives.
- Motion respects `prefers-reduced-motion`, including the marquee and scroll reveals.
- Content remains available without JavaScript; the mobile navigation falls back to a wrapped link row.

## Assets

Product photos and the logo come from the original repository; ownership and licensing have not been verified. `bg.webp` and `tea.webp` are watermarked stock previews kept from the original upload and are not used in the page.

## Credits

Original page credit: Panimdim Trixie V.

Cafe positioning, product recipes, and sourcing statements are proposed copy. Confirm them before publishing as a business website.

Remodel: layout, styling, responsive behavior, accessibility, and asset optimization.
