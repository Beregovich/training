//Objects
type smartphone = {
    vendor: string,
    model: number | string,
    ram: number,
    cores?: number,
    getProperties?: () => string,
    setProperties?: (vendor: string,
                     model: number | string,
                     ram: number,
                     cores?: number) => void
}
let myPhone: smartphone = {
    vendor: "honor",
    model: 50,
    ram: 8,
    getProperties: () => `vendor: ${this.vendor}, model: ${this.model}, ram:${this.ram}, cores: ${this.cores}`,
    setProperties: (vendor: string, model: number | string, ram: number, cores?: number): void => {
        this.vendor = vendor;
        this.model = model;
        this.ram = ram;
        this.cores = cores;
    }
};
myPhone.setProperties('apple', 7, 6,);

//Classes
class Pc {
    private vendor: string;
    private ram: number;
    private hdd: number | null = null;
    private ssd: number | null = null;

    constructor(vendor: string, ram: number, hdd?: null | number, ssd?: null | number) {
        this.vendor = vendor;
        this.ram = ram;
        ssd ? this.ssd = ssd : this.ssd = null;
        hdd ? this.hdd = hdd : this.hdd = null;
    }
}

const myLaptop = new Pc('Acer', 8, 512);
console.log(myLaptop);

//Inheritance