import { Phone, Users, Award, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroVideo from "@/assets/video.mp4";
import heroImage from "@/assets/dental-hero.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, number: "900+", label: "Lab" },
    { icon: Award, number: "10+", label: "Years of experience" },
    { icon: Clock, number: "9+", label: "Google Ratings" },
    { icon: Heart, number: "1M+", label: "Cases Design" }
  ];

  const values = [
    { title: "Accessible Services", description: "We believe every dental lab deserves quality design support, regardless of their project scale." },
    { title: "Advanced Technology", description: "Our state-of-the-art CAD/CAM tools and workflows ensure the best possible outcomes." },
    { title: "Expert Team", description: "Our experienced designers and specialists are committed to your lab’s success." },
    { title: "Patient-First", description: "Your satisfaction and efficiency are our top priorities in everything we deliver." }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dental-light-gray py-8 sm:py-12 lg:py-20">
        <div className="dental-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="lg:pr-8">
              <h1 className="text-dental-blue mb-4 text-4xl sm:text-5xl lg:text-[64px] leading-tight">
                Lab Success Partner
              </h1>
              <p className="text-base sm:text-lg text-dental-gray mb-6 sm:mb-8 leading-relaxed">
                We deliver precise, reliable dental designs, helping USA labs save time and increase quality
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Button size="lg" className="dental-button-primary w-full sm:w-auto">
                  Get a Free Design Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="dental-button-outline flex items-center w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (800) 277-3633
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground mt-6 sm:mt-8 leading-relaxed">
                ¹Services available for registered dental labs in the USA. Turnaround times and pricing vary by case complexity. Offer not valid for individual patients. Free trial applies to first 3 cases per new lab partner.
              </p>
            </div>

            {/* Hero Video - Full Width in Large Screens */}
           {/* Right Side Video */}
<div className="lg:pl-8 w-full">
  <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-none">
    <video
      src={heroVideo}
      className="w-full h-[300px] sm:h-[500px] lg:h-[650px] object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>
</div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-dental-blue mx-auto mb-3 sm:mb-4" />
                  <div className="text-2xl sm:text-3xl font-bold text-dental-blue mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm sm:text-base text-dental-gray">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dental-blue mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-dental-gray mb-4 sm:mb-6 leading-relaxed">
                We exist to support dental labs with precision and innovation. Our mission is to deliver reliable, high-quality dental design services while building trust and lasting partnerships with our clients.
                Every lab that works with our team receives personalized designs and solutions tailored to their unique requirements and production goals.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-dental-blue mb-3 sm:mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-dental-gray">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Same-day design delivery options available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Expert CAD/CAM technicians for faster turnarounds
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Flexible outsourcing packages for all budgets
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive dental design solutions under one roof
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-dental-blue text-center mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="dental-card">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-dental-blue mb-2 sm:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dental-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join over 1 million cases that have trusted us with their dental designs.
          </p>
          <Button
            size="lg"
            className="bg-white text-dental-blue hover:bg-dental-light-gray w-full sm:w-auto"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
