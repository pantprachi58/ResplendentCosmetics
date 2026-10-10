import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Procedures from "@/components/Procedures";
import TreatmentChoice from "@/components/TreatmentChoice";
import Facility from "@/components/Facility";
import Results from "@/components/Results";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import InternationalDesk from "@/components/InternationalDesk";
import AppointmentCta from "@/components/AppointmentCta";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.sections}>
        <Hero />
        <TrustBar />
        <Procedures />
        <TreatmentChoice />
        <Results />
        <Doctors />
        <Facility />
        <Testimonials />
        <InternationalDesk />
        <AppointmentCta />
      </div>
    </main>
  );
}
