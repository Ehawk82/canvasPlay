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
        
        cv.width = 500;
        cv.height = 500;

        myUI.loop(cv,ctx);
        myUI.generateBtns(btnFrame);
        eles.append(cv, btnFrame);
        
		dvContain.append(eles);
	},
	generateBtns: (btnFrame) => {

	},
    loop: (cv,ctx)=>{
    	for (var i = 0; i < cv.height; i++) {
    for (var j = 0; j < cv.width; j++) {
      ctx.save();
      ctx.fillStyle = 'rgba(100,100,100,.75)';
      ctx.translate(1 + j * 1.2, 1 + i * 1.2);
      ctx.fillRect(0, 0, 1, 1);
      ctx.restore();
    }
  }
    } 
};
window.onload = ()=>{
	myUI.init();
};