define(['backbone','jquery'], function(Backbone, $){
	var RegistView = Backbone.View.extend({
		tagName: "div",
		className: "snInput",

		events: {
			"click .snRegist": "regist"
		},

		initialize: function() {
		},

		regist: function() {
			console.log('regist!');
			$.ajax({
				type: "GET",
				url: "./api/atnd"
			});
		}
	});
	return RegistView;
});