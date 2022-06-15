function daysInAMonth(month, year) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else if (month === 2) {
        let leap = new Date(year, 1, 29).getDate() === 29;
        if (leap) {
            return 29;
        } else {
            return 28;
        }
    }
}
daysInAMonth(4, 2012);
daysInAMonth(2, 2000);