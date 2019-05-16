QUnit.test( "Rutas_Suitcase", function( assert ) {
    //test data
    var ruta1 = "Valle 1";
    var ruta2 = "Valle 2";
    var ruta3 = "Cumbres";
    var ruta4 = "Puerta de Hierro";
 
    //Check that the routes are the same as the output
    assert.deepEqual(ruta1, "Valle 1" ,"Las rutas son las mismas");
    assert.deepEqual(ruta2, "Valle 2" ,"Las rutas son las mismas");
    assert.deepEqual(ruta3, "Cumbres" ,"Las rutas son las mismas");
    assert.deepEqual(ruta4, "Puerta de Hierro" ,"Las rutas son las mismas");
    
    //Check that the routes are differente in the output
    assert.deepEqual(ruta1, "San Nicolás" ,"Las rutas no son las mismas");
    assert.deepEqual(ruta2, "Lincoln" ,"Las rutas no son las mismas");
    assert.deepEqual(ruta3, "San Jerónimo" ,"Las rutas no son las mismas");
    assert.deepEqual(ruta4, "Contry Linda Vista" ,"Las rutas no son las mismas");
 
 });