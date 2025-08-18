import { Phone, Users, Award, Clock, Heart, Check, Zap, Star, Shield, Target, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroVideo from "@/assets/video.mp4";
import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import Services from "@/components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

// ✅ Animated number component for stats
const AnimatedNumber = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 3,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value, motionValue]);

  return <span>{displayValue.toLocaleString()}</span>;
};

// ✅ HOME PAGE
const Home = () => {
  const stats = [
    { icon: Users, number: 600, label: "Dental labs & offices served" },
    { icon: Award, number: 10, label: "Years of CAD/CAM expertise" },
    { icon: Clock, number: 24, label: "Average design turnaround" },
    { icon: Heart, number: 1000000, label: "Cases Designed" },
  ];

  const values = [
    {
      title: "Accessible Services",
      description:
        "We believe every dental lab deserves quality design support, regardless of their project scale.",
      icon: Target,
    },
    {
      title: "Advanced Technology",
      description:
        "Our state-of-the-art CAD/CAM tools and workflows ensure the best possible outcomes.",
      icon: Star,
    },
    {
      title: "Expert Team",
      description:
        "Our experienced designers and specialists are committed to your lab’s success.",
      icon: Shield,
    },
    {
      title: "Patient-First",
      description:
        "Your satisfaction and efficiency are our top priorities in everything we deliver.",
      icon: Smile,
    },
  ];

  const features = [
    { text: "24-hour average turnaround on most cases", icon: Clock },
    { text: "Seamless integration with your preferred software and workflow", icon: Zap },
    { text: "Dedicated account managers for personalized service", icon: Users },
    { text: "Scalable design capacity for peak demand", icon: Check },
  ];

  const clients = [
    { logo: "/partner/P1.webp", name: "Arfona" },
    { logo: "/partner/P2.webp", name: "MiDenta" },
    { logo: "/partner/P3.webp", name: "Arizona" },
    { logo: "/partner/P4.webp", name: "Nobel" },
    { logo: "/partner/P5.webp", name: "Digital" },
    { logo: "/partner/P6.webp", name: "Alien" },
    { logo: "/partner/P7.webp", name: "Laguna" },
    { logo: "/partner/P8.webp", name: "Core 3d" },
    { logo: "/partner/P9.webp", name: "Lab" },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-dental-light-gray py-12 lg:py-20">
        <div className="dental-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-dental-blue mb-6 text-4xl sm:text-5xl lg:text-[64px] leading-tight">
              Lab Success Partner
            </h1>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              We deliver precise, reliable dental designs, helping USA labs save time and increase quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Button size="lg" className="dental-button-primary w-full sm:w-auto">
                Get a Free Design Trial
              </Button>
              <Button variant="outline" size="lg" className="dental-button-outline flex items-center w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                (800) 277-3633
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              ¹Services available for registered dental labs in the USA. Turnaround times and pricing vary by case
              complexity. Offer not valid for individual patients. Free trial applies to first 3 cases per new lab
              partner.
            </p>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
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

      {/* STATS SECTION */}
      <section className="dental-section bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-2xl">
        <div className="dental-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-dental-blue mx-auto mb-3 sm:mb-4" />
                      <div className="text-2xl sm:text-3xl font-bold text-dental-blue mb-1 sm:mb-2">
                        <AnimatedNumber value={stat.number} />
                      </div>
                      <p className="text-sm sm:text-base font-bold text-dental-gray">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <section
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: "url('/usa-map-bg.png')" }}
      >
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="dental-container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-5xl text-center font-bold text-dental-blue mb-6"
          >
            Trusted by Dental Labs Across the USA
          </motion.h2>
          <p className="text-lg text-center text-dental-gray mb-12 max-w-3xl mx-auto">
            From coast to coast, our CAD/CAM expertise supports American dental labs and practices with
            precision designs, fast turnaround, and reliable service.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            loop={true}
            autoplay={{
              delay: 0, // ✅ no delay, keeps moving
              disableOnInteraction: false,
            }}
            speed={4000} // ✅ smooth continuous scroll
            grabCursor={true}
          >
            {clients.concat(clients).map((client, idx) => ( // ✅ duplicate array for seamless loop
              <SwiperSlide key={idx}>
                <div className="bg-white p-8 rounded-xl shadow-md flex items-center justify-center h-44 hover:shadow-lg transition">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-28 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="dental-button-primary">
              Join 30+ Labs Over World       </Button>
          </div>
        </div>
      </section>
      {/* VALUES SECTION */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/your-values-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="dental-container relative z-10">
          <h2 className="text-5xl text-dental-blue text-center mb-16 font-bold">
            Our Values
          </h2>

          <div className="relative">
            {/* Roadmap vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dental-blue/40 -translate-x-1/2"></div>

            <div className="space-y-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                const isLeft = index % 2 === 0; // alternate placement

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                      }`}
                  >
                    {/* Connector circle with number */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center 
                              w-14 h-14 rounded-full bg-dental-blue text-white text-lg font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full md:w-5/12 p-8 rounded-2xl shadow-xl bg-white/95 backdrop-blur-md ${isLeft ? "text-right pr-10" : "text-left pl-10"
                        }`}
                    >
                      <Icon className="w-10 h-10 text-dental-blue mb-4 mx-auto" />
                      <h3 className="text-2xl font-bold text-dental-blue mb-3">
                        {value.title}
                      </h3>
                      <p className="text-dental-gray">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>







   {/* MISSION SECTION */}
      <section className="dental-section relative bg-cover bg-center py-16" style={{ backgroundImage: "url('/background.png')" }}>
        <div className="absolute inset-0 bg-dental-blue/70"></div>
        <div className="dental-container grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
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
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dental-blue mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3 text-dental-gray">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2, duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                    {feature.text}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </section> 
      {/* TESTIMONIALS SECTION */}
      <section className="dental-section bg-dental-light-gray py-20">
        <div className="dental-container text-center">
          <h2 className="text-5xl text-dental-blue mb-12 font-bold">
            What Our Clients Say
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="pb-10"
          >
            {[
              {
                name: "Dr. Sarah Williams",
                testimonial:
                  "DentSmileDesign has completely transformed our dental lab workflow. Their designs are precise, consistent, reliable, and always delivered within the promised time frame",
                avatar: "/1.png",
              },
              {
                name: "Dr. Emily Clarke",
                testimonial:
                  "Working with DentSmileDesign has significantly improved our efficiency. Their expert design support saves us valuable time while maintaining top-notch quality results.",
                avatar: "/2.png",
              },
              {
                name: "Dr. John Peterson",
                testimonial:
                  "The DentSmileDesign team is professional, responsive, and detail-oriented. Their design quality consistently exceeds expectations, making our entire process stress-free and efficient.",
                avatar: "/3.png",
              },
              {
                name: "Dr. Michael Adams",
                testimonial:
                  "Exceptional customer service and reliable design quality. DentSmileDesign has streamlined our workflow, ensuring that every case is completed smoothly and on schedule.",
                avatar: "/4.png",
              },
              {
                name: "Dr. Laura Bennett",
                testimonial:
                  "Their CAD/CAM expertise is unmatched. Every file we receive is accurate, polished, and delivered quickly, making DentSmileDesign an invaluable partner for our lab.",
                avatar: "/5.png",
              },
              {
                name: "Dr. Kevin Harris",
                testimonial:
                  "We trust DentSmileDesign for all our digital cases. Their quick turnaround, combined with precise and consistent results, makes collaboration seamless, smooth, and highly reliable.",
                avatar: "/6.png",
              },
              {
                name: "Dr. Sophia Turner",
                testimonial:
                  "Great communication and excellent design quality every single time. DentSmileDesign ensures our workflow runs seamlessly while giving us complete confidence in each case.",
                avatar: "/7.png",
              },
            ]
              .map((client, index) => (
                <SwiperSlide key={index} className="flex">
                  <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center w-full h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {/* Larger Image */}
                    <img
                      src={client.avatar}
                      alt={client.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md mb-6"
                    />

                    {/* Testimonial text */}
                    <p className="text-dental-gray italic text-base mb-6 leading-relaxed">
                      "{client.testimonial}"
                    </p>

                    {/* Name */}
                    <h4 className="text-dental-blue font-bold text-lg">
                      {client.name}
                    </h4>
                  </motion.div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>




      {/* SERVICES SECTION */}
      <Services />
    </>
  );
};

export default Home;
