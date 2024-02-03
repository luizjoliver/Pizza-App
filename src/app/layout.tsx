import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Restarurant",
  description: "Restaurant created by Luiz joliver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        
       <QueryProvider>
         <AuthProvider>

           <div>
             <Notification/>
              <NavBar/>
                {children}
                <Footer/>
                <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
           </div>
           
         </AuthProvider>
        </QueryProvider> 

        </body>
    </html>
  );
}
