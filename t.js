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

T();

window.onresize=function(){
	T();
}

let gd = setInterval("C()",50);
document.onclick = function(){
	if(gd){
		gd = clearInterval(gd);
	}else{
		gd = setInterval("C()",50);
	}
}