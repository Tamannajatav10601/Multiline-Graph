const xvalues=["age10","age20","age30","age40","age50","age60","age70","age80","age90","age100"];

new Chart("chart",{
    type:"line",
    data:{
        labels:xvalues,
        datasets: [
         {
            label:"expences",
            data:[500,1000,1500,2000,2500,3000,3500,4500,5000,5500],
            bordercolor:"red",
            fill:false,
            // backgroundColor:"#fff",
            lineTension:0.4,
            pointRadius:4,
         },   
         {
            label:"income",
            data:[1000,2000,3000,4000,5000,6000,7000,8000,9000,10000],
            bordercolor:"yellow",
            fill:false,
            // backgroundColor:"#fff",
            lineTension:0.4,
            pointRadius:4,
         },   
        ],
    },
    options:{
        legend:{display:true}
    },
});