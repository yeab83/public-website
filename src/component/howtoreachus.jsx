import reachus from '../image/reachus.png';

const Howtoreachus = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="relative h-48">
          {/* Dot at the starting point */}
          <div className="w-4 h-4 rounded-full bg-orange-500 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
          {/* Vertical line */}
          <div className="border-l border-orange-500 h-full"></div>
          {/* Dot at the ending point */}
          <div className="w-4 h-4 rounded-full bg-orange-500 absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
      <div className="mt-10 text-2xl md:text-xl text-orange-500 font-bold text-center mb-4">
        How to reach us
      </div>
      <div
        className={`border-1 ${
          window.innerWidth > 768 ? 'h-96' : 'h-auto'
        } flex flex-col md:flex-row items-center justify-center mt-10 bg-orange-500 mx-2 md:mx-20`}
      >
        {/* Image on the left */}
        <div className="md:w-1/2 mt-10">
          <img
            src={reachus}
            alt=""
            className="max-w-full max-h-full  md:max-w-589px md:max-h-589px md:mt-0"
          />
        </div>

        {/* Text on the right */}
        <div className="md:w-1/2  md:mt-0">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 text-center md:text-left">
            Let’s start to work <br /> together
          </h1>
          <input
            type="email"
            placeholder="Enter your work email"
            className="border border-orange-400 rounded-2xl mx-16 w-80 md:w-56 rounded-md p-2 text-orange-100 placeholder-gray-600 placeholder-opacity-75 mb-2"
          />

          <button className="border border-black bg-black mb-10 text-white  rounded-2xl px-4 py-2 mt-2 ml-36 md:ml-20">
            Get in touch <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Howtoreachus;
