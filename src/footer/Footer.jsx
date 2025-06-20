const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container mx-auto py-10 px-6 flex justify-between md:space-x-0 space-y-8 flex-col-reverse md:space-y-0 md:flex-row">
        {/* Logo and Social Links Container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-6 md:items-start md:w-1/3">
          <div className="mx-auto md:text-sm my-6 text-center text-white md:hidden">
            Copyright &copy; 2022. All Rights Reserved.
          </div>
          {/* Logo */}
          <div>
            <img src="./logo.svg" alt="manage logo" className="h-8" />
          </div>

          {/* Social Links Container */}
          <div className="flex my-6 space-x-2">
            <a href="#">
              <img
                src="./icon-facebook.svg"
                alt="facebook-icon"
                className="h-7"
              />
            </a>
            <a href="#">
              <img
                src="./icon-youtube.svg"
                alt="youtube-icon"
                className="h-7"
              />
            </a>
            <a href="#">
              <img
                src="./icon-twitter.svg"
                alt="twitter-icon"
                className="h-7"
              />
            </a>
            <a href="#">
              <img
                src="./icon-pinterest.svg"
                alt="pinterest-icon"
                className="h-7"
              />
            </a>
            <a href="#">
              <img
                src="./icon-instagram.svg"
                alt="instagram-icon"
                className="h-7"
              />
            </a>
          </div>
        </div>

        {/* List Container */}
        <div className="flex justify-around mt-8 md:mt-0 space-x-8 md:w-1/3 ">
          <div className="flex flex-col space-y-3  text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between md:w-1/3">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="rounded-full focus:outline-none flex-1 px-4 bg-white"
                placeholder="Updated in your inbox"
              />
              <button className="bg-brightRed py-2 px-6 hover:bg-brightRedLight focus:outline-none text-white rounded-full">
                Go
              </button>
            </div>
          </form>

          <div className="hidden md:block text-white md:text-right">
            Copyright &copy; 2022. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
