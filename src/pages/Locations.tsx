import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const Locations = () => {
  const featuredLocations = [
    {
      name: "USA Design Hub",
      address: "New York, NY, USA",
      // phone: "+1 (800) 123-4567",
      hours: "Mon-Fri: 8am-8pm (EST)",
      rating: 4.9,
      reviews: 320,
      services: ["CAD/CAM Design", "Digital Denture Design", "Implant Crown Design"]
    },
    {
      name: "Australia Design Hub",
      address: "Sydney, NSW, Australia",
      // phone: "+61 2 5555 7890",
      hours: "Mon-Fri: 8am-6pm (AEST)",
      rating: 4.8,
      reviews: 275,
      services: ["Crown & Bridge Design", "Night Guard Design", "Valplast Partial Design"]
    },
    {
      name: "Europe Design Hub",
      address: "Berlin, Germany",
      // phone: "+49 30 123456",
      hours: "Mon-Fri: 8am-6pm (CET)",
      rating: 4.9,
      reviews: 198,
      services: ["Veneer Design", "Inlay/Onlay Design", "Full Arch Design"]
    }
  ];

  const regions = [
    { name: "United States" },
    { name: "Australia" },
    { name: "Europe" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-blue py-16">
        <div className="dental-container text-center">
          <h1 className="text-white mb-6 text-5xl font-bold">
            Global Reach
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
            With design hubs strategically located worldwide, we deliver fast, precise,
            and high-quality dental CAD designs wherever you are.
          </p>
          
          {/* Location Search */}
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Search by city or country"
              className="flex-1"
            />
            <Button className="dental-button background-white">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Our Global Design Hubs
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredLocations.map((location, index) => (
              <Card key={index} className="dental-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-dental-blue">
                      {location.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{location.rating}</span>
                      <span className="text-xs text-dental-gray ml-1">({location.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-dental-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-dental-gray text-sm">{location.address}</span>
                    </div>
                    {/* Phone removed
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-dental-blue mr-2 flex-shrink-0" />
                      <span className="text-dental-gray text-sm">{location.phone}</span>
                    </div>
                    */}
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-dental-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-dental-gray text-sm">{location.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-dental-blue mb-2">Design Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-dental-light-gray text-dental-blue text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 dental-button-primary">
                      Start a Project
                    </Button>
                    <Button size="sm" variant="outline" className="dental-button-outline">
                      Contact Hub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Region Directory */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Browse by Region
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="dental-card cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dental-blue group-hover:text-primary-hover transition-colors mb-2">
                    {region.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Dental Designs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a lab or a dental practice, our global team is ready to deliver precise,
            high-quality CAD designs on your schedule.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Locations;
