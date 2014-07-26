var name   = 'backwards', 
    // module = this[name], 
    module = backwards, 
    method, value, expected, 
    oldArray, array, oldObj, obj, f;

describe(name, function () {
  
  // describe('whatTypeIs', function () {
  //   beforeEach(function () {
  //     method = module.whatTypeIs;
  //   });

  //   it('should be a function', function () {
  //     expect(typeof method).toBe('function');
  //   });
  //   it('should return "arguments" if given an Arguments-array', function () {
  //     expect(method(arguments)).toBe('arguments'); 
  //   });
  //   it('should return "array" if given an Array literal', function () {
  //     expect(method([])).toBe('array');
  //   });
  //   it('should return "array" if given an Array object', function () {
  //     expect(method(new Array(1, 2, 3))).toBe('array');
  //   });
  //   it('should return "boolean" if given a Boolean primitive', function () {
  //     expect(method(true)).toBe('boolean');
  //   });
  //   it('should return "boolean" if given a Boolean obect', function () {
  //     expect(method(new Boolean(true))).toBe('boolean');
  //   });
  //   it('should return "function" if given a Function literal', function () {
  //     expect(method(function(){})).toBe('function');
  //   });
  //   it('should return "function" if given a Function object', function () {
  //     expect(method(new Function())).toBe('function');
  //   });
  //   it('should return "number" if given a Number primitive', function () {
  //     expect(method(100)).toBe('number');
  //   });
  //   it('should return "number" if given a Number object', function () {
  //     expect(method(new Number(-100))).toBe('number');
  //   });
  //   it('should return "object" if given an Object literal', function () {
  //     expect(method({})).toBe('object');
  //   });
  //   it('should return "object" if given an Object object', function () {
  //     expect(method(new Object())).toBe('object');
  //   });
  //   it('should return "string" if given a String primitive', function () {
  //     expect(method('test')).toBe('string');
  //   });
  //   it('should return "string" if given a String object', function () {
  //     expect(method(new String('test'))).toBe('string');
  //   });
  //   it('should return "null" if given a Null', function () {
  //     expect(method(null)).toBe('null');
  //   });
  //   it('should return "undefined" if given undefined / void 0', function () {
  //     expect(method(undefined)).toBe('undefined');
  //     expect(method(void 0)).toBe('undefined');
  //   });
  //   it('should return the whole string if the object has a custom toString method', function () {
  //     var CustomObject = function () {};
  //     CustomObject.prototype.toString = function () { return 'cust0m'; };
  //     expect(method(new CustomObject())).toBe('cust0m');
  //   });
  // });
  
  describe('isArguments', function () {
    beforeEach(function () { method = module.isArguments; });
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
  
  describe('isBoolean', function () {
    beforeEach(function () { method = module.isBoolean; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return true if passed an argument that is an boolean', function () { expect(method(true)).toBe(true) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isFunction', function () {
    beforeEach(function () { method = module.isFunction; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return true if passed an argument that is a function', function () { expect(method(function(){})).toBe(true) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isNumber', function () {
    beforeEach(function () { method = module.isNumber; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return true if passed an argument that is a number', function () { expect(method(1)).toBe(true) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isObject', function () {
    beforeEach(function () { method = module.isObject; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return true if passed an argument that is an object', function () { expect(method({})).toBe(true) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isString', function () {
    beforeEach(function () { method = module.isString; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return true if passed an argument that is a string', function () { expect(method('test')).toBe(true) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isNull', function () {
    beforeEach(function () { method = module.isNull; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return true if passed an argument that is null', function () { expect(method(null)).toBe(true) });
    it('should return false if passed an argument that is undefined', function () { expect(method(undefined)).toBe(false) });
  });
  
  describe('isUndefined', function () {
    beforeEach(function () { method = module.isUndefined; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should return false if passed an argument that is an argument-array', function () { expect(method(arguments)).toBe(false) });
    it('should return false if passed an argument that is an array', function () { expect(method([])).toBe(false) });
    it('should return false if passed an argument that is an boolean', function () { expect(method(true)).toBe(false) });
    it('should return false if passed an argument that is a function', function () { expect(method(function(){})).toBe(false) });
    it('should return false if passed an argument that is a number', function () { expect(method(1)).toBe(false) });
    it('should return false if passed an argument that is an object', function () { expect(method({})).toBe(false) });
    it('should return false if passed an argument that is a string', function () { expect(method('test')).toBe(false) });
    it('should return false if passed an argument that is null', function () { expect(method(null)).toBe(false) });
    it('should return true if passed an argument that is undefined', function () { expect(method(undefined)).toBe(true) });
  });
  
  describe('compose', function () {
    var oldValue, minusTwo, addOne, promise, respond_promise, respond;
    
    beforeEach(function () {
      method = module.compose; 
      value  = expected = undefined; 
      
      oldValue = [1, 2, 3];
      minusTwo = function (x) { return x-2 };
      addOne   = function (x) { return x+1 };
      value    = module.map(method(addOne, minusTwo), oldValue);
//       promise  = function (n) {
//         return new Promise(function (resolve, reject) {
// //          setTimeout(resolve(4), 500);
//           resolve(4);
//         });
//       };
//       respond_promise = function (x) {
//         return x.then(function (resolve) {
//           return resolve;
//         }, function (error) {
//           throw error;
//         });
//         return 4;
//       };
    });

    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should not be curried', function () { expect(method.curried).toBe(undefined); });
    it('should pass the output of the first function to the input of the next, and so on ...', function () {
      expect(value.toString()).toBe([0, 1, 2].toString()); 
    });
    it('should return a new value (not cause side-effects on the given input)', function () {
      expect(oldValue.toString()).toBe([1, 2, 3].toString()); 
    });
//    it('should be able to handle Promises/A+', function () {
//      expect(method(respond_promise, promise(4))).toBe(4);
//    });
  });
  
//  describe('forEach', function () {
//    beforeEach(function () {
//      method = module.forEach; 
//      value = expected = undefined; 
//    });
//
//    it('should be a function', function () {
//      expect(typeof method).toBe('function');
//    });
//    
//    it('should run the function over each index of the given array (causing side-effects)', function () {
//      value = [1, 2, 3]; 
//      method(function (x, i, obj) { obj[i] = x+1 }, value); 
//      expect(value.toString()).toBe([2, 3, 4].toString()); 
//    });
//    
//    it('should run the function over each property of the given object (causing side-effects)', function () {
//      value = { name: 'test', uid: '123' }; 
//      method(function (x, i, obj) { obj[i] = x+1 }, value); 
//      expect(value.name).toBe('test1'); 
//      expect(value.uid).toBe('1231'); 
//    });
//    
//    it('should be curryable', function () {
//      value = [1, 2, 3]; 
//      method(function (x, i, obj) { obj[i] = x+1 }, value); 
//      expect(value.toString()).toBe([2, 3, 4].toString()); 
//    });
//  });
  
  describe('pluck', function () {
    beforeEach(function () { method = module.pluck; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should return the value of a given index of an array', function () { expect(method(0, ['4', '5', '6'])).toBe('4'); });
    it('should return the value of a given key in an object', function () { expect(method('uid', { uid: 0 })).toBe(0); });
  });
  
  describe('either', function () {
    beforeEach(function () { method = module.either; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
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
  
  describe('maybe', function () {
    beforeEach(function () { method = module.either; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
//    it('should return the second argument if found, else return the first (default) argument', function () {
//      expect(method('default', 'Svein Olav')).toBe('Svein Olav');
//    });
//    it('should return the first argument if the second one is Null', function () {
//      value = method('default', null);
//      expect(value).toBe('default');
//    });
//    it('should return the first argument if the second one is undefined', function () {
//      expect(method('default', undefined)).toBe('default');
//    });
//    it('should return the first argument if the second one is an empty String', function () {
//      expect(method('default', '')).toBe('default');
//    });
  });
  
  describe('map', function () {
    var promise;
    beforeEach(function (done) {
      method   = module.map;
      f        = function (x) { return x+1 };
      oldArray = [1, 2, 3];
      array    = method(f, oldArray);
      oldObj   = { uid: 123 };
      obj      = method(f, oldObj);

      // Promise  = Promise || RSVP.Promise;
      
      // promise  = function (n) {
      //   return new RSVP.Promise(function (resolve, reject) {
      //     setTimeout(resolve(n), 500);
      //     console.log('Promise value = ' + n);
      //     // resolve(n);
      //   });
      // };

      // promise = function (n) {
      //   return new Promise(function (resolve, reject) {
      //     resolve(n);
      //   });
      // };

      // promise = function (n) {
      //   // var res = $.Deferred();
      //   var res = $.when(n);
      //   // setTimeout(res.resolve(n), 10);
      //   // res.resolve(4);
      //   return res;
      // };
    });

    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should be able to map over arrays', function () { 
      expect(array.toString()).toBe([2, 3, 4].toString()); 
    });
    it('should not cause side-effects on the given array', function () {
      expect(oldArray.toString()).toBe([1, 2, 3].toString()); 
    });
    it('should be able to map over objects', function () { expect(obj.uid).toBe(124); });
    it('should not cause side-effects on the given object', function () { expect(oldObj.uid).toBe(123); });
    it('should be able to map over arguments', function () { expect(method(f, arguments).toString()).toBe(''); });
    it('should be able to map over a boolean', function () { expect(method(f, true)).toBe(2); });
    it('should be able to map over a number', function () { expect(method(f, 1)).toBe(2); });
    it('should be able to map over a string', function () { expect(method(f, 'test')).toBe('test1'); });
    // it('should be able to map over a promise', function () {
    //   var asdf = window.asdf = 4, test;
      
    //   runs(function () {
    //     asdf = 4;
    //     test = method(function (x) { asdf = x+1; }, promise(asdf));
    //     expect(asdf).toBe(4);
    //     promise(4).then(function (success) {
    //       asdf = 'success';
    //     }, function (e) {
    //       throw e;
    //     });
    //   });
      
    //   waits(100);
    //   runs(function () {
    //     expect(asdf).toBe(5);
    //     expect(module.isPromise(test)).toBe(true);
    //     window.test = test;
    //   });
    // });
  });
  
  describe('reduce', function () {
    beforeEach(function () {
      method   = module.reduce; 
      f        = function (x, y) { return x+y };
      oldArray = [1, 2, 3]; 
      array    = method(f, 0, oldArray);
      oldObj   = { id: 0, uid: 1 };
      obj      = method(f, 0, oldObj);
    });

    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should map the function over the array and return a single value', function () { expect(array).toBe(6); });
    it('should not cause side-effects on the given array', function () { expect(oldArray.toString()).toBe([1, 2, 3].toString()); });
    it('should map the function over the object and return a single value', function () { expect(obj).toBe(1); });
    it('should not cause side-effects on the given object', function () { expect(oldObj.id).toBe(0); });
  });
  
  describe('filter', function () {
    beforeEach(function () {
      method   = module.filter; 
      f        = function (x) { return x > 3 };
      oldArray = [1, 2, 3, 4, 5, 6]; 
      array    = method(f, oldArray);
      oldObj   = { id: 0, uid: 1 };
      obj      = method(f, oldObj);
    });

    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should filter the array indexes', function () { expect(array.toString()).toBe([4, 5, 6].toString()); });
    it('should not cause side-effects on the given array', function () { 
      expect(oldArray.toString()).toBe([1, 2, 3, 4, 5, 6].toString()); 
    });
  });

  describe('replace', function () {
    beforeEach(function () { method = module.replace; }); 
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should take a predicate as the first and second argument, and a string as the third argument', function () {
      expect(method(' ', '_', 'Under Score')).toBe('Under_Score');
    });
  });

  describe('split', function () {
    beforeEach(function () { method = module.split; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should take a predicate as the first argument, and a string as the second argument', function () {
      expect(method(' ', 'Under Score').toString()).toBe(['Under', 'Score'].toString());
    });
  });
  
  describe('join', function () {
    beforeEach(function () { method = module.join; });
    it('should be a function', function () { expect(typeof method).toBe('function'); });
    it('should be curryable', function () { expect(method.curried).toBe(true); });
    it('should take a string as the first argument, and a string as the second argument', function () {
      expect(method('Hello, ', 'Mister')).toBe('Hello, Mister'); 
    });
  });
  
});