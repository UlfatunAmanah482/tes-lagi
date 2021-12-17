import {Card, Form, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const InputForm = (props) => {
    return (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="3">
                Type text here
            </Form.Label>
            <Col sm="6">
                <Form.Control 
                    type="text" 
                    placeholder="Enter Username" 
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        username: e.target.value
                    })}
                    value={props.tmpPlayer.username}  
                />
            </Col>
            <Col sm="3">
                <Button variant="primary" type="submit">
                    <Link
                        style={{  textDecoration: 'none', color: '#fff' }}
                        to={{
                            pathname: `/search-player`,
                        }}
                        onClick={props.onSearch(props.username)}
                    >
                        Submit
                    </Link>
                </Button>
            </Col>
        </Form.Group>
        // <Form.Control 
        //     type="text" 
        //     placeholder="Enter Username" 
        //     onChange={(e) => props.setTmpPlayer({
        //         ...props.tmpPlayer,
        //         username: e.target.value
        //     })}
        //     value={props.tmpPlayer.username}  
        // />
    )
}

export default InputForm;