import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../services/firebase';
import { LogOut, User, ShoppingCart, Home } from 'lucide-react';

const Navbar = () => {
  const { user, userData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="glass-nav px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🌾</span>
        <span className="text-xl font-bold gradient-text">AgriWie</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 font-medium">
          <Home size={18} /> Home
        </Link>
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-1 font-medium">
              <User size={18} /> Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <LogOut size={18} /> Logout
            </button>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md border-2 border-white">
              {userData?.prenom?.charAt(0) || user.email?.charAt(0).toUpperCase()}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link to="/login" className="px-5 py-2 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors">
              Login
            </Link>
            <Link to="/login?mode=signup" className="btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
