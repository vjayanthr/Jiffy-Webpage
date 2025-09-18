import React from 'react';
import Button from '../components/Button';
import { Page } from '../types';
import { 
    AutomatedSupplyIcon, DigitalPosIcon, TransportationIcon, IncreasedProfitsIcon, 
    FiveMinuteDeliveryIcon, SupportLocalIcon, AlwaysFreshIcon, OrderEaseIcon 
} from '../components/icons/IconComponents';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

// Reusable components for the new homepage design

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode;}> = ({ icon, title, children }) => (
    <div className="bg-brand-gray-light/50 border border-brand-gray-light p-6 rounded-lg text-left h-full">
        <div className="mb-4">
           {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-brand-black/70">{children}</p>
    </div>
);

const CustomerBenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode;}> = ({ icon, title, children }) => (
    <div className="text-center">
        <div className="mx-auto bg-brand-white border-2 border-brand-gray-light w-20 h-20 p-4 rounded-full mb-4 flex items-center justify-center">
           {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-brand-black/70 mt-2">{children}</p>
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; role: string;}> = ({ quote, author, role }) => (
    <div className="bg-brand-white border border-brand-gray rounded-lg p-8 h-full">
        <blockquote className="text-xl italic text-brand-black">"{quote}"</blockquote>
        <p className="mt-4 font-bold">{author}</p>
        <p className="text-sm text-brand-black/60">{role}</p>
    </div>
);

const FaqItem: React.FC<{ question: string; children: React.ReactNode;}> = ({ question, children }) => (
    <div className="border-b border-brand-gray py-6">
        <h3 className="text-xl font-bold">{question}</h3>
        <p className="mt-2 text-brand-black/70">{children}</p>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-brand-white text-center py-24 md:py-40">
        <div className="container mx-auto px-6">
          <span className="inline-block bg-brand-gray-light text-brand-black px-4 py-1 rounded-full text-sm font-medium mb-4">
            The Future of Local Commerce is Here
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight">
            Your Neighborhood Store, Now Supercharged.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-black/70">
            We empower local Kirana shops with cutting-edge technology and full operational support, bringing you groceries in just 5 minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => onNavigate(Page.Partners)} variant="primary">Partner With Us</Button>
            <Button onClick={() => onNavigate(Page.Customers)} variant="secondary">Find a Jiffy Store</Button>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-12 bg-brand-white border-y border-brand-gray-light">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold text-brand-black/50 tracking-widest uppercase">
            As Featured In
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <span className="text-2xl font-bold text-brand-black/60">TechDaily</span>
            <span className="text-2xl font-bold text-brand-black/60">Retail Weekly</span>
            <span className="text-2xl font-bold text-brand-black/60">Startup India</span>
            <span className="text-2xl font-bold text-brand-black/60">Kirana Times</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-brand-gray-light py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold">How Jiffy Works</h2>
            <p className="mt-4 text-lg text-brand-black/70 max-w-2xl mx-auto">A seamless experience for stores and shoppers, in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border border-brand-gray bg-white rounded-lg p-8">
              <span className="text-5xl font-extrabold text-brand-gray-light mb-4 block">01</span>
              <h3 className="text-2xl font-bold mb-3">Digitize & Automate</h3>
              <p className="text-brand-black/70">We equip your local Kirana store with a state-of-the-art POS system, inventory management, and automated supply chain.</p>
            </div>
            <div className="border border-brand-gray bg-white rounded-lg p-8">
              <span className="text-5xl font-extrabold text-brand-gray-light mb-4 block">02</span>
              <h3 className="text-2xl font-bold mb-3">Shop or Order</h3>
              <p className="text-brand-black/70">Customers can shop in-store with a modern checkout experience or order online via our upcoming app for ultimate convenience.</p>
            </div>
            <div className="border border-brand-gray bg-white rounded-lg p-8">
              <span className="text-5xl font-extrabold text-brand-gray-light mb-4 block">03</span>
              <h3 className="text-2xl font-bold mb-3">5-Minute Delivery</h3>
              <p className="text-brand-black/70">Our hyper-local delivery fleet picks up orders instantly, ensuring groceries arrive at the customer's doorstep in 5 minutes.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 md:py-24 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">5-Min</span>
              <p className="mt-2 text-lg text-brand-white/70">Average Delivery Time</p>
            </div>
            <div>
              <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">30%</span>
              <p className="mt-2 text-lg text-brand-white/70">Average Profit Increase</p>
            </div>
            <div>
              <span className="text-6xl md:text-7xl font-extrabold tracking-tighter">100+</span>
              <p className="mt-2 text-lg text-brand-white/70">Kiranas Empowered</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Kirana Partners Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Focus on Selling. We'll Handle the Rest.</h2>
            <p className="mt-4 text-lg text-brand-black/70">
              Jiffy provides an end-to-end platform to supercharge your Kirana store. We handle the complex operations so you can increase profits and build stronger customer relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<AutomatedSupplyIcon />} title="Automated Supply">
              Our AI-powered system predicts demand and automates procurement, ensuring you're never out of stock of high-demand items.
            </FeatureCard>
            <FeatureCard icon={<DigitalPosIcon />} title="Digital POS & Billing">
              Receive a free, modern POS machine and software that makes billing, inventory tracking, and sales analytics effortless.
            </FeatureCard>
            <FeatureCard icon={<TransportationIcon />} title="Managed Logistics">
              We handle the entire supply chain, from sourcing products to last-mile delivery to your shop, saving you time and money.
            </FeatureCard>
            <FeatureCard icon={<IncreasedProfitsIcon />} title="Increased Profits">
              Reduce waste, optimize stock, and reach new customers through our delivery network to significantly boost your bottom line.
            </FeatureCard>
          </div>
          <div className="mt-12 text-left">
            <Button onClick={() => onNavigate(Page.Partners)}>Learn About Partnership</Button>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="bg-brand-gray-light py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold">The Future of Grocery Shopping.</h2>
            <p className="mt-4 text-lg text-brand-black/70 max-w-2xl mx-auto">
              Get the freshest groceries from your trusted local shop, delivered to your door faster than ever before. Support your community with every order.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <CustomerBenefitCard icon={<FiveMinuteDeliveryIcon />} title="5-Minute Delivery">
              No more waiting. Get groceries in the time it takes to find your keys.
            </CustomerBenefitCard>
            <CustomerBenefitCard icon={<SupportLocalIcon />} title="Support Local Stores">
              Your purchase empowers a local business owner in your community.
            </CustomerBenefitCard>
            <CustomerBenefitCard icon={<AlwaysFreshIcon />} title="Always Fresh">
              We ensure our partner stores are always stocked with high-quality products.
            </CustomerBenefitCard>
            <CustomerBenefitCard icon={<OrderEaseIcon />} title="Order with Ease">
              Use our upcoming app, website, or even WhatsApp to place an order in seconds.
            </CustomerBenefitCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold">Loved by Partners & Customers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="Jiffy handled everything from technology to supply. My sales have gone up by 40%, and I have more time for my family." 
              author="Ramesh Kumar"
              role="Kirana Partner, Hyderabad"
            />
            <TestimonialCard 
              quote="I never thought I'd get my groceries delivered in less time than it takes to boil water. Jiffy is a game-changer for my busy schedule." 
              author="Priya Sharma"
              role="Jiffy Customer, Hyderabad"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-brand-gray-light py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold">Frequently Asked Questions</h2>
          </div>
          <div>
            <FaqItem question="What does it cost for a Kirana owner to partner with Jiffy?">
              Partnering with Jiffy is completely free. We provide the technology and operational support at no upfront cost. We operate on a revenue-sharing model, meaning we only make money when you make money.
            </FaqItem>
            <FaqItem question="How does the 5-minute delivery actually work?">
              Our model is hyper-local. We onboard stores in dense residential areas and have a dedicated fleet of riders stationed nearby. When an order comes in, the rider is already close, enabling ultra-fast pickup and delivery.
            </FaqItem>
            <FaqItem question="What areas do you currently operate in?">
              We are rapidly expanding! Currently, we are live in select neighborhoods in Hyderabad. You can use the 'Find a Jiffy Store' feature to see if we are available in your area.
            </FaqItem>
             <FaqItem question="Can I order from my usual Kirana store?">
              Yes! If your local Kirana store has partnered with us, you can continue to support them while enjoying the added convenience of online ordering and rapid delivery.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Ready to Join the Revolution?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-black/70">
            Whether you're a store owner looking to grow or a customer wanting convenience, Jiffy is the answer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => onNavigate(Page.Partners)} variant="primary">Become a Partner</Button>
            <Button onClick={() => onNavigate(Page.Customers)} variant="secondary">Find a Store</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;