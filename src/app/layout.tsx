import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';  // Global styles

export const metadata = {
  title: "Portfolio",
  description: 'A Front-End Developer Portfolio showcasing skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
