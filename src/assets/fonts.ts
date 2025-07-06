import { Libre_Franklin, Lexend_Deca, Roboto } from "next/font/google";

export const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});
export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  display: "swap",
  subsets: ["latin"],
});
