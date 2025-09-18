import React from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section className="bg-brand-white py-20 md:py-28 text-center">
        <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Get in Touch</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info & Map */}
                <div>
                    <div className="space-y-4 text-lg">
                        <p><strong>Email:</strong> <a href="mailto:vjayanthr@letsjiffy.com" className="hover:underline">vjayanthr@letsjiffy.com</a></p>
                        <p><strong>Phone:</strong> +917396972625</p>
                        <p><strong>Address:</strong> Vakaran Grotech Private Limited, Plot No 5, Inorbit Mall Rd, opposite Durgam Cheruvu, Doctor's Colony, HITEC City, Hyderabad, Telangana 500081</p>
                    </div>
                    <div className="mt-8 w-full h-80 bg-gray-200 rounded-lg overflow-hidden border">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.297401149457!2d78.38133487593922!3d17.44520978345479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a27f7f0939%3A0x894e63f5aa7e4777!2sCoKarma%20-%20Durgam%20Cheruvu!5e0!3m2!1sen!2sin!4v1721312345678!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            className="filter grayscale-[100%] contrast-[120%]"
                            title="Office Location: CoKarma - Durgam Cheruvu"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                         <div className="grid sm:grid-cols-2 gap-6">
                             <input type="text" placeholder="Name" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                             <input type="email" placeholder="Email" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                         </div>
                         <div>
                             <input type="text" placeholder="Subject" required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black" />
                         </div>
                         <div>
                            <textarea placeholder="Your Message" rows={5} required className="w-full p-4 border border-brand-gray rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-brand-black"></textarea>
                        </div>
                        <div>
                            <Button onClick={() => {}} className="w-full">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;