import { Phone, Users, Award, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroVideo from "@/assets/video.mp4";
import { motion } from "framer-motion";
import Services from "@/components/Services";


// ✅ HOME PAGE
const Home = () => {
  const stats = [
    { icon: Users, number: "600+", label: "Dental labs & offices served" },
    { icon: Award, number: "10+", label: "Years of CAD/CAM expertise" },
    { icon: Clock, number: "24 Hrs", label: "Average design turnaround" },
    { icon: Heart, number: "1M+", label: "Cases Designed" },
  ];

  const values = [
    {
      title: "Accessible Services",
      description:
        "We believe every dental lab deserves quality design support, regardless of their project scale.",
    },
    {
      title: "Advanced Technology",
      description:
        "Our state-of-the-art CAD/CAM tools and workflows ensure the best possible outcomes.",
    },
    {
      title: "Expert Team",
      description:
        "Our experienced designers and specialists are committed to your lab’s success.",
    },
    {
      title: "Patient-First",
      description:
        "Your satisfaction and efficiency are our top priorities in everything we deliver.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dental-light-gray py-12 lg:py-20">
        <div className="dental-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-dental-blue font-bold mb-6 text-4xl sm:text-5xl lg:text-[64px] leading-tight">
              Lab Success Partner
            </h1>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              We deliver precise, reliable dental designs, helping USA labs
              save time and increase quality.
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
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              ¹Services available for registered dental labs in the USA.
              Turnaround times and pricing vary by case complexity. Offer not
              valid for individual patients. Free trial applies to first 3
              cases per new lab partner.
            </p>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <video
                src={heroVideo}
                className="w-full h-[300px] sm:h-[500px] lg:h-[650px] object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ STATS SECTION */}
      <section className="dental-section bg-white">
        <div className="dental-container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-dental-blue mb-2">
                    {stat.number}
                  </div>
                  <p className="text-dental-gray">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

     {/* ✅ MISSION SECTION with background image */}
<section
  className="dental-section relative bg-cover bg-center py-16"
  style={{
    backgroundImage: "url('/backgrround.png')", // replace with your image path
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-dental-blue/90"></div> {/* 40% opacity overlay */}

  <div className="dental-container grid lg:grid-cols-2 gap-12 items-center relative z-10">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
      <p className="text-lg text-white/90 mb-6 leading-relaxed">
        Our mission is to empower dental professionals with precise, fast, and reliable digital designs that enhance patient outcomes and streamline workflows.
      </p>
      <p className="text-lg text-white/90 leading-relaxed">
        Whether you're a busy lab or a growing practice, we serve as your extended design team — ensuring every case is delivered on time, every time.
      </p>
    </motion.div>

    <motion.div
      className="bg-white/90 p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-dental-blue mb-4">What Sets Us Apart</h3>
      <ul className="space-y-3 text-dental-gray">
        {[
          "24-hour average turnaround on most cases",
          "Seamless integration with your preferred software and workflow",
          "Dedicated account managers for personalized service",
          "Scalable design capacity for peak demand",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="w-2 h-2 bg-dental-blue rounded-full mt-3 mr-3 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</section>


      {/* ✅ VALUES SECTION */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="dental-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dental-blue mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dental-gray leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* ✅ SERVICES SECTION */}
<Services />


      {/* ✅ CTA SECTION */}
      <section className="dental-section bg-dental-blue text-center">
        <motion.div
          className="dental-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Design Capacity?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of dental professionals who trust us to deliver
            accurate, on-time designs — every time.
          </p>
          <Button size="lg" className="dental-button-primary bg-white text-white">
            Schedule Your Design Consultation
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
