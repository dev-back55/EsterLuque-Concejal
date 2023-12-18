import { Noto_Serif, Merriweather, Roboto_Slab, Ubuntu } from 'next/font/google'
import './globals.css'
import Footer from '../../components/Footer';

const notoserif = Noto_Serif({ subsets: ['latin'], weight: ['400'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });
const robotoslab = Roboto_Slab({ subsets: ['latin']});
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300']});


export const metadata = {
  title: 'Ester Luque Concejal',
  description: 'Website Concejal Ester Luque',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
