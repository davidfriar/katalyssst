import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const extenda = localFont({
  src: "./Extenda-40-Hecto-trial.ttf",
  variable: "--display-font",
})
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--text-font",
})
