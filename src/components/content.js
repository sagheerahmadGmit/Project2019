import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

class Content extends React.Component {
  render() {
    return (

      <div className="HomeApp">
        <h1>AutoTrader - Best Cars Around!</h1>
        <br/>
        <Carousel>
          <Carousel.Item>
            <a href="/read">
              <img
                className="d-block w-100"
                src="https://o.aolcdn.com/images/dims3/GLOB/crop/4032x2268+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/368c9f274c39ebe03db96c5c7969d985/206418460/rdx+x3+glc+q5.jpg"
                alt="First slide"
                className="center"
              />
            </a>
            <Carousel.Caption>
              <h3>Best Prices for Cars.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/read">
              <img
                className="d-block w-100"
                src="https://o.aolcdn.com/images/dims3/GLOB/crop/1760x990+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/c009ec432d4af4ec1291a354563607f3/206309442/avalon+comparison.jpg"
                alt="Third slide"
                className="center"
              />
            </a>
            <Carousel.Caption>
              <h3>No one does it cheaper!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/read">
              <img
                className="d-block w-100"
                src="https://o.aolcdn.com/images/dims3/GLOB/crop/2400x1350+0+0/resize/800x450!/format/jpg/quality/85/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2018-10/04560e80-d0ca-11e8-ba55-4b5b69b6a0bc"
                alt="Third slide"
                className="center"
              />
            </a>
            <Carousel.Caption>
              <h3>The newest models and brands. Only Here!!</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br /><br />
        <div>
          <a href="/read">
            <img
              className="d-block w-100"
              src="https://www.leithcars.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Ford/2017/Mustang/images/2017-Ford-Mustang-01.jpg"
              alt="Picture of a car"
              className="center"
              width="400px"
            />
          </a>

          <a href="/read">
            <img
              className="d-block w-100"
              src="https://o.aolcdn.com/images/dims3/GLOB/crop/2560x1441+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/f51115e4a671a0043ae9c3d202c2e50a/205697548/01-2018-aston-martin-db11-v8-fd.jpg"
              alt="Picture of a car"
              className="center"
              width="400px"
            />
          </a>
        </div>

      </div>

    );
  }
}

export default Content;
