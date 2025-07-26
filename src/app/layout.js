import './globals.css';
import Navbar from '../Component/navbar';
import '../fontawesome/fontawesome'; // adjust path if needed
export const metadata = {
  title: 'CodePlusHub',
  description: 'Your coding platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Inter Font for modern geometric sans-serif */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <div className='container mx-20'>{children}</div>
      </body>
    </html>
  );
}
