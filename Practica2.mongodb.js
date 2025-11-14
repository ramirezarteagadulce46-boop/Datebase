
use('animales');

db.createCollection('aves');
db.alumno.insertMany({
  "_id": ObjectId("1"),
  "nombre": "Guacamayo Rojo",
  "clase": "Aves",
  "edadAprox": 5,
  "habitat": "Selvas tropicales",
  "pesokg": 1.2,
  "alimentacion": ["frutas", "semillas", "nueces"],
  "distribucion": {
  "region": "América del Sur",
  "pais": "Brasil"
  }
})

db.createCollection('reptiles');
db.alumno.insertMany({
  "_id": ObjectId("2"),
  "nombre": "Iguana Verde",
  "clase": "Reptiles",
  "edadAprox": 7,
  "habitat": "Bosques tropicales",
  "pesokg": 4.0,
  "alimentacion": ["hojas", "flores", "frutas"],
  "distribucion": {
  "region": "América Central",
  "pais": "México"
  }
})
db.createCollection('peces');
db.alumno.insertOne({
  "_id": ObjectId("3"),
  "nombre": "Pez Ángel",
  "clase": "Peces",
  "edadAprox": 2,
  "habitat": "Arrecifes tropicales",
  "pesokg": 0.25,
  "alimentacion": ["algas", "pequeños crustáceos"],
  "distribucion": {
  "region": "Océano Indo-Pacífico",
  "mba": 50
  }
})
db.createCollection('mamiferos');
db.alumno.insertOne({
  "_id": ObjectId("4"),
  "nombre": "León Africano",
  "clase": "Mamíferos",
  "edadAprox": 10,
  "habitat": "Sabanas",
  "pesokg": 190,
  "alimentacion": ["antílopes", "cebras", "búfalos"],
  "distribucion": {
  "region": "África",
  "pais": "Kenia"
  }
})

db.createCollection('anfibios');
db.alumno.insertOne({
  "_id": ObjectId("5"),
  "nombre": "Rana Arbórea",
  "clase": "Anfibios",
  "edadAprox": 1,
  "habitat": "Selvas húmedas",
  "pesokg": 0.03,
  "alimentacion": ["insectos", "arañas"],
  "distribucion": {
  "region": "Sudeste Asiático",
  "pais": "Indonesia"
  }
})