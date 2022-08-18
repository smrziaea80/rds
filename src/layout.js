var layout1 = {
    showlegend: false,
    height: 850,
    width: 1200,
    xaxis: {
      
      range:[2000 ,2050],
      autorange:false,
      showline: true,
      showgrid: false,
      showticklabels: true,
      linecolor: 'rgb(204,204,204)',
      linewidth: 2,
      autotick: false,
      ticks: 'outside',
      tickcolor: 'rgb(204,204,204)',
      tickwidth: 2,
      ticklen: 5,
      tickfont: {
        family: 'Arial',
        size: 14,
        color: 'rgb(82, 82, 82)'
      }
    },
    yaxis: {
      range:[250,800],
      autorange:false,
      showgrid: false,
      zeroline: true,
      showline: false,
      showticklabels: true
    },
    autosize: false,
    margin: {
      autoexpand: false,
      l: 100,
      r: 20,
      t: 100,
      b: 50
    },
    annotations: [
      {
        xref: 'paper',
        yref: 'paper',
        x: 1.05,
        y: 1.05,
        xanchor: 'left',
        yanchor: 'bottom',
        text: 'Capacity Actual / Projections GW(e)',
        font:{
          family: 'Arial',
          size: 30,
          color: 'rgb(37,37,37)'
        },
        showarrow: false
      },
      {
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: -0.1,
        xanchor: 'center',
        yanchor: 'top',
        text: 'Years',
        showarrow: false,
        font: {
          family: 'Arial',
          size: 12,
          color: 'rgb(150,150,150)'
        }
      }
    ]
  };

  var layout=layout1;