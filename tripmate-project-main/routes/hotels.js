const express = require("express");
const router = express.Router();
const { 
    createHotelCtrl, 
    getAllHotelsCtrl,
    getSingleHotelCtrl,
    updateHotelCtrl,
    deleteHotelCtrl
} = require("../controllers/hotelController");

// المسار: /api/hotels
router.route("/")
    .post(createHotelCtrl)
    .get(getAllHotelsCtrl);

// المسار: /api/hotels/:id
router.route("/:id")
    .get(getSingleHotelCtrl)
    .put(updateHotelCtrl)
    .delete(deleteHotelCtrl);

module.exports = router;