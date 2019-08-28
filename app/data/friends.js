// Array that holds data objects, a list of all friends and applicable data

// Might need to change the datatype of answers to string
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [
	{
	  "name": "Sweet Dee",
	  "photo": "https://imgix.bustle.com/2017/1/4/4aab375c-6513-46e9-a4bc-7db3763e86c2.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
	  "scores":[
		  5,
			1,
			4,
			4,
			5,
			1,
			2,
			5,
			4,
			1
	  ]
	},
	{
	  "name": "Gaius Baltar",
	  "photo": "https://external-preview.redd.it/5sNAr_AxE0SsCH5VqdtAKgYMrMWPgGC4FBDegeIhVJ0.jpg?width=640&crop=smart&auto=webp&s=bee3c8354d94a5cd74177935ff10da5e5c4063e8",
	  "scores":[
		  5,
		  2,
		  2,
		  4,
		  1,
		  1,
		  5,
		  1,
		  3,
		  1
	  ]
	},
	{
	  "name": "Haman Karn",
	  "photo": "https://s1.zerochan.net/Haman.Karn.600.435407.jpg",
	  "scores":[
		  1,
		  1,
		  1,
		  1,
		  1,
		  1,
		  1,
		  1,
		  1,
		  1
	  ]
	},
  	{
	"name": "John Bigboote",
	"photo": "https://media.gettyimages.com/photos/cosplayer-todd-dressed-as-john-bigboote-portrayed-by-christopher-picture-id451097776?s=640x640",
	"scores":[
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3
	]
  }
];


  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;
	