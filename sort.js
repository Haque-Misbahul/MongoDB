
//fetch first data or specific serial data
db.inventory.find().limit(1)

//fetch data while first one document will be skip
db.inventory.find().skip(1)
//fetch data while first five documents will be skip
db.inventory.find().skip(5)



//sort ascending order
db.inventory.find().sort({qty: 1})
//sort descending order
db.inventory.find().sort({qty: -1})