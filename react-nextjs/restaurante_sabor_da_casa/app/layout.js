import "./globals.css";

export const metadata = {
  title: "Sabor da Casa | Restaurante",
  description: "Conheça nosso restaurante, cardápio e localização.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
