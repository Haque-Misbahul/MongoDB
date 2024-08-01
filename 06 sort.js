
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

//Pagination  using MondoDB find and limit example
//1 to 5
 no = 10

 db.blogs.find().skip((pageNo-1)*no).limit(no)

 pageno=1 //db.blogs.find().skip(0).limit(10)
 pageno=2 //db.blogs.find().skip(10).limit(10)
 pageno=3 //db.blogs.find().skip(20).limit(10)
 pageno=4 //db.blogs.find().skip(30).limit(10)
 pageno=5 //db.blogs.find().skip(40).limit(10)

