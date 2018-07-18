import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class MyTablePaymentMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "Payment method", field: "name"},
                {headerName: "Count", field: "count"}
            ],
            rowData: props.data
        }
    }

    render() {
        return (
                <div>
                    <h1>рейтинг популярности платежных систем </h1>
                    <div 
                    className="ag-theme-balham"
                    style={{ 
                        height: '150px', 
                        width: '500px' }} 
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

export default MyTablePaymentMethod;