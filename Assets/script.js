var akanNames = function(){
    var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var fmNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    // function to verify day
    var invalidDay = function(dd){
        return dd <= 0 || dd > 31;
    };

    var day = (document.getElementById('day').value)-0;
    console.log(day);
    while (invalidDay(day)){
        alert('Please enter valid day between 1 and 31.');
        break;
    }


    // function to verify month
    var invalidMonth = function (mm) {
        return mm <= 0 || mm > 12;
    };

    var month = (document.getElementById('month').value)-0;
    console.log(month);
    while (invalidMonth(month)){
        alert("Please enter valid month between 1 and 12.");
         break;
    }

    // function for year
    var year = (document.getElementById('year').value)-0;
    console.log(typeof year);

    var century = (year/100)|0;
    var cc = Math.floor(century/4) - 2 * century - 1;
    console.log('century: ' + century);
    var yy = year % 100;
    console.log('last two digits :' + yy);
}