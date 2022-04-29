// Firestore id: ENme4mt35kOpveMo3dKj
// Web code =  Repeat Yourself

const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const restaurantsCol = db.collection('restaurants');

// To delete a document fron firestore, pass the
// stored, then call delete method
restaurantsCol
	.doc('ENme4mt35kOpveMo3dKj')
	.delete()
	.then(res => console.log('Success'))
	.catch(err => console.error('Error deleting', err));
