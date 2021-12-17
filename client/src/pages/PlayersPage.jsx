import ListGroup from 'react-bootstrap/ListGroup';
import ListItem from '../components/ListItem';

const PlayersPage = (props) => {
    return (
        <div className="container">
            <ListGroup as="ol" numbered variant="flush">
                {
                    props.players.map(player => (
                        <ListItem key={player.id} username={player.username} email={player.email} experience={player.experience} level={player.level} />
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default PlayersPage;


// import ListGroup from 'react-bootstrap/ListGroup';
// import ListItem from '../components/ListItem';

// const PlayersPage = (props) => {
//     return (
//         <div className="container">
//             <ListGroup as="ol" numbered variant="flush">
//                 {
//                     props.players.map(player => (
//                         <ListItem 
//                             key={player.id} 
//                             username={player.username} 
//                             email={player.email} 
//                             experience={player.experience} 
//                             level={player.level} 
//                             id={player.id} 
//                             onSelect={props.onSelect} 
//                         />
//                     ))
//                 }
//             </ListGroup>
//         </div>
//     )
// }

// export default PlayersPage;