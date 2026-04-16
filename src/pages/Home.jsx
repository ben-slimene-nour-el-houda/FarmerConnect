import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Tractor, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://voca-land.sgp1.cdn.digitaloceanspaces.com/-1/1635397034864/market_large_354703739_1000.jpeg" 
            alt="Farm Marketplace" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Connecting Farmers, <span className="text-secondary-foreground text-green-400">Consumers</span>, and Suppliers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-gray-200"
          >
            A premium marketplace to buy fresh local products and find agricultural supplies in one place.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/login" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center gap-2">
              I am a Customer <ChevronRight size={20} />
            </Link>
            <Link to="/login" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center gap-2">
              I am a Supplier <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Ecosystem</h2>
            <p className="text-gray-500 text-lg">Empowering the agricultural community through technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<ShoppingBag className="text-green-600" size={40} />}
              title="For Consumers"
              description="Discover and buy fresh, local agricultural products directly from producers in your region."
            />
            <ServiceCard 
              icon={<Tractor className="text-green-600" size={40} />}
              title="For Suppliers"
              description="Sell your products online and purchase agricultural supplies at the best market prices."
            />
            <ServiceCard 
              icon={<MapPin className="text-green-600" size={40} />}
              title="Local Commerce"
              description="Advanced geolocation to find products near you and support the local economy."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">How AgriWie Works</h2>
              <div className="space-y-8">
                <Step number="1" title="Sign Up" text="Create your account as a supplier or customer in seconds." />
                <Step number="2" title="Browse" text="Explore our catalog of fresh products or agricultural supplies." />
                <Step number="3" title="Order" text="Add items to your cart and complete your purchase securely." />
                <Step number="4" title="Receive" text="Pick up your products or have them delivered to your doorstep." />
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="premium-card p-10 max-w-sm">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="font-bold text-xl">Order Verified</span>
                   </div>
                   <div className="space-y-4">
                      <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                   </div>
                   <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                      <span className="font-bold text-2xl text-primary">15.5 TND</span>
                      <button className="bg-primary text-white p-2 rounded-lg">Track</button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">AgriWie</h3>
            <p className="text-gray-400">The platform revolutionizing agricultural commerce by connecting producers and consumers.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-green-400">Products</Link></li>
              <li><Link to="/" className="hover:text-green-400">Supplies</Link></li>
              <li><Link to="/" className="hover:text-green-400">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-green-400">Terms</Link></li>
              <li><Link to="/" className="hover:text-green-400">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>contact@agriwie.com</li>
              <li>+216 71 123 456</li>
              <li>Tunis, Tunisia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          <p>© 2025 AgriWie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="premium-card p-8 text-center hover:shadow-2xl transition-all duration-300"
  >
    <div className="mb-6 flex justify-center">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const Step = ({ number, title, text }) => (
  <div className="flex gap-6 items-start">
    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 text-lg shadow-md">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-500">{text}</p>
    </div>
  </div>
);

export default Home;
