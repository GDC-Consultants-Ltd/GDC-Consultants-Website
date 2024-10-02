// src/app/layout.js
import "./globals.css"; // Ensure your global styles are imported
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Fetch the HubSpot portal ID from environment variables
const hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>GDC Consultants: Your Engineering Partner for Success</title>
        <meta
          name="description"
          content="GDC Consultants provides innovative solutions and expert guidance in architectural and engineering design. Serving New Zealand with a commitment to excellence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://gdcgroup.netlify.app" />

        {/* HubSpot Chatbot Script */}
        {hubspotPortalId && (
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src={`//js.hs-scripts.com/${hubspotPortalId}.js`}
          ></script>
        )}
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
