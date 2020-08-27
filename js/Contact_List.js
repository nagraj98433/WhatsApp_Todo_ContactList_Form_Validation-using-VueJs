var app = new Vue({
	el: '#contact-list',
	data: {
		createNew: false,
		contact_details:
		{
			fname: "Rajesh",
			lname: "Barma",
			email: "kamleshp434@gmail.com",
			phone_number: "1234567890",
			country: "india",
			city: "maha",
			state: "maha",
			address: "maha",
		},
		selectedContact: null,
		contact_Details: [
			{
				fname: "Kamlesh",
				lname: "Parmar",
				email: "kamleshp434@gmail.com",
				phone_number: "9840132054",
				country: "India",
				city: "Delhi",
				state: "Noida",
				address: "kivya Nagar, Delhi 400066"
			},
			{
				fname: "Suresh",
				lname: "Gupta",
				email: "sureshg234@gmail.com",
				phone_number: "9920132034",
				country: "India",
				city: "Mumbai",
				state: "Maharashtra",
				address: "Divya Nagar, Mumbai 400060"
			},

			{
				fname: "Rajesh",
				lname: "Prajapati",
				email: "rajeshp464@gmail.com",
				phone_number: "7220132034",
				country: "India",
				city: "Kolkata",
				state: "West Bangal",
				address: "West Nagar, Kolkata 400090"
			},
		],
		completeDetails: [],
	},
	methods: {
		saveContact: function () {
			var copyObj = Object.assign({}, this.contact_details);
			this.contact_Details.push(copyObj)
			// console.log(this.contact_Details)

			this.contact_details.fname = "";
			this.contact_details.lname = "";
			this.contact_details.email = "";
			this.contact_details.phone_number = "";
			this.contact_details.country = "";
			this.contact_details.city = "";
			this.contact_details.state = "";
			this.contact_details.address = "";



		},

		more_details: function (value) {
			console.log(value)
			this.selectedContact = value
		}
	},


})