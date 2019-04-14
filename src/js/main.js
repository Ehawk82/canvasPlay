var myUI, gameData;

gameData: () => {};

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
btnFrame.className = "btnFrame";
        //myUI.loop(cv,ctx);
        myUI.generateBtns(cv, btnFrame);

        eles.append(cv, btnFrame);
        
		dvContain.append(eles);
	},
	generateBtns: (cv, btnFrame)=>{
        var btn1 = createEle("button"),
            btn2 = createEle("button");

        btn1.innerHTML = "end turn";
        btn1.className = "btns";
        btn1.disabled = true;
        
        btn2.innerHTML = "+";
        btn2.className = "btns";
        btn2.disabled = false;
        btn2.onclick = myUI.addCell(cv, btn2);

        btnFrame.append(btn1, btn2);
	},
	addCell: (cv, btn2) => {
 		return ()=>{
 			cv.onclick = myUI.cellPlotter(cv);
 			btn2.disabled = true;
 		}
	},
	cellPlotter: (cv) => {
		return ()=>{
			console.log(cv);
		}
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