
var baseyears = xData[0];
var baseLength=xData[0].length;


function animateCapacity(xChart, i){
  myVar=setTimeout(function(){
    if (i==0)
    {
            var dscap=[];
            var ds1 ={label: vyLabel, type: 'line',pointRadius: mActual, pointHoverRadius: mActual+2,  borderColor:  colors[0],  Color: colors[0],  borderWidth: lwActual, data:[]};
            xChart.data.datasets.push(ds1); 
            xChart.data.datasets[0].data.push(yData[vChartType][i]);

    }
    else
    {  
     // console.log(yData[vChartType][i]);
      xChart.data.datasets[0].data.push(yData[vChartType][i]);
    }  
      xChart.update();
      var cbCheck = $('#cb'+ xData[0][i]).is(':checked');
     
      if(cbCheck){
           
            animateProj(xChart, i);
      }

     if(i==baseLength){
       clearTimeout(myVar);
       return;
     }
  
     animateCapacity(xChart,i+1)
  },delay_animation);

}






