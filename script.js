function getPassword(){
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
  var passwordLength = 8;
  var password = "";

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber,randomNumber+1);

  }
  document.getElementById("password").value = password
}
