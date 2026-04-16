import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Heart, MapPin, Star } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to static data for demo if needed
        setProducts([
            { id: '1', name: 'Organic Tomatoes', price: 2.50, unit: 'kg', seller: 'Ahmed Ben Ali', location: 'Nabeul', category: 'Vegetables', rating: 4.8, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400' },
            { id: '2', name: 'Pure Olive Oil', price: 22.00, unit: 'L', seller: 'Fatma Mansour', location: 'Sfax', category: 'Oils', rating: 4.9, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400' },
            { id: '3', name: 'Farm Eggs', price: 1.20, unit: 'unit', seller: 'Mohamed Trad', location: 'Bizerte', category: 'Animal Products', rating: 4.7, image: 'https://images.unsplash.com/photo-1582722872445-44c5027d6ffb?auto=format&fit=crop&q=80&w=400' },
            { id: '4', name: 'Whole Wheat', price: 3.50, unit: 'kg', seller: 'Salem Kouki', location: 'Beja', category: 'Crops', rating: 4.6, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (category === 'all' || p.category === category)
  );

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search fresh products, farmers, or supplies..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
          />
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm font-bold text-gray-700 hover:bg-gray-50">
             <Filter size={20} /> Filters
           </button>
           <select 
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             className="px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm font-bold text-gray-700 outline-none hover:bg-gray-50 appearance-none"
           >
             <option value="all">All Categories</option>
             <option value="Vegetables">Vegetables</option>
             <option value="Fruits">Fruits</option>
             <option value="Oils">Oils</option>
             <option value="Animal Products">Animal Products</option>
             <option value="Supplies">Supplies</option>
           </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="premium-card group bg-white overflow-hidden border border-gray-100"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
        <Heart size={20} />
      </button>
      <div className="absolute bottom-4 left-4">
        <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white rounded-lg text-xs font-bold uppercase tracking-wider">
          {product.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
          <Star size={14} fill="currentColor" /> {product.rating}
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
        <MapPin size={14} /> {product.location} • <span className="font-medium">{product.seller}</span>
      </div>
      
      <div className="flex justify-between items-center mt-auto">
        <div>
          <span className="text-2xl font-bold text-gray-900">{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 font-medium ml-1">TND / {product.unit}</span>
        </div>
        <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  </motion.div>
);

export default Products;
