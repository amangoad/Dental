import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Cpu, Layers } from "lucide-react";

const Insurance = () => {
  const expertiseHighlights = [
    {
      title: "Precision & Accuracy",
      description: "Every design is crafted with meticulous attention to detail, ensuring perfect fit and flawless aesthetics.",
      features: ["Micron-level accuracy", "Strict quality control", "Expert dental designers"],
      icon: CheckCircle
    },
    {
      title: "Fast Turnaround",
      description: "We deliver designs in record time without compromising quality, helping you meet tight deadlines.",
      features: ["24–48 hour delivery", "Rush orders available", "Streamlined workflow"],
      icon: Clock
    },
    {
      title: "Fully Customized",
      description: "Designs tailored to your specific requirements, patient needs, and preferred workflows.",
      features: ["Custom shade matching", "Preferred material support", "Flexible file formats"],
      icon: Layers
    }
  ];

  const technologyShowcase = [
    "CAD/CAM Precision Design",
    "3D Printing Ready Files",
    "Digital Smile Design Integration",
    "Cloud-Based File Transfer",
    "AI-Powered Occlusion Analysis"
  ];

  const comparisonData = [
    { factor: "Turnaround Time", outsourcing: "24–48 hrs", traditional: "5–10 days" },
    { factor: "Design Accuracy", outsourcing: "High (CAD verified)", traditional: "Variable" },
    { factor: "Scalability", outsourcing: "Unlimited capacity", traditional: "Limited by lab size" },
    { factor: "Cost Efficiency", outsourcing: "Up to 50% savings", traditional: "Higher fixed costs" },
    { factor: "File Delivery", outsourcing: "Digital, instant", traditional: "Physical models" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue text-5xl mb-6 font-bold">
            Why Choose us?
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            We provide world-class dental design services to help labs and clinics 
            deliver outstanding results — faster, more accurately, and more cost-effectively.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dental-blue mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-dental-gray max-w-2xl mx-auto">
              From crowns to complex implant cases, our skilled designers deliver consistent quality for every case.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {expertiseHighlights.map((item, index) => (
              <Card key={index} className="dental-card">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dental-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-dental-gray mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm text-dental-gray">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Cutting-Edge Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {technologyShowcase.map((tech, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cpu className="w-8 h-8 text-dental-blue" />
                  </div>
                  <h3 className="font-semibold text-dental-blue">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Why We Outperform Traditional Labs
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dental-light-gray">
                    <th className="text-left p-4 font-bold text-dental-blue">Factor</th>
                    <th className="text-left p-4 font-bold text-dental-blue">Our Outsourcing</th>
                    <th className="text-left p-4 font-bold text-dental-blue">Traditional Labs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4 font-medium text-dental-blue">{row.factor}</td>
                      <td className="p-4 text-green-600 font-semibold">{row.outsourcing}</td>
                      <td className="p-4 text-dental-gray">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Limited Time Offer for New Clients
          </h2>
          <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              20% Off Your First 10 Cases
            </h3>
            <p className="text-white/90 mb-6">
              Experience our service at a discounted rate — perfect for labs looking to scale without extra overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            FAQs About Our Outsourcing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  How quickly can I receive my designs?
                </h3>
                <p className="text-dental-gray text-sm">
                  Most designs are delivered within 24–48 hours. Rush orders can be completed in less than 12 hours.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  What file formats do you support?
                </h3>
                <p className="text-dental-gray text-sm">
                  We work with all major dental CAD formats including STL, PLY, and OBJ.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Do you offer trial cases?
                </h3>
                <p className="text-dental-gray text-sm">
                  Yes! New clients can request sample designs to test our workflow and quality before committing.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Can you handle large case volumes?
                </h3>
                <p className="text-dental-gray text-sm">
                  Absolutely. Our scalable team and cloud-based workflow allow us to handle unlimited design orders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;
