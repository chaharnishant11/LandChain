var config = 
{
    apiKey: "AIzaSyB69tiFEDVoPmfe2Jnd5vPLvUydMLUrr60",
    authDomain: "land-chain.firebaseapp.com",
    databaseURL: "https://land-chain.firebaseio.com",
    projectId: "land-chain",
    storageBucket: "land-chain.appspot.com",
    messagingSenderId: "470304393650"
};
firebase.initializeApp(config);
const database = firebase.database();
$('#logout-btn').on("click", function() {
	localStorage.removeItem('id');
	window.location.href = 'index.html';
});
console.log(localStorage.getItem('id'));

