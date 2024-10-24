db.inventory.insertMany([
  { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [14, 21] },
  { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [14, 21] },
  {
    item: "paper",
    qty: 100,
    tags: ["red", "blank", "plain"],
    dim_cm: [14, 21],
  },
  { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [22.85, 30] },
  { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [10, 15.25] },
]);

db.inventory.find({ tags: ["red", "blank"] });
