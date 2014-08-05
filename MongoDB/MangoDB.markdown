Mango DB

Insert
db.ships.insert({name:'Narada',operator:'Romulan Star Empire',type:'Warbird',class:'Warbird',crew:65,codes:[251,251,220]}) //insert values

Basic Concepts & Shell Commands
db.ships.<command> db – implicit handle to the used database (ships – name of the used collection)
use <database> - Switch to another database or create new db
show - collections Lists the available collections(show dbs //to show all dbs -)
help - Prints available commands and help


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






Schema - Mango is Scehmaless

var j = db.ship.findOne({'name': 'Narada'})
j.favourite_color = 'blue' // add new json data

db.ship.save(j) // save j in usersship





JSON - 2 data structures
Arrays - list of things - [....]
Dictionaries - associate maps { keyword:value } //separated by commas



BSON - binary json protocol
collection means database


mongod --dbpath=/data/db
mongorestore dump

