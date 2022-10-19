var canvas = document.getElementById("canvas1");
var obj = new pc(canvas);
obj.image2canvas("PC5.jpg");

var canvas2 = document.getElementById("canvas2");
var obj2 = new pc(canvas2);
obj2.blank2canvas(350, 440);

var tes = new Array();
document.getElementById("read").addEventListener("click", function () {
  tes = obj.image2read();
});

document.getElementById("ori").addEventListener("click", function () {
  obj.image2original();
});

function rgbachange() {
  tesbackup = new Array();
  for (var i = 0; i < tes.length; i++) {
    var temp = new Array();
    for (var j = 0; j < 4; j++) {
      temp.push(tes[i][j]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    tesbackup[i][0] += parseInt(document.getElementById("ch1").value);
    tesbackup[i][1] += parseInt(document.getElementById("ch2").value);
    tesbackup[i][2] += parseInt(document.getElementById("ch3").value);
    tesbackup[i][3] += parseInt(document.getElementById("ch4").value);
  }
  for (var i = 1; i <= 4; i++)
    document.getElementById("chv" + i).value = document.getElementById(
      "ch" + i
    ).value;
  obj.array2canvas(tesbackup);
}

for (var i = 1; i <= 4; i++) {
  document.getElementById("ch" + i).addEventListener("input", rgbachange);
}

document.getElementById("default").addEventListener("click", function () {
  for (var i = 1; i <= 3; i++) {
    document.getElementById("ch" + i).value = 0;
  }
  document.getElementById("ch4").value = 255;
  rgbachange();
});

document.getElementById("hist1").addEventListener("click", function () {
  var hist = obj.hist2read([
    parseInt(document.getElementById("histval").value),
  ]);
  obj2.hist2canvas(hist[0], 10);
});
