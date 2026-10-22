import React, { useState } from 'react';
import { ProjectItem } from '../types';
import {
  X,
  Smartphone,
  LayoutDashboard,
  Receipt,
  ShoppingCart,
  Plus,
  Minus,
  CheckCircle,
  FileText,
  Printer,
  Calculator,
  RefreshCw,
  Sliders,
  Store,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface ProjectMockupModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuoteForProject: (projectName: string) => void;
}

export const ProjectMockupModal: React.FC<ProjectMockupModalProps> = ({
  project,
  onClose,
  onRequestQuoteForProject,
}) => {
  if (!project) return null;

  // Grace Fresh Market state
  const [freshMarketView, setFreshMarketView] = useState<'app' | 'admin'>('app');
  const [cartCount, setCartCount] = useState<number>(2);
  const [freshItems, setFreshItems] = useState([
    { id: 1, name: 'Country Tomatoes (நாட்டு தக்காளி)', category: 'Vegetables', price: 32, unit: '1 kg', inStock: true, count: 1 },
    { id: 2, name: 'Fresh Farm Spinach (பசலைக் கீரை)', category: 'Greens', price: 20, unit: '1 bunch', inStock: true, count: 1 },
    { id: 3, name: 'Ooty Fresh Carrots', category: 'Vegetables', price: 48, unit: '500 g', inStock: true, count: 0 },
    { id: 4, name: 'Hill Bananas (மலை வாழைப்பழம்)', category: 'Fruits', price: 60, unit: '1 dozen', inStock: true, count: 0 },
    { id: 5, name: 'Cold-Pressed Groundnut Oil', category: 'Essentials', price: 185, unit: '1 Litre', inStock: true, count: 0 },
  ]);

  // KA Studio state
  const [isGstMode, setIsGstMode] = useState<boolean>(true);
  const [kaItems, setKaItems] = useState([
    { id: 1, desc: 'Commercial Product Photography & Lighting', qty: 1, rate: 4500 },
    { id: 2, desc: 'Digital Retouching & Color Correction', qty: 3, rate: 600 },
    { id: 3, desc: 'Custom Laminated Mount Frame 20x30"', qty: 1, rate: 2200 },
  ]);

  // Mugavai Ads state
  const [adWidth, setAdWidth] = useState<number>(20);
  const [adHeight, setAdHeight] = useState<number>(10);
  const [sqFtRate, setSqFtRate] = useState<number>(18);
  const [adService, setAdService] = useState<'flex' | 'hoarding' | 'led'>('flex');

  // KA Studio calculations
  const kaSubtotal = kaItems.reduce((acc, item) => acc + item.qty * item.rate, 0);
  const kaCgst = isGstMode ? Math.round(kaSubtotal * 0.09) : 0;
  const kaSgst = isGstMode ? Math.round(kaSubtotal * 0.09) : 0;
  const kaGrandTotal = kaSubtotal + kaCgst + kaSgst;

  // Mugavai Ads calculations
  const totalSqFt = adWidth * adHeight;
  const mediaCost = totalSqFt * sqFtRate;
  const installationCharge = adService === 'hoarding' ? 1200 : adService === 'led' ? 2500 : 450;
  const mugavaiTotal = mediaCost + installationCharge;

  const updateCart = (id: number, delta: number) => {
    setFreshItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextCount = Math.max(0, item.count + delta);
          return { ...item, count: nextCount };
        }
        return item;
      })
    );
    setCartCount((prev) => Math.max(0, prev + delta));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#080B12] border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-mono text-cyan-400">
              Interactive System Demo
            </span>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Project Summary info bar */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Category & Domain</p>
              <p className="text-sm font-semibold text-white mt-0.5">{project.category}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Client Context:</span>
              <span className="text-xs text-cyan-300 font-medium">{project.clientContext}</span>
            </div>
          </div>

          {/* SIMULATION 1: GRACE FRESH MARKET */}
          {project.mockupType === 'mobile-app' && (
            <div className="space-y-4">
              {/* Switcher: Mobile App vs Admin Panel */}
              <div className="flex items-center justify-between bg-slate-900 p-1.5 rounded-xl border border-slate-800">
                <span className="text-xs font-mono text-slate-400 pl-3 hidden sm:inline">
                  Select Perspective:
                </span>
                <div className="flex items-center gap-1 w-full sm:w-auto">
                  <button
                    onClick={() => setFreshMarketView('app')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      freshMarketView === 'app'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Customer Mobile App</span>
                  </button>
                  <button
                    onClick={() => setFreshMarketView('admin')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      freshMarketView === 'admin'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Store Admin Control Panel</span>
                  </button>
                </div>
              </div>

              {/* View A: Customer Mobile App Simulation */}
              {freshMarketView === 'app' ? (
                <div className="max-w-md mx-auto bg-[#070A11] rounded-3xl border-4 border-slate-700/80 p-4 shadow-2xl relative">
                  {/* Phone Notch */}
                  <div className="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                  {/* App Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="font-bold text-white text-sm font-['Space_Grotesk'] flex items-center gap-1">
                        <Store className="w-4 h-4 text-emerald-400" />
                        <span>Grace Fresh Market</span>
                      </h4>
                      <p className="text-[10px] text-slate-400">Rameswaram Express Delivery</p>
                    </div>
                    <div className="relative p-2 rounded-full bg-slate-800 text-cyan-400">
                      <ShoppingCart className="w-4 h-4" />
                      {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Catalog List */}
                  <div className="mt-3 space-y-2.5">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Today's Harvest & Essentials
                    </p>
                    {freshItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs font-semibold text-white">{item.name}</p>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                            <span className="text-emerald-400 font-mono font-medium">₹{item.price}</span>
                            <span>·</span>
                            <span>{item.unit}</span>
                          </div>
                        </div>

                        {/* Interactive Quantity Stepper */}
                        <div className="flex items-center gap-2 bg-slate-800 px-2 py-1 rounded-lg">
                          <button
                            onClick={() => updateCart(item.id, -1)}
                            disabled={item.count <= 0}
                            className="text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-white min-w-4 text-center">
                            {item.count}
                          </span>
                          <button
                            onClick={() => updateCart(item.id, 1)}
                            className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order simulation checkout bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">Delivery Est.</p>
                      <p className="text-xs font-semibold text-emerald-400">~ 25 Mins</p>
                    </div>
                    <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors">
                      Proceed to Checkout ({cartCount} items)
                    </button>
                  </div>
                </div>
              ) : (
                /* View B: Admin Command Panel Simulation */
                <div className="bg-[#070A11] rounded-xl border border-slate-800 p-4 sm:p-5 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="font-bold text-white text-base">Grace Fresh Market — Store Manager Portal</h4>
                      <p className="text-xs text-slate-400">Inventory Status & Live Incoming Customer Orders</p>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Store Sync Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                      <p className="text-xs text-slate-400">Today's Orders</p>
                      <p className="text-xl font-bold font-mono text-white mt-1">48 Dispatched</p>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                      <p className="text-xs text-slate-400">Store Revenue</p>
                      <p className="text-xl font-bold font-mono text-cyan-400 mt-1">₹14,820</p>
                    </div>
                    <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                      <p className="text-xs text-slate-400">Inventory Health</p>
                      <p className="text-xl font-bold font-mono text-emerald-400 mt-1">98% In Stock</p>
                    </div>
                  </div>

                  {/* Recent Order list */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-slate-400 uppercase">Incoming Dispatch Queue</p>
                    <div className="border border-slate-800 rounded-lg overflow-x-auto text-xs">
                      <table className="w-full text-left">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                          <tr>
                            <th className="p-2.5">Order ID</th>
                            <th className="p-2.5">Items</th>
                            <th className="p-2.5">Amount</th>
                            <th className="p-2.5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80">
                          <tr>
                            <td className="p-2.5 font-mono text-cyan-400">#GFM-892</td>
                            <td className="p-2.5 text-slate-300">Country Tomatoes 2kg, Spinach 2b</td>
                            <td className="p-2.5 font-mono font-semibold text-white">₹104</td>
                            <td className="p-2.5 text-emerald-400 font-medium">Packing</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-mono text-cyan-400">#GFM-891</td>
                            <td className="p-2.5 text-slate-300">Ooty Carrots 1kg, Groundnut Oil 1L</td>
                            <td className="p-2.5 font-mono font-semibold text-white">₹281</td>
                            <td className="p-2.5 text-blue-400 font-medium">Out for Delivery</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SIMULATION 2: KA STUDIO BILLING SOFTWARE */}
          {project.mockupType === 'billing-dashboard' && (
            <div className="space-y-4">
              {/* Billing Mode Toggle (GST vs Non-GST) */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white">Invoicing Engine Mode:</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsGstMode(true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isGstMode
                        ? 'bg-cyan-500 text-slate-950'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    GST Tax Invoice (18% Split)
                  </button>
                  <button
                    onClick={() => setIsGstMode(false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      !isGstMode
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    Non-GST Quick Bill
                  </button>
                </div>
              </div>

              {/* Invoice Sheet Mockup */}
              <div className="bg-[#070A11] rounded-xl border border-slate-800 p-5 font-sans space-y-4">
                {/* Invoice Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white">KA Studio</h4>
                    <p className="text-xs text-slate-400">Professional Studio & Digital Lab · Rameswaram</p>
                    {isGstMode && (
                      <p className="text-[11px] font-mono text-cyan-300 mt-1">
                        GSTIN: 33AAAAA0000A1Z5
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right text-xs text-slate-300 space-y-0.5">
                    <p className="font-mono text-white font-bold">INV #KA-2026-1048</p>
                    <p className="text-slate-400">Date: 22 Oct 2026</p>
                    <span className="inline-block text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                      {isGstMode ? 'GST TAX INVOICE' : 'CASH BILL (NON-GST)'}
                    </span>
                  </div>
                </div>

                {/* Invoice Items Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="py-2">Description</th>
                        <th className="py-2 text-center">Qty</th>
                        <th className="py-2 text-right">Rate (₹)</th>
                        <th className="py-2 text-right">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {kaItems.map((item) => (
                        <tr key={item.id}>
                          <td className="py-2.5 text-white font-medium">{item.desc}</td>
                          <td className="py-2.5 text-center text-slate-300 font-mono">{item.qty}</td>
                          <td className="py-2.5 text-right text-slate-300 font-mono">₹{item.rate.toLocaleString()}</td>
                          <td className="py-2.5 text-right text-white font-mono font-semibold">
                            ₹{(item.qty * item.rate).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals Section */}
                <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>Payment Mode: UPI / Cash</p>
                    <p className="text-[11px]">System: KA Studio Billing App by 2K Motion</p>
                  </div>
                  <div className="sm:w-64 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal:</span>
                      <span className="font-mono font-semibold">₹{kaSubtotal.toLocaleString()}</span>
                    </div>

                    {isGstMode && (
                      <>
                        <div className="flex justify-between text-cyan-300">
                          <span>CGST (9%):</span>
                          <span className="font-mono">₹{kaCgst.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-cyan-300">
                          <span>SGST (9%):</span>
                          <span className="font-mono">₹{kaSgst.toLocaleString()}</span>
                        </div>
                      </>
                    )}

                    <div className="flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800">
                      <span>Total Net Payable:</span>
                      <span className="font-mono text-cyan-400">₹{kaGrandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    onClick={() => alert('Demo simulated: Thermal Print Job Sent to 80mm Printer.')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Bill</span>
                  </button>
                  <button
                    onClick={() => alert('Demo simulated: Official GST PDF Generated successfully.')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Generate PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 3: MUGAVAI ADS BILLING SOFTWARE */}
          {project.mockupType === 'ad-billing' && (
            <div className="space-y-4">
              <div className="bg-[#070A11] rounded-xl border border-slate-800 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-white font-['Space_Grotesk']">
                      Mugavai Ads — Dimension & Media Invoicing Module
                    </h4>
                    <p className="text-xs text-slate-400">Flex Printing, Hoardings & Outdoor Advertising Bill Calculator</p>
                  </div>
                  <span className="text-xs text-violet-400 font-mono">Specialized Ad Rate Engine</span>
                </div>

                {/* Interactive Dimension Sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">
                      Banner Width: <span className="text-cyan-400 font-bold">{adWidth} ft</span>
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="50"
                      value={adWidth}
                      onChange={(e) => setAdWidth(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">
                      Banner Height: <span className="text-cyan-400 font-bold">{adHeight} ft</span>
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="30"
                      value={adHeight}
                      onChange={(e) => setAdHeight(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-medium block mb-1">
                      Media Rate / Sq.Ft: <span className="text-cyan-400 font-bold">₹{sqFtRate}</span>
                    </label>
                    <select
                      value={sqFtRate}
                      onChange={(e) => setSqFtRate(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg text-xs text-white p-2"
                    >
                      <option value="14">Standard Star Flex (₹14/sq.ft)</option>
                      <option value="18">Blackout Vinyl Flex (₹18/sq.ft)</option>
                      <option value="26">Backlit Glowsign Media (₹26/sq.ft)</option>
                      <option value="45">Reflective Highway Media (₹45/sq.ft)</option>
                    </select>
                  </div>
                </div>

                {/* Dimension Calculation Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                    <span className="text-slate-400">Total Surface Area</span>
                    <p className="text-base font-bold font-mono text-white mt-0.5">
                      {totalSqFt} <span className="text-xs text-slate-400">Sq.Ft</span>
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                    <span className="text-slate-400">Base Media Cost</span>
                    <p className="text-base font-bold font-mono text-cyan-400 mt-0.5">
                      ₹{mediaCost.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                    <span className="text-slate-400">Mounting / Frame</span>
                    <p className="text-base font-bold font-mono text-slate-300 mt-0.5">
                      ₹{installationCharge.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs">
                    <span className="text-slate-400">Estimated Invoice</span>
                    <p className="text-base font-bold font-mono text-emerald-400 mt-0.5">
                      ₹{mugavaiTotal.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Client Ledger Summary */}
                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/80 text-xs flex flex-wrap items-center justify-between gap-2">
                  <span className="text-slate-400">
                    Client Account: <strong className="text-white">Sri Ramanathan Silks & Agencies</strong>
                  </span>
                  <span className="text-emerald-400 font-mono">Invoice Status: Ready for Client Dispatch</span>
                </div>
              </div>
            </div>
          )}

          {/* Key Features Bullet List from Spec */}
          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
              Key Features & Architectural Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#080B12] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Need a similar custom solution for your enterprise?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 cursor-pointer"
            >
              Close Demo
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuoteForProject(project.title);
              }}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 font-bold text-xs rounded-lg shadow-md cursor-pointer hover:from-cyan-300 hover:to-blue-300 transition-all"
            >
              <span>Build Solution Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
