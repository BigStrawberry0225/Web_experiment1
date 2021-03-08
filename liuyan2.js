window.onload = function(){
	var Name = document.getElementById("name");
    var Msg = document.getElementById("msg");
    var Btn = document.getElementById("btn");
    var Ul = document.getElementById("pn");
    Btn.onclick = function(){
    	var username = Name.value;
        var MsgValue = Msg.value;         
        var Li = document.createElement("li");
        Li.innerHTML = username +':'+ MsgValue + " &nbsp;&nbsp;&nbsp;<a>删除</a><br>cmz回复：感谢您的留言！";
        var arrayLi = Ul.getElementsByTagName("li")
        if(arrayLi.length>0){
            Ul.insertBefore(Li,arrayLi[0]);
        }else{
            Ul.appendChild(Li);
        }
        Msg.value='';
        var Span = document.getElementsByTagName("a");
        for(var i=0; i<Span.length; i++){
            Span[i].onclick = function(){
              Ul.removeChild(this.parentNode);
              count--;
            }
        }
    }
}