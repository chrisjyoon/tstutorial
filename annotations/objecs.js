var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age, name = profile.name;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(lat);
console.log(lng);
