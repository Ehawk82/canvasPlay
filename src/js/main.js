var myUI, particleData;

particleData = {
	protons: 1,
	neutrons: 1,
    electrons: 1
};

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
        const cH = window.innerHeight, cW = window.innerWidth;

        cv.width = cW;
        cv.height = cH;
btnFrame.className = "btnFrame_full";
        //myUI.loop(cv,ctx);
        myUI.generateBtns(cv, btnFrame);

        eles.append(cv, btnFrame);
        
		dvContain.append(eles);
	},
	generateBtns: (cv, btnFrame)=>{
        var btn1 = createEle("button"),
            btn2 = createEle("button"),
            btn3 = createEle("button"),
            btn4 = createEle("button");

        btn1.innerHTML = "🔒";
        btn1.className = "btns";
        btn1.disabled = true;
        
        btn2.innerHTML = "P";
        btn2.className = "btns";
        btn2.disabled = false;
        btn2.onclick = myUI.addCell(cv, btn2);

        btn3.innerHTML = "N";
        btn3.className = "btns";
        btn3.disabled = false;
        btn3.onclick = myUI.addCell(cv, btn3);

        btn4.innerHTML = "E";
        btn4.className = "btns";
        btn4.disabled = false;
        btn4.onclick = myUI.addCell(cv, btn4);

        btnFrame.append(btn1, btn2, btn3, btn4);
	},
	addCell: (cv, x) => {
 		return ()=>{
 			var btnFrame = bySel(".btnFrame_full");
takeFull(btnFrame);
 			cv.onclick = myUI.cellPlotter(cv, event, btnFrame);
 			x.disabled = true;
 		}
	},
	cellPlotter: (cv, e, btnFrame) => {
			cv.onmousedown = (e)=>{
				var posX = e.pageX,
				    posY = e.pageY;
makeFull(btnFrame);
				console.log("x:" + posX + "-y:" + posY);
				cv.onmousedown = null;
			};
	},
    loop: (cv,ctx)=>{
    	ctx.beginPath();
  		ctx.moveTo(50,50);
  	    ctx.lineTo(100,100);
  	    ctx.stroke();
    }
};
window.onload = ()=>{
	myUI.init();
};
window.onresize = (cv)=>{
	if(cv) {
		if(cv.width != body.clientWidth){
    		dvContain.innerHTML = "";
			myUI.init();
    	}else {
return false;
    }
	} else {
		myUI.init();
	}
};