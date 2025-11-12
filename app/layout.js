export const metadata = {
  title: 'MirroHaus — A Creative System of Brands',
  description: 'MirroHaus is a premium creative studio and system of brands.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
