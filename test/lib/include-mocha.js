;(function (){

  function IncludeMocha(){}
  
  IncludeMocha.prototype.__proto__ = Function.prototype;
  
  IncludeMocha.prototype.includeStylesheet = function ( href ){
    var link = document.createElement("link");
    link.setAttribute( "rel", "stylesheet");
    link.setAttribute( "href", href );
    document.head.appendChild( link );
  };
  IncludeMocha.prototype.includeScript = function ( src ){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = false;
    document.head.appendChild( script );
  };

  var includeMocha = function( option ){
    var includeStylesheet = IncludeMocha.prototype.includeStylesheet;
    var includeScript = IncludeMocha.prototype.includeScript;

    option = option || {};
    var stylesheets = option.stylesheets || ["./css/mocha.css"];
    var libPath = option.libPath || "./lib/";
    var useChai = ( option.useChai === false) ? false : true;
    option.useChai = useChai;
    //-- var specRootPath = specRootPath || false;
    //-- var specs = option.specs || [];
    //-- var mochaSetup = option.mochaSetup || "bdd";

   // IncludeMocha.prototype.option = option;
    includeMocha.option = option;
    includeMocha.includeScript = includeScript;
    stylesheets.forEach(function( href, i, array ){

      includeStylesheet( href );
    });

    if ( useChai ){
      includeScript( libPath+"chai.js" );
    }
    includeScript( libPath+"mocha.js" );
    includeScript( libPath+"include-mocha-setup.js");
  };

  window.includeMocha = includeMocha;

  includeMocha.__proto__ = { constructor : IncludeMocha };

})();