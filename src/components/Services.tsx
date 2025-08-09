import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import denturesImage from "@/assets/dentures.jpg";
import implantsImage from "@/assets/dental-implants.jpg";
import alignersImage from "@/assets/clear-aligners.jpg";

const Services = () => {
  const services = [
    {
      title: "Custom dentures",
      description: "Quality dentures, made within days at our onsite labs.",
      image: denturesImage,
      alt: "Custom dental dentures",
      link: "#dentures"
    },
    {
      title: "Dental implants", 
      description: "Your most permanent tooth loss solution for a lifetime of smiles.",
      image: implantsImage,
      alt: "Dental implant model",
      link: "#implants"
    },
    {
      title: "Clear aligners",
      description: "Straighten your teeth in as little as 6 months.",
      image: alignersImage,
      alt: "Clear aligner case",
      link: "#aligners"
    }
  ];

  return (
    <section className="dental-section bg-white">
      <div className="dental-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="dental-card group cursor-pointer">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-dental-blue mb-3 group-hover:text-primary-hover transition-colors">
                  {service.title}
                </h3>
                <p className="text-dental-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-dental-blue hover:text-primary-hover font-medium"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;