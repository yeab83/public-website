import Aboutus from './component/aboutus';
import Centerline from './component/centerline';
import Empowering from './component/empowering';
import Footer from './component/footer';
import Navbar from './component/navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div>
          <Empowering />
          <div id="centerline">
            <Centerline />
          </div>
          <Aboutus />
          {/* <Howtoreachus /> */}
        </div>
        <div id="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
