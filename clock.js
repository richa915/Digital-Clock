function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    if(h<10){
        h="0"+h;
    }

    if(m<10){
        m="0"+m;
    }
    
    if(s<10){
        s="0"+s;
    }

    // h = (h==0) ? 12 : h;
    // h = (h>12) ? h-12 : h;
    // h = (h<10) ? "0" + h : h;
    // m = (m<10) ? "0" + m : m;
    // s = (s<10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;
    setTimeout(showTime,1000);

}
showTime();
// setInterval(showTime,1000);


