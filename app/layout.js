import "./globals.css";
import SessionProviderWrapper from "../SessionProviderWrapper";

export const metadata = {
  title: "My App with GitHub Auth",
  description: "A Next.js App with GitHub Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
