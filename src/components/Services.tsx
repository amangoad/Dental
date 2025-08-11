import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay /*, Navigation */ } from "swiper/modules"; // Removed Navigation import
import "swiper/css";
// import "swiper/css/navigation"; // Commented out navigation CSS

const Services = () => {
  const allServices = [
    { title: "Crown & Bridge", description: "Precision CAD designs for crowns and bridges with lifelike aesthetics.", link: "#crowns" },
    { title: "Veneer", description: "Our custom veneer designs instantly enhance smiles by refining shape, size, and color for a perfect fit.", link: "#veneer" },
    { title: "Implant Crown Design", description: "Highly accurate designs for screw-retained implant crowns that ensure stability, aesthetics, and ease of maintenance.", link: "#implant" },
    { title: "Inlay & Onlay Design", description: "Digitally designed inlays and onlays that preserve natural tooth structure while ensuring strength and longevity.", link: "#inlay" },
    { title: "Valplast® Flexible Partials", description: "Flexible partial frameworks that offer comfort, aesthetics, and secure retention for daily wear.", link: "#valplast" },
    { title: "Digital Denture", description: "Digitally designed dentures for accuracy, comfort, and rapid fabrication.", link: "#digital-denture" },
    { title: "Night Guard Design", description: "Custom night guard designs to protect teeth from grinding, clenching, and bruxism-related wear.", link: "#night-guard" },
    { title: "CPD & RPD Design", description: "Custom partial dentures that restore function while maintaining a natural, aesthetic appearance.", link: "#cpd-rpd" }
  ];

  return (
    <section className="dental-section bg-white">
      <div className="dental-container">
        <Swiper
          modules={[Autoplay /*, Navigation*/]} // Removed Navigation
          spaceBetween={24}
          slidesPerView={3}
          // navigation // Commented out navigation buttons
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {allServices.map((service, index) => (
            <SwiperSlide key={index}>
              <Card className="dental-card group cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-dental-blue mb-3 group-hover:text-primary-hover transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dental-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-dental-blue hover:text-primary-hover font-medium mt-auto"
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
