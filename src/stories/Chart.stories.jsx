import React from "react";

import { Chart } from "./Chart";

export default {
    title: "Example/Chart",
    component: Chart,    
}

const Template = (args) => <Chart {...args} />;

export const PieChart = Template.bind({});

PieChart.args = {
    title: "Pie Chart",
    label: "Label",
    value: 10,
    color: "#FFF",
    totalValue: 100,
    background: "#DFDFDF",
    
}