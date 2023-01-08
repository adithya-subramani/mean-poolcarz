const express = require("express");
const ridesHandler = require("../controllers/rideshandler");
const usersHandler = require("../controllers/userhandler");
const router = express.Router();

router.post("/addride", ridesHandler.addRide);
router.get("/getrides", ridesHandler.getRides);
router.put("/updateride/:id", ridesHandler.updateRide);

router.get("/getusers", usersHandler.getUsers);

module.exports = router;
