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
  document.getElementById("threshold").value=0
  document.getElementById('threshold_val').value=0
  rgbachange()
})

//brightness
document.getElementById('brdefault').addEventListener("input", function () {
  document.getElementById("brighness").value=0
  document.getElementById('brighness_val').value=0
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
  
for(var i=0;i<tesbackup.length;i++){
  tes[i][0]=(255-tesbackup[i][0])
  tes[i][1]=(255-tesbackup[i][1])
  tes[i][2]=(255-tesbackup[i][2])
  tes[i][3]=(tesbackup[i][3])
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
  for(vari=0;i<tesbackup.length;i++){
    var total=((tesbackup[i][0]+tesbackup[i][1]+tesbackup[i][2])/3)
    tes[i][0]=total
    tes[i][1]=total
    tes[i][2]=total
    tes[i][3]=tesbackup[i][3]
  }
  obj.array2canvas(tes)
})
document.getElementById('threshold').addEventListener("input", function () {
  document.getElementById('threshold_val').value=this.value
  batas=parseInt(this.value)
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
  temp = new Array();
  for (var d = 0; d < 4; d++) {
  temp.push(tes[c][d]);
  }
  tesbackup.push(temp);
}
for(var i=0;i<tesbackup.length;i++){
  gabung=Math.floor((tesbackup[i][0]+tesbackup[i][1]+tesbackup[i][2])/3)
  if(gabung<batas){
    gabung=0
  }else{
    gabung=255
  }
  tes[i][0]=gabung
  tes[i][1]=gabung
  tes[i][2]=gabung
  tes[i][3]=tes[i][3]
}
obj.array2canvas(tesbackup)
})

document.getElementById('brightness').addEventListener("input", function () {
  document.getElementById('brightness_val').value=this.value
  p=parseInt(this.value)
  tesbackup = new Array()
  for (var c = 0; c < tes.length; c++) {
  temp = new Array();
  for (var d = 0; d < 4; d++) {
  temp.push(tes[c][d]);
  }
  tesbackup.push(temp);
}
for(var i=0;i<tesbackup.length;i++){
  tesbackup[i][0]=tesbackup[i][0]+p
  tesbackup[i][1]=tesbackup[i][1]+p
  tesbackup[i][2]=tesbackup[i][2]+p
  tesbackup[i][2]=tes[i][3]
}
obj.array2canvas(tesbackup)
})

//reset threshold
document.getElementById('thdefault').addEventListener("click", function () {
  document.getElementById('threshold').value=0
  document.getElementById('threshold_val').value=0
  rgbachange()
})

//reset brightness
document.getElementById('brdefault').addEventListener("click", function () {
  document.getElementById('brightness').value=0
  document.getElementById('brightness_val').value=0
  rgbachange()
})


