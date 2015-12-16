var myModule = (function() {
  //private attributes
  var privateVar = 5;
  var privateMethod = function() {
    return 'Private Test';
  };

  //public attributes
  return {
    publicVar: 10,
    publicMethod: function() {
      return ' Followed By Public Test ';
    },
    getData: function() {
      return privateMethod() + this.publicMethod() + privateVar;
    }
  };
})();

myModule.getData();
