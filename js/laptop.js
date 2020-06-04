function Laptop(title, year, proz, ram, core, material, weight) {
    this.title = title;
    this.year = year;
    this.proz = proz;
    this.ram = ram;
    this.core = core;
    this.material = material;
    this.weight = weight;

    this.getNewDiv = function(){
        return this.weight + this.material + this.year;
      }
};

function Ultrabook(name, year, proz, ram, core, material, weight) {
    this.name = name;
    this.year = year;
    this.proz = proz;
    this.ram = ram;
    this.core = core;
    this.material = material;
    this.weight = weight;

    this.getNewDiv = function(){
        return this.weight + this.material + this.year;
      }
};

