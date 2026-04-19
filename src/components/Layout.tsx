import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AIAssistant } from './AIAssistant';
import { motion } from 'motion/react';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 relative">
        <Outlet />
      </main>
      <Footer />
      <AIAssistant />
      
      {/* Visual background details */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] border border-primary rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[60vw] h-[60vw] border border-accent rounded-full" />
      </div>
    </div>
  );
};
