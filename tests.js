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

// unit tests for isEven function
describe("isEven", function () {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return boolean", function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when passed the number 2", function () {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when passed the number -4", function () {
        expect(isEven(-4)).toBe(true);
    });
    it("should return true when passed the number 8", function () {
        expect(isEven(8)).toBe(true);
    });
    it("should return false when passed the number 3", function () {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed the string 'Banana'", function () {
        expect(isEven("banana")).toBe(false);
    });
    it("should return false when passed infinity", function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when passed an empty parameter", function () {
        expect(isEven()).toBe(false);
    });
    it("should return false when passed a boolean", function () {
        expect(isEven("boolean")).toBe(false);
    });
})

// unit tests for isVowel function
describe("isVowel", function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return boolean", function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when passed the letter a", function () {
       expect(isVowel("a")).toBe(true);
    });
    it("should return true when passed the letter A", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed the letter y", function () {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed the number 4", function () {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when passed a boolean", function () {
        expect(isVowel("boolean")).toBe(false);
    });
    it("should return false when passed banana", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when passed an empty parameter", function () {
        expect(isVowel()).toBe(false);
    });
});

// Unit tests for the addTwoNumbers function
describe("add", function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("should return 5 when passed 2 and 3", function () {
        expect(add(2, 3)).toEqual(5);
    });
    it("should return -12 when passed -3 and -9", function () {
        expect(add(-3, -9)).toEqual(-12);
    });
    it("should return 11 when passed 5 and 6", function () {
        expect(add(5, 6)).toEqual(11);
    });
    it("should return 6 when passed -4 and 10", function () {
        expect(add(-4, 10)).toEqual(6);
    });
    it("should return NaN when passed banana and split", function () {
        expect(add("banana", "split")).toEqual(NaN);
    });
    it("should return NaN when passed 2 and apples", function () {
        expect(add(2, "apples")).toEqual(NaN);
    });
    it("should return NaN when passed an empty parameter", function () {
        expect(add()).toEqual(NaN);
    });
});