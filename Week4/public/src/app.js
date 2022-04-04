const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    login({
      username: username,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    register({
      username: username,
      email: email,
      password: password
    }).then(function(res) {
      window.location.href = 'home.html';
    });
  };
  
  const doLogout = function(e) {
    e.preventDefault();
  };

class Soap{
    name;
    premade = false;
    custom = true;
    ingredients = new Map();

    constructor(name, premade, custom, ingredients){
        this.name = name;
        this.premade = premade;
        this.custom = custom;
        this.ingredients = ingredients;
    }
}

//The soap to create
newSoap = new Map();

//All soaps conatin these base ingredients
baseSoap = new Map([
    ["lye", 8.97],
    ["water", 12.80],
    ["castor", 9.60]
])

/*Add the base ingredients to each soap
baseSoap.array.forEach(function(value, key) {
    newSoap.set(key, value);
});*/

//This at least works
for (var x of baseSoap.entries()){
    newSoap.set(x[0], x[1]);
}

//Add the user defined ingredients to cureent soap
//newSoap.set(baseSoap);
newSoap.set("aloe butter", 9.60);
newSoap.set("babassu", 9.60);
newSoap.set("kokum butter", 6.40);
newSoap.set("mango butter", 6.40);
newSoap.set("neem seed oil", 3.20);
newSoap.set("palm oil", 6.40);
newSoap.set("safflower oil", 6.40);
newSoap.set("shea butter", 6.40);

//Ensure the code will work and view in console... Report
console.log(new Soap("Trenzik", false, true, newSoap));
console.log("Created soap has " + newSoap.size + " ingredients!");