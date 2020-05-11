// JavaScript Document
var count=0;
var mytime;
function showImg(id){
	count++;
	if(id>0){
		clearInterval(mytime);
		count=id;
	}
	if(count>2){
		count=1;
	}
	document.getElementById("pic").src="images/down_"+count+".jpg";
		for(var i=1;i<=2;i++){
			if(i==count){
				document.getElementById("num"+i).style.backgroundColor="#F63";
			}
			else{
				document.getElementById("num"+i).style.backgroundColor="#CCC";
			}
		}
}
function showOut(){
	mytime=setInterval("showImg(0)",3000);
}

/*
mytime=setInterval("showImg(0)",2000);
document.getElementById('div'+i).style.display='none';
document.getElementById('div'+i).style.display='block';
var NowFrame=1;
var MaxFrame=2;
function show(id){
	if(Number(id)){
		claerTimeout(theTimer);
		NowFrame=id;
	}
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame)
		document.getElementById('down_'+NowFrame).style.display='';
		else
		document.getElementById('div'+i).style.display='none';
	}
	if(NowFrame ==MaxFrame){
		NowFrame=1;
	}
	else{
		NowFrame++;
	}
	theTimer=setTimeout('show()',3000);
}*/