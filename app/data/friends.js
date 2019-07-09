// Array that holds data objects, a list of all friends and applicable data

// Might need to change the datatype of answers to string
// Multiple dummy friends makes it easier to test!
// ===============================================================================

var userData = [
	{
	  "name": "Sweet Dee",
	  "photo": "https://avatars0.githubusercontent.com/u/1561825?v=3&s=460",
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
	  "photo": "https://avatars0.githubusercontent.com/u/1561825?v=3&s=460",
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
	  "photo": "https://avatars0.githubusercontent.com/u/1561825?v=3&s=460",
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
	}
  ];	{
	"name": "John Bigboote",
	"photo": "https://avatars0.githubusercontent.com/u/1561825?v=3&s=460",
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
	