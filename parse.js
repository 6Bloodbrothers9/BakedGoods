//insert div creations into the papaparse functions for it to show outside of the console
var useResults = [];
var jsonObject = Papa.parse('test1.csv', {
    download: true,
    header: false,
    dynamicTyping: true,
    complete: function(results) {
	  useResults = results.data;
      console.log("Finished:", results.data);
      var div = document.getElementById("showJson");
      div.innerHTML= useResults[2][1] + '' + useResults[2][2];
    }
  });