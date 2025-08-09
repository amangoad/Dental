import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-dental-blue text-white">
  {/* Footer Links */}
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
    <div>
      <h3 className="font-bold mb-4">Dentures</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Types of dentures</a></li>
        <li><a href="#" className="hover:underline">Compare dentures</a></li>
        <li><a href="#" className="hover:underline">Replacement dentures</a></li>
        <li><a href="#" className="hover:underline">Denture repair & reline</a></li>
        <li><a href="#" className="hover:underline">Full dentures</a></li>
        <li><a href="#" className="hover:underline">Partial dentures</a></li>
        <li><a href="#" className="hover:underline">Implant dentures</a></li>
        <li><a href="#" className="hover:underline">Dentures costs & offers</a></li>
        <li><a href="#" className="hover:underline">About dentures</a></li>
        <li><a href="#" className="hover:underline">Denture testimonials</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">Dental implants</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Dental implant types</a></li>
        <li><a href="#" className="hover:underline">Full mouth dental implants</a></li>
        <li><a href="#" className="hover:underline">Dental implant cost</a></li>
        <li><a href="#" className="hover:underline">Affording implants</a></li>
        <li><a href="#" className="hover:underline">Dental implant insurance</a></li>
        <li><a href="#" className="hover:underline">Implant testimonials</a></li>
        <li><a href="#" className="hover:underline">Implants FAQ</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">General dental services</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Emergency dental care</a></li>
        <li><a href="#" className="hover:underline">Dental checkups</a></li>
        <li><a href="#" className="hover:underline">Oral health</a></li>
        <li><a href="#" className="hover:underline">Dental veneers</a></li>
        <li><a href="#" className="hover:underline">Motto clear aligners</a></li>
        <li><a href="#" className="hover:underline">Teeth whitening</a></li>
        <li><a href="#" className="hover:underline">Dental crowns</a></li>
        <li><a href="#" className="hover:underline">Dental bridge</a></li>
        <li><a href="#" className="hover:underline">Root canal</a></li>
        <li><a href="#" className="hover:underline">Oral surgery</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">Costs & affordability</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Dental Savings Plan</a></li>
        <li><a href="#" className="hover:underline">Financing & insurance</a></li>
        <li><a href="#" className="hover:underline">Affordable dentures</a></li>
        <li><a href="#" className="hover:underline">Affording implants</a></li>
        <li><a href="#" className="hover:underline">Costs & offers</a></li>
        <li><a href="#" className="hover:underline">Implant cost</a></li>
        <li><a href="#" className="hover:underline">Veneers cost</a></li>
        <li><a href="#" className="hover:underline">Tooth extraction cost</a></li>
        <li><a href="#" className="hover:underline">Teeth whitening costs</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold mb-4">About us</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">Dentist directory</a></li>
        <li><a href="#" className="hover:underline">Pay your bill</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Read reviews</a></li>
        <li><a href="#" className="hover:underline">Contact us</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms of Use</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-white/20 py-6 text-center">
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
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    <p className="text-sm text-white">
       © 2025 DentSmileDesign. All rights reserved.

    </p>
  </div>
</footer>

  );
};

export default Footer;
