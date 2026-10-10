import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/** Public website chrome. The admin panel (app/admin) sits outside this group and has its own layout. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
