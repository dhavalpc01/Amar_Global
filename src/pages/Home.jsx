import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Anchor, 
  Plane, 
  Truck, 
  FileText, 
  ArrowRight, 
  Globe2, 
  Activity, 
  Award, 
  Compass, 
  ChevronLeft, 
  ChevronRight,
  Calculator,
  Container,
  Box,
  Scale
} from 'lucide-react';

export default function Home() {
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Interactive Cargo Calculator State
  const [calcType, setCalcType] = useState('air'); // 'air', 'ocean', 'road'
  const [weight, setWeight] = useState(150); // in kg
  const [length, setLength] = useState(120); // in cm
  const [width, setWidth] = useState(80); // in cm
  const [height, setHeight] = useState(80); // in cm
  const [cargoClass, setCargoClass] = useState(null);

  // Map route states
  const [hoveredRoute, setHoveredRoute] = useState(null);

  const testimonials = [
    {
      quote: "Zephyr Global Trade transformed our electronics supply chain. Their custom clearance speeds in Singapore cut our lead times by 35%. Highly recommended for high-value freight.",
      author: "Marcus Vance",
      role: "VP of Logistics, Nexus Electro Ltd.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "We ship hundreds of cold-chain agricultural goods weekly. Zephyr's temperature-monitored ocean container service has maintained a perfect 100% integrity record over 2 years.",
      author: "Elena Rostova",
      role: "Operations Director, AgroUnion Europe",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "Exceptional transparency and real-time updates. Their customs compliance team saved us from significant tariff penalties in North America with their proactive tariff audits.",
      author: "David Chen",
      role: "Supply Chain Manager, Apex Automotive Global",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate volumetric weight based on industry standard factors
  // Air: (L * W * H) / 5000 = kg
  // Ocean: (L * W * H) / 1000000 = CBM (Cubic Meters)
  // Road: (L * W * H) / 3000 = kg
  const calculateCargo = () => {
    const volumeCm = length * width * height;
    const cbm = (volumeCm / 1000000).toFixed(3);
    
    let volWeight = 0;
    let factor = 0;
    
    if (calcType === 'air') {
      volWeight = Math.round(volumeCm / 5000);
      factor = 5000;
    } else if (calcType === 'road') {
      volWeight = Math.round(volumeCm / 3000);
      factor = 3000;
    } else {
      // Ocean CBM based
      volWeight = Math.round(volumeCm / 1000); // 1 CBM roughly = 1000kg volumetric factor
      factor = 1000;
    }

    const chargeableWeight = Math.max(weight, volWeight);
    return { cbm, volWeight, chargeableWeight };
  };

  const calcResults = calculateCargo();

  const routes = [
    { id: 1, name: "Asia - Europe Express", origin: "Singapore (SIN)", dest: "Rotterdam (RTM)", eta: "18 Days (Ocean)", cost: "Premium Eco", coordinates: { x1: 520, y1: 270, x2: 300, y2: 120 } },
    { id: 2, name: "Transpacific Air Corridor", origin: "Shanghai (PVG)", dest: "Los Angeles (LAX)", eta: "14 Hours (Air)", cost: "Priority", coordinates: { x1: 560, y1: 180, x2: 110, y2: 160 } },
    { id: 3, name: "Transatlantic Trade Highway", origin: "Rotterdam (RTM)", dest: "New York (JFK)", eta: "8 Days (Ocean)", cost: "Standard", coordinates: { x1: 300, y1: 120, x2: 170, y2: 140 } }
  ];

  return (
    <div className="relative">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-grid-pattern pt-12 overflow-hidden">
        {/* Glowing backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-950/15 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel border-primary-500/20 text-xs font-semibold tracking-wider text-primary-400 uppercase animate-fade-in">
                <Activity className="w-3.5 h-3.5 text-primary-500 animate-pulse" />
                <span>Global Freight Network Active</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] animate-slide-up">
                <span className="text-gradient">Navigating Global</span> <br />
                <span className="text-gradient-primary">Trade Pathways</span>
              </h1>
              
              <p className="text-slate-350 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up-delayed">
                Simplifying import & export logistics. Zephyr Global provides glassmorphic transparency, compliance management, and fast customs clearance across six continents.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-slide-up-delayed-2">
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-green-500 text-white rounded-xl font-medium hover:from-primary-500 hover:to-green-400 transition-all transform hover:scale-[1.03] shadow-lg shadow-primary-500/20 text-center flex items-center justify-center gap-2 group"
                >
                  Book a Shipment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 glass-panel glass-panel-hover text-slate-250 hover:text-white rounded-xl font-medium border-slate-800 text-center"
                >
                  Explore Our Reach
                </NavLink>
              </div>

              {/* Stats Mini Grid */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-slate-800/40">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">1.2M+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Tons Shipped</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">142</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">Global Hubs</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">99.8%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">On-Time Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Right: Modern Isometric Container Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[450px] aspect-square rounded-3xl glass-panel p-6 border-slate-800/40 overflow-hidden shadow-2xl shadow-navy-950">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/20 via-transparent to-transparent pointer-events-none" />
                
                {/* SVG Visual Elements */}
                <svg className="w-full h-full text-slate-800" viewBox="0 0 400 400" fill="none">
                  {/* Grid Lines */}
                  <g className="opacity-10">
                    <path d="M 0 50 H 400 M 0 100 H 400 M 0 150 H 400 M 0 200 H 400 M 0 250 H 400 M 0 300 H 400 M 0 350 H 400" stroke="currentColor" strokeWidth="1" />
                    <path d="M 50 0 V 400 M 100 0 V 400 M 150 0 V 400 M 200 0 V 400 M 250 0 V 400 M 300 0 V 400 M 350 0 V 400" stroke="currentColor" strokeWidth="1" />
                  </g>
                  
                  {/* Global Grid sphere outline */}
                  <circle cx="200" cy="200" r="140" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
                  <ellipse cx="200" cy="200" rx="140" ry="50" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                  <ellipse cx="200" cy="200" rx="50" ry="140" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
                  
                  {/* Interactive Connecting Points */}
                  <path d="M 120 160 Q 200 80 280 160" stroke="#10B981" strokeWidth="2.5" fill="none" className="map-route-line" />
                  <path d="M 100 240 Q 200 320 300 240" stroke="#059669" strokeWidth="2.5" fill="none" className="map-route-line" />
                  <path d="M 80 180 Q 200 180 320 220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                  
                  {/* Nodes */}
                  <circle cx="120" cy="160" r="6" fill="#10B981" className="animate-ping" style={{ transformOrigin: '120px 160px', animationDuration: '3s' }} />
                  <circle cx="120" cy="160" r="4" fill="#10B981" />
                  <circle cx="280" cy="160" r="6" fill="#10B981" className="animate-ping" style={{ transformOrigin: '280px 160px', animationDuration: '2.5s' }} />
                  <circle cx="280" cy="160" r="4" fill="#10B981" />
                  
                  <circle cx="100" cy="240" r="4" fill="#059669" />
                  <circle cx="300" cy="240" r="4" fill="#059669" />
                </svg>

                {/* Overlay Dashboard Widgets */}
                <div className="absolute top-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/5 flex items-center space-x-3 shadow-lg">
                  <div className="p-2.5 rounded-xl bg-primary-650/10 text-primary-400 border border-primary-500/20">
                    <Compass className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Cargo Tracking</div>
                    <div className="text-sm font-semibold text-white">Route ZG-903 Connected</div>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                </div>

                <div className="absolute bottom-6 left-6 p-4 rounded-xl glass-panel border-white/5 flex items-center space-x-2 text-xs font-semibold text-slate-350">
                  <Anchor className="w-4 h-4 text-primary-500" />
                  <span>S.S. Vanguard Cargo</span>
                </div>

                <div className="absolute bottom-6 right-6 p-4 rounded-xl glass-panel border-white/5 flex items-center space-x-2 text-xs font-semibold text-slate-350">
                  <Plane className="w-4 h-4 text-primary-500" />
                  <span>Flight Z610 ETA 02:40</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 relative overflow-hidden bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Global Freight Modes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              End-to-End Import & Export Services
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We leverage custom multi-modal cargo lanes to deliver high efficiency, ensuring full custom-house compliance and safety at every turn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Ocean Freight Card */}
            <div className="glass-panel glass-panel-hover p-8 rounded-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ocean Freight</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                FCL and LCL shipping container services across global shipping canals. Temp-monitored refrigerated solutions.
              </p>
              <NavLink to="/contact" className="text-primary-450 text-xs font-semibold flex items-center group-hover:text-primary-350 transition-colors">
                Book Lane <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>

            {/* Air Freight Card */}
            <div className="glass-panel glass-panel-hover p-8 rounded-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Air Cargo</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Next-flight out capabilities, cargo consolidation hubs, charter options, and priority airport handling worldwide.
              </p>
              <NavLink to="/contact" className="text-primary-450 text-xs font-semibold flex items-center group-hover:text-primary-350 transition-colors">
                Book Flight <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>

            {/* Overland Logistics Card */}
            <div className="glass-panel glass-panel-hover p-8 rounded-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Overland Route</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Cross-border trucking, dry vans, flatbeds, and rail freight intermodal services backed by real-time GPS tracking.
              </p>
              <NavLink to="/contact" className="text-primary-450 text-xs font-semibold flex items-center group-hover:text-primary-350 transition-colors">
                Book Land <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>

            {/* Custom Brokerage Card */}
            <div className="glass-panel glass-panel-hover p-8 rounded-2xl relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Clearance</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                HS Code classifications, import licenses, tax duties calculations, customs bonds, and post-clearance audits.
              </p>
              <NavLink to="/contact" className="text-primary-450 text-xs font-semibold flex items-center group-hover:text-primary-350 transition-colors">
                Consult Team <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GLOBAL TRADE LANES */}
      <section className="py-24 relative overflow-hidden bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Interactive Network Map</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Primary Trade Routes
              </h3>
              <p className="text-slate-450 text-sm leading-relaxed">
                Zephyr Global operates scheduled transport routes along major shipping corridors. Hover over the nodes on the map or click active routes to check real-time details and transit averages.
              </p>
              
              {/* Route Details Card based on Hover */}
              <div className="p-5 rounded-2xl glass-panel border-white/5 min-h-[140px] flex flex-col justify-center">
                {hoveredRoute ? (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">{hoveredRoute.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-950 text-primary-400 border border-primary-500/20 text-[10px]">{hoveredRoute.cost}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-350">
                      <div><span className="text-slate-500 text-xs block">Origin Hub</span>{hoveredRoute.origin}</div>
                      <div><span className="text-slate-500 text-xs block">Destination Hub</span>{hoveredRoute.dest}</div>
                    </div>
                    <div className="text-xs text-slate-400 pt-2 border-t border-slate-800 flex justify-between">
                      <span>Est. Transit: <strong className="text-white">{hoveredRoute.eta}</strong></span>
                      <NavLink to="/contact" className="text-primary-400 flex items-center hover:underline">Book lane <ArrowRight className="w-3 h-3 ml-0.5" /></NavLink>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 text-sm py-4">
                    <Globe2 className="w-8 h-8 mx-auto mb-2 text-slate-650 opacity-50 animate-pulse" />
                    <span>Hover over any route map node or list below</span>
                  </div>
                )}
              </div>

              {/* List representation of routes for accessibility / touch screens */}
              <div className="space-y-3 pt-2">
                {routes.map((route) => (
                  <button
                    key={route.id}
                    onMouseEnter={() => setHoveredRoute(route)}
                    onClick={() => setHoveredRoute(route)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      hoveredRoute?.id === route.id
                        ? 'bg-primary-950/20 border-primary-500/40 text-white'
                        : 'bg-navy-900/40 border-slate-800/40 text-slate-400 hover:bg-navy-900/60'
                    }`}
                  >
                    <span className="text-sm font-semibold">{route.name}</span>
                    <span className="text-xs opacity-80">{route.eta}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side map visualization (Custom SVG Map outline) */}
            <div className="lg:col-span-7 flex justify-center relative">
              <div className="w-full aspect-[640/320] glass-panel rounded-3xl p-4 border-slate-800/40 bg-navy-900/20 overflow-hidden relative shadow-inner">
                {/* World map stylized outline representing continents */}
                <svg className="w-full h-full text-slate-800/40" viewBox="0 0 640 320" fill="none">
                  {/* Continental rough paths (schematic styling) */}
                  {/* North America */}
                  <path d="M 60 70 L 140 70 L 180 120 L 180 160 L 140 180 L 120 180 L 100 220 L 70 190 Z" fill="currentColor" opacity="0.3" />
                  {/* South America */}
                  <path d="M 130 190 L 170 190 L 210 240 L 190 300 L 160 300 L 140 230 Z" fill="currentColor" opacity="0.3" />
                  {/* Europe */}
                  <path d="M 270 60 L 330 60 L 340 110 L 300 130 L 280 110 L 260 100 Z" fill="currentColor" opacity="0.3" />
                  {/* Africa */}
                  <path d="M 270 130 L 310 130 L 350 180 L 360 250 L 330 270 L 310 200 L 280 170 Z" fill="currentColor" opacity="0.3" />
                  {/* Asia */}
                  <path d="M 340 60 L 520 60 L 560 120 L 560 210 L 480 220 L 460 200 L 420 200 L 380 150 L 350 120 Z" fill="currentColor" opacity="0.3" />
                  {/* Australia */}
                  <path d="M 500 240 L 560 240 L 570 290 L 530 295 L 490 270 Z" fill="currentColor" opacity="0.3" />
                  
                  {/* Connective Paths */}
                  {routes.map((route) => {
                    const isHovered = hoveredRoute?.id === route.id;
                    return (
                      <g key={route.id}>
                        {/* Interactive path line */}
                        <path
                          d={`M ${route.coordinates.x1} ${route.coordinates.y1} Q ${(route.coordinates.x1 + route.coordinates.x2)/2} ${(route.coordinates.y1 + route.coordinates.y2)/2 - 40} ${route.coordinates.x2} ${route.coordinates.y2}`}
                          stroke={isHovered ? "#10B981" : "rgba(255,255,255,0.12)"}
                          strokeWidth={isHovered ? "2.5" : "1.5"}
                          fill="none"
                          className={isHovered ? "map-route-line" : ""}
                          onClick={() => setHoveredRoute(route)}
                          style={{ cursor: 'pointer' }}
                        />
                        {/* Nodes */}
                        <circle
                          cx={route.coordinates.x1}
                          cy={route.coordinates.y1}
                          r={isHovered ? "6" : "4"}
                          fill={isHovered ? "#10B981" : "#475569"}
                          onClick={() => setHoveredRoute(route)}
                          style={{ cursor: 'pointer' }}
                        />
                        <circle
                          cx={route.coordinates.x2}
                          cy={route.coordinates.y2}
                          r={isHovered ? "6" : "4"}
                          fill={isHovered ? "#10B981" : "#475569"}
                          onClick={() => setHoveredRoute(route)}
                          style={{ cursor: 'pointer' }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CALCULATOR (CREATIVE ADDITION) */}
      <section className="py-24 relative overflow-hidden bg-navy-900/30 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Calculator Panel */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-slate-800/40 bg-navy-900/60 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-950/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2.5 rounded-xl bg-primary-950 text-primary-400 border border-primary-500/10">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cargo Volume Estimator</h3>
                  <p className="text-xs text-slate-500">Calculate volumetric weight & dimensional factors instantly</p>
                </div>
              </div>

              {/* Mode Selectors */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { id: 'air', label: 'Air Freight', icon: Plane },
                  { id: 'ocean', label: 'Ocean Container', icon: Anchor },
                  { id: 'road', label: 'Road Logistics', icon: Truck }
                ].map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setCalcType(mode.id)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                        calcType === mode.id
                          ? 'bg-primary-950/30 border-primary-500/50 text-primary-400'
                          : 'bg-navy-950 border-slate-850 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{mode.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Actual Weight (kg)
                  </label>
                  <div className="flex rounded-xl bg-navy-950 border border-slate-800 overflow-hidden p-1.5 focus-within:border-primary-500/30">
                    <Scale className="w-4 h-4 text-slate-500 m-2 shrink-0" />
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-3 mb-1">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Dimensions (cm)
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="L"
                      value={length}
                      onChange={(e) => setLength(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl px-2 py-3 text-center text-sm text-slate-200 outline-none focus:border-primary-500/30"
                    />
                    <span className="text-[10px] text-slate-500 text-center block mt-1">Length</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="W"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl px-2 py-3 text-center text-sm text-slate-200 outline-none focus:border-primary-500/30"
                    />
                    <span className="text-[10px] text-slate-500 text-center block mt-1">Width</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="H"
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl px-2 py-3 text-center text-sm text-slate-200 outline-none focus:border-primary-500/30"
                    />
                    <span className="text-[10px] text-slate-500 text-center block mt-1">Height</span>
                  </div>
                </div>
              </div>

              {/* Results Output */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-navy-950/80 border border-slate-850">
                <div className="text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Cubic Volume</span>
                  <span className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-1">
                    <Box className="w-4 h-4 text-primary-500" />
                    {calcResults.cbm} <small className="text-[10px] font-normal text-slate-400">CBM</small>
                  </span>
                </div>
                <div className="text-center border-x border-slate-850">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Vol. Weight</span>
                  <span className="text-base sm:text-lg font-bold text-white flex items-center justify-center gap-1">
                    <Container className="w-4 h-4 text-primary-500" />
                    {calcResults.volWeight} <small className="text-[10px] font-normal text-slate-400">kg</small>
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] text-primary-400 uppercase font-bold block mb-1">Chargeable</span>
                  <span className="text-base sm:text-lg font-extrabold text-gradient-primary flex items-center justify-center gap-1">
                    {calcResults.chargeableWeight} <small className="text-[10px] font-semibold">kg</small>
                  </span>
                </div>
              </div>
            </div>

            {/* Right side info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Logistics Standards</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How Chargeable Weight works
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Carriers charge based on either the <strong>Actual gross weight</strong> or the <strong>Volumetric (dimensional) weight</strong>, whichever is higher. 
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary-950 text-primary-400 flex items-center justify-center text-xs shrink-0 mt-0.5 border border-primary-500/20 font-bold">1</div>
                  <span className="text-slate-350">
                    <strong>Air factor (1:5000):</strong> Length × Width × Height (cm) / 5000 gives volumetric weight in kg.
                  </span>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary-950 text-primary-400 flex items-center justify-center text-xs shrink-0 mt-0.5 border border-primary-500/20 font-bold">2</div>
                  <span className="text-slate-350">
                    <strong>Ocean factor:</strong> Total volume in Cubic Meters (CBM) determines ocean bulk lanes.
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center text-primary-450 hover:text-primary-350 text-sm font-semibold group"
                >
                  Request a Formal Rate Sheet 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SLIDER */}
      <section className="py-24 relative overflow-hidden bg-navy-900/40 border-y border-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Global Partner Trust</h2>
          </div>

          <div className="relative min-h-[220px]">
            {/* Sliding quote wrapper */}
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ease-in-out absolute inset-0 ${
                  activeTestimonial === idx 
                    ? 'opacity-100 translate-x-0 pointer-events-auto' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="text-center space-y-6">
                  <p className="text-xl sm:text-2xl text-slate-100 font-light italic leading-relaxed">
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center justify-center space-x-3.5">
                    <img 
                      className="w-11 h-11 rounded-full object-cover border border-primary-500/30 shadow-md"
                      src={item.image} 
                      alt={item.author} 
                    />
                    <div className="text-left">
                      <div className="text-sm font-bold text-white">{item.author}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6 mt-16">
            <button
              onClick={handlePrevTestimonial}
              className="p-2.5 rounded-xl bg-navy-950 border border-slate-850 text-slate-400 hover:text-white hover:border-primary-500/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeTestimonial === idx ? 'bg-primary-500 w-6' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextTestimonial}
              className="p-2.5 rounded-xl bg-navy-950 border border-slate-850 text-slate-400 hover:text-white hover:border-primary-500/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-t from-navy-950 to-navy-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel p-10 sm:p-16 rounded-3xl border-slate-800/40 bg-gradient-to-tr from-navy-950 via-navy-900/80 to-primary-950/20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-primary-950/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-8">
              <Award className="w-12 h-12 text-primary-400 mx-auto animate-pulse-slow" />
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to optimize your <br />
                <span className="text-gradient-primary">import-export supply chain?</span>
              </h2>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect with our trade logistics coordinators to formulate customs compliance checklists or schedule priority air and ocean lane allocations.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <NavLink
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-green-500 text-white rounded-xl font-semibold hover:from-primary-500 hover:to-green-400 transition-all shadow-lg shadow-primary-500/10 text-center"
                >
                  Consult an Expert
                </NavLink>
                <NavLink
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 bg-navy-950 hover:bg-navy-900 text-slate-300 hover:text-white rounded-xl font-semibold border border-slate-800 transition-all text-center"
                >
                  Read Case Studies
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
