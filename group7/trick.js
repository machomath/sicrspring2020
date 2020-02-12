(function () {
  var myCanvas = document.getElementById("canvas");
  if(myCanvas && myCanvas.getContext){
    var canvasLeft = myCanvas.offsetLeft;
    var canvasTop = myCanvas.offsetTop;
    var borderWidth = 20;
    var eL = 120; //edgeLength
    myCanvas.width = 600 + borderWidth*2;
    myCanvas.height = 600 + borderWidth*2;

    var ctx = myCanvas.getContext("2d");
    if(ctx){
      ctx.beginPath();
      ctx.moveTo(225,225);
      ctx.lineTo(275,275);
      ctx.lineTo(350,275);
      ctx.lineTo(400,225);
      ctx.lineTo(350,175);
      ctx.lineTo(275,175);
      ctx.lineTo(225,225);
      ctx.lineTo(400,225);
      ctx.lineTo(275,275);
      ctx.lineTo(275,175);
      ctx.lineTo(350,275);
      ctx.lineTo(350,175);
      ctx.lineTo(275,275);
      ctx.lineTo(400,225);
      ctx.lineTo(275,175);
      ctx.lineTo(225,225);
      ctx.lineTo(350,275);
      ctx.lineTo(350,175);
      ctx.lineTo(225,225);
      ctx.lineWidth = 5;
      ctx.stroke();

      myCanvas.addEventListener("click", function (e) {
        var x = e.pageX - canvasLeft - borderWidth;
        var y = e.pageY - canvasTop - borderWidth;

        console.log([x, y]);
      });

    }
  }




})();
