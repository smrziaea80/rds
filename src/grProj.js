
function animateProj(xChart, i){
  var dslow=[];
  var dshigh=[];  
for( var v=0 ; v<xData[0].length;v++ )
{
 var myval=0;

 for (var z=0; z<xDataProjYears[i].length; z++)
  {
    
           if (xData[0][v]==xDataProjYears[i][z]){
                  dslow.push (yDataProjValues[i][0][z]); 
                  dshigh.push(yDataProjValues[i][1][z]); 
                  myval++;
                //  console.log(xData[0][v]+ ' ' + dslow);
                }
  }

  if (myval==0){
      dslow.push(null);
      dshigh.push(null);

  }

}     

 
  var ds1 ={label: 'Projection Low', type: 'line',pointRadius: mProj, pointHoverRadius: mProj+2,  borderColor:  colors[1],  Color: colors[1],  borderWidth: lwProj, data:dslow};
  xChart.data.datasets.push(ds1);  
  
  var ds2 ={label: 'Projection High',type: 'line',pointRadius: mProj,pointHoverRadius: mProj+2 ,   borderColor:  colors[2],  Color: colors[2],  borderWidth: lwProj ,data : dshigh};
  xChart.data.datasets.push(ds2);  

  setTimeout(function(){
    xChart.update();
  },delay_animation2);

  
}
  



