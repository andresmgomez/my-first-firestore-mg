// Firestore id: ENme4mt35kOpveMo3dKj
// Web code =  Repeat Yourself

const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const restaurantsCol = db.collection('restaurants');

restaurantsCol
	.get()
	.then(snapshot => {
		snapshot.docs.forEach(doc => {
			// let rest = doc.data();
			console.log(doc.data());
		});
	})
	.catch(err => console.log(err));

// document, condition, value
restaurantsCol
	.where('name', '==', 'Mister 01')
	// Another condition
	// where('rating', '>=', 4.75)
	.where('deleted', '!=', true)
	.get()
	.then(snapshot => {
		snapshot.docs
			.forEach(doc => console.log(doc.data()))
			.catch(err => console.log(err));
	});
