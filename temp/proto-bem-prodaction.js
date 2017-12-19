;(function(){
  
  var spLib = {};
  spLib.__proto__ = { constructor: SpLib };
  
  window.spLib = spLib;
  
  function SpLib(){}
  SpLib.prototype.__proto__ = Object.prototype;
  
  SpLib.prototype.exposeChildsToWindow = function (){
  }

})();

;(function(){

  var bem = {};
  bem.__proto__ = { constructor: BEM };
  
  var spLib = window.spLib();
  spLib.bem = bem;
  
  function BEM(){}
  BEM.prototype.__proto__ = spLib.constructor.prototype;
  
  bem.setModifier = function ( node, modifier){
  };
  bem.getModifier = function ( node, modifier ){
  };

})();