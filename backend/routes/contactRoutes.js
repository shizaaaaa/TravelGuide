const express=require("express");


const {getContacts,
getContact,
updateContact,
createContact,
deleteContact} = require("../controllers/contactController");

const router=express.Router();

router.route("/").get(getContacts);

router.route("/:name").get(getContact);

router.route("/").post(createContact);

router.route("/:name").put(updateContact);

router.route("/:name").delete(deleteContact);

module.exports=router;