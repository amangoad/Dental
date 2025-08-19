import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Dental labs & offices served" },
    { icon: Award, number: "10+", label: "Years of CAD/CAM expertise" },
    { icon: Clock, number: "24 Hrs", label: "Average design turnaround" },
    { icon: Heart, number: "1M+", label: "Cases successfully delivered" }
  ];

  const values = [
    {
      title: "Precision-Driven",
      description: "Every design is meticulously crafted for accuracy, fit, and patient comfort."
    },
    {
      title: "Cutting-Edge Technology",
      description: "We use the latest CAD/CAM tools and workflows to ensure flawless results."
    },
    {
      title: "Expert Team",
      description: "Our designers are experienced professionals with extensive dental lab knowledge."
    },
    {
      title: "Client-Centric Approach",
      description: "Your deadlines, preferences, and patient needs are at the core of everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-blue py-16">
        <div className="dental-container text-center">
          <h1 className="text-white text-5xl mb-6 font-bold">
            About 
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been partnering with dental labs and offices worldwide,
            delivering precision CAD/CAM designs with speed and reliability. From crowns and bridges
            to full-mouth reconstructions, we help you scale your workflow without sacrificing quality.
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
                Our mission is to empower dental professionals with precise, fast, and
                reliable digital designs that enhance patient outcomes and streamline workflows.
              </p>
              <p className="text-lg text-dental-gray leading-relaxed">
                Whether you're a busy lab or a growing practice, we serve as your extended design team —
                ensuring every case is delivered on time, every time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-dental-blue mb-4">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3 text-dental-gray">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  24-hour average turnaround on most cases
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Seamless integration with your preferred software and workflow
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Dedicated account managers for personalized service
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Scalable design capacity for peak demand
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
      {/* <section className="dental-section bg-dental-light-gray">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-dental-blue mb-6">
            Ready to Scale Your Design Capacity?
          </h2>
          <p className="text-xl text-dental-gray mb-8 max-w-2xl mx-auto">
            Join hundreds of dental professionals who trust us to deliver accurate, on-time designs — every time.
          </p>
          <Button size="lg" className="dental-button-primary">
            Schedule Your Design Consultation
          </Button>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
};

export default About;
