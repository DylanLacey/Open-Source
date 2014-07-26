describe('Backwards', function () {
	var b = backwards;
	
	it('should exist', function () {
		expect(b.toString()).toEqual('[object Object]');
	});

	describe('isArguments', function () {
		var method;
    beforeEach(function () {
    	method = b.isArguments;
    });

    it('should be a function', function () {
      expect(typeof method).toBe('function');
    });
    it('should return true if passed an argument that is an argument-array', function () {
      expect(method(arguments)).toBe(true)
    });
    it('should return false if passed an argument that is an array', function () {
      expect(method([])).toBe(false)
    });
    it('should return false if passed an argument that is an boolean', function () {
      expect(method(true)).toBe(false)
    });
    it('should return false if passed an argument that is a function', function () {
      expect(method(function(){})).toBe(false)
    });
    it('should return false if passed an argument that is a number', function () {
      expect(method(1)).toBe(false)
    });
    it('should return false if passed an argument that is an object', function () {
      expect(method({})).toBe(false)
    });
    it('should return false if passed an argument that is a string', function () {
      expect(method('test')).toBe(false)
    });
    it('should return false if passed an argument that is null', function () {
      expect(method(null)).toBe(false)
    });
    it('should return false if passed an argument that is undefined', function () {
      expect(method(undefined)).toBe(false)
    });
  });
});