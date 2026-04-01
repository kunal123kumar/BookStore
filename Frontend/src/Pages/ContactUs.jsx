import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

 const onSubmit = async (data) => {
  const infodata = {
    name: data.name,
    email: data.email,
    message: data.message,
  };


  try {
   // ContactUs.jsx
const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contactUs`, infodata);
    if (res.data) {
      toast.success("Message sent successfully!");
      window.location.href = "/";
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.");
  }
};

  const baseInput =
    "w-full rounded-xl border bg-white/80 px-4 py-3 text-gray-900 shadow-sm backdrop-blur focus:outline-none focus:ring-2 dark:bg-gray-900 dark:text-white";

  const error = "border-red-500 focus:ring-red-500";
  const normal = "border-gray-300 focus:ring-indigo-600 dark:border-white/10";

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-white/90">
            Have a question or feedback? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 -mt-20 px-6 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in touch
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Reach out to us using the form or via the contact details below.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  BookStore171025@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  +91 82358 23515
                </span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                    className={`${baseInput} pl-11 ${
                      errors.name ? error : normal
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`${baseInput} pl-11 ${
                      errors.email ? error : normal
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={`${baseInput} pl-11 ${
                      errors.message ? error : normal
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-500 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
