import {ListGroup, Card} from 'react-bootstrap';
import ListItem from '../components/ListItem';
import InputText from '../components/InputText';

const Search = (props) => {
    return (
        <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title>Search Player by Username</Card.Title>
                    <InputText setSearch={props.setSearch} placeholder="Search by Username" label="username" />
                    <ListGroup as="ol" numbered variant="flush">
                        {props.players
                            .filter((player) => 
                                player.username.toLowerCase().includes(props.search.toLowerCase()) 
                            )
                                .map(player => (
                                    <ListItem key={player.id} username={player.username} email={player.email} experience={player.experience} level={player.level} />
                                ))
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Search;