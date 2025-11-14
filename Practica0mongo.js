
use('escuela');
db.createCollection('alumno');
db.alumno.insertOne({
    Nombre: "dulce",
    Edad:17,
    Direccion: {Calle:"S/N",
     "Numero":11,
     "Ciudad":"Queretaro"},
    Telefono:"4461208544"
});
