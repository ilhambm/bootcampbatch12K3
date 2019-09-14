function is_username_valid(username) 
{
  var ketentuanUsername = /^[a-zA-Z]{1}[a-zA-Z0-9]{4,8}$/;//kombinasi huruf kecil, huruf besar dan angka dengan panjang 5-9 karakter. Username tidak boleh diawali dengan angka / karakter special.
  return ketentuanUsername.test(username);
 }


if (is_username_valid("ilhamB4hr"))//Valid
{
    console.log("Username Is Valid");
} 
else 
{
    console.log("Username Is Invalid");
}


function is_password_valid(password) 
{
    var ketentuanPassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!"\\\]\[%,;:'/.+><)($%^&*=_{}|-])(?=.*?[@]).{8,}$/;//merupakan kombinasi dari huruf kecil, huruf besar minimal satu karakter, angka minimal satu karakter, dan karakter spesial minimal satu karakter dan harus memiliki karakter simbol ‘@’  dan panjang minimal 8 karakter.
    return ketentuanPassword.test(password);
}

if (is_password_valid("ilhamm"))//Invalid
{
    console.log("Username Is Valid");
} 
else 
{
    console.log("Username Is Invalid");
}
