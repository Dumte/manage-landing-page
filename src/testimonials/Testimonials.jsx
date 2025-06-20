const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Testimonial Heading */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="./avatar-anisha.png"
              alt="Anisha Avatar Image"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="./avatar-ali.png"
              alt="Ali Avatar Image"
            />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img
              className="w-16 -mt-14"
              src="./avatar-richard.png"
              alt="Ali Avatar Image"
            />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="my-16">
          <a
            href="#"
            className="baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed text-white rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
