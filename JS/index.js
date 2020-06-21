$(document).ready(function () {
  
    setInterval(loaddata(),900000)// h=1 
});
function loaddata() {
    $.get("ajax/loaddata.php",
        function (data) {
   
            $("#time-1").text(data.year);
            $("#time-2").text( data.year);
            $("#now-1").text( numeral(data.amout).format('0,0'));
            $("#now-2").text( numeral(data.amout).format('0,0'));
          $("#max-1").text( numeral(data.max).format('0,0'));
          $("#max-2").text( numeral(data.max).format('0,0'));
        },
        "JSON"
    );
}