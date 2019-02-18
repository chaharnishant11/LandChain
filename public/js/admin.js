console.log('First');
$("#login-form").submit(function(e) {
	e.preventDefault();
	var adminId = $(this).find("#id").val(), pass = $(this).find("#password").val();
	database.ref('/admins/' + adminId + '/').once('value').then(function(snapshot) {
	  	if(snapshot.val() == null)
	  		alert("Official Not Registered");
	  	else if(snapshot.val().password != pass)
	  		alert(snapshot.val());
	  	else
	  	{
	  		localStorage.setItem('id', adminId);
	  		window.location.href = 'home_admin.html';
	  	}
    });
});