var SingletonTester = (function() {

  function Singleton(args) {
    args = args || {};
    this.name = 'SingletonTester';
    this.pointX = args.pointX || 6; //get parameter from
    this.pointY = args.pointY || 10;
  }

  var instance;

  return {
    name: 'SingletonTester',
    getInstance: function (args) {
      if (instance === undefined) {
        instance = new Singleton(args);
      }
      return instance;
    }
  };
})();

var singletonTest = SingletonTester.getInstance({ pointX: 5});
console.log(singletonTest.pointX);
