function updateScale(chart) {
  chart.options.scales.y = {
    title: {
      color:txtcolors[0],
      display: true,
      text: vyLabel,
      font: {
          size: 15,
          weight:'bold'
      }
  },
    min: getScaleMin(),
    max: getScaleMax(),
    ticks: {
    stepSize: getScaleTick(),
    font: {
      size: 12,
      weight:'bold'
      },
  }
  };
  chart.options.plugins["title"]["text"]= chartTitle;


  chart.update();
}

function newChart(){
    
  $('#GraphContainer').html('&nbsp;');
  $('#GraphContainer').append('<canvas id="myCan" style="width:800px;height:350px"></canvas>');
  var ctxx = $("#myCan").get(0).getContext("2d"); 
  var xChart =  new Chart(ctxx,iniChartConfig);
  removeData(xChart);

  return xChart;
}


function reDraw(h,d,l){
    Plotly.newPlot(h,d,l);
  }



  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
  //chart.data.labels = [];
  chart.data.datasets =[] ;
  chart.update();
 // console.log(chart);
}


