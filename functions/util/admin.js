const serviceAccount = require('../admin_keys.json');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://socialape-659f4.firebaseio.com',
    storageBucket: 'socialape-659f4.appspot.com'

});

const db = admin.firestore();

module.exports = { admin, db };
