import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class Edit extends React.Component {
    render() {
        const columns = [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'username',
            text: 'Username'
        }, {
            dataField: 'email',
            text: 'Email'
        }, {
            dataField: 'experience',
            text: 'Experience'
        }, {
            dataField: 'level',
            text: 'Level'
        }];

        return (  
            <div className="container">
                <BootstrapTable
                    keyField="id"
                    data={ this.props.players }
                    columns={ columns }
                    cellEdit={ cellEditFactory({ mode: 'click' }) }
                />
            </div>
        )
    }
}

export default Edit;