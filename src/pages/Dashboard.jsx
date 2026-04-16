import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Package, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Plus, 
  Search,
  Filter,
  ArrowUpRight,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const { userData, isSupplier } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Welcome back, <span className="gradient-text">{userData?.prenom || 'User'}</span>!
          </h1>
          <p className="text-gray-500 font-medium">
            Here's what's happening with your {isSupplier ? 'business' : 'orders'} today.
          </p>
        </div>
        <div className="flex gap-3">
          {isSupplier && (
            <button className="btn-primary shadow-lg shadow-primary/20">
              <Plus size={18} /> Add Product
            </button>
          )}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none w-full md:w-64"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          icon={<Package className="text-blue-600" />} 
          label={isSupplier ? 'Active Listings' : 'Total Orders'} 
          value={isSupplier ? '24' : '12'} 
          change="+3%"
          color="blue"
        />
        <StatCard 
          icon={<ShoppingBag className="text-emerald-600" />} 
          label={isSupplier ? 'Sales' : 'Total Spent'} 
          value={isSupplier ? '1,240 TND' : '450 TND'} 
          change="+12%"
          color="emerald"
        />
        <StatCard 
          icon={<Clock className="text-amber-600" />} 
          label="Pending" 
          value="3" 
          change="0"
          color="amber"
        />
        <StatCard 
          icon={<TrendingUp className="text-violet-600" />} 
          label="Growth" 
          value="18%" 
          change="+5%"
          color="violet"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="premium-card bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 size={20} className="text-primary" />
                {isSupplier ? 'Recent Sales' : 'Your Recent Orders'}
              </h2>
              <button className="text-primary font-bold text-sm hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Organic Tomatoes</h4>
                      <p className="text-xs text-gray-500 font-medium">Order #WD-45{i} • Today, 10:45 AM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">45.00 TND</p>
                    <span className="text-[10px] px-2 py-1 bg-green-100 text-green-700 rounded-full font-bold uppercase tracking-wider">Completed</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Side Panels */}
        <div className="space-y-6">
           {/* Summary Panel */}
           <div className="premium-card bg-primary text-white p-8 relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-xl font-bold mb-2">Current Balance</h3>
               <div className="text-4xl font-bold mb-6">458.00 <span className="text-lg opacity-80">TND</span></div>
               <button className="w-full py-3 bg-white text-primary rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg">
                 Withdraw Funds <ArrowUpRight size={18} />
               </button>
             </div>
             {/* Abstract Circles for decoration */}
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
           </div>

           {/* Quick Actions */}
           <div className="premium-card bg-white p-6">
             <h3 className="font-bold mb-4">Quick Actions</h3>
             <div className="grid grid-cols-2 gap-3">
                <QuickAction icon={<Package size={20} />} label="Products" />
                <QuickAction icon={<Users size={20} />} label="Customers" />
                <QuickAction icon={<TrendingUp size={20} />} label="Insights" />
                <QuickAction icon={<Filter size={20} />} label="Reports" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, change, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="premium-card p-6 bg-white"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}-50`}>
        {icon}
      </div>
      {change !== '0' && (
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
          {change}
        </span>
      )}
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-500 font-medium">{label}</div>
  </motion.div>
);

const QuickAction = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-primary/5 hover:text-primary transition-all group">
    <div className="text-gray-400 group-hover:text-primary transition-colors">
      {icon}
    </div>
    <span className="text-xs font-bold">{label}</span>
  </button>
);

export default Dashboard;
