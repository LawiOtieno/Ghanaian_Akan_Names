var akanNames = function(){
    var mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var fmNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // function to verify day
    var invalidDay = function(dd){
        return dd <= 0 || dd > 31;
    };

    // function to verify month
    var invalidMonth = function (mm) {
        return mm <= 0 || mm > 12;
    };
}