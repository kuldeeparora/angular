Mango DB

Basic Concepts & Shell Commands
db.ships.<command> db – implicit handle to the used database (ships – name of the used collection)
use <database> - Switch to another database or create new db
show - collections Lists the available collections(show dbs //to show all dbs -)
help - Prints available commands and help

show dbs - show dbs
show tables - show collections(collections are tables)

Finding Documents
db.ships.findOne() - Finds one arbitrary document
db.ships.find().prettyPrint() - Finds all documents and using nice formatting
db.ships.find({}, {name:true, _id:false}) - Shows only the names of the ships
db.ships.findOne({'name':'USS Defiant'}) - Finds one document by attribute

Updating Document
1. db.demo.update({name : 'USS Prometheus'}, {name : 'USS Something'}) - Replaces the whole document
2. db.ships.update({name : 'USS Something'},
 {$set : {operator : 'Starfleet', class : 'Prometheus'}}) - sets / changes certain attributes of a given document
3.db.ships.update({name : 'USS Something'}, {$unset : {operator : 1}}) - removes an attribute from a given document

Removing Documents
db.ships.remove({name : 'USS Prometheus'}) removes the document
db.ships.remove({name:{$regex:’^USS\\sE’}}) removes using operator






Schema - Mango is Schemaless

var j = db.ship.findOne({'name': 'Narada'})
j.favourite_color = 'blue' // add new json data

db.ship.save(j) // save j in usersship





JSON - 2 data structures
Arrays - list of things - [....]
Dictionaries - associate maps { keyword:value } //separated by commas



collection means database


mongod --dbpath=/data/db
mongorestore dump


CRUD -  create, read, update & delete

Curd -      Mongo -     SQL
Create -    Insert -    Insert
Read -      Find -      Select
Update -    Update -    Update
Delete -    Remove -    Delete

MongoDB CRUD operations exist as method/functions in programing language API's, not as a separate language
Mongo doesn't have its own query language like SQL

Mongo Shell - Interactive JS Interpreter -
for(i=0; i<3;i++) print('Kuldeep'+i); in shell

help
ctrl a - start of the line
ctrl e - end of the line
ctrl k - del to end of line



BSON - binary json protocol
BSON supports strings, floating-point numbers, arrays, objects, timestamps.
BSON doesn't supports complex numbers


Inserting Doc
1. doc = {name:'AD', age:34,profession:'hacker'}
db.test.insert(doc)

2. db.test.insert({name:'Narada',operator:'Romulan Star Empire',type:'Warbird',class:'Warbird',crew:65,codes:[251,251,220]}) //insert values

_id : primary key field - immutable


FindOne
db.test.findOne()
db.test.findOne({'name' : 'AD'})

insert random numbers
for(i=0; i<100; i++) {names= ['exam', 'essay', 'quiz']; for (j=0; j<3; j++){db.m101.insert({student:i, type:names[j], score:Math.round(Math.random()*100)});}}

// find greater than 95
db.m101.find({score: { $gt : 95}})
db.m101.find({score: { $gt : 95}, type:'essay'})
db.m101.find({score: { $gt : 90, $lte : 97}, type:'essay'})

$exists, $type
db.m101.find({profession: { $exists : true}})
db.m101.find({name: { $type : 2}}) // 2 is a string in bson
db.m101.find({name: { $regex : 'a'}})
db.m101.find({name: { $regex : 'e$'}}) // letter end with e





