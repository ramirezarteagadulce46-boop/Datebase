use('animales');

db.createCollection('aves');
db.aves.insertOne({
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
});

db.createCollection('reptiles');
db.reptiles.insertOne({
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
});

db.createCollection('peces');
db.peces.insertOne({
  "nombre": "Pez Ángel",
  "clase": "Peces",
  "edadAprox": 2,
  "habitat": "Arrecifes tropicales",
  "pesokg": 0.25,
  "alimentacion": ["algas", "pequeños crustáceos"],
  "distribucion": {
  "region": "Océano Indo-Pacífico",
  "profundidadMax": 50
  }
});

db.createCollection('mamiferos');
db.mamiferos.insertOne({
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
});

db.createCollection('anfibios');
db.anfibios.insertOne({
  "nombre":"Rana Arbórea",
  "clase": "Anfibios",
  "edadAprox": 1,
  "habitat": "Selvas húmedas",
  "pesokg": 0.03,
  "alimentacion": ["insectos", "arañas"],
  "distribucion": {
  "region": "Sudeste Asiatico",
  "pais": "Indonesia"
  }
});

