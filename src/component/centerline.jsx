import one from '../image/1.png';
import two from '../image/2.png';
import three from '../image/3.png';

const Centerline = () => {
  const isPhoneSize = window.innerWidth <= 740;

  return (
    <div className="mx-4 mt-20 md:mx-32">
      <div className="relative">
        {/* Line that spans the entire container */}
        {!isPhoneSize && (
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full bg-orange-500 w-px"></div>
        )}
        <div
          className={`flex ${
            isPhoneSize ? 'flex-col-reverse' : 'md:flex-row'
          } space-y-4 md:space-y-0`}
        >
          {/* 1 */}
          <div
            className={`md:w-1/2 md:pl-4 md:pr-8 ${
              isPhoneSize ? 'md:flex-col' : ''
            }`}
          >
            <h1 className="text-2xl text-orange-500 font-bold mb-2 md:mb-4">
              Hardware Service
            </h1>
            <h3 className="text-xl font-bold mb-2 md:mb-4">
              Powerful Hardware Solutions
            </h3>
            <p className="leading-relaxed md:leading-loose">
              Our hardware services cover a wide range of products, from servers
              and networking equipment to peripherals and custom hardware
              solutions. We ensure your business has the hardware it needs to
              operate efficiently and securely.
            </p>

            <hr className="border-t-2 border-orange-500 mb-2 md:mb-4 mt-2 md:mt-4" />

            <button className="bg-white-500 text-black border border-orange-500 w-full md:w-48 h-6 md:h-12 rounded-3xl flex justify-center items-center ">
              Learn more
              <span>&rarr;</span>
            </button>
          </div>
          <div className={`md:w-1/2 ${isPhoneSize ? '' : 'md:ml-2'}`}>
            <img
              src={one}
              alt=""
              className={`w-48 h-auto md:w-50 md:h-50 ${
                isPhoneSize ? 'mt-2 w-full h-80' : 'ml-2 md:ml-48'
              }`}
            />
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-4 md:mt-8">
          <div className="md:w-1/2">
            <img
              src={two}
              alt=""
              className={`w-48 h-auto md:w-50 md:h-50 ${
                isPhoneSize ? 'mt-2 w-full ' : ' '
              }`}
            />
          </div>
          <div className="md:w-1/2 md:pl-4 md:pr-8">
            <h1 className="text-2xl text-orange-500 font-bold mb-2 md:mb-4">
              Software Development
            </h1>
            <h3 className="text-xl font-bold mb-2 md:mb-4">
              Crafting Custom Web and Mobile Solutions
            </h3>
            <p className="leading-relaxed text-sm md:leading-loose">
              Our software development services encompass web and mobile
              applications tailored to your specific requirements. We specialize
              in creating user-friendly, responsive, and secure software
              solutions that help you stay competitive in the digital landscape.
            </p>

            <hr className="border-t-2 border-orange-500 mb-2 md:mb-4 mt-2 md:mt-4" />

            <button className="bg-white-500 text-black border border-orange-500 w-full md:w-48 h-6 md:h-12 rounded-3xl flex justify-center items-center ">
              Learn more
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        {/* 3 */}
        <div
          className={`flex ${
            isPhoneSize ? 'flex-col-reverse' : 'md:flex-row'
          } space-y-4 md:space-y-0 mt-4 md:mt-8`}
        >
          <div
            className={`md:w-1/2 md:pl-4 md:pr-8 ${
              isPhoneSize ? 'md:flex-col' : ''
            }`}
          >
            <h1 className="text-2xl text-orange-500 font-bold mb-2 md:mb-4">
              Event and Transport Ticketing
            </h1>
            <h3 className="text-xl font-bold mb-2 md:mb-4">
              Event and Transport Ticketing Management
            </h3>
            <p className="leading-relaxed md:leading-loose">
              We provide comprehensive event and transport ticketing solutions
              that streamline ticket sales, manage bookings, and enhance
              customer experiences. From ticketing platforms for events to
              public transport systems, we have you covered.
            </p>

            <hr className="border-t-2 border-orange-500 mb-2 md:mb-4 mt-2 md:mt-4" />

            <button className="bg-white-500 text-black border border-orange-500 w-full md:w-48 h-6 md:h-12 rounded-3xl flex justify-center items-center ">
              Learn more
              <span>&rarr;</span>
            </button>
          </div>
          <div className={`md:w-1/2 ${isPhoneSize ? '' : 'md:ml-2'}`}>
            <img
              src={three}
              alt=""
              className={`w-48 h-auto md:w-50 md:h-50 ${
                isPhoneSize ? 'mt-2 w-full h-80' : ' ml-2 md:ml-48'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centerline;
