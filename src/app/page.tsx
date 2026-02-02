import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Import Services",
    description: "Seamless import of high-quality industrial pipes from certified manufacturers worldwide.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
  {
    title: "Export Services",
    description: "Efficient export solutions to deliver your pipe products to markets around the globe.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Rigorous inspection and certification processes ensuring every product meets international standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Logistics Support",
    description: "End-to-end logistics management including shipping, customs clearance, and delivery coordination.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Countries Served" },
  { value: "1000+", label: "Projects Completed" },
  { value: "99%", label: "Client Satisfaction" },
];

const trustIndicators = [
  {
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems meeting international standards",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description: "Established partnerships with suppliers and buyers in over 50 countries",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    description: "Only source from certified mills with proven track records",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Reliable Delivery",
    description: "On-time delivery guarantee with real-time shipment tracking",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
                  Trusted Global Partner Since 1998
                </span>
                <h1 className="text-white mb-6 text-balance">
                  Your Gateway to
                  <span className="text-accent-400"> Premium Industrial Pipes</span>
                </h1>
                <p className="text-xl text-navy-200 mb-8 max-w-lg leading-relaxed">
                  Connecting manufacturers and buyers worldwide with reliable import and export 
                  solutions for steel, carbon, and specialty pipes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request a Quote
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                    Explore Products
                  </Link>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative hidden lg:block">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-steel-500/20 to-accent-500/20 rounded-3xl" />
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                    alt="Industrial pipes"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elevated p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent-500/10 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-navy-900">25+</p>
                        <p className="text-gray-500 text-sm">Years in Business</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">About Broroma</span>
              <h2 className="text-navy-900 mt-2 mb-6">
                Building Lasting Partnerships in Global Pipe Trade
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                For over two decades, Broroma has been at the forefront of the industrial pipe 
                trade industry. We specialize in connecting quality manufacturers with businesses 
                worldwide, ensuring seamless transactions and reliable supply chains.
              </p>
              <p className="text-gray-600 mb-8">
                Our deep industry expertise, combined with our commitment to quality and customer 
                service, has made us the preferred partner for companies seeking dependable pipe 
                sourcing and distribution solutions.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    alt="Quality inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Corporate headquarters"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80"
                    alt="Global shipping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80"
                    alt="Pipe warehouse"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-navy-900 mt-2 mb-4">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From sourcing to delivery, we provide end-to-end services to streamline your 
              industrial pipe procurement and distribution needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-white mt-2 mb-4">
              The Broroma Advantage
            </h2>
            <p className="text-navy-200 max-w-2xl mx-auto text-lg">
              We combine industry expertise with uncompromising commitment to quality, 
              making us your ideal partner for all industrial pipe needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((item, index) => (
              <div key={index} className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700">
                <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-navy-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-16 text-center border border-gray-200">
            <h2 className="text-navy-900 mb-4">
              Ready to Streamline Your Pipe Supply Chain?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss your requirements. We&apos;ll provide 
              customized solutions tailored to your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
