import { Hero } from "@/components/home/Hero";
import { AreasServed } from "@/components/home/AreasServed";
import { TreatmentsGrid } from "@/components/home/TreatmentsGrid";
import { TreatmentShowcase } from "@/components/home/TreatmentShowcase";
import { HospitalGallery } from "@/components/home/HospitalGallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { VideoReviews } from "@/components/home/VideoReviews";
import { InsurancePartners } from "@/components/home/InsurancePartners";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AreasServed />
      <TreatmentsGrid />
      <VideoReviews />
      <TreatmentShowcase />
      <HospitalGallery />
      <WhyChooseUs />
      <ProcessSteps />
      <DoctorPreview />
      <InsurancePartners />
      <FAQ />
      <CTABanner />
    </>
  );
}
