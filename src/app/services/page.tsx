import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover Broroma's comprehensive services including import/export, logistics support, quality inspection, and custom sourcing for industrial pipes.",
};

const services = [
  {
    id: "import",
    title: "Import Services",
    subtitle: "Global Sourcing Excellence",
    description: "We connect you with certified manufacturers worldwide, handling all aspects of the import process to ensure quality products reach your facility seamlessly.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    features: [
      "Access to certified mills in Asia, Europe, and Americas",
      "Supplier qualification and auditing",
      "Price negotiation and contract management",
      "Import documentation and compliance",
      "Letter of credit and payment facilitation",
      "Duty and tariff optimization",
    ],
    benefits: [
      { title: "Cost Savings", description: "Leverage our buying power and supplier relationships" },
      { title: "Quality Assurance", description: "Pre-shipment inspection at origin" },
      { title: "Risk Mitigation", description: "Comprehensive supplier vetting process" },
    ],
  },
  {
    id: "export",
    title: "Export Services",
    subtitle: "Reaching Global Markets",
    description: "Expand your market reach with our comprehensive export solutions. We manage the complexities of international trade so you can focus on your core business.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    features: [
      "Market research and buyer identification",
      "Export documentation and licensing",
      "Customs clearance coordination",
      "Trade compliance and regulations",
      "Currency management and hedging",
      "After-sales support and warranty coordination",
    ],
    benefits: [
      { title: "Market Access", description: "Entry to 50+ international markets" },
      { title: "Compliance", description: "Full regulatory and documentation support" },
      { title: "Speed", description: "Streamlined processes for faster delivery" },
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Shipping",
    subtitle: "End-to-End Transport Solutions",
    description: "From factory floor to your warehouse, we orchestrate the entire logistics chain with precision, ensuring your products arrive safely and on time.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    features: [
      "Multi-modal transportation (sea, air, rail, road)",
      "Container booking and freight forwarding",
      "Warehouse and storage solutions",
      "Real-time shipment tracking",
      "Cargo insurance coordination",
      "Last-mile delivery management",
    ],
    benefits: [
      { title: "Visibility", description: "Real-time tracking and status updates" },
      { title: "Flexibility", description: "Scalable solutions for any volume" },
      { title: "Reliability", description: "99.5% on-time delivery rate" },
    ],
  },
  {
    id: "inspection",
    title: "Quality Inspection",
    subtitle: "Uncompromising Standards",
    description: "Our rigorous quality control processes ensure every product meets your specifications and international standards before shipment.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    features: [
      "Pre-production inspection (PPI)",
      "During production inspection (DPI)",
      "Pre-shipment inspection (PSI)",
      "Mill test certificate verification",
      "Dimensional and visual inspection",
      "Non-destructive testing (NDT)",
    ],
    benefits: [
      { title: "Zero Defects", description: "Catch issues before they become problems" },
      { title: "Compliance", description: "Meet all required standards and specs" },
      { title: "Documentation", description: "Comprehensive inspection reports" },
    ],
  },
  {
    id: "sourcing",
    title: "Custom Sourcing",
    subtitle: "Finding the Unfindable",
    description: "Can't find what you need? Our global network and industry expertise allow us to source specialized products tailored to your unique requirements.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    features: [
      "Custom size and specification sourcing",
      "Rare grade and alloy procurement",
      "Small batch manufacturing coordination",
      "Special coating and treatment options",
      "Prototype and sample production",
      "Technical consultation and material selection",
    ],
    benefits: [
      { title: "Expertise", description: "25+ years of industry knowledge" },
      { title: "Network", description: "Global supplier database" },
      { title: "Solutions", description: "Creative problem-solving approach" },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your requirements, specifications, and timeline to understand your needs.",
  },
  {
    step: "02",
    title: "Sourcing",
    description: "Our team identifies and qualifies the best suppliers for your specific requirements.",
  },
  {
    step: "03",
    title: "Quality Control",
    description: "Rigorous inspection ensures all products meet your specifications before shipping.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Coordinated logistics ensure safe, on-time delivery to your designated location.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-white mb-6">
              Comprehensive Trade Solutions
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              From sourcing to delivery, we provide end-to-end services to streamline 
              your industrial pipe procurement and distribution needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="p-4 bg-gray-50 hover:bg-navy-50 rounded-xl text-center transition-colors duration-200"
              >
                <p className="font-semibold text-navy-900">{service.title}</p>
              </a>
            ))}
          </div>

          {/* Individual Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{service.subtitle}</span>
                    <h2 className="text-navy-900 mt-2 mb-6">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-8">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="p-4 bg-navy-50 rounded-xl">
                          <p className="font-semibold text-navy-900 mb-1">{benefit.title}</p>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-navy-900 mt-2 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, transparency, and efficiency 
              at every stage of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <span className="text-5xl font-bold text-navy-100 mb-4 block">{step.step}</span>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-navy-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">50+</p>
              <p className="text-navy-200">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">1000+</p>
              <p className="text-navy-200">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">99.5%</p>
              <p className="text-navy-200">On-Time Delivery</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">24/7</p>
              <p className="text-navy-200">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-navy-900 mt-2 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is the minimum order quantity?",
                  a: "Minimum order quantities vary by product type and supplier. For standard products, we typically work with MOQs starting from 5 metric tons. For specialty items, we can accommodate smaller quantities with adjusted pricing.",
                },
                {
                  q: "How long does shipping typically take?",
                  a: "Shipping times depend on the origin and destination. Sea freight from Asia to North America typically takes 25-35 days. We also offer expedited air freight options for urgent requirements.",
                },
                {
                  q: "Do you provide Mill Test Certificates?",
                  a: "Yes, all products come with original Mill Test Certificates (MTCs) documenting chemical composition, mechanical properties, and test results as per relevant standards.",
                },
                {
                  q: "What payment terms do you offer?",
                  a: "We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and Documentary Collection. Terms are tailored based on order value and customer relationship.",
                },
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how we can support your industrial pipe 
              requirements with our comprehensive service offerings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
