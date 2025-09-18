import React from 'react';
import Button from '../components/Button';
import { AutomatedSupplyIcon, DigitalPosIcon, TransportationIcon, IncreasedProfitsIcon } from '../components/icons/IconComponents';


const ProblemCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="border-t-2 border-brand-black pt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-brand-black/70">{children}</p>
    </div>
);

const PlatformFeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-brand-gray-light/60 border border-brand-gray-light p-8 rounded-lg flex flex-col">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-brand-black/70">{children}</p>
    </div>
);

const StepCard: React.FC<{ step: string; title: string; children: React.ReactNode }> = ({ step, title, children }) => (
    <div className="text-center">
        <div className="flex items-center justify-center mx-auto w-20 h-20 rounded-full bg-brand-black text-brand-white text-3xl font-bold mb-4">{step}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-brand-black/70">{children}</p>
    </div>
);


const FaqItem: React.FC<{ question: string; children: React.ReactNode;}> = ({ question, children }) => (
    <div className="border-b border-brand-gray py-6">
        <h3 className="text-xl font-bold">{question}</h3>
        <p className="mt-2 text-brand-black/70">{children}</p>
    </div>
);


const PartnersPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Our team will contact you shortly.');
        (e.target as HTMLFormElement).reset();
    };
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Transform Your Kirana Store with Jiffy.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-black/70">
            Ditch the operational headaches. Jiffy’s platform manages your inventory, supply, and billing, letting you compete and win in the digital age.
          </p>
        </div>
      </section>

      {/* The Problem We Solve Section */}
      <section className="bg-brand-gray-light py-20 md:py-24">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">The Modern Kirana's Dilemma</h2>
              <p className="mt-4 text-lg text-brand-black/70 max-w-2xl mx-auto">Running a Kirana store is harder than ever. We understand the challenges you face every day.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <ProblemCard title="Complex Operations">
                    Manually tracking inventory, managing multiple suppliers, and handling billing takes you away from your most important job: serving customers.
                </ProblemCard>
                <ProblemCard title="Intense Competition">
                    Large e-commerce players are entering the grocery space, making it difficult for local stores to retain customers who demand convenience.
                </ProblemCard>
                <ProblemCard title="Lost Revenue">
                    Stockouts on popular items lead to lost sales, while overstocking unpopular ones results in waste and tied-up capital.
                </ProblemCard>
            </div>
        </div>
      </section>

      {/* The Jiffy Partnership Platform Section */}
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">The Jiffy Partnership Platform</h2>
              <p className="mt-4 text-lg text-brand-black/70 max-w-2xl mx-auto">We provide a free, all-in-one solution to automate your store and boost your profits.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <PlatformFeatureCard icon={<AutomatedSupplyIcon/>} title="End-to-End Automation">
                    Our integrated system automates everything from procurement to sales. AI predicts what you need to order, and our system does it for you, eliminating stockouts and reducing waste.
                </PlatformFeatureCard>
                <PlatformFeatureCard icon={<DigitalPosIcon/>} title="Modern Technology Suite">
                    You receive a free, state-of-the-art POS machine, billing software, and an inventory management app. Streamline your checkout process and get real-time data on your sales.
                </PlatformFeatureCard>
                <PlatformFeatureCard icon={<TransportationIcon/>} title="Reliable, Centralized Supply Chain">
                    Forget dealing with dozens of distributors. We handle the sourcing and daily delivery of all products directly to your shop at competitive prices, ensuring quality and availability.
                </PlatformFeatureCard>
                <PlatformFeatureCard icon={<IncreasedProfitsIcon/>} title="Boost Your Income Streams">
                    Tap into a new customer base through our 5-minute delivery service. Our smart inventory system helps you stock the right products, increasing sales and maximizing your profit margins.
                </PlatformFeatureCard>
            </div>
        </div>
      </section>

       {/* How to Become a Partner Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">Become a Jiffy Partner in 3 Simple Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                <StepCard step="1" title="Request a Callback">Fill out the form below. Our partnership team will contact you within 24 hours to discuss the opportunity.</StepCard>
                <StepCard step="2" title="Onboarding & Setup">We'll visit your store, set up the POS system, provide training, and digitize your initial inventory—all for free.</StepCard>
                <StepCard step="3" title="Go Live & Grow">Start selling with your new system. We'll add you to our delivery network and begin managing your supply chain immediately.</StepCard>
            </div>
        </div>
      </section>

        {/* Partner FAQs Section */}
        <section className="bg-brand-gray-light py-20 md:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold">Partner FAQs</h2>
                </div>
                <div>
                    <FaqItem question="Is there any fee to join Jiffy?">
                        No, there are zero upfront fees, setup costs, or hidden charges. We provide all the hardware, software, and training for free. Our business model is a partnership based on shared success.
                    </FaqItem>
                    <FaqItem question="Do I need to be tech-savvy to use your system?">
                        Not at all. Our POS system and management app are designed to be extremely user-friendly and intuitive. We provide comprehensive training for you and your staff to ensure you're comfortable from day one.
                    </FaqItem>
                    <FaqItem question="Can I still sell my own products?">
                        Absolutely. We work with you to integrate your existing local specialties and suppliers into our system. Our goal is to enhance your business, not replace what makes it unique.
                    </FaqItem>
                    <FaqItem question="How do I get paid for delivery orders?">
                        All sales, whether in-store or for delivery, are tracked through the POS system. We provide instant, transparent settlements directly to your bank account on a daily basis.
                    </FaqItem>
                </div>
            </div>
        </section>


      {/* Contact Form Section */}
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Supercharge Your Store?</h2>
                    <p className="mt-4 text-lg text-brand-black/70">Fill out the form below to get started. Let's grow together.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                        <input type="text" placeholder="Shop Name" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                    </div>
                     <div className="grid sm:grid-cols-2 gap-6">
                        <input type="tel" placeholder="Phone Number" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                        <input type="text" placeholder="City (Hyderabad)" value="Hyderabad" readOnly className="w-full p-4 border border-brand-gray rounded-md bg-brand-gray-light focus:outline-none" />
                    </div>
                    <div>
                        <textarea placeholder="Tell us a little about your store (Optional)" rows={4} className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black"></textarea>
                    </div>
                    <div className="text-center pt-4">
                         <button type="submit" className="px-12 py-4 font-bold rounded-md transition-all duration-300 text-lg bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black border-2 border-brand-black">
                            Request a Callback
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;