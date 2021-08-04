var request=new XMLHttpRequest();
request.open('GET','https://api.covid19api.com/summary',true);
request.send();
request.onload=function(){
    var data =JSON.parse(this.response);
    console.log(data);
    console.log(data.Global);
       
    }



    //NewConfirmed: 306650
    //NewRecovered: 131438
    //TotalDeaths: 4184752