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


//thresholding
document.getElementById('thdefault').addEventListener("input", function () {
  document.getElementById("threshold").value = 0
  document.getElementById('threshold_val').value = 0
  rgbachange()
})

//brightness
document.getElementById('brdefault').addEventListener("input", function () {
  document.getElementById("brighness").value = 0
  document.getElementById('brighness_val').value = 0
  rgbachange()
})

document.getElementById("negatif").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }

  for (var i = 0; i < tesbackup.length; i++) {
    tes[i][0] = (255 - tesbackup[i][0])
    tes[i][1] = (255 - tesbackup[i][1])
    tes[i][2] = (255 - tesbackup[i][2])
    tes[i][3] = (tesbackup[i][3])
  }
  obj.array2canvas(tes)
});


document.getElementById('grayscl').addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  //end of copy
  for (vari = 0; i < tesbackup.length; i++) {
    var total = ((tesbackup[i][0] + tesbackup[i][1] + tesbackup[i][2]) / 3)
    tes[i][0] = total
    tes[i][1] = total
    tes[i][2] = total
    tes[i][3] = tesbackup[i][3]
  }
  obj.array2canvas(tes)
})
document.getElementById('threshold').addEventListener("input", function () {
  document.getElementById('threshold_val').value = this.value
  batas = parseInt(this.value)
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    gabung = Math.floor((tesbackup[i][0] + tesbackup[i][1] + tesbackup[i][2]) / 3)
    if (gabung < batas) {
      gabung = 0
    } else {
      gabung = 255
    }
    tes[i][0] = gabung
    tes[i][1] = gabung
    tes[i][2] = gabung
    tes[i][3] = tes[i][3]
  }
  obj.array2canvas(tesbackup)
})

document.getElementById('brightness').addEventListener("input", function () {
  document.getElementById('brightness_val').value = this.value
  p = parseInt(this.value)
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    tesbackup[i][0] = tesbackup[i][0] + p
    tesbackup[i][1] = tesbackup[i][1] + p
    tesbackup[i][2] = tesbackup[i][2] + p
    tesbackup[i][2] = tes[i][3]
  }
  obj.array2canvas(tesbackup)
})

//reset threshold
document.getElementById('thdefault').addEventListener("click", function () {
  document.getElementById('threshold').value = 0
  document.getElementById('threshold_val').value = 0
  rgbachange()
})

//reset brightness
document.getElementById('brdefault').addEventListener("click", function () {
  document.getElementById('brightness').value = 0
  document.getElementById('brightness_val').value = 0
  rgbachange()
})

//flip

document.getElementById("flip1").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    var posnow = obj.xy2i(obj.width - 1 - x, y);
    tes[i][0] = tesbackup[posnow][0];
    tes[i][1] = tesbackup[posnow][1];
    tes[i][2] = tesbackup[posnow][2];
    tes[i][3] = tesbackup[posnow][3];
  }
  obj.array2canvas(tes);
});

document.getElementById("flip2").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    var posnow = obj.xy2i(x, obj.height - 1 - y);
    tes[i][0] = tesbackup[posnow][0];
    tes[i][1] = tesbackup[posnow][1];
    tes[i][2] = tesbackup[posnow][2];
    tes[i][3] = tesbackup[posnow][3];
  }
  obj.array2canvas(tes);
});
document.getElementById("flip3").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    var posnow = obj.xy2i(obj.width - 1 - x, obj.height - 1 - y);
    tes[i][0] = tesbackup[posnow][0];
    tes[i][1] = tesbackup[posnow][1];
    tes[i][2] = tesbackup[posnow][2];
    tes[i][3] = tesbackup[posnow][3];
  }
  obj.array2canvas(tes);
});

document.getElementById("mirror").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  var wnow = obj.width
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    if (x < wnow / 2) {
      var posnow = obj.xy2i(wnow - x - 1, y);
      tes[i][0] = tesbackup[posnow][0];
      tes[i][1] = tesbackup[posnow][1];
      tes[i][2] = tesbackup[posnow][2];
      tes[i][3] = tesbackup[posnow][3];
    }
  }
  obj.array2canvas(tes);
});



document.getElementById("BT1").addEventListener("click", function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  var wnow = obj.width
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    if (x < wnow / 2) {
      var posnow = obj.xy2i(wnow - x - 1, y);
      tes[posnow][0] = (255 - tesbackup[posnow][0])
      tes[posnow][1] = (255 - tesbackup[posnow][1])
      tes[posnow][2] = (255 - tesbackup[posnow][2])
      tes[posnow][3] = (tesbackup[posnow][3])

    }
  }
  obj.array2canvas(tes);
});




document.getElementById('BT2').addEventListener('click', function () {
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array()
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d])
    }
    tesbackup.push(temp)
  }
  var wnow = obj.width
  var hnow = obj.height
  for (var i = 0; i < tesbackup.length; i++) {
    x = obj.i2x(i)
    y = obj.i2y(i)
    if (x < wnow / 2) {
      posnow = obj.xy2i(wnow - x - 1, y)
      tes[i][0] = tesbackup[posnow][0]
      tes[i][1] = tesbackup[posnow][1]
      tes[i][2] = tesbackup[posnow][2]
      tes[i][3] = tesbackup[posnow][3]
    }
    else if (x > wnow / 2) {
      posnow = obj.xy2i(x, hnow - y - 1)
      tes[i][0] = tesbackup[posnow][0]
      tes[i][1] = tesbackup[posnow][1]
      tes[i][2] = tesbackup[posnow][2]
      tes[i][3] = tesbackup[posnow][3]
    }
  }
  obj.array2canvas(tes)
});


document.getElementById('mean').addEventListener('click', function () {
  filtersize = parseInt(document.getElementById('num').value)
  if (filtersize % 2 == 0 || filtersize < 3) {
    alert('Please input odd number')
    return false
  }
  borderparam = (filtersize - 1) / 2
  meandoubleparam = filtersize * filtersize
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array()
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d])
    }
    tesbackup.push(temp)
  }

  for (var i = 0; i < tesbackup.length; i++) {
    xstart = obj.i2x(i) - borderparam
    xend = obj.i2x(i) + borderparam
    ystart = obj.i2y(i) - borderparam
    yend = obj.i2y(i) + borderparam
    red = 0
    green = 0
    blue = 0
    for (var yc = ystart; yc <= yend; yc++) {
      for (var xc = xstart; xc <= xend; xc++) {
        if (xc >= 0 && xc < obj.width && yc >= 0 && yc < obj.height) {
          posnow = obj.xy2i(xc, yc)
          red += tesbackup[posnow][0]
          green += tesbackup[posnow][1]
          blue += tesbackup[posnow][2]
        }
      }
    }
    tes[i][0] = Math.floor(red / meandoubleparam)
    tes[i][1] = Math.floor(green / meandoubleparam)
    tes[i][2] = Math.floor(blue / meandoubleparam)
  }
  obj.array2canvas(tes)
})

document.getElementById('median').addEventListener('click', function () {
  filtersize = parseInt(document.getElementById('num').value)
  if (filtersize % 2 == 0 || filtersize < 3) {
    alert("Filter size must be odd and greater than 3")
    return false
  }

  borderparam = (filter - 1) / 2
  testbackup = new Array()
  for (var c = 0; c < test.length; c++) {
    temp = new Array()
    for (var c = 0; c < tes.length; c++) {
      temp = new Array()
      for (var d = 0; d < 4; d++) {
        temp.push(test[c][d])
      }
      testbackup.push(temp)
    }
    for (vari = 0; i < tes.length; i++) {
      xstart = obj.i2x(i) - borderparam
      xend = obj.i2x(i) + borderparam
      ystart = obj.i2y(i) - borderparam
      yend = obj.i2y(i) + borderparam
      red = new Array()
      green = new Array()
      blue = new Array()
      for (var yc = ystart; yc <= yend; yc++) {
        for (var xc = xstart; xc <= xend; xc++) {
          if (xc >= 0 && xc < obj.width && yc >= 0 && yc < obj.height) {
            red.push(testbackup[obj.xy2i(xc, yc)][0])
            green.push(testbackup[obj.xy2i(xc, yc)][1])
            blue.push(testbackup[obj.xy2i(xc, yc)][2])
          }
          count++
        }
      }
      red = arraysort(red)
      green = arraysort(green)
      blue = arraysort(blue)
      if (count % 2 == 0) {
        param = count / 2
      }
      else {
        param = (count - 1) / 2
      }
      test[i][0] = red[param]
      test[i][1] = green[param]
      test[i][2] = blue[param]
    }
    obj.array2canvas(test)
  }
})


//sobel modul 3
document.getElementById('sobel').addEventListener('click', function () {
  var Gxtemp = new Array()
  var Gytemp = new Array()
  var G = new Array()
  var xpos = 0
  var ypos = 0

  function cek(x, y, n) {
    if (x >= 0 && x < obj.width && y >= 0 && y < obj.height) {
      return parseInt(tes[obj.xy2i(x, y)])
    } else {
      return 0
    }
  }
  for (var i = 0; i < tes.length; i++) {
    var Gtemp = new Array()
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    for (var j = 0; j < 3; j++) {
      Gxtemp[j] = (cek(xpos - 1, ypos - 1) - 1) + (cek(xpos - 1, ypos) - 2) + (cek(xpos - 1, ypos + 1) * -1) + (cek(xpos + 1, ypos - 1)) + (cek(xpos + 1, ypos) * 2) + (cek(xpos + 1, ypos + 1))
      Gytemp[j] = (cek(xpos - 1, ypos - 1) - 1) + (cek(xpos, ypos - 1) - 2) + (cek(xpos + 1, ypos - 1) * -1) + (cek(xpos - 1, ypos + 1)) + (cek(xpos, ypos + 1) * 2) + (cek(xpos + 1, ypos + 1))
      Gtemp[j] = Math.floor(Math.sqrt((parseInt(Gxtemp[j]) * parseInt(Gxtemp[j])) + (parseInt(Gytemp[j]) * parseInt(Gytemp[j]))))
    }
    Gtemp[3] = tes[i][3]
    G.push(Gtemp)
  }
  obj.array2canvas(G)
})



document.getElementById('prewitt').addEventListener('click', function () {
  var Gxtemp = new Array()
  var Gytemp = new Array()
  var G = new Array()
  var xpos = 0
  var ypos = 0

  function cek(x, y, n) {
    if (x >= 0 && x < obj.width && y >= 0 && y < obj.height) {
      return parseInt(tes[obj.xy2i(x, y)])
    } else {
      return 0
    }
  }
  for (var i = 0; i < tes.length; i++) {
    var Gtemp = new Array()
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    for (var j = 0; j < 3; j++) {
      Gxtemp[j] = (cek(xpos - 1, ypos - 1) - 1) + (cek(xpos - 1, ypos) - 1) + (cek(xpos - 1, ypos + 1) * -1) + (cek(xpos + 1, ypos - 1)) + (cek(xpos + 1, ypos)) + (cek(xpos + 1, ypos + 1))
      Gytemp[j] = (cek(xpos - 1, ypos - 1) - 1) + (cek(xpos, ypos - 1) - 1) + (cek(xpos + 1, ypos - 1) * -1) + (cek(xpos - 1, ypos + 1)) + (cek(xpos, ypos + 1)) + (cek(xpos + 1, ypos + 1))
      Gtemp[j] = Math.floor(Math.sqrt((parseInt(Gxtemp[j]) * parseInt(Gxtemp[j])) + (parseInt(Gytemp[j]) * parseInt(Gytemp[j]))))
    }
    Gtemp[3] = tes[i][3]
    G.push(Gtemp)
  }
  obj.array2canvas(G)
})



document.getElementById('laplacian').addEventListener('click', function () {
  var Gxtemp = new Array(4)
  var Gytemp = new Array(4)
  var G = new Array()
  var xpos = 0
  var ypos = 0

  function cek(x, y, n) {
    if (x >= 0 && x < obj.width && y >= 0 && y < obj.height) {
      return parseInt(tes[obj.xy2i(x, y)])
    } else {
      return 0
    }
  }
  for (var i = 0; i < tes.length; i++) {
    var Gtemp = new Array()
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    for (var j = 0; j < 3; j++) {
      Gxtemp[j] = (cek(xpos, ypos) * -1) + (cek(xpos + 1, ypos + 1))
      Gytemp[j] = (cek(xpos + 1, ypos) * -1) + (cek(xpos, ypos + 1))
      Gtemp[0] = Math.floor(Math.sqrt((parseInt(Gxtemp[0]) * parseInt(Gxtemp[0])) + (parseInt(Gytemp[0]) * parseInt(Gytemp[0]))))
    }
    Gtemp[1] = Gtemp[0]
    Gtemp[2] = Gtemp[0]
    Gtemp[3] = tes[i][3]
    G.push(Gtemp)
  }
  obj.array2canvas(G)
})

document.getElementById('roberts').addEventListener('click', function () {
  var Gxtemp = new Array()
  var Gytemp = new Array()
  var G = new Array()
  var xpos = 0
  var ypos = 0

  function cek(x, y) {
    if (x >= 0 && x < obj.width && y >= 0 && y < obj.height) {
      return parseInt(tes[obj.xy2i(x, y)])
    } else {
      return 0
    }
  }
  for (var i = 0; i < tes.length; i++) {
    var Gtemp = new Array()
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    function cek(x, y) {
      if (x >= 0 && x < obj.width && y >= 0 && y < obj.height) {
        return parseInt(tes[obj.xy2i(x, y)])
      } else {
        return 0
      }
    }
    var Gtemp = new Array()
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    for (var j = 0; j < 3; j++) {
      Gxtemp[j] = (cek(xpos, ypos) * -1) + (cek(xpos + 1, ypos + 1))
      Gytemp[j] = (cek(xpos + 1, ypos) * -1) + (cek(xpos, ypos + 1))
      Gtemp[j] = Math.floor(Math.sqrt((parseInt(Gxtemp[j]) * parseInt(Gxtemp[j])) + (parseInt(Gytemp[j]) * parseInt(Gytemp[j]))))
    }
    Gtemp[3] = tes[i][3]
    G.push(Gtemp)
  }
  obj.array2canvas(G)
})


// MODUL 7
document.getElementById('rotate').addEventListener('input', function () {
  angle = parseInt(this.value)
  document.getElementById('rotate_val').value = angle
  //copy array to array without reference
  var tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array()
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d])
    }
    tesbackup.push(temp)
  }
  var pusatx = obj.width / 2
  var pusaty = obj.height / 2
  var toRadians = function (x) {
    return x * (Math.PI / 180); // TETA
  }
  //rotate
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i) - pusatx
    var y = obj.i2y(i) - pusaty

    var teta = toRadians(angle)
    var xnow = Math.floor((x * Math.cos(teta)) - (y * Math.sin(teta))) + pusatx// -pusatx
    var ynow = Math.floor((x * Math.sin(teta)) + (y * Math.cos(teta))) + pusatx // -pusaty
    var posnow = obj.xy2i(xnow, ynow)

    if (posnow >= 0 && posnow < tesbackup.length && (xnow >= 0 && xnow < obj.width) && (ynow >= 0 && ynow < obj.height)) {
      tesbackup[i][0] = tes[posnow][0]
      tesbackup[i][1] = tes[posnow][1]
      tesbackup[i][2] = tes[posnow][2]
      tesbackup[i][3] = tes[posnow][3]
    }
    else {
      tesbackup[i][3] = 0
    }
  }
  obj.array2canvas(tesbackup)
})

function translate() {
  var txval = parseInt(document.getElementById('transx').value)
  var tyval = parseInt(document.getElementById('transy').value)
  var pixels = new Array(tes.length)
  for (var j = 0; j < pixels.length; j++) {
    pixels[j] = [0, 0, 0, 0]
  }
  for (var i = 0; i < tes.length; i++) {
    var x = obj.i2x(i)
    var y = obj.i2y(i)
    var xnow = x + txval
    var ynow = y + tyval
    var posnow = obj.xy2i(xnow, ynow)
    if (posnow >= 0 && posnow < pixels.length && (xnow >= 0 && xnow < obj.width) && (ynow >= 0 && ynow < obj.height)) {
      pixels[posnow][0] = tes[i][0]
      pixels[posnow][1] = tes[i][1]
      pixels[posnow][2] = tes[i][2]
      pixels[posnow][3] = tes[i][3]
    }
  }
  obj.array2canvas(pixels)
}

document.getElementById('transx').addEventListener('input', function () {
  xt = parseInt(this.value)
  document.getElementById('transx_val').value = xt
  translate()
})

document.getElementById('transy').addEventListener('input', function () {
  xt = parseInt(this.value)
  document.getElementById('transy_val').value = xt
  translate()
})

document.getElementById('default').addEventListener('input', function () {
  document.getElementById('angle').value = 0
  document.getElementById('rotate').value = 0
  document.getElementById('transx').value = 0
  document.getElementById('transy').value = 0
  translate()
})


// MODUL 8
document.getElementById('scale').addEventListener('input', function () {
  var scaleval = this.value
  var xpos = 0
  var ypos = 0
  var xnow = 0
  var ynow = 0
  var objW = obj.width
  var objH = obj.height
  //copy array to array without reference
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
    temp = new Array()
    for (var d = 0; d < 4; d++) {
      temp.push(255)
    }
    tesbackup.push(temp)
  }
  //end of copy
  for (var i = 0; i < tes.length; i++) {
    xpos = obj.i2x(i)
    ypos = obj.i2y(i)
    xnow = Math.round((xpos - 1) * (objW - 1) / (scaleval * objW - 1) + 1)
    ynow = Math.round((ypos - 1) * (objH - 1) / (scaleval * objH - 1) + 1)
    var posnow = obj.xy2i(xnow, ynow)
    if (posnow >= 0 && posnow < tesbackup.length && (xnow >= 0 && xnow < obj.width) && (ynow >= 0 && ynow < obj.height)) {
      tesbackup[i][0] = tes[posnow][0]
      tesbackup[i][1] = tes[posnow][1]
      tesbackup[i][2] = tes[posnow][2]
    }
  }
  obj.array2canvas(tesbackup)
})

document.getElementById('default').addEventListener('click', function () {
  document.getElementById('scale').value = 0
})

document.getElementById('uas').addEventListener('click', function () {
  tesbackup = new Array();
  for (var c = 0; c < tes.length; c++) {
    var temp = new Array();
    for (var d = 0; d < 4; d++) {
      temp.push(tes[c][d]);
    }
    tesbackup.push(temp);
  }
  var wnow = obj.width
  var hnow = obj.height
  for (var i = 0; i < tesbackup.length; i++) {
    var x = obj.i2x(i);
    var y = obj.i2y(i);
    if (x < wnow / 4 && y < hnow / 2) {
      //flip modul 3
      var posnow = obj.xy2i(obj.width - 1 - x, y);
      tes[i][0] = tesbackup[posnow][0];
      tes[i][1] = tesbackup[posnow][1];
      tes[i][2] = tesbackup[posnow][2];
      tes[i][3] = tesbackup[posnow][3];

    }
    //grayscle modul 2
    else if (x > wnow / 4 && x < wnow * 2 / 4 && y < hnow / 2) {
      var total = ((tesbackup[i][0] + tesbackup[i][1] + tesbackup[i][2]) / 3)
      tes[i][0] = total
      tes[i][1] = total
      tes[i][2] = total
      tes[i][3] = tesbackup[i][3]
    }

    //negative modul 2
    else if (x > wnow * 2 / 4 && x < wnow * 3 / 4 && y < hnow / 2) {
      tes[i][0] = (255 - tesbackup[i][0])
      tes[i][1] = (255 - tesbackup[i][1])
      tes[i][2] = (255 - tesbackup[i][2])
      tes[i][3] = (tesbackup[i][3])

    }
    //mirror modul 3
    else if (x > wnow * 3 / 4 && y < hnow / 2) {
      var posnow = obj.xy2i(wnow - x - 1, y);
      tes[i][0] = tesbackup[posnow][0];
      tes[i][1] = tesbackup[posnow][1];
      tes[i][2] = tesbackup[posnow][2];
      tes[i][3] = tesbackup[posnow][3];

    }

    //tresholding modul 2
    else if (x < wnow / 4 && y > hnow / 2) {
      batas = 100;
      gabung = Math.floor((tesbackup[i][0] + tesbackup[i][1] + tesbackup[i][2]) / 3)
      if (gabung < batas) {
        gabung = 0
      } else {
        gabung = 255
      }
      tes[i][0] = gabung
      tes[i][1] = gabung
      tes[i][2] = gabung
      tes[i][3] = tes[i][3]

    }
    //brightness modul 2
    else if (x > wnow / 4 && x < wnow * 2 / 4 && y > hnow / 2) {
      var p = 100;

      tes[i][0] = tesbackup[i][0] + p
      tes[i][1] = tesbackup[i][1] + p
      tes[i][2] = tesbackup[i][2] + p
      tes[i][2] = tes[i][3]

    }
    //RGB modul 1
    else if (x > wnow * 2 / 4 && x < wnow * 3 / 4 && y > hnow / 2) {
      tes[i][0] += 20
      tes[i][1] += 88;
      tes[i][2] += 100;
      tes[i][3] += 200;
    }
    //laplacian modul 5
    else if (x > wnow * 3 / 4 && y > hnow / 2) {
      var xpos = 0;
      var ypos = 0;
      function cek(x, y, n) {
        if (y >= 0 && x >= 0 && x > wnow * 3 / 4 && x < wnow && y < hnow / 2)
          return parseInt(tesbackup[obj.xy2i(x, y)])
        else return 0
      }

      xpos = obj.i2x(i)
      ypos = obj.i2y(i)
      for (var j = 0; j < 3; j++) {
        tes[i][j] = (cek(xpos, ypos - 1) * -1) + (cek(xpos - 1, ypos) * -1) + (cek(xpos, ypos) * 4) + (cek(xpos + 1, ypos) * -1) + (cek(xpos, ypos + 1) * -1)

      }
    }
  }


  obj.array2canvas(tes)
})