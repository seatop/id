let rchar = function(){
		let st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+:?[]{}';
		return st.charAt(Math.floor(Math.random()*st.length));
	}

function T(){
	let theid = document.getElementById('theid');
	let thehtml = '';	
	let wn = Math.floor(window.innerWidth/20)-1;
	let hn = Math.floor(window.innerHeight/21);
	for(let i =0;i<hn;i++){
		for(let j = 0;j<wn;j++){
			thehtml += '\<span class="schar" id=\"s_'+i+'_'+j+'"\>'+rchar()+'\<\/span\>';
		}
		thehtml += '\<br\>';
	}
	theid.innerHTML = thehtml;
}

function C(){
	let wn = Math.floor(window.innerWidth/20)-1;
	let hn = Math.floor(window.innerHeight/21);
	let j =Math.floor(Math.random()*wn);
	
    for(let i=hn-1;i>0;i--){
    	let ii=i-1;
    	document.getElementById("s_"+i+"_"+j).innerText = document.getElementById("s_"+ii+"_"+j).innerText;
    }
    
	document.getElementById("s_0_"+j).innerText = rchar();		
	
}

function tip(){
	let dc = document.createElement('div');
	let t = document.createTextNode('TheID.CN');
	dc.appendChild(t);
	document.body.appendChild(dc);
	dc.style.color = "#fff663";
	dc.style.width = "160px";	
	dc.style.backgroundColor="#000";
	dc.style.position = "fixed";
	dc.style.left = window.innerWidth/2 - 80 +"px";
	dc.style.top = window.innerHeight/2 - 20 +"px";
	dc.style.textAlign = "center";
	dc.style.padding ="10px";
	dc.style.letterSpacing = "5px";
}

T();

window.onresize=function(){
	T();
}

let gd = setInterval("C()",50);
document.onclick = function(){
	if(gd){
		gd = clearInterval(gd);
		tip();
	}else{
		gd = setInterval("C()",50);
		let list = document.getElementsByTagName('div');
		document.body.removeChild(list[1]);
	}
}