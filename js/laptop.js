function Laptop(title, year, proz, ram, core, material, weight) {
    this.title = title;
    this.year = year;
    this.proz = proz;
    this.ram = ram;
    this.core = core;
    this.material = material;
    this.weight = weight;
    this.getWeight = function(){
        if (this.weight <= 3000){
          return this.weight;
        } else{
            this.weight = 'err'
            return this.weight;
        
          }
      }
this.getWeight();
};

function Ultrabook(title, year,proz, ram, core, material, weight) {
  Laptop.call(this, title, year, proz, ram, core, material, weight);
//     this.getUWeight = function(){
//         if (this.weight <= 1500){
//           return this.weight;
//         } else{
//             this.weight = 'err'
//             return this.weight;
        
//           }
//       }
// this.getUWeight();
};

