function Kagawaban(){
  if(document.querySelector(".kagawa2")!=null==false){
    document.querySelector(".kagawa").innerHTML="<h1>条例によって禁止されています</h1><p>香川県民はネット・ゲーム依存対策条例によりこのサービスの利用は規制されています。</p>";
  }else{
	document.querySelector(".kagawa").innerHTML=document.querySelector(".kagawa2").innerHTML;
  }
}

function callback(data) {
  var date=new date();
  if(date.getHours()>=21){
    if(data.region=="Kagawa"){
        Kagawaban();
    }
  }
}

const script = document.createElement('script');

while(1==1){
  script.src = 'https://ipinfo.io?callback=callback';
  document.body.appendChild(script);
  document.body.removeChild(script);
}
