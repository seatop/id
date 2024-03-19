let rchar = function(){
		let st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+:\"\<\>?-=\;\'.\\\/[]{}';
		return st.charAt(Math.round(Math.random()*st.length-1));
	}

function T(){
	let theid = document.getElementById('theid');
	let thehtml = '';	
	let wn = Math.floor(window.innerWidth/20)-1;
	let hn = Math.floor(window.innerHeight/24);
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
	let hn = Math.floor(window.innerHeight/24);

	
    for(let i=hn-1;i>0;i--){
    	let ii=i-1;
    	for(let k=0;k<wn;k++){			
			document.getElementById("s_"+i+"_"+k).innerText = document.getElementById("s_"+ii+"_"+k).innerText;		
		}

    }
    for(let j=0;j<wn;j++){			
		document.getElementById("s_0_"+j).innerText = rchar();		
	}
}

T();

window.onresize=function(){

	T();

}
setInterval("C()",5);