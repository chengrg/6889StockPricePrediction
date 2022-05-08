import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Navbar';
import Welcome from './Welcome';
import {useState} from 'react';
import {Form, Row, Button, Col, Modal, Image} from 'react-bootstrap';
import predictresult from '../results/Predict_result.json'
import AAPLlogo from './aapllogo.png'
import GOOGlogo from './googlogo.png'
import AMZNlogo from './amazonlogo.png'
import TSLAlogo from './teslalogo.png'
import MSFTlogo from './microsoftlogo.png'
import tweetcount from '../results/tweet_count.json'
import AAPLcloud from '../results/apple_word_cloud.png'
import AMZNcloud from '../results/amazon_word_cloud.png'
import GOOGcloud from '../results/goog_word_cloud.png'
import GOOGLcloud from '../results/googl_word_cloud.png'
import MSFTcloud from '../results/msft_word_cloud.png'
import TSLAcloud from '../results/tsla_word_cloud.png'
import AAPL7days from '../results/AAPL-XGB-7.PNG'
import AAPL30days from '../results/AAPL-XGB-30.PNG'
import AAPL180days from '../results/AAPL-XGB-180.PNG'
import AMZN7days from '../results/AMZN-XGB-7.PNG'
import AMZN30days from '../results/AMZN-XGB-30.PNG'
import AMZN180days from '../results/AMZN-XGB-180.PNG'
import GOOG7days from '../results/GOOG-XGB-7.png'
import GOOG30days from '../results/GOOG-XGB-30.png'
import GOOG180days from '../results/GOOG-XGB-180.png'
import GOOGL7days from '../results/GOOGL-XGB-7.png'
import GOOGL30days from '../results/GOOGL-XGB-30.png'
import GOOGL180days from '../results/GOOGL-XGB-180.png'
import MSFT7days from '../results/MSFT-XGB-7.png'
import MSFT30days from '../results/MSFT-XGB-30.png'
import MSFT180days from '../results/MSFT-XGB-180.png'
import TSLA7days from '../results/TSLA-XGB-7.png'
import TSLA30days from '../results/TSLA-XGB-30.png'
import TSLA180days from '../results/TSLA-XGB-180.png'


function App() {
  const [company, setcompany] = useState('AAPL')
  const [loading, setloading] = useState(false)
  const [wordcloud, setwordcloud] = useState(false)
  const [wordcloudimage, setwordcloudimage] = useState('')
  const [priceimage, setpriceimage] = useState('')
  const [priceclick, setpriceclick] = useState(false)
  const [choosedays, setchoosedays] = useState('7days')
  const [choosepage, setchoosepage] = useState(false)
  const [predicted, setpredicted] = useState('')
  const [countvalue, setcountvalue] = useState(null)
  const [companylogo, setcompanylogo] = useState('')
  const [companyuri, setcompanyuri] = useState('')
  
  
  const handlewordcloudShow = () => {
    setwordcloud(true)
  }

  const handlewordcloudClose = () => {
    setwordcloud(false)
  }

  const handlepriceclickShow = () => {
    if(company === 'AAPL' && choosedays === '7days'){
      setpriceimage(AAPL7days)
    }
    if(company === 'AAPL' && choosedays === '30days'){
      setpriceimage(AAPL30days)
    }
    if(company === 'AAPL' && choosedays === '180days'){
      setpriceimage(AAPL180days)
    }
    if(company === 'AMZN' && choosedays === '7days'){
      setpriceimage(AMZN7days)
    }
    if(company === 'AMZN' && choosedays === '30days'){
      setpriceimage(AMZN30days)
    }
    if(company === 'AMZN' && choosedays === '180days'){
      setpriceimage(AMZN180days)
    }
    if(company === 'GOOG' && choosedays === '7days'){
      setpriceimage(GOOG7days)
    }
    if(company === 'GOOG' && choosedays === '30days'){
      setpriceimage(GOOG30days)
    }
    if(company === 'GOOG' && choosedays === '180days'){
      setpriceimage(GOOG180days)
    }
    if(company === 'GOOGL' && choosedays === '7days'){
      setpriceimage(GOOGL7days)
    }
    if(company === 'GOOGL' && choosedays === '30days'){
      setpriceimage(GOOGL30days)
    }
    if(company === 'GOOGL' && choosedays === '180days'){
      setpriceimage(GOOGL180days)
    }
    if(company === 'MSFT' && choosedays === '7days'){
      setpriceimage(MSFT7days)
    }
    if(company === 'MSFT' && choosedays === '30days'){
      setpriceimage(MSFT30days)
    }
    if(company === 'MSFT' && choosedays === '180days'){
      setpriceimage(MSFT180days)
    }
    if(company === 'TSLA' && choosedays === '7days'){
      setpriceimage(TSLA7days)
    }
    if(company === 'TSLA' && choosedays === '30days'){
      setpriceimage(TSLA30days)
    }
    if(company === 'TSLA' && choosedays === '180days'){
      setpriceimage(TSLA180days)
    }
    setpriceclick(true)
  }

  const handlepriceclickClose = () => {
    setpriceclick(false)
    setchoosepage(false)
  }

  const handlechoosepageShow = () => {
    setchoosepage(true)
  }

  const handlechoosepageClose = () => {
    setchoosepage(false)
  }


  const setloadingtrue = () =>{
    setloading(true)
    if(company === 'AAPL'){
      setcountvalue(tweetcount.apple)
      setcompanylogo(AAPLlogo)
      setcompanyuri('https://www.apple.com/')
      setwordcloudimage(AAPLcloud)
      setpredicted(predictresult.AAPL)
    }
    if(company === 'AMZN'){
      setcountvalue(tweetcount.amazon)
      setcompanylogo(AMZNlogo)
      setcompanyuri('https://www.amazon.com/')
      setwordcloudimage(AMZNcloud)
      setpredicted(predictresult.AMZN)
    }
    if(company === 'GOOG'){
      setcountvalue(tweetcount.goog)
      setcompanylogo(GOOGlogo)
      setcompanyuri('https://www.google.com/')
      setwordcloudimage(GOOGcloud)
      setpredicted(predictresult.GOOG)
    }
    if(company === 'GOOGL'){
      setcountvalue(tweetcount.googl)
      setcompanylogo(GOOGlogo)
      setcompanyuri('https://www.google.com/')
      setwordcloudimage(GOOGLcloud)
      setpredicted(predictresult.GOOGL)
    }
    if(company === 'MSFT'){
      setcountvalue(tweetcount.microsoft)
      setcompanylogo(MSFTlogo)
      setcompanyuri('https://www.microsoft.com/')
      setwordcloudimage(MSFTcloud)
      setpredicted(predictresult.MSFT)
    }
    if(company === 'TSLA'){
      setcountvalue(tweetcount.tesla)
      setcompanylogo(TSLAlogo)
      setcompanyuri('https://www.tesla.com/')
      setwordcloudimage(TSLAcloud)
      setpredicted(predictresult.TSLA)
    }
  }

  const setloadingfalse = () =>{
    setloading(false)
    setcompany('AAPL')
    setpriceimage('')
    setwordcloudimage('')
    setchoosedays('7days')
  }

  const handleClick = () => {

    fetch('../result/AAPL_result.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })  
  } 

  return (
      <div>
        <Navigation />
        {!loading ? (
          <main role='main' className='col-lg-12 mx-auto' style={{maxWidth: '1000px'}}>
          <div className='content mx-auto'>
          <Row className='g-1'>
          <p>  </p>
          Please choose a company:
          <Form.Select onChange={(e) => setcompany(e.target.value)}>
              <option value="AAPL">AAPL</option>
              <option value="AMZN">AMZN</option>
              <option value="GOOG">GOOG</option>
              <option value="GOOGL">GOOGL</option>
              <option value="TSLA">TSLA</option>
              <option value="MSFT">MSFT</option>
          </Form.Select>
          <Button variant="primary" onClick={setloadingtrue}>
              Submit
          </Button>
          </Row>
          </div>
          </main>
        ):(
          <main role='main' className='col-lg-12 mx-auto' style={{maxWidth: '1000px'}}>
            <h2>Predicted stock price of ${company}: {predicted}</h2>
            <p>Tweet count of ${company}: {countvalue}</p>
            <a href={companyuri}><img src={companylogo} /></a>
            <p> </p>
            <Button variant='info' onClick={handlewordcloudShow}>
              Word Cloud
            </Button>
            <Modal show={wordcloud} onHide={handlewordcloudClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Word Cloud image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Image src={wordcloudimage} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handlewordcloudClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <p> </p>
            <Button variant='info' onClick={handlechoosepageShow}>
              Stock price chart
            </Button>
            <Modal show={choosepage} onHide={handlechoosepageClose}>
              <Modal.Header closeButton>
                <Modal.Title>Choose how many days to show</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Select onChange={(e) => setchoosedays(e.target.value)}>
                  <option value="7days">7 days</option>
                  <option value="30days">30 days</option>
                  <option value="180days">180 days</option>
                </Form.Select>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handlechoosepageClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlepriceclickShow}>
                    Submit
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={priceclick} onHide={handlepriceclickClose}>
              <Modal.Header closeButton>
                <Modal.Title>Stock price chart</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Image src={priceimage} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handlepriceclickClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <p> </p>
            <Button variant="primary" onClick={setloadingfalse}>
            Choose another company
            </Button>
            </main>
        )}
        
      
      </div>
    
    
  );
}

export default App;


