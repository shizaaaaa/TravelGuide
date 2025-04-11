const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
});

// Get a contact by ID
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

// Create a new contact
const createContact = asyncHandler(async (req, res) => {
    console.log("Req body is:", req.body);
    const { imgurl, nameOfPlace, country, city, rating, about } = req.body;
    if (!imgurl || !nameOfPlace || !country || !city || !rating || !about === undefined) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create({
        imgurl, nameOfPlace, country, city, rating, about
    });
    res.status(201).json(contact);
});

// Update a contact by name
const updateContact = asyncHandler(async (req, res) => {
    const { nameOfPlace } = req.body; // Get the name of the place from request body
    const contact = await Contact.findOne({ nameOfPlace }); // Find contact by name
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        contact._id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

// Delete a contact by name
const deleteContact = asyncHandler(async (req, res) => {
    const { nameOfPlace } = req.body; // Get the name of the place from request body
    const contact = await Contact.findOne({ nameOfPlace }); // Find contact by name
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne({ _id: contact._id });
    res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
