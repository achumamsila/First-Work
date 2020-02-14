 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBop82Yg3IQwGBNE50DE5rYf2HV1IQLvV4",
    authDomain: "contactform-6c07b.firebaseapp.com",
    databaseURL: "https://contactform-6c07b.firebaseio.com",
    projectId: "contactform-6c07b",
    storageBucket: "contactform-6c07b.appspot.com",
    messagingSenderId: "817381005756",
    appId: "1:817381005756:web:02e0bcb103c056da4273b9",
    measurementId: "G-BEHDMY0VYE"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var  Iname= getInputVal('Iname');
    var Email = getInputVal('Email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname,Iname,Email, phone, message);
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname,Iname,Email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:fname,
      company:Iname,
      email:Email,
      phone:phone,
      message:message
    });
  }