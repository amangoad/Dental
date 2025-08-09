import Header from "@/components/Header";
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
      description: "Speak with our friendly team",
      contact: "(800) 277-3633",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us online",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      contact: "info@aspendental.com",
      action: "Send Email"
    },
    {
      icon: Calendar,
      title: "Schedule Online",
      description: "Book your appointment",
      contact: "Available 24/7",
      action: "Schedule Now"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed (Emergency care available)" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue mb-6">
            Contact AspenDental
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or need to schedule an appointment? 
            We're here to help! Contact us today and let's get you on the path to better oral health.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="dental-card text-center group cursor-pointer">
                <CardContent className="p-6">
                  <method.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dental-blue mb-2 group-hover:text-primary-hover transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-dental-gray mb-4">
                    {method.description}
                  </p>
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
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      Preferred Location
                    </label>
                    <Input placeholder="City, State or ZIP code" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dental-blue mb-2">
                      How can we help you? *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your dental needs or questions..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full dental-button-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Emergency Contact */}
              <Card className="dental-card bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-600">
                      Dental Emergency?
                    </h3>
                  </div>
                  <p className="text-dental-gray mb-4">
                    If you're experiencing severe tooth pain, swelling, or other dental emergencies, 
                    call us immediately for same-day care.
                  </p>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Call Emergency Line: (800) 277-3633
                  </Button>
                </CardContent>
              </Card>

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

              {/* General Information */}
              <Card className="dental-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-dental-blue mb-4">
                    Quick Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">900+ Locations</p>
                        <p className="text-dental-gray text-sm">Nationwide coverage for your convenience</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">Same-Day Appointments</p>
                        <p className="text-dental-gray text-sm">Emergency and consultation appointments available</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-dental-blue mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dental-blue">24/7 Support</p>
                        <p className="text-dental-gray text-sm">Online scheduling and customer service</p>
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
                  How do I schedule an appointment?
                </h3>
                <p className="text-dental-gray text-sm">
                  You can schedule online 24/7, call us at (800) 277-3633, or use our live chat feature. 
                  Same-day appointments are often available.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Do you accept my insurance?
                </h3>
                <p className="text-dental-gray text-sm">
                  We accept most major insurance plans. Call us or use our online tool to verify 
                  your specific benefits and coverage.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  What should I bring to my appointment?
                </h3>
                <p className="text-dental-gray text-sm">
                  Bring a valid ID, insurance card (if applicable), list of medications, 
                  and any relevant dental records from previous treatments.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Do you offer payment plans?
                </h3>
                <p className="text-dental-gray text-sm">
                  Yes! We offer flexible financing options and payment plans to make 
                  dental care affordable for everyone, regardless of insurance status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait to get the dental care you deserve. Contact us today 
            and take the first step toward a healthier, more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
              Schedule Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
              Call (800) 277-3633
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;