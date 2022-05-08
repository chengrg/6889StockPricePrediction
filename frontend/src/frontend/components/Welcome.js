import {Carousel} from 'react-bootstrap'
import image1 from './welcome.png'

const Welcome = () =>{
    return (
        <Carousel>
      <Carousel.Item>
        <img width={900} height={500} src={image1}/>
        <Carousel.Caption>
          <h3>Welcome to our ELEN 6889 demo!</h3>
          <p>This is a simple APP which can show our stock price prediction results and some other data. Enjoy!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    )
}

export default Welcome;