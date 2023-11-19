import empower from '../image/empower.png';

const Empowering = () => {
  return (
    <div>
      <div className="md:flex md:flex-row md:justify-between">
        {/* For phone-sized screens, image goes above content */}
        <div className="md:hidden">
          <img src={empower} alt="" className="w-full h-auto" />
        </div>

        {/* Left side */}
        <div className="md:w-1/2 flex flex-col justify-center px-6 py-4">
          <h1 className="text-3xl text-orange-500 font-bold mb-4">
            Empowering Your Digital World
          </h1>
          <h5 className="text-lg mb-4">We Innovate. We Create. We Simplify.</h5>
          <hr className="border-t-2 border-orange-500 mb-4" />

          {/* Button */}
          <button className="bg-white-500 text-black border border-orange-500 w-full md:w-48 h-12 md:h-16 rounded-2xl flex  justify-center items-center space-x-1">
            Explore Our Service
            <span>&rarr;</span>
          </button>
        </div>

        {/* For larger screens, image goes to the right */}
        <div className="md:w-1/2 hidden md:block">
          <img src={empower} alt="" className="w-full h-auto md:w-55 md:h-55" />
        </div>
      </div>
    </div>
  );
};

export default Empowering;
