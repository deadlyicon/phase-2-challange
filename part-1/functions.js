//Write a function weekday(date) to find the weekday for a given Date object, returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.

function weekday(date) {
  var day = date.getDay();
  var dayName = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

  return dayName[day];
}

let date = new Date('2017, 6, 19')

console.log(weekday(date));

module.export = weekday
