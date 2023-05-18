import { Card } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function Car()
{
  // const settings = {
  //   infinite: true,
  //   speed: 450,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
 return(
        <>
        <div className="" >

        <div className="text-center mb-lg-3  mt-lg-5">
            <span className="name ">
            Best Selling
            </span>
            </div>

          
<div className="d-lg-flex flex-warp container">

<Card className="w-100 m-2" >
 <Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/medium-menstrual-cup-listing-00.jpg" />
<Card.Body>
<Card.Title>Mentstrual Cup with pouch...</Card.Title>
<Card.Text>FDA Approuved | 100% medical gre...</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>


<Card className="w-100 m-2">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" />
    <Card.Body>
   <Card.Title>Sirona Natural Back And Burn Cream..</Card.Title>
   <Card.Text> 100gm | Tasmanian pepper..</Card.Text>
   <div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
    <div className='cardrate text-center'>Rs 259 </div>
   </Card.Body>
</Card>


<Card className="w-100 m-2">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" />
   
<Card.Body>
   <Card.Title>Sirona Natural Exfoliating Face Wash |1....</Card.Title>
   <Card.Text className="text-secondary ">Anto acne,  Siitable for all Skin Type, Reduces Bi..
   </Card.Text>
   <div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
    <div className='cardrate text-center'>Rs 259 </div>
    </Card.Body>
</Card>


<Card className="w-100 m-2">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" />
     <Card.Body>
    <Card.Title>Sirona Natural Back And Burn Cream..</Card.Title>
    <Card.Text> 100gm | Tasmanian pepper..</Card.Text>
    <div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
     <div className='cardrate text-center'>Rs 259 </div>
    </Card.Body>
</Card>


<Card className="w-100 m-2">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" />
      <Card.Body>
    <Card.Title>Sirona Natural Exfoliating Face Wash |1.... </Card.Title>
    <Card.Text className="text-secondary ">Anto acne,  Siitable for all Skin Type, Reduces Bi..
    </Card.Text>
    <div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
     <div className='cardrate text-center'>Rs 259 </div>
     </Card.Body>
</Card>




 
</div>

</div>


        </>
    )
}

export default Car;