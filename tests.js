// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe("sayHello", function () {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    })
    it("should return a string when called.", function () {
        expect(typeof sayHello()).toBe("string");
    })
    it("should return the string 'Hello' when executed", function () {
        expect(sayHello()).toBe("Hello");
    })
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    })
})

// Unit tests for the isFive function
describe("isFive", function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when executed", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should accept a number for an input", function () {
       expect(typeof isFive()).not.toBe("string");
    });
    it("should return true when passed the number 5", function () {
        expect(typeof isFive()).toBe("boolean");
    });
})

// Unit tests for the addTwoNumbers function
describe("add", function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    })
})