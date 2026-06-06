import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { productsData } from "../data/products";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Layers,
  FileCheck,
  CheckCircle,
  Clock,
  Building,
  Mail,
  Send,
  Scale,
  Box,
  TrendingUp,
  FileText,
} from "lucide-react";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    quantity: "",
    destPort: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState("");
  useEffect(() => {
    // Look up product by parameter id
    const foundProduct = productsData.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Pre-fill message with inquiry details
      setFormData((prev) => ({
        ...prev,
        message: `Hello, we would like to request a rate proposal and compliance audit for "${foundProduct.name}" (MOQ: ${foundProduct.moq}). Please include port-to-port shipping costs and custom clearance estimations.`,
      }));
    }
  }, [id]);
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-navy-950">
        <div className="text-center py-20 glass-panel rounded-3xl max-w-md mx-auto border-slate-850 px-6">
          <Layers className="w-12 h-12 text-slate-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-lg font-bold text-white mb-2">
            Product Profile Not Found
          </h3>
          <p className="text-slate-450 text-sm leading-relaxed mb-6">
            The requested commodity profile might have been archived or moved.
          </p>
          <NavLink
            to="/products"
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-xs font-semibold rounded-xl transition-all inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Catalog
          </NavLink>
        </div>
      </div>
    );
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }
    if (!formData.quantity.trim())
      tempErrors.quantity = "Target quantity is required";
    if (!formData.message.trim())
      tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const randomRef = "PI-" + Math.floor(100000 + Math.random() * 900000);
      setInquiryRef(randomRef);
      setSubmitted(true);
    }
  };
  return (
    <div className="relative">
      {/* Breadcrumb Header */}
      <section className="py-6 border-b border-slate-900 bg-navy-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <NavLink
              to="/"
              className="hover:text-primary-400 transition-colors"
            >
              Home
            </NavLink>
            <ChevronRight className="w-3.5 h-3.5" />
            <NavLink
              to="/products"
              className="hover:text-primary-400 transition-colors"
            >
              Products
            </NavLink>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-400 uppercase tracking-wider">
              {product.category}
            </span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </div>
      </section>
      {/* Main Grid Product Details */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left: Product Images & Core Quick stats */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card Container */}
              <div className="glass-panel p-4 rounded-3xl border-slate-800/40 bg-navy-900/40 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-950/15 rounded-full blur-[60px] pointer-events-none" />

                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-navy-950 border border-slate-850 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              {/* Shipping Logistics Summary */}
              <div className="glass-panel p-6 rounded-2xl border-slate-800/40 bg-navy-900/20 text-slate-400 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-primary-500" />
                  Trade Lane Logistics
                </h4>

                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center py-2 border-b border-slate-850/40">
                    <span className="text-slate-500">Origin Export Port</span>
                    <strong className="text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary-500" />
                      {product.ports}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-850/40">
                    <span className="text-slate-500">Document Auditing</span>
                    <strong className="text-primary-400 flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5" />
                      Fully Compliant
                    </strong>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500">
                      Port Custom Clearance
                    </span>
                    <strong className="text-white flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary-500" />
                      24-48 Hours average
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Spec details, Description and Form */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-950 border border-primary-550/20 text-[10px] font-bold text-primary-400 uppercase tracking-widest">
                    {product.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {product.subcategory}
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h2>
                <p className="text-slate-350 text-sm leading-relaxed">
                  {product.desc}
                </p>
              </div>
              {/* Technical Specifications Grid */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary-500" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div
                      key={key}
                      className="glass-panel p-4 rounded-xl border-slate-850/40 bg-navy-900/30 flex items-start justify-between"
                    >
                      <span className="text-xs text-slate-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <strong className="text-xs text-white max-w-[65%] text-right font-medium">
                        {val}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
              {/* MOQ Alert banner */}
              <div className="p-4 rounded-2xl bg-primary-950/20 border border-primary-500/20 flex items-center space-x-3 text-xs text-primary-400">
                <Box className="w-5 h-5 text-primary-500 shrink-0" />
                <span>
                  Minimum Order Quantity (MOQ) is <strong>{product.moq}</strong>
                  . Export grade certified for standard custom tariff
                  guidelines.
                </span>
              </div>
            </div>
          </div>
          {/* Form Block section */}
          <div className="border-t border-slate-850 pt-16 max-w-4xl mx-auto">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-slate-800/40 bg-navy-900/60 shadow-2xl relative">
              {submitted ? (
                /* Success State overlay */
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-navy-950/95 backdrop-blur-md rounded-3xl space-y-6 animate-fade-in z-25">
                  <div className="w-16 h-16 rounded-full bg-primary-950/60 border border-primary-500/30 text-primary-400 flex items-center justify-center mb-2 shadow-lg shadow-primary-500/10">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="text-2xl font-bold text-white">
                      Product Inquiry Submitted
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Thank you for contacting our logistics desk. Your inquiry
                      for <strong>{product.name}</strong> has been logged.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900 border border-slate-850 w-full max-w-sm text-left text-xs space-y-2 text-slate-450">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">
                        Inquiry Ref:
                      </span>{" "}
                      <span className="font-mono text-white font-bold">
                        {inquiryRef}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">
                        Target Product:
                      </span>{" "}
                      <span className="text-white font-medium">
                        {product.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">
                        Est. Reply Time:
                      </span>{" "}
                      <span className="text-primary-400 font-semibold">
                        Under 2 Hours
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        quantity: "",
                        destPort: "",
                        message: `Hello, we would like to request a rate proposal and compliance audit for "${product.name}" (MOQ: ${product.moq}).`,
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-350 hover:text-white rounded-xl text-xs font-semibold transition-all border border-slate-800"
                  >
                    Reset Form
                  </button>
                </div>
              ) : null}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Request Port-to-Port Quote
                  </h3>
                  <p className="text-xs text-slate-500">
                    Provide shipment requirements below. Our customs brokers
                    will reply with detailed rate tables.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0 px-2"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Company Name
                      </label>
                      <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nexus Imports Ltd."
                          className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0 px-2"
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@company.com"
                          className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0 px-2"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    {/* Target Quantity */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Target Quantity *
                      </label>
                      <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder={product.moq}
                          className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0 px-2"
                        />
                      </div>
                      {errors.quantity && (
                        <p className="text-red-400 text-xs mt-1 font-medium">
                          {errors.quantity}
                        </p>
                      )}
                    </div>
                    {/* Destination Port */}
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Target Destination Port
                      </label>
                      <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                        <input
                          type="text"
                          name="destPort"
                          value={formData.destPort}
                          onChange={handleInputChange}
                          placeholder="Port of Rotterdam, Port of LAX, etc..."
                          className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0 px-2"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Inquiry Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm outline-none focus:border-primary-500/30 resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-primary-600 to-green-500 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-green-400 transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 group"
                    >
                      Submit Booking Proposal
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
