import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceCategories = [
    {
      // title: "Restorative & Cosmetic Design Solutions",
      services: [
        {
          name: "Crown & Bridge ",
          description:
            "We craft precision CAD designs for crowns and bridges that combine function, lifelike aesthetics, and structural integrity."
        },
        {
          name: "Veneer",
          description:
            "Our custom veneer designs instantly enhance smiles by refining shape, size, and color for a perfect fit."
        },
        {
          name: "Implant",
          description:
            "We provide highly accurate designs for screw-retained implant crowns that ensure stability, aesthetics, and ease of maintenance."
        },
        {
          name: "Inlay & Onlay",
          description:
            "Digitally designed inlays and onlays that preserve natural tooth structure while ensuring strength and longevity."
        },
        {
          name: "Valplast Flexible",
          description:
            "We design flexible partial frameworks that offer comfort, aesthetics, and secure retention for daily wear."
        },
        {
          name: "Digital Denture",
          description:
            "Our dentures are digitally designed for accuracy, comfort, and rapid fabrication."
        },
        {
          name: "Night Guard",
          description:
            "Custom night guard designs protect patients’ teeth from grinding, clenching, and bruxism-related wear."
        },
        {
          name: "CPD & RPD",
          description:
            "We design custom partial dentures that restore function while maintaining a natural, aesthetic appearance."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-dental-blue py-16">
        <div className="dental-container text-center">
          <h1 className="text-white mb-6 text-5xl font-bold">
            Design Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            From precision digital restorations to complete smile transformations,
            our outsourcing solutions empower dental practices and labs to deliver
            exceptional results with speed, accuracy, and consistency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`dental-section ${categoryIndex % 2 === 0 ? "bg-white" : "bg-dental-light-gray"
            }`}
        >
          <div className="dental-container">
            <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
              {category.title}
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="dental-card group">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-dental-blue mb-3 group-hover:text-primary-hover transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-dental-gray mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="dental-button-outline"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Special Offer Banner */}
      <section className="bg-dental-blue py-8">
        <div className="dental-container text-center">
          <p className="text-white text-lg font-medium mb-2">
            Limited Time Offer
          </p>
          <h2 className="text-white text-2xl font-bold mb-4">
            25% Off Your First Design Order
          </h2>
          <Button
            variant="outline"
            className="border-white text-dental-blue hover:bg-white hover:text-dental-blue"
          >
            Learn More About This Offer
          </Button>
        </div>
      </section>

      {/* Emergency Digital Design Support */}
      <section className="dental-section bg-red-50">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Emergency Digital Design Support
          </h2>
          <p className="text-xl text-dental-gray mb-8 max-w-2xl mx-auto">
            When your patient’s case can’t wait, we offer same-day digital design
            delivery to help you meet urgent deadlines.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">Rush Crown & Bridge</h3>
              <p className="text-sm text-dental-gray">
                Same-day design turnaround
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">
                Emergency Restoration
              </h3>
              <p className="text-sm text-dental-gray">
                Quick repair and replacement designs
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">
                Lost/Damaged Prosthetics
              </h3>
              <p className="text-sm text-dental-gray">
                Rapid digital remake service
              </p>
            </div>
          </div>
          <Button size="lg" className="dental-button-primary">
            Call for Priority Service: (800) 277-3633
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Next Case?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us and elevate your workflow with expert dental design
            outsourcing.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-dental-blue hover:bg-white hover:text-dental-blue"
          >
            Schedule Your Design Consultation
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
