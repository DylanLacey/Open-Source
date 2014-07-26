describe('Backwards', function () {
	var 
			b = backwards
		, module = b
		, method
	;
	it('should exist', function () {
		expect(b.toString()).toEqual('[object Object]');
	});

	// describe('isArguments', function () {
 //    beforeEach(function () {
 //    	method = module.isArguments;
 //    });

 //    it('should be a function', function () {
 //      expect(typeof method).toBe('function');
 //    });
 //    it('should return true if passed an argument that is an argument-array', function () {
 //      expect(method(arguments)).toBe(true)
 //    });
 //    it('should return false if passed an argument that is an array', function () {
 //      expect(method([])).toBe(false)
 //    });
 //    it('should return false if passed an argument that is an boolean', function () {
 //      expect(method(true)).toBe(false)
 //    });
 //    it('should return false if passed an argument that is a function', function () {
 //      expect(method(function(){})).toBe(false)
 //    });
 //    it('should return false if passed an argument that is a number', function () {
 //      expect(method(1)).toBe(false)
 //    });
 //    it('should return false if passed an argument that is an object', function () {
 //      expect(method({})).toBe(false)
 //    });
 //    it('should return false if passed an argument that is a string', function () {
 //      expect(method('test')).toBe(false)
 //    });
 //    it('should return false if passed an argument that is null', function () {
 //      expect(method(null)).toBe(false)
 //    });
 //    it('should return false if passed an argument that is undefined', function () {
 //      expect(method(undefined)).toBe(false)
 //    });
 //  });

	describe('isArray', function () {
    beforeEach(function () {
      method = module.isArray;
    });
    
    it('should be a function', function () {
      expect(typeof method).toBe('function');
    });
    it('should return false if passed an argument that is an argument-array', function () {
      expect(method(arguments)).toBe(false)
    });
    it('should return true if passed an argument that is an array', function () {
      expect(method([])).toBe(true)
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
  
  // describe('isBoolean', function () {
  //   beforeEach(function () {
  //   	method = module.isBoolean;
  //   });

  //   it('should be a function', function () {
  //   	expect(typeof method).toBe('function');
  //   });
  //   it('should return false if passed an argument that is an argument-array', function () {
  //   	expect(method(arguments)).toBe(false)
  //   });
  //   it('should return false if passed an argument that is an array', function () {
  //   	expect(method([])).toBe(false)
  //   });
  //   it('should return true if passed an argument that is an boolean', function () {
  //   	expect(method(true)).toBe(true)
  //   });
  //   it('should return false if passed an argument that is a function', function () {
  //   	expect(method(function(){})).toBe(false)
  //   });
  //   it('should return false if passed an argument that is a number', function () {
  //   	expect(method(1)).toBe(false)
  //   });
  //   it('should return false if passed an argument that is an object', function () {
  //   	expect(method({})).toBe(false)
  //   });
  //   it('should return false if passed an argument that is a string', function () {
  //   	expect(method('test')).toBe(false)
  //   });
  //   it('should return false if passed an argument that is null', function () {
  //   	expect(method(null)).toBe(false)
  //   });
  //   it('should return false if passed an argument that is undefined', function () {
  //   	expect(method(undefined)).toBe(false)
  //   });
  // });
  
  // describe('isFunction', function () {
  //   beforeEach(function () { method = module.isFunction; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return true if passed an argument that is a function', function () { expect(method(function(){})).toBe(true) });
  //   it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
  //   it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
  //   it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
  //   it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
  //   it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  // });
  
  // describe('isNumber', function () {
  //   beforeEach(function () { method = module.isNumber; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
  //   it('should return true if passed an argument that is a number', function () { expect(method(1)).toBe(true) });
  //   it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
  //   it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
  //   it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
  //   it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  // });
  
  // describe('isObject', function () {
  //   beforeEach(function () { method = module.isObject; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
  //   it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
  //   it('should return true if passed an argument that is an object', function () { expect(method({})).toBe(true) });
  //   it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
  //   it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
  //   it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  // });
  
  // describe('isString', function () {
  //   beforeEach(function () { method = module.isString; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
  //   it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
  //   it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
  //   it('should return true if passed an argument that is a string', function () { expect(method('test')).toBe(true) });
  //   it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
  //   it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  // });
  
  // describe('isNull', function () {
  //   beforeEach(function () { method = module.isNull; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
  //   it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
  //   it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
  //   it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
  //   it('should return true if passed an argument that is null', function () { expect(method(null)).toBe(true) });
  //   it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  // });
  
  // describe('isUndefined', function () {
  //   beforeEach(function () { method = module.isUndefined; });
  //   it('should be a function', function () { expect(typeof method).toBe('function'); });
  //   it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
  //   it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
  //   it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
  //   it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
  //   it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
  //   it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
  //   it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
  //   it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
  //   it('should return true if passed an argument that is undefined', function () { expect(method(undefined)).toBe(true) });
  // });

	describe('compose', function () {
    var value, oldValue, minusTwo, addOne;
    
    beforeEach(function () {
      method = module.compose; 
      
      oldValue = [1, 2, 3];
      minusTwo = function (x) { return x-2 };
      addOne   = function (x) { return x+1 };
      value    = module.map(method(addOne, minusTwo), oldValue);
    });

    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should not be curried', function () { expect(method.curried).toBe(undefined); });
    it('should pass the output of the first function to the input of the next, and so on ...', function () {
      expect(value.toString()).toBe([0, 1, 2].toString()); 
    });
    it('should return a new value (not cause side-effects on the given input)', function () {
      expect(oldValue.toString()).toBe([1, 2, 3].toString()); 
    });
  });

  describe('pluck', function () {
  	var array, object;
  	method = module.pluck;
  	array  = method(0, ['4', '5', '6']);
  	object = method('uid', { uid: 8 });
    // beforeEach(function () {
    	// method = module.pluck;
    	// array  = method(0, ['4', '5', '6']);
    	// object = method('uid', { uid: 8 });
    // });

    it('should be a function', function () {
    	expect(typeof method).toBe('function');
    });
    // it('should be curryable', function () {
    // 	expect(method.curried).toBe(true);
    // });
    it('should return the value of a given index of an array', function () {
    	expect(array).toBe('4');
    });
    it('should return the value of a given key in an object', function () {
    	expect(object).toBe(8);
    });
  });
  
  describe('either', function () {
    beforeEach(function () { method = module.either; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    // it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should return the second argument if found, else return the first (default) argument', function () {
      expect(method('default', 'Svein Olav')).toBe('Svein Olav');
    });
    it('should return the first argument if the second one is Null', function () {
      expect(method('default', null)).toBe('default');
    });
    it('should return the first argument if the second one is undefined', function () {
      expect(method('default', undefined)).toBe('default');
    });
    it('should return the first argument if the second one is an empty String', function () {
      expect(method('default', '')).toBe('default');
    });
  });

});