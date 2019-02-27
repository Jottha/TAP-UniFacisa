// const firebase = require("firebase-admin");


// class FirebaseService {
    
//     constructor(){

//     }
//     async upload(base64Image, key) {
//         const uploadTask = await this.storage().ref(`imagens/${key}`)
//             .putString(base64Image, 'data_url');

//         return uploadTask.downloadURL;
//     };

//     delete(imgKey) {
//         this.storage.ref(`imagens/${imgKey}`).delete();
//     };
// };

// export default FirebaseService;