import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BuyBook = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.item;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-gray-500">No book selected.</p>
        <button
          onClick={() => navigate("/course")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Browse Books
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success("Order placed! 🎉");
    }, 1500);
  };

  // Success screen
  if (success) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-5 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Order Placed!</h2>
          <p className="text-gray-400 text-sm mt-1">"{item.name}" will be delivered to you.</p>
          <p className="text-gray-400 text-sm mt-1">Pay <strong>${item.price}</strong> when it arrives.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate("/")} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl">Home</button>
          <button onClick={() => navigate("/course")} className="border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-300 font-semibold py-2 px-6 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800">Browse More</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-slate-900">

      {/* Top bar */}
      <div className="w-full bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 px-4 sm:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-green-500 flex items-center gap-1"
        >
          ← Back
        </button>
      </div>

      {/* Main content — stacks on mobile, side by side on desktop */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col lg:flex-row gap-8">

        {/* LEFT — Form (full width on mobile, 60% on desktop) */}
        <div className="w-full lg:w-3/5">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Checkout
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white dark:bg-slate-800 rounded-2xl p-5 sm:p-8 border border-gray-100 dark:border-slate-700 space-y-5"
          >
            <h2 className="font-bold text-gray-800 dark:text-white text-lg">
              Delivery Details
            </h2>

            {/* Name + Email side by side on tablet+ */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div className="w-full">
                <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Phone — full width */}
            <div>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Address — full width */}
            <div>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Delivery Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street, City, ZIP"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* COD notice */}
            <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-xl px-4 py-3">
              <span className="text-xl">💵</span>
              <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
                Cash on Delivery — pay when your book arrives
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60 text-base"
            >
              {loading ? "Placing Order..." : `Place Order — $${item.price}`}
            </button>
          </form>
        </div>

        {/* RIGHT — Order summary (full width on mobile, 40% on desktop) */}
        <div className="w-full lg:w-2/5">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Order Summary</h2>

          <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 p-5 sm:p-6">

            {/* Book info */}
            <div className="flex gap-4 mb-6">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-28 object-cover rounded-xl flex-shrink-0"
                />
              ) : (
                <div className="w-20 h-28 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  📚
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{item.name}</p>
                <p className="text-gray-400 text-sm mt-0.5">{item.author}</p>
                <span className="inline-block mt-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2.5 py-1 rounded-full">
                  {item.type}
                </span>
              </div>
            </div>

            {/* Price breakdown */}
            <div className="border-t border-gray-100 dark:border-slate-700 pt-4 space-y-3">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Subtotal</span>
                <span>${item.price}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Shipping</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Payment</span>
                <span className="text-amber-600 dark:text-amber-400 font-medium">Cash on Delivery</span>
              </div>
              <div className="flex justify-between font-bold text-gray-800 dark:text-white text-lg border-t border-gray-100 dark:border-slate-700 pt-3">
                <span>Total</span>
                <span>${item.price}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BuyBook;