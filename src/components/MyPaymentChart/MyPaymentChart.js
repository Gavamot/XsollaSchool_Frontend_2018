import React, { Component } from 'react';
import Highcharts from 'highcharts'
import addMore from "highcharts/highcharts-more";
import addDrilldown from "highcharts/modules/drilldown";
import addNoData from "highcharts/modules/no-data-to-display";
import addExporting from "highcharts/modules/exporting";
addMore(Highcharts)
addDrilldown(Highcharts)
addNoData(Highcharts)
addExporting(Highcharts)

class MyPaymentChart extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.data = props.data;
    }

    render() {
        return (
            <div id={this.id}></div>
        )
    }

    getAxis(){
        return this.data.map(function(x){
            return x.name;
        });
    }

    getSeries(){
        return this.data.map(function(x){
            return x.count;
        });
    }

    componentDidMount(){
        
        Highcharts.chart(this.id, {
            title: {
                text: 'график популярности платежных систем'
            },
            xAxis: {
                categories: this.getAxis()
              },
            series: [{
                type: 'column',
                colorByPoint: true,
                data:   this.getSeries(),
                showInLegend: false
            }]
        })
    }
}

export default MyPaymentChart;