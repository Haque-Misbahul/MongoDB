db.inventory.insertOne({
  item: "canvas",
  qty: 10,
  tags: ["cotton"],
  size: { h: 28, w: 35.5, uom: "cm" },
});

db.inventory.insertMany([
  {
    item: "canvas1",
    qty: 50,
    tags: ["copper"],
    size: { h: 45, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas2",
    qty: 1100,
    tags: ["aluminium"],
    size: { h: 24, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas3",
    qty: 60,
    tags: ["something else"],
    size: { h: 454, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas4",
    qty: 100,
    tags: ["cotton"],
    size: { h: 54, w: 35.5, uom: "cm" },
  },
]);
