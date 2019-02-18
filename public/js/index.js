$("#login-form").submit(function(e) {
	e.preventDefault();
	console.log("here");
	var userId = $(this).find("#id").val(), pass = $(this).find("#password").val();
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
		if(snapshot.val() == null)
	  		alert("User Not Registered");
	  	else if(snapshot.val().password != pass)
	  		alert("Password did not match");
	  	else
	  	{
	  		localStorage.setItem('id', userId);
	  		window.location.href = 'home.html';
	  	}
    });
});
$("#register-form").submit(function(e) {
	e.preventDefault();
	var uName = $(this).find("#name").val(), userId = $(this).find("#id").val(), pass = $(this).find("#password").val(), phone = $(this).find("#number").val();
	database.ref('/users/' + userId).once('value').then(function(snapshot) {
	  	if(snapshot.val() != null)
	  		alert("User Already Registered");
	  	else
	  	{
	  		database.ref('/users/' + userId + '/').set({
	            name: uName,
	            password: pass,
	            number: phone
	        });
	        localStorage.setItem('id', userId);
	  		window.location.href = 'home.html';
	  	}
    });
});