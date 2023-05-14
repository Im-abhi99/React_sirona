import CollapsibleExample from './Navbar'
import Carousal1 from "./carousal"
import Category from './Cate';
import Carousel2 from './Carousel2';
import Sol from './solution';
import Car from './Card';
import Spot from './Spotlight';
import About from './About';
import Contact from './Contacts';

 function App() {
  return (
    <>    <div>
      < CollapsibleExample/>
      <Carousal1/>
      <div className="container-fluid text-center">
        <img className=" w-100 p-lg-5" src="https://files.thesirona.com/site-images/original/About-us-2.png" alt="" />
      </div>
      <Category/>
   
    </div>
    <Car />
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/3360x279.png" alt=""  />
    <img className='img-fluid p-lg-5 w-100' src="https://files.thesirona.com/site-images/original/hb.gif" alt=""  />
    <Carousel2 />
    <Sol />
    <Spot/> 
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Safety-Standard-Banner_3.png" alt=""  />
    
    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Review_3.png" alt=""  />

    <img className='img-fluid mt-lg-2 mb-lg-2 w-100' src="https://files.thesirona.com/site-images/original/Media-Coverage-Banner_3.png" alt=""  />

    <About />
    <br />
    <Contact />
   
   
    </>

  );
}
export default App;
