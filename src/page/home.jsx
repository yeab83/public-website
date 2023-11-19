import Aboutus from '../component/aboutus';
import Centerline from '../component/centerline';
import Empowering from '../component/empowering';
import Footer from '../component/footer';
import Howtoreachus from '../component/howtoreachus';
import Navbar from '../component/navbar';

const Home = () => {
  return (
    <div>
      <>
        <Navbar />

        <div>
          <Empowering />
          <div>
            <Centerline id="centerline" />{' '}
          </div>
          <Aboutus />
          <Howtoreachus />
        </div>
        <Footer id="footer" />
      </>
    </div>
  );
};

export default Home;
