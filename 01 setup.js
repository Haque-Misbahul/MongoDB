show dbs // Show all databases
use employees   // use employees database
db.inventory.find() //example of fetching all documents or query
db.inventory.find({qty:100}) //example of fetching specific document or query
CRUD Operation
C- create
R- Read
U- Update
D- Delete

//Run this command in MongoDB shell to get started
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
 ]);