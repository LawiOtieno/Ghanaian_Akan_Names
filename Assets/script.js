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

    var monthLeng = Math.floor(26*(month + 1)/10);
    console.log('month: ' + monthLeng);
    var yearValue = Math.floor (5*yy/4);
    console.log('yearValue:' + yearValue);
    var weekDay = (day + monthLeng + yearValue + cc) % 7;
    console.log('day of the week: '+ weekDay);

    // Gender determination
    var gender = document.querySelector('.gender:checked').value;
    console.log(gender);
    var name = ' ';

    if (gender === 'Male'){
        name = mNames[weekDay];
    
    }else if(gender === 'Female'){
        name = fmNames[weekDay];
    }else {
        alert('Please select one gender.');
    }


    // Getting all elements by IDs
    document.getElementById('year').value=" ";
    document.getElementById('day').value = " ";
    document.getElementById('month').value = " ";

    // Function to display Akan Name
    document.getElementById("info").innerHTML = "Your Akan name is: " + name;
}