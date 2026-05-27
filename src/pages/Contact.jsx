import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Plus,
  Minus,
  CheckCircle,
  FileCheck,
  Send,
  Building,
  User,
  HelpCircle,
} from "lucide-react";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mode: "ocean",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState("");

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What documentation is required to initiate an import shipment?",
      a: "Typically, you will need a Commercial Invoice, Packing List, Bill of Lading (for sea freight) or Air Waybill (for air cargo), and a Certificate of Origin. Additional permits may be required depending on product classifications (e.g. agricultural goods, electronics, chemicals).",
    },
    {
      q: "How are import duty tariffs calculated?",
      a: "Duties are determined based on the Harmonized System (HS) code classification of your goods, the country of origin, and the declared transactional value (FOB or CIF terms). Our customs brokerage team can perform an audit to determine the precise rates.",
    },
    {
      q: "Do you support refrigerated and climate-controlled shipping containers?",
      a: "Yes. We offer fully integrated cold-chain shipping container (Reefer) logistics for perishables, pharmaceuticals, and chemical compounds, complete with active temperature and humidity sensor telemetry.",
    },
    {
      q: "What is your typical turnaround time for customs clearance audits?",
      a: "For standard shipments with fully prepared document packets, port clearance is generally achieved within 24 to 48 hours. Priority air shipments can often be processed in under 12 hours via pre-clearance filings.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error on write
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
    if (!formData.message.trim())
      tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API submit and generate quote reference
      const randomRef = "ZG-" + Math.floor(100000 + Math.random() * 900000);
      setQuoteRef(randomRef);
      setSubmitted(true);
    }
  };

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const offices = [
    {
      city: "Rajkot Hub",
      address: "Kalawad road, Near KKV chowk, Rajkot 360005, India",
      phone: "+91 74051 11108",
      email: "amargloballlp@gmail.com",
      hours: "09:00 - 18:00 (IST)",
    },
    {
      city: "Dubai Hub",
      address:
        "Bussiness Center 1, M Floor, Nad AI Sheba, Dubai, United Arab Emirates",
      phone: "+91 63534 60565",
      email: "amargloballlp@gmail.com",
      hours: "09:00 - 18:00 (GST)",
    },
  ];

  return (
    <div className="relative">
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-950/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
              Global Operations Center
            </h1>
            <p className="text-slate-350 text-base leading-relaxed">
              Connect with our logistics coordinators, compliance auditors, and
              container booking agents to coordinate your next movement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="py-12 relative bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Info + Office Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Our Regional Headquarters
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We maintain strategic control offices located at critical
                  maritime junctions and shipping hubs to expedite port
                  releases.
                </p>
              </div>

              {/* Office Grid */}
              <div className="space-y-4">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-2xl border-slate-800/40 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-950/10 rounded-full blur-[40px] pointer-events-none" />

                    <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <Building className="w-4 h-4 text-primary-500" />
                      {office.city}
                    </h3>

                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-650 shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-slate-650 shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-650 shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-primary-400 transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-primary-400/80 pt-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>Active Hours: {office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 rounded-3xl border-slate-800/40 shadow-2xl relative min-h-[500px]">
                {submitted ? (
                  /* Success State Overlay */
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-navy-950/95 backdrop-blur-md rounded-3xl space-y-6 animate-fade-in z-25">
                    <div className="w-16 h-16 rounded-full bg-primary-950/60 border border-primary-500/30 text-primary-400 flex items-center justify-center mb-2 shadow-lg shadow-primary-500/10">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>

                    <div className="space-y-2 max-w-md">
                      <h3 className="text-2xl font-bold text-white">
                        Freight Request Logged
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Your
                        routing inquiry has been assigned to our hub logistics
                        coordinator.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-navy-900 border border-slate-850 w-full max-w-sm text-left text-xs space-y-2 text-slate-450">
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-bold">
                          Quote Ref:
                        </span>{" "}
                        <span className="font-mono text-white font-bold">
                          {quoteRef}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-bold">
                          Inquiry Mode:
                        </span>{" "}
                        <span className="text-white uppercase font-bold">
                          {formData.mode} Freight
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-bold">
                          Est. Response:
                        </span>{" "}
                        <span className="text-primary-400 font-semibold flex items-center gap-1">
                          <FileCheck className="w-3.5 h-3.5" /> Under 2 Hours
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
                          phone: "",
                          mode: "ocean",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-350 hover:text-white rounded-xl text-xs font-semibold transition-all border border-slate-800"
                    >
                      Log another inquiry
                    </button>
                  </div>
                ) : null}

                {/* Main Contact Form */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Route Coordination Request
                    </h3>
                    <p className="text-xs text-slate-500">
                      Provide shipping coordinates to receive a rate proposal.
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
                          <User className="w-4 h-4 text-slate-500 m-2 shrink-0" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
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
                          <Building className="w-4 h-4 text-slate-500 m-2 shrink-0" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Nexus Imports Ltd."
                            className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Corporate Email *
                        </label>
                        <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                          <Mail className="w-4 h-4 text-slate-500 m-2 shrink-0" />
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="johndoe@company.com"
                            className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Phone Number
                        </label>
                        <div className="flex rounded-xl bg-navy-950 border border-slate-800 focus-within:border-primary-500/30 p-1.5 transition-colors">
                          <Phone className="w-4 h-4 text-slate-500 m-2 shrink-0" />
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 019-2834"
                            className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Mode selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Primary Logistic Mode
                      </label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleInputChange}
                        className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3.5 text-slate-250 text-sm outline-none focus:border-primary-500/30"
                      >
                        <option value="ocean">
                          Ocean Container (FCL / LCL)
                        </option>
                        <option value="air">Priority Air Cargo</option>
                        <option value="road">Overland Rail & Road</option>
                        <option value="customs">
                          Customs Clearance & HS Tariff Consult
                        </option>
                      </select>
                    </div>

                    {/* Details Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Routing Details & Cargo Weight *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Please include approximate dimensions, shipping weight, origin, destination and desired delivery timeframe..."
                        className="w-full bg-navy-950 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm outline-none focus:border-primary-500/30 resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-primary-600 to-green-500 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-green-400 transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2 group"
                      >
                        Submit Route Inquiry
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="py-24 relative overflow-hidden bg-navy-900/35 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <HelpCircle className="w-10 h-10 text-primary-400 mx-auto animate-pulse-slow" />
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">
              Inquiries FAQ
            </h2>
            <h3 className="text-3xl font-extrabold text-white">
              Customs & Shipping Assistance
            </h3>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border-slate-800/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-900/40 transition-colors"
                  >
                    <span className="font-semibold text-slate-100 pr-4 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className="shrink-0 p-1 rounded-lg bg-navy-950 text-slate-400 border border-slate-850">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-60 border-t border-slate-850" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-slate-400 text-sm leading-relaxed bg-navy-950/20">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
