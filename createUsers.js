function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate() {
	var days2018 = 48*365;
	var days2015 = 45*365;

	// milliseconds in one day
	var one_day=1000*60*60*24

	// get a random number of days passed between 2015 and 2018
	var days = getRandomInt(days2015, days2018);

	return new Date(days*one_day)
}

function getRandomFirstName() {
var firstName;

switch(getRandomInt(1, 10)){
	case 1:
		firstName="Petr";
		break;
	case 2:
		firstName="Ivana";
		break;
	case 3:
		firstName="Martin";
		break;
	case 4:
		firstName="Petra";
		break;
	case 5:
		firstName="Jaroslav";
		break;
	case 6:
		firstName="Hana";
		break;
	case 7:
		firstName="Jan";
		break;
	case 8:
		firstName="Lenka";
		break;
	case 9:
		firstName="Robert";
		break;
	default:
		firstName="Julie";       
}

return firstName
}

function getRandomLastName() {
var lastName;

switch(getRandomInt(1, 10)){
	case 1:
		lastName="Brown";
		break;
	case 2:
		lastName="Trust";
		break;
	case 3:
		lastName="Hank";
		break;
	case 4:
		lastName="Soldier";
		break;
	case 5:
		lastName="Ryan";
		break;
	case 6:
		lastName="Santa";
		break;
	case 7:
		lastName="Conners";
		break;
	case 8:
		lastName="Monroe";
		break;
	case 9:
		lastName="Mocker";
		break;
	default:
		lastName="Carnie";       
}

return lastName
}

for (var i = 1; i <= 500; i++) {    
	db.users.insert( 
		{ 
			userId : i, 
			created: getRandomDate(),
			firstName: getRandomFirstName(),
			lastName: getRandomLastName()
		} 
	);
}

db.users.find().forEach(function(doc) {
	var m = getRandomInt(0, 3);
	for (var j = 1; j <= m; j++) {
		try {
			db.users.updateOne(
				{"_id" : doc._id },
				{$push: { "k" : { "k1" : getRandomInt(0, 5), "k2" : getRandomInt(-100, 100) } } }
			);
		}
		catch (e) {
		}
	}
});