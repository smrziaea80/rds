var delay_animation = 1000;
var delay_animation2 = 500;


function getScaleMin(){
  if      (vChartType == 0 )    return 300;
  else    return 0;
}
function getScaleMax(){
  var scaleMin=0;
  if      (vChartType== 0 )    return 1200;
  else if      (vChartType == 1 )    return 12000;
  else    return 20;
}

function getScaleTick(){
  var scaleMin=0;
  if           (vChartType == 0 )    return 100;
  else if      (vChartType == 1)    return 1000;
  else    return 1;
}


            var totalDuration = 21;
            var delayBetweenPoints = totalDuration / xData[0].length;
            var previousY = 1;
                            /*(ctx) => 
                              ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : 
                              ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y
                              */;
            var ani= {
              x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                  }
                  ctx.xStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              },
              y: {
                title: {
                  color:txtcolors[0],
                  display: true,
                  text: 'Capacity GW(e)',
                  font: {
                      size: 15,
                      weight:'bold'
                  }
              },
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                  }
                  ctx.yStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              }
            };



            var iniDataSet =   [{label: 'Capacity', backgroundColor:colors[0], type: 'line' }];
            var iniOptions =  {

                  tooltips:{
                        enabled:false,
                        callback: function(value){
                          return 'dadadad';
                          }
                  },
                  spanGaps: true,
                  animation :ani,  
                  interaction: {
                       intersect: false
                  },
                  plugins: {
                          title: {
                            color:txtcolors[0],
                            display: true,
                            text: chartTitle,
                            font: {
                              size: 24,
                              weight:'bold'
                          }
                        },
                        legend: {
                            display: false,
                        }
                      },
                    scales: {

                        y: {
                          title: {
                            color:txtcolors[0],
                            display: true,
                            text: vyLabel,
                            font: {
                                size: 15,
                                weight:'bold'
                            }
                        },
                          grid: {
                            display: true,
                          },
                          easing: 'linear',
                          min: getScaleMin(),
                          max: getScaleMax(),
                          ticks: {
                          color:txtcolors[0],
                          stepSize: getScaleTick(),
                          font: {
                            size: 12,
                            weight:'bold',
                              },
                           },
                        },




                        x: {
                          title: {
                            color:txtcolors[0],
                            display: true,
                            text: 'Years',
                            font: {
                                size: 15,
                                weight:'bold'
                            }
                        },
                          grid: {
                            display: false
                          },
                          easing: 'linear',
                          ticks: {
                            color:txtcolors[0],
                                  font: {
                                    size: 12,
                                    weight:'bold'
                                },
                            //    beginAtZero:false,
                                max:2050,
                                min:2000,
                                stepSize: 1,
                                callback: function(value){
                                  if (xData[0][value] < 2022 || xData[0][value] == 2030 ||  xData[0][value] == 2040 || xData[0][value] == 2050 )  
                                  return xData[0][value];
                                  else  return '';
                                }
                            },

                        },
                        
                    },
            
                };
            iniChartConfig =      { data: {labels:    xData[0],  datasets: []  },    options:iniOptions  };

            

