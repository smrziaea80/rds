var vChartType=0;
var vactual=0; 
var vyLabel= "Capacity GW(e) ";
var chartTitle= "Nuclear Power Net Electric Capacity - Actual Vs Projections";


var xData = 
[
  [
  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010,  2011,  2012,  2013,  2014,  2015,  2016,  2017,  2018,  2019,
  2020,  2021,  2022,  2023,  2024,  2025,  2026,  2027,  2028,  2029,  2030,  2031,  2032,  2033,  2034,  2035,  2036,  2037,  2038,
  2039,  2040,  2041,  2042,  2043,  2044,  2045,  2046, 2047,  2048,  2049,  2050, 2051]  
];

var yData = 
[
  [ 352.7,    357.5,    359.8,    364.5,    368,    369.5,    371.6,    371.5,    370.6,    375.2,    368.8,    373.2, 
    376.2,    376.2,    382.7,    390.4,    391.6,    396.5,    392,    392.5,    389.5 
  ],
  [
    2511.1,2553.2,2504.8,2616.2,2626.3,2660.8,2608.2,2597.8,2558.1,2629.8,2518,2346.2,2358.9,2410.4,2441.3,2477.3,2502.8,2562.8,2657.2,2553.2,2653.3
  ],
  [16.2, 16 , 16.1,    16,    15.5,    15.2,    14.2,    14,    13.8,    13.5,    12.3,    11.3,    11,    11.1,    11.2,    10.57,    10.3,    10.2,    10.4,    10.2,    null     ]


];

var xDataProjYears = 
[
  [2001,2010,2015,2020],
  [2002,2010,2020,2030],
  [2003,2010,2020,2030],
  [2004,2010,2020,2030],
  [2005,2010,2020,2030],
  [2006,2010,2020,2030],
  [2007,2010,2020,2030],
  [2008,2010,2020,2030],
  [2009,2020,2030,2050],
  [2010,2020,2030,2050],
  [2011,2020,2030,2050],
  [2012,2020,2030,2050],
  [2013,2030,2040,2050],
  [2014,2030,2040,2050],
  [2015,2020,2030,2050],
  [2016,2020,2030,2050],
  [2017,2030,2040,2050],
  [2018,2030,2040,2050],
  [2019,2030,2040,2050],
  [2020,2030,2040,2050],
  [2021,2030,2040,2050] 
];



var yDataProjValuesCap = [ 
  [[352.7,378,381,354],
  [352.7,406,451,509]],
  
  [[357.5,391,423,386],
  [357.5,401,501,573]],
  
  [[359.8,396,427,423],
  [359.8,408,512,592]],
  
  [[364.5,380,416,418],
  [364.5,395,516,640]],
  
  [[368,381,423,414],
  [368,390,520,679]],
  
  [[369.5,378,425,447],
  [369.5,385,525,691]],
  
  [[371.6,376,437,473],
  [371.6,383,542,748]],
  
  [[371.5,372,445,511],
  [371.5,380,543,807]],
  
  [[370.6,372,445,511],
  [370.6,380,543,807]],
  
  [[375.2,377.1,390.2,417],
  [375.2,430.5,598.2,898]],
  
  [[368.8,345,332,382],
  [368.8,554,717,874]],
  
  [[373.2,421,456,469],
  [373.2,508,740,1137]],
  
  [[376.2,366,353,371],
  [376.2,496,628,715]],
  
  [[376.2,366,378,394],
  [376.2,470,629,792]],
  
  [[382.7,379.5,385.3,371],
  [382.7,440.9,631.8,964]],
  
  [[390.4,377.1,390.2,417],
  [390.4,430.5,598.2,898]],
  
  [[391.6,345,332,382],
  [391.6,554,717,874]],
  
  [[396.5,352,323,356],
  [396.5,511,641,748]],
  
  [[392,366,353,371],
  [392,496,628,715]],
  
  [[392.5,366,378,394],
  [392.5,470,629,792]],
  
  [[389.5,366,378,394],
  [389.5,470,629,792]],
  
    
];

var yDataProjValuesGen=[
  [[2511.1,2738,2774,3588],
[2511.1,2932,3284,3703]],

[[2553.2,2830,3085,2881],
[2553.2,2987,3756,4369]],

[[2504.8,3147,3378,3379],
[2504.8,3241,4032,4702]],

[[2616.2,2776,3055,3115],
[2616.2,2881,3769,4753]],

[[2626.3,2782,3102,3074],
[2626.3,2842,3803,5043]],

[[2660.8,2760,3120,3325],
[2660.8,2809,3837,5141]],

[[2608.2,2748,3207,3522],
[2608.2,2794,3946,5551]],

[[2597.8,2732,3261,3771],
[2597.8,2785,3962,5930]],

[[2558.1,3314,4040,4342],
[2558.1,4006,5938,10436]],

[[2629.8,3240,3946,4513],
[2629.8,3955,5878,9893]],

[[2518,3183,3595,3780],
[2518,3829,5837,9163]],

[[2346.2,3078,3426,3548],
[2346.2,3790,5689,8971]],

[[2358.9,2854,3099,3327],
[2358.9,3330,5328,5799]],

[[2410.4,2775,2980,2992],
[2410.4,3181,4823,7771]],

[[2441.3,2758,3019,3359],
[2441.3,3103,4560,7236]],

[[2477.3,2684,2634,3079],
[2477.3,4289,5686,7041]],

[[2502.8,2732,2560,2869],
[2502.8,3969,5087,6028]],

[[2562.8,2836,2804,2990],
[2562.8,3844,4977,5761]],

[[2657.2,2872,2774,2929],
[2657.2,3682,4933,5762]],

[[2553.2,2850,2986,3140],
[2553.2,3609,4853,6166]],

  [[2653.3,null,null,null],
  [2653.3,null,null,null]],
  
  
  
];
 var yDataProjValuesNS = [
  [[16.2,15,15,12],
  [16.2,14,14,14]],
  
  [[16,16,15,12],
  [16,15,13,11]],
  
  [[16.1,19,17,14],
  [16.1,17,15,13]],
  
  [[16,16,15,13],
  [16,15,14,12]],
  
  [[15.5,16,15,12],
  [15.5,15,14,13]],
  
  [[15.2,15.1,14.3,12.9],
  [15.2,14.4,14,13.3]],
  
  [[14.2,14.4,13.7,12.4],
  [14.2,14.2,14.2,14.4]],
  
  [[14,14.3,13.5,12.6],
  [14,14.4,14.6,15.9]],
  
  [[13.8,14.6,13.8,7.1],
  [13.8,16,16.6,17]],
  
  [[13.5,13.3,11.8,6.2],
  [13.5,14.6,14,13.5]],
  
  [[12.3,12.8,10.4,5],
  [12.3,13.9,13.6,12.2]],
  
  [[11.3,12.4,9.9,4.8],
  [11.3,13.9,13.5,12.1]],
  
  [[11,11.1,8.7,4.4],
  [11,12.1,12.5,11.5]],
  
  [[11.1,11,8.6,4.2],
  [11.1,11.8,11.3,10.8]],
  
  [[11.2,11.1,8.9,4.7],
  [11.2,11.8,10.8,10]],
  
  [[10.57,7.76,6.22,5.99],
  [10.57,12.4,13.43,13.7]],
  
  [[10.3,7.9,6,5.6],
  [10.3,11.5,12,11.7]],
  
  [[10.2,8.5,6.8,6.1],
  [10.2,11.5,12.1,11.7]],
  
  [[10.4,8.2,6.4,5.7],
  [10.4,10.5,11.4,11.2]],
  
  [[10.2,8.6,7.2,6.3],
  [10.2,10.8,11.7,12.3]],
    
  [[0,,,],
  [0,,,]],
    
 ];

var colors = ['green', '#F7981D', 'blue','#BEDCE9'];
var txtcolors = ['#1A2A6F', '#BEDCE9'];
var mActual = 3;
var mProj = 1.5;

var lwActual = 2;
var lwProj = 0.3;

var modeProj = 'lines+markers';
var modeActual = 'lines+markers';

var labels = ['Television', 'Newspaper', 'Internet', 'Radio'];

var yDataProjValues = yDataProjValuesCap;

var data = [];

var myChart;
