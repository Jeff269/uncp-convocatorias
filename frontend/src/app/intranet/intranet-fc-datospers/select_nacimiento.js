/*var worldData = {
  USA: {
    California: ["Los Angeles", "San Diego", "Sacramento"],
    Texas: ["Houston", "Austin"],
    Florida: ["Miami", "Orlando", "Tampa"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    TamilNadu: ["Chennai", "Madurai"],
    Karnataka: ["Bangalore", "Mangalore"],
  },
  Canada: {
    Alberta: ["Calgary", "Edmonton", "Red Deer"],
    BritishColumbia: ["Vancouver", "Kelowna"],
    Manitoba: ["Winnipeg", "Brandon"],
  },
  Germany: {
    Bavaria: ["Munich", "Nuremberg"],
    NorthRhine: ["Cologne", "Düsseldorf"],
  },
};
window.onload = function () {
  var countyList = document.getElementById("countyList"),
    stateList = document.getElementById("stateList"),
    cityList = document.getElementById("cityList");
  for (var country in worldData) {
    countyList.options[countyList.options.length] = new Option(country, country);
  }
  countyList.onchange = function () {
    stateList.length = 1;
    cityList.length = 1;
    if (this.selectedIndex < 1) return;
    for (var state in worldData[this.value]) {
      stateList.options[stateList.options.length] = new Option(state, state);
    }
  };
  countyList.onchange();
  stateList.onchange = function () {
    cityList.length = 1;
    if (this.selectedIndex < 1) return;
    var city = worldData[countyList.value][this.value];
    for (var i = 0; i < city.length; i++) {
      cityList.options[cityList.options.length] = new Option(city[i], city[i]);
    }
  };
};
*/
