function GGAni(sei,jgTime,css,endpos,speed,dw,fn){
	clearInterval(sei.timer);
	sei.timer=setInterval(function(){
		if(getcss(sei,css) == endpos){
			clearInterval(sei.timer);
			//回调函数:判断fn是否存在
			if(fn){
				fn();
			}
			
		}else{
			sei.style[css]=getcss(sei,css)+speed+dw;
//			console.log(dw);
		}
	},jgTime);
}

function getcss(_sei,_css){
	return parseFloat(getComputedStyle(_sei)[_css]);
}


//1、获取非行间样式 : getComputedStyle(标签)[获取的样式：字符串]
// getComputedStyle()[]

//2、当需要设置的样式未知
//ele.style[css]
