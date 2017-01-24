const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
    // if (res !== 44){
    //     throw new Error(`Expected 44, but got ${res}`)
    // }
});

it('should asynch add two numbers', (done) => {
    var res = utils.asynchAdd(1,2, (sum) => {
        expect(sum).toBe(3).toBeA('number');
        done();
    });
    
})

it('should square a number', (done) => {
    var res = utils.square(2, (product) =>{
    expect(product).toBe(4).toBeA('number');
    done();
    // {
    //     throw new Error(`Expected 4, but got ${res}`)
    // }
});
})

it('should verify first and last names are set', () => {
    var res = utils.setName({age:29, occupation:"Developer"}, "Ken Brown");
    expect(res).toInclude({
        firstName: "Ken",
        lastName: "Brown"
    });
})

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: "Ken"}).toNotEqual({name:"ken"});
//     // expect([2,3,4]).toExclude(1);

//     expect({
//         name: "Ken",
//         age: 29,
//         location: "DC"
//     }).toExclude({
//         age: 23
//     })
// });