const express = require("express");
const router = express.Router();
const { 
    createFlightCtrl, 
    getAllFlightsCtrl,
    getSingleFlightCtrl,
    updateFlightCtrl,
    deleteFlightCtrl
} = require("../controllers/flightController");

// المسار: /api/flights
router.route("/")
    .post(createFlightCtrl)
    .get(getAllFlightsCtrl);

// المسار: /api/flights/:id
router.route("/:id")
    .get(getSingleFlightCtrl)
    .put(updateFlightCtrl)
    .delete(deleteFlightCtrl);

module.exports = router;