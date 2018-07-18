import React, { Component } from 'react';
import './App.css';
import Data from '../../data.json'
import MyTable from '../MyTable/MyTable';
import MyTableProjects from '../MyTableProjects/MyTableProjects';
import MyTablePaymentMethod from '../MyTablePaymentMethod/MyTablePaymentMethod'
import MyPaymentChart from '../MyPaymentChart/MyPaymentChart'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}

            ],
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    getDataProjects(){ 
        let res = Data.map(function(x){
            return x.transaction.project;
        }).filter(function (obj, pos, arr){
            return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
        });
        return res;
    }

    getDataPaymentMethod(){
        let res = Data.map(function(x){
            return x.transaction.payment_method;
        }).filter(function (obj, pos, arr){
            return arr.map(mapObj => mapObj['id']).indexOf(obj['id']) === pos;
        }).map(function(x){
            return { 
                name : x.name,
                count :  Data.reduce(function(r, a){
                    return r + (a.transaction.payment_method.id === x.id);
                },0)
            };
        });
        return res;
    }

    render() {
        return (
                <div>
                    <MyTable data={Data} />
                    <MyTableProjects data={this.getDataProjects()} />
                    <MyTablePaymentMethod data={this.getDataPaymentMethod()} />
                    <MyPaymentChart id="chart" data={this.getDataPaymentMethod()} />
                </div>
        );
    }
}

export default App;