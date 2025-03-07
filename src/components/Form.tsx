import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from "../redux/hooks";
import { getData } from '../redux/mortgageSlice';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './Header'
import InputGroup from 'react-bootstrap/InputGroup';

export default function MortgageForm() {

  interface DataType {
    amount: number | string,
    term: number | string,
    interest: number | string,
    type: String,

  }
  const [validated, setvalidated] = useState<boolean>(false);
  const [data, setData] = useState<DataType | any>({ amount: "", term: "", interest: "", type: "" })
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!data.amount || !data.interest) {
      setvalidated(true);
    }
    else {
      dispatch(getData(data));
      setData({ amount: "", term: "", interest: "", type: "" });
    }
  }
  const handleClear = () => {
    setData({ amount: "", term: "", interest: "", type: "" });
  }
  return (

    <Container>
      <Row>
        <Header as={Col} handleClear={handleClear} />
      </Row>
      <Form as={Row} noValidate validated={validated}>
        <Form.Group  controlId="mortgage">
          <Form.Label>Mortgage Amount</Form.Label>
          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-addon1" className={(!data.amount) ? "input-group-text-error":'input-group-text'} >£</InputGroup.Text>
            <Form.Control
              type="number"
              name="amount"
              value={data.amount}
              required
              onChange={(e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })}
            />
            <Form.Control.Feedback type="invalid">
              This field is required
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Row>
          <Form.Group as={Col} md="6" lg="6" sm="12" className="" controlId="term">
            <Form.Label className=''>Mortgage Term</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="number"
                name="term"
                value={data.term}
                required
                onChange={(e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })} />
              <InputGroup.Text className='input-group-text'>years</InputGroup.Text>
              <Form.Control.Feedback type="invalid"> This field is required</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-1"
            as={Col} md="6" lg="6" sm="12"
            controlId="rate">
            <Form.Label>Interest Rate</Form.Label>
            <InputGroup className="mb-1">
              <Form.Control
                type="number"
                name="interest"
                required
                onChange={(e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })}
                value={data.interest} />
              <InputGroup.Text className={(validated == true) ? ".input-group-text-error" : ".input-group-text"}>%</InputGroup.Text>
              <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-1">
            <Form.Text className="mb-1">Mortgage Type</Form.Text>
            <Col className='border border-mute mb-2 p-1'>
              <Form.Check type="radio" name="type" id='repayment' value="repayment" checked={data.type === "repayment"} onChange={(e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })} aria-label="radio 1" label="Repayment"  className='fw-bold'/>
            </Col>
            <Col className='border border-mute p-1'>
              <Form.Check type="radio" name="type" id="interest" value="interest" checked={data.type === "interest"} aria-label="radio 2" label="Interest Only" onChange={(e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })} className='fw-bold'/>
            </Col>
            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className='mortgage-button fw-bold mt-3' onClick={handleSubmit} > <img src= {process.env.PUBLIC_URL+"/assets/images/icon-calculator.svg"} alt='calculator SVG' /> Calculate Mortgage</Button>
      </Form>
    </Container>
  )
}

