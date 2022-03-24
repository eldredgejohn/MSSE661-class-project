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

newSoap = new Map([
    ["lye", 8.97],
    ["water", 12.80],
    ["castor", 9.60],
    ["aloe butter", 9.60],
    ["babassu", 9.60],
    ["kokum butter", 6.40],
    ["mango butter", 6.40],
    ["neem seed oil", 3.20],
    ["palm oil", 6.40],
    ["safflower oil", 6.40],
    ["shea butter", 6.40],
])

console.log(new Soap("Trenzik", false, true, newSoap));