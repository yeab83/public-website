import { Card } from 'antd';
import card3 from '../image/card3.png';
import card2 from '../image/card2.png';
import card1 from '../image/card1.png';

const Aboutus = () => {
  return (
    <div>
      <div className="mb-29">
        <h1 className="text-3xl text-orange-500 font-bold mb-4 text-center mt-10">
          About Us
        </h1>
      </div>
      <div className="flex flex-col space-y-5  md:flex-row md:space-x-32 md:justify-center mt-10 mx-10">
        <Card
          hoverable
          className="w-full md:w-1/3 bg-amber-200 "
          cover={
            <img
              alt="Card 1"
              src={card1}
              style={{
                width: '200px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          }
          bodyStyle={{ padding: '1px' }}
        >
          <span className="">
            Our mission is to provide cutting-edge hardware and software
            solutions, cater to web and mobile development needs, and simplify
            event and transport ticketing
          </span>
        </Card>

        <Card
          hoverable
          className="w-full md:w-1/3 bg-amber-200 "
          cover={
            <img
              alt="Card 2"
              src={card2}
              style={{
                width: '200px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          }
          bodyStyle={{ padding: '10px' }}
        >
          <span>
            With a proven track record of innovation, reliability, and customer
            satisfaction, we are the partner you can trust to stay ahead in a
            rapidly evolving digital world.
          </span>
        </Card>

        <Card
          hoverable
          className="w-full md:w-1/3 bg-amber-200"
          cover={
            <img
              alt="Card 3"
              src={card3}
              style={{
                width: '200px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          }
          bodyStyle={{ padding: '1px' }}
        >
          <span>
            With a proven track record of innovation, reliability, and customer
            satisfaction, we are the partner you can trust to stay ahead in a
            rapidly evolving digital world.
          </span>{' '}
        </Card>
      </div>
    </div>
  );
};

export default Aboutus;
