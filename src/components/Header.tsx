import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header(props:any) {
  const {handleClear}=props;
 
  return (
    <Container className=''>
      <Row className='d-flex align-items-center'>
        <Col className="col-8">
        <h1 className='fw-bold'>Mortgage Calculator</h1>
        </Col>
         <Col>
          <a className='' aria-label='click this to clear the input fields' onClick={handleClear}>Clear all</a>
         </Col>  
      </Row>
    </Container>
  )
}
