import React from 'react';
import Button from '../components/Button';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const ValueCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-brand-gray-light p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-brand-black/70">{children}</p>
    </div>
);

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                    Empowering India's Retail Backbone.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-black/70">
                   We believe the heart of Indian retail is the local Kirana store. Our mission is to equip these entrepreneurs with the technology and support they need to thrive in the digital age.
                </p>
            </div>
        </div>
      </section>

      {/* Image Section */}
        <section className="pb-20 md:pb-24">
            <div className="container mx-auto px-6">
                <div className="w-full h-64 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                        src="https://picsum.photos/1600/900?grayscale" 
                        alt="A bustling Jiffy-powered Kirana store in Hyderabad" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>

      {/* Our Story Section */}
      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-extrabold">Our Story</h2>
                </div>
                <div className="space-y-8 text-lg text-brand-black/80 leading-relaxed">
                    <p>
                        Jiffy was founded with a simple but powerful idea: to merge the deep-rooted trust of the local Kirana store with the limitless potential of modern technology. Our founders saw firsthand the challenges faced by these small business owners—manual inventory management, unreliable supply chains, and growing competition from large online retailers.
                    </p>
                    <p>
                        We knew there had to be a better way. Instead of trying to replace the Kirana, we decided to empower it. We built a platform from the ground up to solve their biggest operational headaches. By handling logistics, technology, and supply, we free up store owners to do what they do best: build relationships and serve their communities.
                    </p>
                </div>
            </div>
        </div>
      </section>

        {/* Core Values Section */}
        <section className="bg-brand-gray-light py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-extrabold">Our Core Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <ValueCard title="Community First">
                        We succeed when our partners and their communities succeed. Every decision we make is aimed at strengthening local economies.
                    </ValueCard>
                     <ValueCard title="Innovation for All">
                        We believe cutting-edge technology shouldn't be reserved for large corporations. We make powerful tools accessible to every Kirana owner.
                    </ValueCard>
                     <ValueCard title="Operational Excellence">
                       We are obsessed with efficiency, from our supply chain to our delivery times. We handle the complexity so our partners don't have to.
                    </ValueCard>
                </div>
            </div>
        </section>

        {/* Vision Section */}
        <section className="bg-brand-black text-brand-white py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold">Our Vision for the Future</h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-white/70">
                    Our vision is a future where every neighborhood in India is served by a thriving, digitized Kirana store. A future where local commerce is faster, more efficient, and more connected than ever before, creating a sustainable ecosystem that benefits both business owners and customers.
                </p>
            </div>
        </section>

         {/* Final CTA Section */}
      <section className="bg-brand-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Join Our Mission
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-black/70">
            Help us build the future of retail in India. Partner with us or explore career opportunities.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={() => onNavigate(Page.Partners)} variant="primary">Become a Partner</Button>
            <Button onClick={() => onNavigate(Page.Contact)} variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;