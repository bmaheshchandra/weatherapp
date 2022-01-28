function myfunc(){
let req =  new XMLHttpRequest();
//open a connection
var plc=document.getElementById('detail')
var c="";
c+=plc.elements[0].value;
console.log(c)
var lstr='https://api.openweathermap.org/data/2.5/weather?q='+c+'&appid=93f26e3c57081a6210de53b8dcfdfea4';
req.open('GET',lstr,true);
req.onload = function() {
    if(req.status>=200 && req.status<400){
        //get the data
        console.log("success!!")
        let  data = JSON.parse( req.responseText)
        console.log(data)
        let myimgsrc='https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('mypara').innerHTML=data.main.temp+'F';
        document.getElementById('myimg').src=myimgsrc;
        document.getElementById('pressure').innerHTML=data.main.pressure
        document.getElementById('humidity').innerHTML=data.main.humidity
    }
    else{
        console.log("could not connect to server")
    }
}
//error
req.onerror = function(){
    console.log("error!!")
}
//send request
req.send();
}
//'Pressure '+'<br>'+'   '+ 'Humidity '+'<br>'+'   '