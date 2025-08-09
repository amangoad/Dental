import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Shield, Calculator } from "lucide-react";

const Insurance = () => {
  const insuranceProviders = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "Delta Dental", "Humana", 
    "MetLife", "UnitedHealthcare", "Guardian", "Principal", "Anthem"
  ];

  const financingOptions = [
    {
      title: "AspenDental Credit Card",
      description: "Special financing for dental treatments",
      features: ["0% APR for 6-24 months", "No annual fee", "Easy application"],
      icon: CreditCard
    },
    {
      title: "Payment Plans",
      description: "Flexible monthly payment options",
      features: ["Low monthly payments", "No credit check required", "Instant approval"],
      icon: Calculator
    },
    {
      title: "Insurance Maximization",
      description: "Get the most from your dental benefits",
      features: ["Benefits verification", "Pre-authorization help", "Claim assistance"],
      icon: Shield
    }
  ];

  const treatmentCosts = [
    { service: "Routine Cleaning", withInsurance: "$25-50", withoutInsurance: "$75-150" },
    { service: "Basic Filling", withInsurance: "$50-100", withoutInsurance: "$150-300" },
    { service: "Root Canal", withInsurance: "$300-500", withoutInsurance: "$800-1,500" },
    { service: "Crown", withInsurance: "$200-400", withoutInsurance: "$600-1,200" },
    { service: "Dentures (Full Set)", withInsurance: "$400-800", withoutInsurance: "$1,200-3,000" },
    { service: "Dental Implant", withInsurance: "$500-1,000", withoutInsurance: "$1,500-4,000" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dental-light-gray py-16">
        <div className="dental-container text-center">
          <h1 className="text-dental-blue mb-6">
            Dental Insurance & Financing
          </h1>
          <p className="text-xl text-dental-gray max-w-3xl mx-auto leading-relaxed">
            We make dental care affordable for everyone. With insurance acceptance, 
            flexible financing, and payment plans, there's always a way to get the care you need.
          </p>
        </div>
      </section>

      {/* Insurance Acceptance */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dental-blue mb-6">
              We Accept Most Insurance Plans
            </h2>
            <p className="text-xl text-dental-gray max-w-2xl mx-auto">
              We work with hundreds of insurance providers to maximize your benefits 
              and minimize your out-of-pocket costs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {insuranceProviders.map((provider, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-dental-light-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-dental-blue" />
                  </div>
                  <h3 className="font-semibold text-dental-blue">{provider}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-dental-gray mb-4">
              Don't see your insurance provider? No problem!
            </p>
            <Button className="dental-button-primary">
              Verify Your Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Flexible Financing Options
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className="dental-card">
                <CardContent className="p-6 text-center">
                  <option.icon className="w-12 h-12 text-dental-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-dental-blue mb-3">
                    {option.title}
                  </h3>
                  <p className="text-dental-gray mb-6">
                    {option.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm text-dental-gray">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="dental-button-outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="dental-section bg-white">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Treatment Cost Comparison
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-dental-light-gray">
                    <th className="text-left p-4 font-bold text-dental-blue">Treatment</th>
                    <th className="text-left p-4 font-bold text-dental-blue">With Insurance*</th>
                    <th className="text-left p-4 font-bold text-dental-blue">Without Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {treatmentCosts.map((treatment, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4 font-medium text-dental-blue">{treatment.service}</td>
                      <td className="p-4 text-green-600 font-semibold">{treatment.withInsurance}</td>
                      <td className="p-4 text-dental-gray">{treatment.withoutInsurance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              *Costs shown are estimates with typical insurance coverage. Actual costs may vary based on your specific plan and treatment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="dental-section bg-dental-blue">
        <div className="dental-container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Limited Time Offer
          </h2>
          <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              25% Off Your Treatment Plan
            </h3>
            <p className="text-white/90 mb-6">
              New patients can save 25% on their comprehensive treatment plan. 
              This offer can be combined with insurance benefits for maximum savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                Check Benefits
              </Button>
            </div>
          </div>
          <p className="text-xs text-white/70 max-w-3xl mx-auto">
            Offer available in select offices. Not valid for previous or ongoing work and cannot be combined with other discounts or dental discount programs. Not valid for orthodontia. Discount taken off usual and customary fees for general dentistry services and does not apply to services rendered by a specialist. Patients with insurance will receive either the 25% discount or insurance plan pricing, whichever discount is greater. Offer expires 12/31/25.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="dental-section bg-dental-light-gray">
        <div className="dental-container">
          <h2 className="text-3xl font-bold text-dental-blue text-center mb-12">
            Insurance & Financing FAQs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  How do I know if my insurance is accepted?
                </h3>
                <p className="text-dental-gray text-sm">
                  We accept most major insurance plans. Call us or use our online verification tool to check your specific benefits and coverage.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  Can I use financing if I have insurance?
                </h3>
                <p className="text-dental-gray text-sm">
                  Yes! You can use financing options to cover your portion after insurance pays their part, making treatment even more affordable.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  What if I don't have dental insurance?
                </h3>
                <p className="text-dental-gray text-sm">
                  No problem! We offer multiple financing options and payment plans to make dental care accessible regardless of insurance status.
                </p>
              </CardContent>
            </Card>
            <Card className="dental-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-dental-blue mb-3">
                  How quickly can I get approved for financing?
                </h3>
                <p className="text-dental-gray text-sm">
                  Our financing applications typically provide instant approval, so you can start treatment the same day as your consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;