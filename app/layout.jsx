import { orbitron , exo_2 } from "./fonts";
import "./globals.css"
import NavBar from "@/components/NavBar";

// หน้านี้เป็นหน้าหลัก *
export const metadata = {
  title : {
    default : "Indie Gamer" ,
    template : "%s | Indie Gamer" , // สำหรับหน้าอื่น ๆ 
  } ,
};

export default function RootLayout({ children }) {
    return (
      <html lang="en" className={`${exo_2.variable} ${orbitron.variable}`}>
        <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
         <NavBar/>
        </header>

        <main className="grow py-3">
          {children}
        </main>
    
        <footer className="border-t py-3 text-slate-500 text-center text-xs">
        Game data and images courtesy
          of <a href="https://rawg.io/" className="text-orange-800 hover:underline" target="_blank">RAWG</a>
          {"  "} Deployed on vercel
        </footer>
        </body>
      </html>
    );
  }
