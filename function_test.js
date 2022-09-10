var expect = chai.expect;

describe("myfunction", function () {
  describe("#multiply", function () {
    it("should multiply the two parameters", function () {
      var x = multiply(2, 2);
      expect(x).to.equal(4);
    });
    it("should throw an error if the result is not 4", function () {
      expect(function () {
        multiply(2, 3);
      }).to.throw(Error);
    });
  });
});
