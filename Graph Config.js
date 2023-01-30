const candlestickConfig = (symbol, data) => {
    let name = symbol + 'Stock Price';
    return {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: name 
        },
        series: [
            {
                type: 'candlestick',
                name: name,
                data: data,
                dataGrouping: {
                    units: [
                        ['week', [1]
                    ],
                    [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                    ]
                }
            }
        ]
    };
};
const ohlcConfig = (symbol, data) => {
    let name = symbol + 'Stock Price';
    return {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: name 
        },
        series: [
            {
                type: 'indicator',
                name: name,
                data: data,
                dataGrouping: {
                    units: [
                        ['week', [1]
                    ],
                    ],
                    [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                }
            }
        ]
    };
};
const columnConfig = (symbol, data) => {
    let name = symbol + 'Stock Volume';
    return {
        let name = symbol + 'Stock Volume';
        return {
            chart: {
                alignTicks: false 
            },

            rangeSelector: {
                selected: 11
            },

            title: {
                text: name 
            },

            series: [
                {
                    type: 'column',
                    name: name,
                    data: data,
                    dataGrouping: {
                        units: [
                            [
                                'week',
                                [1]
                            ],
                            [
                                'month',
                                [1, 2, 3, 4, 6]
                            ]
                        ]
                    }
                }
            ]
        }
    }
};
const columnRangeConfig = (symbol, data) => {
    let name = symbol + ' Daily Low High';
    return {
        chart: {
            type: 'columnrange'
        },

        rangeSelector: {
            selected: 2 
        },

        title: {
            text: name 
        },

        title: {
            text: name
        },

        series: [
            {
                type: 'columnrage',
                name: 'Low - high',
                data: data 
            }
        ]
    }
};
const lineConfig = (symbol, data) => {
    let name = symbol + 'Stock price';
    return {

        rangeSelector: {
            selected: 1 
        },

        title: {
            text: name
        },

        series: [
            {
                name: name,
                data: data,
                type: 'line',
                tooltip: {
                    valueDecimals: 2
                }
            }
        ]
    }
}
const areaConfig = (symbol, data) => {
    let name = symbol + 'Stock price';
    return {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: name 
        },

        series: [
            name: name,
            data: data,
            type: 'line',
            tooltip: {
                valueDecimals: 2
            }
        ]
    }
}
const stepConfig = (symbol, data) => {
    let name = symbol + 'Stock price';
    return {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: name
        },

        series: [
            name: name,
            data: data,
            type: 'line',
            tooltip: {
                valueDecimals: 2
            }
        ]
    }
}
const splineConfig = (symbol, data) => {
    let name = symbol + 'Stock price';
    return {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: name 
        },

        series: [
            name: name,
            data: data,
            type: 'line',
            tooltip: {
                valueDecimals: 2
            }
        ]
    }
}
const stackColumnConfig = (symbol = "hey", data = []) => {
    let name = symbol + 'per quarter';
    return {

        title: {
            text: name 
        },
        xAxis: {
            categories: ['AAPL']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Analysis for AAPl'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: '',
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        legend: {
            x: -30,
            verticalAllign: 'top',
            y: 25,
            floating: true,
            backgroundcolor: 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false 
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    style: {
                        textShadow: '3px black Ariel'
                    }
                }
            }
        },

        series: [
            {
                name: 'Q1',
                data: [165.02, 167.82, 163.91, 167.39, 166.64]
            }, {
                name: 'Q2'
                data: [151.11, 153.72, 150.36, 153.03, 152.57]
            }, {
                name: 'Q3'
                data: [145.49, 146.69, 140.61, 143.75, 143.51]
            }
        ]
    }
}
const multiConfig = (symbol, seriesOptions) => {
    console.log('seriesOptions', seriesOptions);
    return {
        rangeSelector: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function() {
                    return (this.value > 0 ? '+' : '') + this.value + '%';
                }
            },
            plotLines: [
                {
                    value: 0,
                    width: 2,
                    color: 'silver'
                }
            ]
        },

        plotOptions: {
            series: {
                compare: 'percent'
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2
        },

        series: seriesOptions 
    }
}

const graphConfigs = {
    candlestick: candlestickConfig,
    spline: splineConfig,
    column: columnConfig,
    line: lineConfig,
    step: stepConfig,
    area: areaConfig,
    ohlc: ohlcConfig,
    stackColumnConfig: stackColumnConfig,
    multiConfig: multiConfig,
    columnRange: columnConfig,
}