import logo from '../image/logobalck.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="relative h-48">
          {/* Dot at the starting point */}
          <div className="w-2 h-2 rounded-full bg-orange-500 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Vertical line */}
          <div className="border-l border-orange-500 h-full"></div>
          {/* Dot at the ending point */}
          <div className="w-2 h-2 rounded-full bg-orange-500 absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
      <div className="mt-10 text-lg text-orange-500 font-bold text-center mb-4">
        How to reach us
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-6 bg-orange-500 ">
        {/* Left Column */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Image 1"
            className="w-56 h-56 md:w-60 md:h-60 ml-24 md:ml-0 "
          />
        </div>

        {/* Middle Column */}
        <div className="flex-1 text-center">
          <div className="mb-2 mt-0 md:mt-6">
            <div className="text-xs text-gray-300">Product</div>
          </div>
          <div className="text-sm font-semibold ml-0 text-white">Features</div>
          <div className="text-sm font-semibold mr-3 text-white">Pricing</div>
          <div className="text-sm font-semibold ml-7 text-white">
            Book a demo
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="mb-2 mt-6">
            <div className="text-xs text-gray-300">Address</div>
          </div>
          <div className="text-sm font-semibold text-white">
            22 golagol ,Addis Ababa
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 text-right">
          <div className="mb-2 mt-6 mr-40  md:mr-24">
            <div className="text-xs text-gray-300 font-bold">Phone Number</div>
          </div>
          <div className="text-sm font-semibold mr-32 md:mr-16 text-white">
            +2519-16-36-32-94
          </div>
          <div className="text-sm font-semibold mr-32 md:mr-16 text-white">
            +2519-07-25-65-43
          </div>
          <div className="text-sm font-semibold mr-32 md:mr-16 text-white">
            +2519-10-18-72-27
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-10 bg-orange-500">
        <div className="text-sm md:text-lg text-center md:text-left text-white">
          © 2023 Welcome. All right reserved. Privacy Policy Terms of Service
        </div>
        <div className="mt-2 md:mt-0 text-xs md:text-lg text-center md:text-right text-white">
          <i className="fas fa-facebook mt-2 text-white md:mr-4"></i>
          <i className="fas fa-twitter mt-2 text-white md:mr-4"></i>
          <i className="fas fa-envelope text-orange-500 ml-2 md:mr-4"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
