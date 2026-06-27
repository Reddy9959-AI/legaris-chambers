import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { firmSchema, siteUrl } from "@/lib/site";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:"Legaris Chambers | Legal Counsel in Hyderabad",template:"%s | Legaris Chambers"},description:"Legaris Chambers provides professional litigation, advisory, documentation, and dispute resolution services in Hyderabad.",alternates:{canonical:"/"},openGraph:{title:"Legaris Chambers",description:"Strategic legal counsel, litigation, and advisory services.",url:siteUrl,siteName:"Legaris Chambers",type:"website"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={inter.variable+" "+playfair.variable}><body><Script id="legaris-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(firmSchema)}}/><Navbar/><main>{children}</main><Footer/></body></html>;}
