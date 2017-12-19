;(function(){
alert("include-mocha-setup.js started");
  var includeMocha = window.includeMocha;

  var option = includeMocha.option;
  var useChai = option.useChai;
  var specRootPath = specRootPath || false;
  var specs = option.specs || [];
  var mochaSetup = option.mochaSetup || "bdd";

  var includeStylesheet = includeMocha.includeStylesheet;
  var includeScript = includeMocha.includeScript;
  
  mocha.setup( mochaSetup );

  if ( useChai ){
    window.assert = chai.assert;
  }

  specs.forEach(function( spec, i, array ){
    var path = specRootPath ? specRootPath+spec : spec;
    includeMocha.includeScript( path );
  });
  
  includeMocha.includeScript( "./lib/mocha-run.js" );
  
})();