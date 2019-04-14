var myUI;

myUI = {
	init: ()=>{
		myUI.loadout();
	},
	loadout: ()=>{
		myUI.buildEle();
	},
	buildEle: ()=>{
        var eles = createEle("div"), 
            cv = createEle("canvas"),
            ctx = cv.getContext('2d'),
            btnFrame = createEle("div");
        
        cv.width = 496;
        cv.height = 496;

        myUI.loop(cv,ctx);
        myUI.generateBtns(btnFrame);
        eles.append(cv, btnFrame);
        
		dvContain.append(eles);
	},
	generateBtns: (btnFrame) => {

	},
    loop: (cv,ctx)=>{
        var ctx = cv.getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 4, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');
  
  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
                  75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 1) + 2);
    ctx.restore();
  }

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 16; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};
}
};
window.onload = ()=>{
	myUI.init();
};