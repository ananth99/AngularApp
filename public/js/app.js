(function() {
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [{
			name: 'Decahedron',
			price: 2.95,
			description: 'lorem ipsum..',
			canPurchase: true,
			soldOut: false,

		},
		{
			name:'Quartz',
			price: 4.95,
			description: 'lorem ipsum..',
			canPurchase: true,
			soldOut: false,
		},
		{
			name:'Diamond',
			price: 4.95,
			description: 'lorem ipsum..',
			canPurchase: true,
			soldOut: false,
		}
	];

})();