const Hero = () => {
  return (
    <section id="#hero">
      <div className="flex flex-col-reverse md:flex-row container justify-center items-center space-y-0 md:space-y-0 mx-auto mt-10 px-6">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h2 className="font-bold text-4xl md:text-5xl text-center md:text-left max-w-md">Bring everyone together to build better products.</h2>
          <p className="max-w-sm md:text-left text-center text-darkGrayishBlue">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">

          <button className="baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed text-white rounded-full">
            Get Started
          </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src="./illustration-intro.svg" alt="chat image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
