function weekday(date) {
  var day = date.getDay();
  var dayName = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

  return dayName[day];
}

function snippet(string, maxlength) {
    var selected = string.slice(0, maxlength);
    if(string.length > maxlength) {
       return selected + "...";
  }  else {
       return selected
  }
};

function numProps(obj) {
  var count = Object.keys(obj);
  return console.log(count.length);
}

module.export = weekday, snippet, numProps
