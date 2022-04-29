const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
// const newObject = new Object();

// const restaurant = {
// 	name: 'Mister 01',
// 	address: {
// 		street: '355 North Federal Highway',
// 		office: 'Suite #5',
// 		city: 'Boca Raton',
// 		state: 'FL',
// 		zipCode: '33432',
// 		phone: '(786) 677-2903',
// 	},
// 	online: {
// 		rating: 4.9,
// 	},
// };
// // console.log(db);

// const addRestaurant1 = db
// 	.collection('restaurants')
// 	.add(restaurant)
// 	.then(doc => console.log('Created restaurant', doc.id))
// 	.catch(err => console.error(err));

// // console.log(addRestaurant);

const addResturant2 = {
	name: 'Bolay',
	address: {
		street: '7060 West Palmetto Park Road',
		city: 'Boca Raton',
		state: 'FL',
		zipCode: '33433',
	},
};

// const restaurants =  db.collection('restaurants')

async function addRestaurant(restaurant) {
	try {
		const doc = await db.collection('restaurants').add(restaurant);
		console.log(`Yay! A new restaurant was added!, ${doc.id}`);
	} catch (err) {
		console.error('Oops! We could not add restaurant!', err.message);
	}
}

addRestaurant(addResturant2);
