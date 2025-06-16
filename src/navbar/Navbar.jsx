const Navbar = () => {
  return (
    <div className="relative p-6 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="pt-2 cursor-pointer">
          <img src="./logo.svg" alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-3">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>

        <a
          href="#"
          className="hidden md:block baseline hover:bg-brightRedLight py-2 px-5 bg-brightRed text-white rounded-full"
        >
          Get Started
        </a>

        {/* The Hamburger Menu Icon */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;