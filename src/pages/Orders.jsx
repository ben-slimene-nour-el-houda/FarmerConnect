import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle2, Truck, AlertCircle, ChevronRight } from 'lucide-react';

const Orders = () => {
  const { userData, isSupplier } = useAuth();

  const mockOrders = [
    { id: 'ORD-12345', date: '2026-04-16', total: 45.00, status: 'delivering', items: 3 },
    { id: 'ORD-12344', date: '2026-04-15', total: 12.50, status: 'completed', items: 1 },
    { id: 'ORD-12343', date: '2026-04-14', total: 88.00, status: 'pending', items: 5 },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'delivering': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} />;
      case 'delivering': return <Truck size={16} />;
      case 'pending': return <Clock size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {isSupplier ? 'Manage Sales' : 'Your Orders'}
        </h1>
        <p className="text-gray-500 font-medium">
          {isSupplier ? 'Track and manage your agricultural product sales.' : 'Track your fresh produce and supply orders.'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mockOrders.map((order, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={order.id}
            className="premium-card bg-white p-6 md:p-8 hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                  <Package size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{order.id}</h3>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(order.status)} uppercase tracking-wider`}>
                      {getStatusIcon(order.status)} {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-4">Ordered on {order.date} • {order.items} items</p>
                  <div className="flex gap-2">
                     <button className="text-sm font-bold text-primary hover:underline">View Details</button>
                     <span className="text-gray-300">|</span>
                     <button className="text-sm font-bold text-gray-500 hover:text-gray-700">Track Order</button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col justify-between items-end md:text-right border-t md:border-t-0 pt-4 md:pt-0">
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1 uppercase tracking-widest">Total Amount</p>
                  <p className="text-3xl font-bold text-gray-900">{order.total.toFixed(2)} <span className="text-sm text-gray-500">TND</span></p>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
