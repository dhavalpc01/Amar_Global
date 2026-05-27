import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import AmarLogo from "../assets/amarLogo.jpeg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-navy-900 border-t border-slate-800/60 overflow-hidden pt-20 pb-10">
      {/* Decorative radial blur background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl text-white shadow-md shadow-primary-500/20">
              {/* <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-green-400 text-white shadow-md shadow-primary-500/20"> */}
                {/* <Globe className="w-5 h-5" /> */}
                <img
                  src={AmarLogo}
                  alt="Amar Global Logo"
                  className="w-10 h-10 animate-pulse-slow rounded-xl"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AMAR
                <span className="text-primary-500 font-light">GLOBAL</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Navigating global commerce with precision. Connecting
              international markets through safe, fast, and compliant maritime,
              air, and overland logistic lanes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-navy-950 border border-slate-850 hover:border-primary-500/50 text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-navy-950 border border-slate-850 hover:border-primary-500/50 text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-navy-950 border border-slate-850 hover:border-primary-500/50 text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              <li>
                <NavLink
                  to="/"
                  className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 mr-2 transition-colors" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 mr-2 transition-colors" />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 mr-2 transition-colors" />
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-primary-400 text-sm transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 mr-2 transition-colors" />
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Headquarters
            </h3>
            <div className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
              <span>
                Kalawad road, Near KKV,
                <br />
                chowk Rajkot 360005,
                <br />
                India
              </span>
            </div>
            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <Phone className="w-4 h-4 text-primary-500 shrink-0" />
              <span>+91 74051 11108</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-400 text-sm">
              <Mail className="w-4 h-4 text-primary-500 shrink-0" />
              <a
                href="mailto:info@Amarglobal.com"
                className="hover:text-primary-400 transition-colors"
              >
                amargloballlp@gmail.com
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">
                Newsletter
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Subscribe to our global trade bulletin for insights on customs,
                shipping lanes, and tariff alerts.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex rounded-xl overflow-hidden bg-navy-950 border border-slate-800 focus-within:border-primary-500/50 p-1">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 outline-none text-slate-200 placeholder-slate-500 text-sm px-3 py-2 focus:ring-0"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-green-500 text-white rounded-lg px-4 flex items-center justify-center hover:from-primary-500 hover:to-green-400 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
            {isSubscribed && (
              <p className="text-xs text-primary-400 animate-fade-in font-medium">
                ✓ Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/40 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Amar Global Trade. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-slate-350 transition-colors flex items-center"
            >
              Terms & Conditions{" "}
              <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
            <a
              href="#"
              className="hover:text-slate-350 transition-colors flex items-center"
            >
              Privacy Policy{" "}
              <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
            <a
              href="#"
              className="hover:text-slate-350 transition-colors flex items-center"
            >
              Customs Compliance{" "}
              <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
