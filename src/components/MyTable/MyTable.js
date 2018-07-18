import React, { Component } from 'react';
import './MyTable.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "User name", field: "user.name"},
                {headerName: "Payment method", field: "transaction.payment_method.name"},
                {headerName: "Amount", field: "payment_details.payment.amount"},
                {headerName: "Amount from ps", field: "payment_details.payment.amount_from_ps"},
                {headerName: "Currency", field: "payment_details.payment.currency"},
                {headerName: "Project", field: "transaction.project.name"}
            ],
            rowData: props.data
        }
    }

    updateData(data)
    {
        this.setData(data)
    }

    render() {
        return (
            <div>
                <h1>транзакции в виде таблицы</h1>
                <h3>Для фильтрация таблицы по введенным данным - наведите курсор на столбец по которому необходима фильтровать данные. Появится иконка "три полоски" нажмите на ней</h3>
                <div 
                  className="ag-theme-balham"
                  style={{ 
	                height: '200px', 
	                width: '1220px' }} 
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

export default MyTable;