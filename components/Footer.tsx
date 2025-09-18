import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold">Jiffy.</h2>
            <p className="mt-2 text-brand-white/70">
              Your Neighborhood Store, Supercharged.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold tracking-wider uppercase">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><button onClick={() => onNavigate(Page.Home)} className="text-brand-white/70 hover:text-brand-white">Home</button></li>
                        <li><button onClick={() => onNavigate(Page.About)} className="text-brand-white/70 hover:text-brand-white">About Us</button></li>
                        <li><button onClick={() => onNavigate(Page.Contact)} className="text-brand-white/70 hover:text-brand-white">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold tracking-wider uppercase">For Partners</h3>
                     <ul className="mt-4 space-y-2">
                        <li><button onClick={() => onNavigate(Page.Partners)} className="text-brand-white/70 hover:text-brand-white">Become a Partner</button></li>
                        <li><button onClick={() => onNavigate(Page.Partners)} className="text-brand-white/70 hover:text-brand-white">Our Services</button></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold tracking-wider uppercase">For Customers</h3>
                     <ul className="mt-4 space-y-2">
                        <li><button onClick={() => onNavigate(Page.Customers)} className="text-brand-white/70 hover:text-brand-white">How to Order</button></li>
                        <li><button onClick={() => onNavigate(Page.Customers)} className="text-brand-white/70 hover:text-brand-white">Find a Store</button></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold tracking-wider uppercase">Connect</h3>
                    <div className="flex mt-4 space-x-4">
                        <a href="https://www.linkedin.com/company/letsjiffy" target="_blank" rel="noopener noreferrer" className="text-brand-white/70 hover:text-brand-white" aria-label="LinkedIn">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M8.5,18H6.5V11H8.5V18M7.5,9.81C6.79,9.81 6.25,9.26 6.25,8.54C6.25,7.82 6.79,7.28 7.5,7.28C8.21,7.28 8.75,7.82 8.75,8.54C8.75,9.26 8.21,9.81 7.5,9.81M18,18H16V14.37C16,13.44 15.1,12.81 14.44,12.81C13.78,12.81 13,13.34 13,14.28V18H11V11H13V12.16C13.43,11.39 14.45,10.87 15.5,10.87C17.3,10.87 18,12.09 18,13.97V18Z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/letsjiffy" target="_blank" rel="noopener noreferrer" className="text-brand-white/70 hover:text-brand-white" aria-label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-white/20 text-center text-sm text-brand-white/50">
          <p>&copy; {new Date().getFullYear()} Jiffy Technologies Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;