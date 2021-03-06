import React from 'react';

import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export
} from 'devextreme-react/pie-chart';

import { areas } from './data.js';

class PieChartHours extends React.Component {
    constructor(props) {
        super(props);

        this.pointClickHandler = this.pointClickHandler.bind(this);
        this.legendClickHandler = this.legendClickHandler.bind(this);
    }

    render() {
        return (
            <PieChart
                id="pie"
                dataSource={areas}
                palette="Bright"

                onPointClick={this.pointClickHandler}
                onLegendClick={this.legendClickHandler}
            >
                <Series
                    argumentField="country"
                    valueField="area"
                >
                    <Label visible={true}>
                        <Connector visible={true} width={1} />
                    </Label>
                </Series>


                <Export enabled={false} />
            </PieChart>
        );
    }

    pointClickHandler(e) {
        this.toggleVisibility(e.target);
    }

    legendClickHandler(e) {
        let arg = e.target;
        let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        this.toggleVisibility(item);
    }

    toggleVisibility(item) {
        item.isVisible() ? item.hide() : item.show();
    }
}

export default PieChartHours;