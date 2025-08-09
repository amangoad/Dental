import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ChatWidget />
    </div>
  );
};

export default Index;
