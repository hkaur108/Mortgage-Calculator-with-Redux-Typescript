import ShowResults from './ShowResults'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MortgageForm from './Form'
import FinalResults from './FinalResults';
import { useAppSelector } from '../redux/hooks';
import { mortgageSelector } from '../redux/mortgageSlice';

export default function MainContainer() {
    const isClicked =useAppSelector(mortgageSelector);
    

  return (
    <aside id='aside'>
        <Container className='container-1'>
        <Row className='container__row'>
            <Col className='container__row__col-1'>  
                <MortgageForm/>
            </Col>
            <Col className='container__row__col-2'>
               {isClicked.isClicked ? <FinalResults/> : <ShowResults/>}
            </Col>
        </Row>
    </Container>
    </aside>
  
  )
}
