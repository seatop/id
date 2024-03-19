function T(){
	let theid = document.getElementById('theid');
	let thehtml = '';
	let rchar = function(){
		let st = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+:\"\<\>?-=\;\'.\\\/[]{}';
		return st.charAt(Math.round(Math.random()*st.length-1));
	}
	
	let wn = Math.floor(window.innerWidth/20)-1;
	let hn = Math.floor(window.innerHeight/22);
	for(let i =0;i<hn;i++){
		for(let j = 0;j<wn;j++){
			thehtml += '\<span class="schar" id=\"s_'+i+'_'+j+'"\>'+rchar()+'\<\/span\>';
		}
		thehtml += '\<br\>';
	}
	theid.innerHTML = thehtml;
}
T();
window.onresize=function(){
	T();
}