database.ref('/transactions/').once('value').then(function(snap) {
	var container = document.getElementByID("transactionContainer");
	snap.forEach(function(snap) {
		//Making Cards for Showing Details
		var transactionId = snap.key;
		var transaction = snap.val();
		container.innerHTML += ('<div class="row border border-light align-items-center mb-3 shadow p-3 bg-white rounded"><h4 class="text-center">' + 
		transaction.buyerId + '</h4></div><div class="col-2"><h4 class="text-center">' + 
		transaction.sellerId + '</h4></div><div class="col-2"><h4 class="text-center">' + 
		transaction.fees + '</h4></div><div class="col-3"><h6 class="text-center">' + 
		transaction.a.lat + '<br/>' + 
		transaction.b.lat + '<br/>' + 
		transaction.c.lat + '<br/>' + 
		transaction.d.lat + '</h6></div><div class="col-3"><h6 class="text-center">' + 
		transaction.a.long + '<br/>' + 
		transaction.b.long + '<br/>' + 
		transaction.c.long + '<br/>' + 
		transaction.d.long + '</h6></div></div>');
	});
});