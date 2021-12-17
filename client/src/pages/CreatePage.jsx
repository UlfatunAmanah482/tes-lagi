import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const CreatePage = (props) => {
    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title>Create New Player</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPlayers">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter player name" 
                                onChange={(e) => props.setTmpPlayer({
                                    ...props.tmpPlayer,
                                    username: e.target.value
                                })}
                                value={props.tmpPlayer.username} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlayerEmail">
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={(e) => props.setTmpPlayer({
                                    ...props.tmpPlayer,
                                    email: e.target.value
                                })}
                                value={props.tmpPlayer.email} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlayerExperience">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter experience" 
                                onChange={(e) => props.setTmpPlayer({
                                    ...props.tmpPlayer,
                                    experience: e.target.value
                                })}
                                value={props.tmpPlayer.experience} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPlayerLevel">
                            <Form.Control 
                                type="text" 
                                placeholder="Enter level" 
                                onChange={(e) => props.setTmpPlayer({
                                    ...props.tmpPlayer,
                                    level: e.target.value
                                })}
                                value={props.tmpPlayer.level} 
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" type="submit">
                        <Link
                            style={{  textDecoration: 'none', color: '#fff' }}
                            to={{
                                pathname: `/players`,
                            }}
                            onClick={props.onCreate}
                        >
                            Submit
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
      </div>
    )
}

export default CreatePage;