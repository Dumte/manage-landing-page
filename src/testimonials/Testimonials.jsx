import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anisha Li",
      img: "./avatar-anisha.png",
      text:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      name: "Ali Bravo",
      img: "./avatar-ali.png",
      text:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      name: "Richard Watts",
      img: "./avatar-richard.png",
      text:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setIndex((index + 1) % testimonials.length);

  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>

        {/* Mobile Carousel */}
        <div className="relative mt-24 md:hidden">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
            <img className="w-16 -mt-14" src={testimonials[index].img} alt={`${testimonials[index].name} Avatar`} />
            <h5 className="text-lg font-bold">{testimonials[index].name}</h5>
            <p className="text-sm text-darkGrayishBlue">{testimonials[index].text}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-2xl"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-2xl"
          >
            ❯
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-brightRed" : "bg-gray-300"}`}
              ></span>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden mt-24 md:flex md:space-x-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img className="w-16 -mt-14" src={t.img} alt={`${t.name} Avatar`} />
              <h5 className="text-lg font-bold">{t.name}</h5>
              <p className="text-sm text-darkGrayishBlue">{t.text}</p>
            </div>
          ))}
        </div>

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