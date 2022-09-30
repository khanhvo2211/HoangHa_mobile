module.exports = {
  MutiplyMongoose: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },
  MongoosetoObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
