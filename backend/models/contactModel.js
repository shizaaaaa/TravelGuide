const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    imgurl: {
        type: String,
        required: [true, "Please add the image URL"], // Ensuring an image URL is provided
    },
    nameOfPlace: { // Changed to camelCase for consistency
        type: String,
        required: [true, "Please add the name of the place"],
    },
    country: {
        type: String,
        required: [true, "Please add the country"],
    },
    city: {
        type: String,
        required: [true, "Please add the city"],
    },
    rating: {
        type: Number,
        required: [true, "Please add the rating"], // Assuming rating is required
        min: 0, // Minimum rating value
        max: 5  // Maximum rating value (can adjust according to your needs)
    },
    about: {
        type: String,
        required: [true, "Please add 'about' the place"],
    }
});

// Export the model
module.exports = mongoose.model("Contact", contactSchema);
