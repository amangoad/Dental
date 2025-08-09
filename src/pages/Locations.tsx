import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const Locations = () => {
  const featuredLocations = [
    {
      name: "Wichita North",
      address: "2545 N Greenwich Rd, Wichita, KS 67226",
      phone: "(316) 425-7800",
      hours: "Mon-Fri: 7am-7pm, Sat: 7am-4pm",
      rating: 4.8,
      reviews: 245,
      services: ["Dentures", "Implants", "Emergency Care"]
    },
    {
      name: "Wichita West",
      address: "8621 W Central Ave, Wichita, KS 67212",
      phone: "(316) 425-7801",
      hours: "Mon-Fri: 7am-7pm, Sat: 7am-4pm",
      rating: 4.7,
      reviews: 189,
      services: ["General Dentistry", "Orthodontics", "Cosmetic"]
    },
    {
      name: "Derby",
      address: "1515 N Baltimore Ave, Derby, KS 67037",
      phone: "(316) 425-7802",
      hours: "Mon-Fri: 7am-7pm, Sat: 7am-4pm",
      rating: 4.9,
      reviews: 156,
      services: ["Family Dentistry", "Dentures", "Implants"]
    }
  ];

  const states = [
    { name: "Kansas", count: 12 },
    { name: "Missouri", count: 18 },
    { name: "Oklahoma", count: 15 },
    { name: "Arkansas", count: 8 },
    { name: "Texas", count: 45 },
    { name: "Colorado", count: 22 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue mb-6">
            Find an AspenDental Near You
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto mb-8 leading-relaxed">
            With 900+ locations nationwide, quality dental care is never far away. 
            Find your local AspenDental office and schedule your appointment today.
          </p>
          
          {/* Location Search */}
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              placeholder="Enter your ZIP code or city"
              className="flex-1"
            />
            <Button className="dental-button-primary">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Featured Locations in Your Area
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
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-dental-blue mr-2 flex-shrink-0" />
                      <span className="text-dental-gray text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-dental-blue mt-1 mr-2 flex-shrink-0" />
                      <span className="text-dental-gray text-sm">{location.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-dental-blue mb-2">Services Available:</h4>
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
                      Schedule Appointment
                    </Button>
                    <Button size="sm" variant="outline" className="dental-button-outline">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* State Directory */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Browse Locations by State
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, index) => (
              <Card key={index} className="dental-card cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-dental-blue group-hover:text-primary-hover transition-colors mb-2">
                    {state.name}
                  </h3>
                  <p className="text-dental-gray">
                    {state.count} locations
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Why Choose AspenDental?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-dental-light-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-dental-blue" />
              </div>
              <h3 className="font-bold text-dental-blue mb-2">Extended Hours</h3>
              <p className="text-dental-gray text-sm">Evening and weekend appointments available</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-light-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-dental-blue" />
              </div>
              <h3 className="font-bold text-dental-blue mb-2">Convenient Locations</h3>
              <p className="text-dental-gray text-sm">900+ offices nationwide for easy access</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-light-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-dental-blue" />
              </div>
              <h3 className="font-bold text-dental-blue mb-2">Same-Day Care</h3>
              <p className="text-dental-gray text-sm">Emergency appointments and consultations</p>
            </div>
            <div className="text-center">
              <div className="bg-dental-light-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-dental-blue" />
              </div>
              <h3 className="font-bold text-dental-blue mb-2">Quality Care</h3>
              <p className="text-dental-gray text-sm">Experienced dentists and modern technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait to get the dental care you need. Find your nearest location 
            and schedule your appointment today.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
            Find Your Location
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Locations;