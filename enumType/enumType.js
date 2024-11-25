var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Mon";
    WeekDays["Tuesday"] = "Tue";
    WeekDays["Wednesday"] = "Wed";
    WeekDays["Thursday"] = "Thu";
    WeekDays["Friday"] = "Fri";
    WeekDays["Saturday"] = "Sat";
    WeekDays["Sunday"] = "Sun";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Monday); // Mon
console.log(0 /* WeekDaysConst.Monday */); // 0
