
use('animales');

db.aves.find({ habitat: "Bosques" }).pretty();
db.aves.find({ alimentacion: "frutas" }).pretty();

db.reptiles.find({ habitat:"Bosques tropicales" }).pretty();
db.reptiles.find({ alimentacion:"hojas" }).pretty();

db.peces.find({ habitat:"Arrecifes tropicales" }).pretty();
db.peces.find({ alimentacion:"algas" }).pretty();

db.mamiferos.find({ habitat:"Sabanas" }).pretty();
db.mamiferos.find({ alimentacion:"cebras" }).pretty();

db.anfibios.find({ habitat:"Selvas húmedas"}).pretty();
db.anfibios.find({ alimentacion:"insectos" }).pretty();


