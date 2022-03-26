var _this = this;
var myPhone = {
    vendor: "honor",
    model: 50,
    ram: 8,
    getProperties: function () { return "vendor: ".concat(_this.vendor, ", model: ").concat(_this.model, ", ram:").concat(_this.ram, ", cores: ").concat(_this.cores); },
    setProperties: function (vendor, model, ram, cores) {
        _this.vendor = vendor;
        _this.model = model;
        _this.ram = ram;
        _this.cores = cores;
    }
};
myPhone.setProperties('apple', 7, 6);
//Classes
var Pc = /** @class */ (function () {
    function Pc(vendor, ram, hdd, ssd) {
        this.hdd = null;
        this.ssd = null;
        this.vendor = vendor;
        this.ram = ram;
        ssd ? this.ssd = ssd : this.ssd = null;
        hdd ? this.hdd = hdd : this.hdd = null;
    }
    return Pc;
}());
var myLaptop = new Pc('Acer', 8, 512);
console.log(myLaptop);
