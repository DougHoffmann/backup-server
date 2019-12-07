const mongoose = require("mongoose");

const truckSchema = mongoose.Schema({
  plate: String,
  mileage: Number,
  driver: String,
  status: Boolean,
  tires: [
    {
      cod: String,
      brand: String,
      mileage: Number
    }
  ],
  expenses: [
    {
      total: Number,
      date: Date,
      pieces: [
        {
          name: String,
          price: Number,
          qnt: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Truck", truckSchema);
