import { Card } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';




function Car()
{
 return(
        <>
        <div >

        <div className="text-center mb-lg-3  mt-lg-5">
            <span className="name ">
            Best Selling
            </span>
            </div>

<Carousel className="mb-lg-5"  variant="dark">
<Carousel.Item >
<div className="d-flex">

<Card className="w-50 shadow-lg m-lg-3">
 <Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/medium-menstrual-cup-listing-00.jpg" />
<Card.Body>
<Card.Title>Mentstrual Cup with pouch...</Card.Title>
<Card.Text>FDA Approuved | 100% medical gre...</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

<Card className="w-50 shadow-lg  m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" />
 <Card.Body>
<Card.Title>Sirona Natural Back And Burn Cream..</Card.Title>
<Card.Text> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

<Card className="w-50  shadow-lg m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" />
  <Card.Body>
<Card.Title>Sirona Natural Exfoliating Face Wash |1.... </Card.Title>
<Card.Text className="text-secondary ">Anto acne,  Siitable for all Skin Type, Reduces Bi..
</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
 </Card.Body>
 </Card>


 <Card className="w-50   shadow-lg m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" />
 <Card.Body>
<Card.Title>Sirona Natural Back And Burn Cream..</Card.Title>
<Card.Text> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

</div>
</Carousel.Item >

<Carousel.Item >

<div className=" d-flex">

<Card className="col w-50   shadow-lg  m-lg-3">
 <Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/medium-menstrual-cup-listing-00.jpg" />
<Card.Body>
<Card.Title>Mentstrual Cup with pouch...</Card.Title>
<Card.Text>FDA Approuved | 100% medical gre...</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

<Card className=" col w-50   shadow-lg  m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/bum-cream-1_1.png" />
 <Card.Body>
<Card.Title>Sirona Natural Back And Burn Cream..</Card.Title>
<Card.Text> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

<Card className="w-50  shadow-lg col m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Exfoliating-Facewash_2.jpg" />
  <Card.Body>
<Card.Title>Sirona Natural Exfoliating Face Wash |1....</Card.Title>
<Card.Text className="text-secondary ">Anto acne,  Siitable for all Skin Type, Reduces Bi..
</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>2671 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
 </Card.Body>
 </Card>


 <Card className="w-50 shadow-lg col m-lg-3">
<Card.Img variant="top" className="img-fluid" src="https://files.thesirona.com/site-images/400x400/Period-Stain-Remover-1.jpg" />
 <Card.Body>
<Card.Title>Sirona Antibacterial Period Strain Remover</Card.Title>
<Card.Text> 100gm | Tasmanian pepper..</Card.Text>
<div className='cardnum justify-content-evenly d-flex'><b>4.8</b><i class="fa-solid fa-star"></i><hr /><b>48 <br />Ratings</b></div>
 <div className='cardrate text-center'>Rs 259 </div>
</Card.Body>
</Card>

</div>
</Carousel.Item >
</Carousel>
</div>


        </>
    )
}

export default Car;