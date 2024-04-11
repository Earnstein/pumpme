const Features = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-5xl font-playfair text-foreground">
          What We <span className="text-green-500">Offer</span>
        </h2>

        <p className="mt-4 text-muted-foreground font-palanquin text-sm sm:text-xl">
          Here are some of the benefit Pumpme exposes you to for free.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <a
          className="block rounded-xl border border-green-500 p-8 shadow-2xl transition hover:border-green-500/10 hover:shadow-green-500/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-foreground">Airdops</h2>

          <p className="mt-1 text-sm text-muted-foreground font-palanquin">
            get access to first hands airdrops from different blockchain with
            zero cost.
          </p>
        </a>

        <a
          className="block rounded-xl border border-green-500 p-8 shadow-2xl transition hover:border-green-500/10 hover:shadow-green-500/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-foreground">DeFi</h2>

          <p className="mt-1 text-sm text-muted-foreground font-palanquin">
            Learn the best strategy to invest, manage your investment and
            increase your investment with decentralised finance.
          </p>
        </a>

        <a
          className="block rounded-xl border border-green-500 p-8 shadow-2xl transition hover:border-green-500/10 hover:shadow-green-500/10"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-foreground">
            Web3 development
          </h2>

          <p className="mt-1 text-sm text-muted-foreground font-palanquin">
            Learn programming langauges to start building your own token, dAPPs
            and web3 applications.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Features;
