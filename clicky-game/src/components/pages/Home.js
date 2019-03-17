import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home() {
  return (
    <div>
      < Hero backgroundImage = "https://cdn-s3.si.com/styles/marquee_large_2x/s3/images/golden-tate-detroit-lions-minnesota-vikings-nfl-overtime-2016.png?itok=Dw-8LcUL" >
        <h1 id="doggo">NFL CLICKY GAME</h1>
        <h2 id = "secondFont" > Start Away </h2>
      </Hero>
      
      <Container fluid style={{ marginTop: 30 }}>
        <Row>
          <Col myprop = "hello" size="md-12">
            <h1 className = "welcome text-center"> ROWS APPENDED HERE </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          
           
          
          </Col>
        </Row>
      </Container>
      
      
    </div>
    
  );
}

export default Home;
