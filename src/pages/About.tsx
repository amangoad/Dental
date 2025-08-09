import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "900+", label: "Dental offices nationwide" },
    { icon: Award, number: "25+", label: "Years of experience" },
    { icon: Clock, number: "7 days", label: "Average denture completion" },
    { icon: Heart, number: "1M+", label: "Patients served" }
  ];

  const values = [
    {
      title: "Accessible Care",
      description: "We believe everyone deserves quality dental care, regardless of their financial situation."
    },
    {
      title: "Advanced Technology",
      description: "Our state-of-the-art equipment and techniques ensure the best possible outcomes."
    },
    {
      title: "Expert Team",
      description: "Our experienced dentists and specialists are committed to your oral health."
    },
    {
      title: "Patient-First",
      description: "Your comfort and satisfaction are our top priorities in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue mb-6">
            About AspenDental
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            For over 25 years, we've been making quality dental care accessible and affordable for everyone. 
            With 900+ offices nationwide, we're here to help you smile with confidence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dental-blue mb-2">{stat.number}</div>
                  <p className="text-dental-gray">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dental-blue mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-dental-gray mb-6 leading-relaxed">
                We exist to care for our patients with compassion and excellence. Our mission is to deliver 
                accessible, high-quality dental care while building trust and lasting relationships with our communities.
              </p>
              <p className="text-lg text-dental-gray leading-relaxed">
                Every patient who walks through our doors receives personalized attention and care tailored 
                to their unique needs and circumstances.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-dental-blue mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3 text-dental-gray">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Same-day emergency appointments available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Onsite labs for faster denture creation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Flexible financing options for all budgets
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Comprehensive care under one roof
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="dental-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dental-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dental-gray leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-dental-blue mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-dental-gray mb-8 max-w-2xl mx-auto">
            Join over 1 million patients who have trusted us with their dental care.
          </p>
          <Button size="lg" className="dental-button-primary">
            Schedule Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;