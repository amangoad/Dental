import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background.mp4"   // 👉 your video in public folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-dental-blue/90"></div>

      {/* Content Wrapper */}
      <div className="relative">
        {/* CTA Section */}
        <div className="text-center px-6 py-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Design Capacity?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of dental professionals who trust us to deliver
            accurate, on-time designs — every time.
          </p>
          <Button size="lg" className="dental-button-primary">
            Schedule Your Design Consultation
          </Button>
        </div>

        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-white">
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Crown & Bridge Design</a></li>
              <li><a href="#" className="hover:underline">Implant Restoration Design</a></li>
              <li><a href="#" className="hover:underline">Full Arch & All-on-X Design</a></li>
              <li><a href="#" className="hover:underline">Removable Prosthetics Design</a></li>
              <li><a href="#" className="hover:underline">Night Guards & Splints</a></li>
              <li><a href="#" className="hover:underline">Clear Aligner Setup</a></li>
              <li><a href="#" className="hover:underline">3D Printing & Milling Prep</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Industries We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Dental Laboratories</a></li>
              <li><a href="#" className="hover:underline">Dental Clinics</a></li>
              <li><a href="#" className="hover:underline">Orthodontic Practices</a></li>
              <li><a href="#" className="hover:underline">Dental Manufacturers</a></li>
              <li><a href="#" className="hover:underline">3D Printing Centers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Why Choose Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Experienced CAD/CAM Designers</a></li>
              <li><a href="#" className="hover:underline">24–48 Hour Turnaround</a></li>
              <li><a href="#" className="hover:underline">Scalable Outsourcing Solutions</a></li>
              <li><a href="#" className="hover:underline">HIPAA & GDPR Compliant</a></li>
              <li><a href="#" className="hover:underline">Quality Assurance Process</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">File Submission Guidelines</a></li>
              <li><a href="#" className="hover:underline">Supported Software</a></li>
              <li><a href="#" className="hover:underline">Pricing & Plans</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About DentSmileDesign</a></li>
              <li><a href="#" className="hover:underline">Meet Our Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-6 text-center text-white">
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61577230354719"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 cursor-pointer text-white" />
            </a>
            <a
              href="https://www.instagram.com/dentsmiledesign/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 cursor-pointer text-white" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 cursor-pointer text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/dentsmiledesign/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 cursor-pointer text-white" />
            </a>
          </div>
          <p className="text-sm">
            © 2025 DentSmileDesign. All rights reserved. Dental CAD/CAM
            Outsourcing Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
