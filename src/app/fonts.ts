import localFont from 'next/font/local';

export const polySans = localFont({
  src: [
    {
      path: './fonts/PolySansTrial-NeutralWide.otf',
      weight: '400',
      style: 'normal',
    },
    // Add additional weights/styles if available:
    // { path: './fonts/PolySans-Trial-Bold.woff2', weight: '700', style: 'normal' },
    // { path: './fonts/PolySans-Trial-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-poly-sans',
  display: 'swap',
});
