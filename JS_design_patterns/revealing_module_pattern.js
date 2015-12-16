var myRevealingModule = (function() {
  var privateVar = 5;
  var publicVar = 10;

  function privateMethod() {
    return 'Private Test';
  }

  function publicMethod() {
    return ' Followed By Public Test ';
  }

  function getData() {
    return privateMethod() + this.publicMethod() + privateVar;
  }

  //interface returning only public values
  return {
    publicVar: publicVar,
    publicMethod: publicMethod,
    getData: getData
  };
})();

myRevealingModule.getData();
