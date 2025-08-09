import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dental-hero.jpg";

const Hero = () => {
  return (
    <section className="bg-dental-light-gray py-12 lg:py-20">
      <div className="dental-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <h1 className="text-dental-blue mb-6">
              Get smiling today
            </h1>
            <h2 className="text-2xl lg:text-3xl text-dental-gray mb-6 font-medium">
              With 25% off your treatment plan
            </h2>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              See us today and save on implants, dentures and all your dental care.¹
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="dental-button-primary">
                Schedule appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="dental-button-outline flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (800) 277-3633
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
              ¹Offer available in select offices. Not valid for previous or ongoing work and cannot be combined with other discounts or dental discount programs. Not valid for orthodontia. Discount taken off usual and customary fees for general dentistry services and does not apply to services rendered by a specialist. Patients with insurance will receive either the 25% discount or insurance plan pricing, whichever discount is greater. Offer expires 12/31/25.
            </p>
          </div>

          {/* Hero Image */}
          <div className="lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="Happy patient smiling in dental office with dentist"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;