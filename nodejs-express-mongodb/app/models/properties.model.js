module.exports = mongoose => {
  const Property = mongoose.model(
    "properties",
    mongoose.Schema(
      {
        name: String,
        price: Number,
        likes: Number
      },
      { timestamps: true }
    )
  );

  return Property;
};