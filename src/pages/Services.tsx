import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Restorative Services",
      services: [
        {
          name: "Custom Dentures",
          description: "Complete and partial dentures made in our onsite labs",
          features: ["Same-day consultations", "7-day completion", "Perfect fit guarantee"],
          price: "Starting at $399"
        },
        {
          name: "Dental Implants",
          description: "Permanent tooth replacement solution for lasting smiles",
          features: ["Titanium posts", "Natural appearance", "Lifetime durability"],
          price: "Starting at $1,299"
        },
        {
          name: "Crowns & Bridges",
          description: "Restore damaged teeth with natural-looking crowns",
          features: ["Porcelain material", "Custom color matching", "Strong protection"],
          price: "Starting at $599"
        }
      ]
    },
    {
      title: "Preventive Care",
      services: [
        {
          name: "Routine Cleanings",
          description: "Professional cleanings to maintain oral health",
          features: ["Plaque removal", "Fluoride treatment", "Oral health assessment"],
          price: "Starting at $99"
        },
        {
          name: "Oral Exams",
          description: "Comprehensive examinations for early detection",
          features: ["Digital X-rays", "Cavity screening", "Gum health check"],
          price: "Starting at $79"
        },
        {
          name: "Teeth Whitening",
          description: "Professional whitening for a brighter smile",
          features: ["Same-day results", "Safe procedure", "Lasting whiteness"],
          price: "Starting at $199"
        }
      ]
    },
    {
      title: "Cosmetic Dentistry",
      services: [
        {
          name: "Clear Aligners",
          description: "Straighten teeth discreetly in 6-18 months",
          features: ["Invisible appearance", "Removable design", "Faster results"],
          price: "Starting at $1,999"
        },
        {
          name: "Veneers",
          description: "Transform your smile with porcelain veneers",
          features: ["Natural appearance", "Stain resistant", "Durable material"],
          price: "Starting at $799"
        },
        {
          name: "Smile Makeover",
          description: "Complete smile transformation with multiple treatments",
          features: ["Custom treatment plan", "Coordinated care", "Beautiful results"],
          price: "Custom pricing"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue mb-6">
            Comprehensive Dental Services
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            From routine cleanings to complete smile makeovers, we offer the full spectrum 
            of dental care to keep you smiling with confidence.
          </p>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-dental-blue py-8">
        <div className="dental-container text-center">
          <p className="text-white text-lg font-medium mb-2">
            Limited Time Offer
          </p>
          <h2 className="text-white text-2xl font-bold mb-4">
            25% Off Your Treatment Plan
          </h2>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
            Learn More About This Offer
          </Button>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`dental-section ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-dental-light-gray'}`}>
          <div className="dental-container">
            <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
              {category.title}
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="dental-card group">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dental-blue mb-3 group-hover:text-primary-hover transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-dental-gray mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-dental-blue mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-dental-gray">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-dental-blue">
                        {service.price}
                      </span>
                      <Button variant="outline" size="sm" className="dental-button-outline">
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

      {/* Emergency Care Section */}
      <section className="dental-section bg-red-50">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Emergency Dental Care
          </h2>
          <p className="text-xl text-dental-gray mb-8 max-w-2xl mx-auto">
            Dental emergencies can't wait. We offer same-day emergency appointments 
            to relieve your pain and address urgent dental needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">Severe Toothache</h3>
              <p className="text-sm text-dental-gray">Immediate pain relief and treatment</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">Broken Tooth</h3>
              <p className="text-sm text-dental-gray">Emergency repair and restoration</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-dental-blue mb-2">Lost Filling</h3>
              <p className="text-sm text-dental-gray">Same-day replacement available</p>
            </div>
          </div>
          <Button size="lg" className="dental-button-primary">
            Call for Emergency Care: (800) 277-3633
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and discover how we can help you achieve 
            the healthy, beautiful smile you deserve.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
            Schedule Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;