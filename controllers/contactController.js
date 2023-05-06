const asyncHandler = require("express-async-handler")


//getting all contacts
//route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get contacts"});
});

//crate all contacts
//route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res) =>{

    console.log("the request is:",req.body);
    const {name,email,phone} = req.body;
    if(!name ||  !email || !phone){
       res.status(400);
       throw new Error("All are mandatory");
    }

    res.status(201).json({message:"Create contacts"});
});

//@desc Get contact
//route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get contact"});
});

//getting all contacts
//route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Update contacts"});
});


//delete all contacts
//route GET /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Get contacts"});
});


module.exports = {getContact,getContacts, createContact,deleteContact,updateContact};