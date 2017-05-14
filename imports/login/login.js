import { Template } from 'meteor/templating';
import "./login.html";


Template.login.events({
  
   'click #loginbtn': function(){
		
    	var username =$("#username").val();
   	console.log("username "+username);
	if(username == "actor"){
		window.location.href = "/actor";
	}else if(username == "filmstudio"){
	window.location.href = "/studio";
	}
    }
});
