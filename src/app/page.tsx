import AppFeatures from "@/components/AppFeatures";
import CustomerFeedback from "@/components/CustomerFeedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PaymentsFeatures from "@/components/PaymentsFeatures";
import ProductSummary from "@/components/ProductSummary";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <PaymentsFeatures />
      <AppFeatures />
      <ProductSummary />
      <CustomerFeedback />
      <Footer /> */}
    </main>
  );
}
