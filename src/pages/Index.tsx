import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer"; // ✅ Correct import

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ChatWidget />
      <Footer /> {/* ✅ Correct component */}
    </div>
  );
};

export default Index;
