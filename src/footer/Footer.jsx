const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container mx-auto py-10 px-6 flex justify-between space-y-8 flex-col-reverse md:space-y-0 md:flex-row">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div>
            <img src="./logo.svg" alt="manage logo" className="h-8" />
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#">
              <img
                src="./icon-facebook.svg"
                alt="facebook-icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="./icon-youtube.svg"
                alt="youtube-icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="./icon-twitter.svg"
                alt="twitter-icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="./icon-pinterest.svg"
                alt="pinterest-icon"
                className="h-8"
              />
            </a>
            <a href="#">
              <img
                src="./icon-instagram.svg"
                alt="instagram-icon"
                className="h-8"
              />
            </a>
          </div>
        </div>
        
        {/* List Container */}
        <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">Home</a>
                <a href="#" className="hover:text-brightRed">Pricing</a>
                <a href="#" className="hover:text-brightRed">Products</a>
                <a href="#" className="hover:text-brightRed">About</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
