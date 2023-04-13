const firebaseConfig = {
    apiKey: "AIzaSyB3C7VgVAXj6Q_IWPL-XaIbKKtb7SU5vnQ",
    authDomain: "contact-form-e91eb.firebaseapp.com",
    projectId: "contact-form-e91eb",
    storageBucket: "contact-form-e91eb.appspot.com",
    messagingSenderId: "338146843234",
    appId: "1:338146843234:web:8f9fc9b28ebe7d1e1fcf3b"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messsages collection
let messagesRef = firebase.database().ref('messages'); 

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm)

// Submit Form
function submitForm(e){
    e.preventDefault();

    // Get form values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show Alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'
    }, 3000);

    // Clear Form
    document.getElementById('contactform').reset();

}

// Function to retrieve form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }