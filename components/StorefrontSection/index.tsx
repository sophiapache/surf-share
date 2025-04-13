const StorefrontSection = () => {
  return (
    <section className="bg-transparent py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl mb-4">
            Borrow Boards from Surfers Like You
          </h1>
          <p className="text-base text-gray-500 mb-6">
            Find your board, meet a local, and surf. It’s that simple. Explore
            listings nearby, book through our trusted platform, and connect with
            real surfers who’ve got the gear you need.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
        </div>

        {}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1470145175/photo/surfing-in-sea-at-sunset.webp?b=1&s=612x612&w=0&k=20&c=CSVpqoyerHAH7aJKZlDyQHtLcGIQtbtqnBgRPipDmHk="
              alt="Surfing in the Sea at Sunset"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {}
      <div className="mt-16 border-t pt-8">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-center gap-8 opacity-70">
          {}
        </div>
      </div>
    </section>
  );
};

export default StorefrontSection;
