const chai = require('chai');
const expect = chai.expect;
const bubbleSort = require('./practice.js');


describe('bubbleSort', function() {
    it('should sort the array', function() {
        var array = [1, 45, 3, 7, 78, 10, 9];
        var sorted = [1, 3, 7, 9, 10, 45, 78];
        expect(bubbleSort(array)).to.deep.equal(sorted);
    })
});
