const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
// const newObject = new Object();

const restaurant = {
	name: 'Mister 01',
	address: {
		street: '355 North Federal Highway',
		office: 'Suite #5',
		city: 'Boca Raton',
		state: 'FL',
		zipCode: '33432',
		phone: '(786) 677-2903',
	},
	online: {
		rating: 4.9,
	},
};
// console.log(db);

const addRestaurant = db
	.collection('restaurants')
	.add(restaurant)
	.then(doc => console.log('Created restaurant', doc.id))
	.catch(err => console.error(err));

// console.log(addRestaurant);
