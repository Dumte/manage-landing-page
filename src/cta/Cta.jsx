const Cta = () => {
  return (
    <section id="cta" className="bg-brightRed">
      <div className="container mx-auto flex flex-col md:flex-row py-24 px-6 space-y-12 md:space-y-0 md:py-12 items-center justify-between">
        
          <h2 className="text-5xl font-bold leading-tight text-center md:text-left text-white md:text-4xl md:max-w-xl">Simplify how your team works today.</h2>
        

        <div>
          <a
            href="#"
            className="baseline hover:bg-gray-300  py-2 px-5 bg-white text-brightRed shadow-2xl  rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta