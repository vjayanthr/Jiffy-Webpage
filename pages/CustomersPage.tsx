import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { FiveMinuteDeliveryIcon, SupportLocalIcon, AlwaysFreshIcon } from '../components/icons/IconComponents';

interface CustomersPageProps {
  onNavigate: (page: Page) => void;
}

const StepCard: React.FC<{ step: string; title: string; children: React.ReactNode }> = ({ step, title, children }) => (
    <div className="border border-brand-gray bg-white rounded-lg p-8 h-full">
      <span className="text-5xl font-extrabold text-brand-gray-light mb-4 block">{step}</span>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-brand-black/70">{children}</p>
    </div>
);

const CategoryCard: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-brand-gray-light aspect-square flex items-center justify-center p-4 rounded-lg">
        <h3 className="text-xl font-bold text-center">{name}</h3>
    </div>
);

const BenefitDetail: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; reverse?: boolean }> = ({ icon, title, children, reverse = false }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-shrink-0 w-40 h-40 bg-brand-gray-light rounded-full flex items-center justify-center p-8">
            {icon}
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-4 text-lg text-brand-black/70">{children}</p>
        </div>
    </div>
);


const CustomersPage: React.FC<CustomersPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Your Daily Groceries, Faster Than Ever.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-white/70">
            Experience the magic of 5-minute delivery from the local Kirana store you already know and trust. Your community, your groceries, your time.
          </p>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="bg-brand-gray-light py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">How to Order with Jiffy</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <StepCard step="01" title="Find a Jiffy Store">We're currently live in select neighborhoods in Hyderabad. Use our store locator to find a Jiffy-powered Kirana near you.</StepCard>
                <StepCard step="02" title="Place Your Order">Browse products and place your order in seconds through our upcoming app, website, or even by sending a simple WhatsApp message.</StepCard>
                <StepCard step="03" title="Enjoy 5-Minute Delivery">Before you can finish your thought, our dedicated rider will be at your doorstep with your complete order. It's that fast.</StepCard>
            </div>
            <div className="text-center mt-16">
                 <Button onClick={() => onNavigate(Page.Contact)} variant="secondary">Check for Stores Near You</Button>
            </div>
        </div>
      </section>

      {/* What's In Store? Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">What's In Store?</h2>
              <p className="mt-4 text-lg text-brand-black/70 max-w-2xl mx-auto">Everything you expect from your local Kirana, now available for delivery in minutes.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                <CategoryCard name="Fresh Fruits & Veggies" />
                <CategoryCard name="Dairy, Bread & Eggs" />
                <CategoryCard name="Snacks & Beverages" />
                <CategoryCard name="Pantry Staples" />
                <CategoryCard name="Cleaning Supplies" />
            </div>
        </div>
      </section>


      {/* Why Choose Jiffy? Section */}
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold">Why Jiffy is a Game-Changer</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-20">
                <BenefitDetail icon={<FiveMinuteDeliveryIcon />} title="Unmatched Speed">
                    Our 5-minute delivery isn't a marketing gimmick; it's our standard. By leveraging hyper-local stores and a dedicated fleet, we eliminate the delays of traditional delivery services.
                </BenefitDetail>
                <BenefitDetail icon={<SupportLocalIcon />} title="Support Your Community" reverse={true}>
                    Every Jiffy order directly supports a local Kirana owner in your neighborhood. You get incredible convenience while helping a small business thrive in the digital economy.
                </BenefitDetail>
                <BenefitDetail icon={<AlwaysFreshIcon />} title="Guaranteed Freshness">
                    Our automated supply chain ensures that partner stores are always stocked with high-quality, fresh products. Say goodbye to wilted vegetables and near-expiry dairy.
                </BenefitDetail>
            </div>
        </div>
      </section>

       {/* App CTA Section */}
      <section className="bg-brand-black text-brand-white py-20 md:py-24">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold">The Jiffy App is Coming Soon!</h2>
                    <p className="mt-4 text-lg text-brand-white/70">
                        Get ready for the easiest shopping experience ever. Track your delivery in real-time, save your favorite items, and discover exclusive deals.
                    </p>
                     <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-md bg-brand-white/90 text-brand-black placeholder-brand-black/50 focus:outline-none focus:ring-2 focus:ring-brand-white" />
                        <button onClick={() => alert('Thanks for your interest!')} className="px-8 py-3 font-bold rounded-md bg-brand-white text-brand-black flex-shrink-0">Notify Me</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-64 h-auto bg-brand-gray-light/20 p-4 rounded-2xl">
                        <div className="w-full h-96 bg-brand-gray-light rounded-lg flex items-center justify-center text-brand-black text-center p-4">
                             Your future shopping app.
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default CustomersPage;