import {InputGroup, FormControl} from 'react-bootstrap';

const InputText = (props) => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder={props.placeholder}
                aria-label={props.label}
                aria-describedby="basic-addon1"
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </InputGroup>
    )
}

export default InputText;