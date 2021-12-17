import ListGroup from 'react-bootstrap/ListGroup';

const ListItem = (props) => {
    return (
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.username}</div>
                <h6>email: {props.email}</h6>
                <h6>experience: {props.experience}</h6>
                <h6>level: {props.level}</h6>
            </div>
        </ListGroup.Item>
    )
}

export default ListItem;