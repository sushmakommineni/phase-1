function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("Application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
    }
       htp.send(null);
 }
 getfile("dynamic.json",function(text){
 	var data=JSON.parse(text);
 	console.log(data);
 	personal(data.profile);
 	career(data.career);
 	education(data.education);
 });
 var right=document.querySelector(".right");
 var left=document.querySelector(".left");
 function personal(e){
 	var img=document.createElement("img");
 	img.src=e.img;
 	left.appendChild(img);
 	var head=document.createElement("h2");
 	head.textContent=e.name;
 	left.appendChild(head);
 	var head=document.createElement("h3");
 	head.textContent=e.roll;
 	left.appendChild(head);
 	var head=document.createElement("h4");
 	head.textContent=e.place;
 	left.appendChild(head);
 	var head=document.createElement("h5");
 	head.textContent=e.des;
 	left.appendChild(head);
 	
 }
 function career(e){
	var head4=document.createElement("h1");
	head4.textContent="Resumebuilder";
	right.appendChild(head4);
    var head5=document.createElement("h1");
	head5.textContent="career objective";
	right.appendChild(head5);
	    var hr1=document.createElement("hr");
	right.appendChild(hr1);
	    var p1=document.createElement("p");
	p1.textContent=e.info;
	right.appendChild(p1)
}
function education(e){
	var head7=document.createElement("h2");
	head7.textContent="education details";
	right.appendChild(head7);
	var table=document.createElement("table");
	table.border="1";
	var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>per</td><td>yop</td></tr>"
	var tr2="";
	    for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td><td>";
	}
    table.innerHTML=tr1+tr2;
	right.appendChild(table);
}