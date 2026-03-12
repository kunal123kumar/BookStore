import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              About Our Bookstore
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              A place where stories live, ideas grow, and readers belong.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded with a passion for books and learning, our bookstore was
                created to be more than just a place to buy books. We aim to
                build a welcoming space where readers of all ages can explore
                new ideas, discover hidden gems, and reconnect with the joy of
                reading.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                From timeless classics to modern bestsellers and local authors,
                we carefully curate every title to ensure quality, diversity,
                and inspiration.
              </p>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  📚 Curated Collection
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Handpicked books across fiction, non-fiction, academics, and
                  children’s literature.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ✍️ Local Authors
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Supporting independent writers and emerging voices in the
                  literary world.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  🎓 Lifelong Learning
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Encouraging curiosity, creativity, and knowledge for all ages.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ❤️ Community First
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A welcoming space where readers connect and stories are
                  shared.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-indigo-600 px-6 py-20 dark:bg-indigo-500">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 text-lg text-indigo-100">
              To inspire a love for reading and learning by providing
              exceptional books, meaningful experiences, and a community-driven
              bookstore environment.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
