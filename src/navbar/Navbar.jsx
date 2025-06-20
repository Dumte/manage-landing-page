import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative p-6 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="pt-2 cursor-pointer">
          <img src="/logo.svg" alt="Logo" />
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
          onClick={handleClick}
          id="menu-btn"
          className={`${
            isOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
        >
          <img
            src={isOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
            alt=""
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 flex"
              : "max-h-0 opacity-0 -translate-y-2 hidden"
          } absolute flex-col items-center self-end space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 py-8 mt-3 drop-shadow-md transition-all duration-500 ease-in-out transform overflow-hidden `}
        >
          <a href="#" className="py-2 hover:bg-brightRedLight w-full text-center">Pricing</a>
          <a href="#" className="py-2 hover:bg-brightRedLight w-full text-center">Product</a>
          <a href="#" className="py-2 hover:bg-brightRedLight w-full text-center">About Us</a>
          <a href="#" className="py-2 hover:bg-brightRedLight w-full text-center">Careers</a>
          <a href="#" className="py-2 hover:bg-brightRedLight w-full text-center">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
