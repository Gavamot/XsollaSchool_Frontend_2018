import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class MyTableProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "Projects", field: "name"},
            ],
            rowData: props.data
        }
    }

    render() {
        return (
                <div>
                    <h1>cписок всех проектов, по которым совершались платежи</h1>
                    <div 
                    className="ag-theme-balham"
                    style={{ 
                        height: '230px', 
                        width: '220px' }} 
                    >
                        <AgGridReact
                            enableFilter={true}
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}>
                        </AgGridReact>
                    </div>
                </div>
            );
    }
}

export default MyTableProjects;