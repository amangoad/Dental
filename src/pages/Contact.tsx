import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Talk directly with our design coordination team",
      contact: "+1 (800) 277-3633",
      action: "Call Now"
    },
    // {
    //   icon: MessageCircle,
    //   title: "Live Chat",
    //   description: "Get instant answers from our project managers",
    //   contact: "Available 24/7",
    //   action: "Start Chat"
    // },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send design files or inquiries",
      contact: "info@dentsmiledesign.com",
      action: "Send Email"
    },
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "Schedule a consultation with our design team",
      contact: "Flexible booking times",
      action: "Book Now"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM (EST)" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM (EST)" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue text-5xl mb-6 font-bold">
            Contact 
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            Need help with a case, project, or design file? Our team of skilled dental designers is ready to assist. 
            Reach out today and let’s bring your vision to life.
          </p>
        </div>
      </section>

   {/* Contact Methods */}
<section className="dental-section bg-white">
  <div className="dental-container">
    <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
      Get in Touch
    </h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {contactMethods.map((method, index) => (
        <Card
          key={index}
          className="dental-card text-center group cursor-pointer"
        >
          <CardContent className="p-6">
            <method.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-dental-blue mb-2 group-hover:text-primary-hover transition-colors">
              {method.title}
            </h3>
            <p className="text-dental-gray mb-4">{method.description}</p>
            <p className="font-semibold text-dental-blue mb-4">
              {method.contact}
            </p>
            <Button size="sm" className="dental-button-primary">
              {method.action}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Contact Form & Info */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="dental-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-dental-blue mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dental-blue mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dental-blue mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 555 123 4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      Project / Case Reference
                    </label>
                    <Input placeholder="Case ID or brief project title" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      How can we help you? *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your dental design needs or questions..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full dental-button-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="dental-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-dental-blue mr-3" />
                    <h3 className="text-xl font-bold text-dental-blue">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-dental-blue">{schedule.day}</span>
                        <span className="text-dental-gray">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="dental-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dental-blue mb-4">
                    Quick Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">Global Service</p>
                        <p className="text-dental-gray text-sm">Serving dental labs and clinics worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">Fast Turnaround</p>
                        <p className="text-dental-gray text-sm">Average delivery within 24–48 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">Dedicated Support</p>
                        <p className="text-dental-gray text-sm">Project managers assigned to every client</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  What file formats do you accept?
                </h3>
                <p className="text-dental-gray text-sm">
                  We accept STL, PLY, OBJ, and other common dental CAD formats. 
                  Contact us for custom requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  How fast is your turnaround?
                </h3>
                <p className="text-dental-gray text-sm">
                  Most single-unit cases are delivered within 24–48 hours. 
                  Complex projects may require additional time.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Do you offer trial projects?
                </h3>
                <p className="text-dental-gray text-sm">
                  Yes, we offer sample cases so you can evaluate our quality and service before committing.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Is my data secure?
                </h3>
                <p className="text-dental-gray text-sm">
                  Absolutely — we use secure file transfer protocols and strict confidentiality agreements for all client data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Contact;
