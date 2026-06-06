// import React, { useState, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { productsData } from "../data/products";
// import {
//   Search,
//   Globe,
//   ChevronRight,
//   ShoppingBag,
//   FolderOpen,
//   ArrowRight,
//   Package,
// } from "lucide-react";
// export default function Products() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   // Categories list
//   const categories = [
//     { id: "all", label: "All Products", icon: Package },
//     { id: "plastic", label: "Plastic Products", icon: FolderOpen },
//     { id: "paper", label: "Paper & Carton", icon: FolderOpen },
//     { id: "food", label: "Food & Agriculture", icon: ShoppingBag },
//   ];
//   // Dynamic Subcategories based on selected main category
//   const subcategories = useMemo(() => {
//     if (selectedCategory === "all") return [];

//     const subs = productsData
//       .filter((p) => p.category === selectedCategory)
//       .map((p) => p.subcategory);

//     // return unique subcategories
//     return ["all", ...new Set(subs)];
//   }, [selectedCategory]);
//   // Handle main category change
//   const handleCategoryChange = (catId) => {
//     setSelectedCategory(catId);
//     setSelectedSubcategory("all"); // reset subcategory on main change
//   };
//   // Filtered Products
//   const filteredProducts = useMemo(() => {
//     return productsData.filter((product) => {
//       // Category Match
//       const matchesCategory =
//         selectedCategory === "all" || product.category === selectedCategory;

//       // Subcategory Match
//       const matchesSubcategory =
//         selectedSubcategory === "all" ||
//         product.subcategory === selectedSubcategory;

//       // Search Query Match
//       const matchesSearch =
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSubcategory && matchesSearch;
//     });
//   }, [selectedCategory, selectedSubcategory, searchQuery]);
//   return (
//     <div className="relative">
//       {/* 1. HERO HEADER */}
//       <section className="relative py-20 bg-grid-pattern overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-950/15 rounded-full blur-[150px] pointer-events-none" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center max-w-3xl mx-auto space-y-4">
//             <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
//               Export Product Directory
//             </h1>
//             <p className="text-slate-350 text-base leading-relaxed">
//               Explore our verified, food-grade compliant import and export
//               commodity portfolio. Filter by raw materials or trade categories
//               below.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* 2. FILTERS AND LISTING */}
//       <section className="py-12 bg-navy-950 min-h-[60vh]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Search and Category Container */}
//           <div className="space-y-8 mb-12">
//             {/* Search Bar */}
//             <div className="max-w-md mx-auto">
//               <div className="flex items-center rounded-xl bg-navy-900 border border-slate-800 p-2 focus-within:border-primary-500/30 transition-colors">
//                 <Search className="w-5 h-5 text-slate-500 m-2 shrink-0" />
//                 <input
//                   type="text"
//                   placeholder="Search catalog (e.g. bottles, bags, basmati)..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
//                 />
//                 {searchQuery && (
//                   <button
//                     onClick={() => setSearchQuery("")}
//                     className="text-xs text-slate-500 hover:text-white px-2 font-semibold"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>
//             </div>
//             {/* Category Navigation Tabs */}
//             <div className="flex flex-wrap justify-center gap-3">
//               {categories.map((cat) => {
//                 const Icon = cat.icon;
//                 const isSelected = selectedCategory === cat.id;
//                 return (
//                   <button
//                     key={cat.id}
//                     onClick={() => handleCategoryChange(cat.id)}
//                     className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-semibold transition-all ${
//                       isSelected
//                         ? "bg-gradient-to-r from-primary-650 to-green-600 border-primary-500 text-white shadow-lg shadow-primary-500/10"
//                         : "bg-navy-900/60 border-slate-850 text-slate-400 hover:bg-navy-900 hover:text-white"
//                     }`}
//                   >
//                     <Icon className="w-4 h-4 shrink-0" />
//                     <span>{cat.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//             {/* Subcategory Pills (visible only when a main category besides 'all' is selected) */}
//             {selectedCategory !== "all" && subcategories.length > 1 && (
//               <div className="flex flex-wrap justify-center gap-2 pt-2 animate-fade-in">
//                 {subcategories.map((sub) => {
//                   const isSelected = selectedSubcategory === sub;
//                   return (
//                     <button
//                       key={sub}
//                       onClick={() => setSelectedSubcategory(sub)}
//                       className={`px-4 py-1.5 rounded-full border text-xs font-medium transition-all ${
//                         isSelected
//                           ? "bg-primary-950/40 border-primary-550/40 text-primary-400"
//                           : "bg-navy-950 border-slate-850 text-slate-500 hover:text-slate-300"
//                       }`}
//                     >
//                       {sub === "all"
//                         ? `All ${selectedCategory.toUpperCase()}`
//                         : sub}
//                     </button>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//           {/* Product Grid */}
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group h-full"
//                 >
//                   {/* Image wrapper */}
//                   <div className="relative aspect-video w-full overflow-hidden bg-navy-900 border-b border-slate-850 flex items-center justify-center">
//                     {/* Dark gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent z-10" />

//                     {/* Subcategory Badge */}
//                     <span className="absolute top-4 left-4 z-20 px-2.5 py-0.5 rounded-full bg-navy-950/80 border border-slate-800 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
//                       {product.subcategory}
//                     </span>
//                     {/* Logo/Product Image */}
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
//                     />
//                   </div>
//                   {/* Body Content */}
//                   <div className="p-6 flex flex-col flex-grow space-y-4">
//                     <div className="space-y-1">
//                       <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest block">
//                         {product.category}
//                       </span>
//                       <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
//                         {product.name}
//                       </h3>
//                     </div>
//                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
//                       {product.desc}
//                     </p>
//                     {/* Specifications footer metrics */}
//                     <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-850/40 text-[11px] text-slate-450">
//                       <div>
//                         <span className="text-slate-500 block">
//                           Min. Order Qty
//                         </span>
//                         <strong>{product.moq}</strong>
//                       </div>
//                       <div>
//                         <span className="text-slate-500 block">Cert Grade</span>
//                         <strong>{product.grade.split(",")[0]}</strong>
//                       </div>
//                     </div>
//                     {/* Action Link */}
//                     <div className="pt-2">
//                       <NavLink
//                         to={`/products/${product.id}`}
//                         className="w-full py-3 bg-navy-950 hover:bg-navy-900 border border-slate-850 hover:border-primary-500/30 text-xs font-semibold rounded-xl text-slate-300 hover:text-white transition-all text-center flex items-center justify-center gap-1.5 group/btn"
//                       >
//                         Detailed Specifications
//                         <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             /* Empty State */
//             <div className="text-center py-20 glass-panel rounded-3xl max-w-xl mx-auto border-slate-850">
//               <Globe className="w-12 h-12 text-slate-650 opacity-40 mx-auto mb-4 animate-pulse" />
//               <h3 className="text-lg font-bold text-white mb-2">
//                 No Matching Products Found
//               </h3>
//               <p className="text-slate-450 text-sm max-w-sm mx-auto leading-relaxed">
//                 We couldn't find any products matching your filters. Try
//                 checking spelling or selecting "All Products" to browse
//                 categories.
//               </p>
//               <button
//                 onClick={() => {
//                   setSelectedCategory("all");
//                   setSelectedSubcategory("all");
//                   setSearchQuery("");
//                 }}
//                 className="mt-6 px-5 py-2.5 bg-primary-950 text-primary-400 border border-primary-500/20 text-xs font-semibold rounded-xl hover:bg-primary-900 transition-colors"
//               >
//                 Reset Search Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { productsData } from "../data/products";
import {
  Search,
  Globe,
  ChevronRight,
  ShoppingBag,
  FolderOpen,
  ArrowRight,
  Package,
} from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Categories list
  const categories = [
    { id: "all", label: "All Products", icon: Package },
    { id: "plastic", label: "Plastic Products", icon: FolderOpen },
    { id: "paper", label: "Paper & Carton", icon: FolderOpen },
    { id: "food", label: "Food & Agriculture", icon: ShoppingBag },
  ];

  // Dynamic Subcategories based on selected main category
  const subcategories = useMemo(() => {
    if (selectedCategory === "all") return [];

    const subs = productsData
      .filter((p) => p.category === selectedCategory)
      .map((p) => p.subcategory);

    // return unique subcategories
    return ["all", ...new Set(subs)];
  }, [selectedCategory]);

  // Handle main category change
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setSelectedSubcategory("all"); // reset subcategory on main change
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category Match
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // Subcategory Match
      const matchesSubcategory =
        selectedSubcategory === "all" ||
        product.subcategory === selectedSubcategory;

      // Search Query Match
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSubcategory && matchesSearch;
    });
  }, [selectedCategory, selectedSubcategory, searchQuery]);

  return (
    <div className="relative">
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-950/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
              Export Product Directory
            </h1>
            <p className="text-slate-350 text-base leading-relaxed">
              Explore our verified, food-grade compliant import and export
              commodity portfolio. Filter by raw materials or trade categories
              below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTERS AND LISTING */}
      <section className="py-12 bg-navy-950 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Category Container */}
          <div className="space-y-8 mb-12">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center rounded-xl bg-navy-900 border border-slate-800 p-2 focus-within:border-primary-500/30 transition-colors">
                <Search className="w-5 h-5 text-slate-500 m-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search catalog (e.g. bottles, bags, basmati)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 outline-none text-slate-200 text-sm focus:ring-0"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-slate-500 hover:text-white px-2 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-gradient-to-r from-primary-600 to-amber-500 border-primary-500 text-white shadow-lg shadow-primary-500/10"
                        : "bg-navy-900/60 border-slate-850 text-slate-400 hover:bg-navy-900 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Subcategory Pills */}
            {selectedCategory !== "all" && subcategories.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 pt-2 animate-fade-in">
                {subcategories.map((sub) => {
                  const isSelected = selectedSubcategory === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`px-4 py-1.5 rounded-full border text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-primary-950/40 border-primary-500/40 text-primary-400"
                          : "bg-navy-950 border-slate-850 text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      {sub === "all"
                        ? `All ${selectedCategory.toUpperCase()}`
                        : sub}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-900/45 backdrop-blur-md border border-white/5 transition-all duration-300 hover:bg-slate-900/60 hover:border-primary-500/35 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1 rounded-2xl overflow-hidden flex flex-col group h-full"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-video w-full overflow-hidden bg-navy-900 border-b border-slate-850/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent z-10" />

                    {/* Subcategory Badge */}
                    <span className="absolute top-4 left-4 z-20 px-2.5 py-0.5 rounded-full bg-navy-950/80 border border-slate-800 text-[10px] font-bold text-slate-450 uppercase tracking-wider">
                      {product.subcategory}
                    </span>

                    {/* Logo/Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest block">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-450 transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                      {product.desc}
                    </p>

                    {/* Specifications footer metrics */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-850/40 text-[11px] text-slate-450">
                      <div>
                        <span className="text-slate-500 block">
                          Min. Order Qty
                        </span>
                        <strong>{product.moq}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Cert Grade</span>
                        <strong>{product.grade.split(",")[0]}</strong>
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <NavLink
                        to={`/products/${product.id}`}
                        className="w-full py-3 bg-navy-950 hover:bg-navy-900 border border-slate-850 hover:border-primary-500/30 text-xs font-semibold rounded-xl text-slate-300 hover:text-white transition-all text-center flex items-center justify-center gap-1.5 group/btn"
                      >
                        Detailed Specifications
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-slate-900/45 backdrop-blur-md border border-white/5 rounded-3xl max-w-xl mx-auto border-slate-850">
              <Globe className="w-12 h-12 text-slate-650 opacity-40 mx-auto mb-4 animate-pulse" />
              <h3 className="text-lg font-bold text-white mb-2">
                No Matching Products Found
              </h3>
              <p className="text-slate-450 text-sm max-w-sm mx-auto leading-relaxed">
                We couldn't find any products matching your filters. Try
                checking spelling or selecting "All Products" to browse
                categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubcategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 px-5 py-2.5 bg-primary-950 text-primary-400 border border-primary-500/20 text-xs font-semibold rounded-xl hover:bg-primary-900 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
