const express = require("express");
const router = express.Router();
const { 
    createRestaurantCtrl, 
    getAllRestaurantsCtrl,
    getSingleRestaurantCtrl,
    updateRestaurantCtrl,
    deleteRestaurantCtrl
} = require("../controllers/restaurantController");

// المسار الأساسي: /api/restaurants
router.route("/")
    .post(createRestaurantCtrl)
    .get(getAllRestaurantsCtrl);

// المسارات التي تطلب ID: /api/restaurants/:id
router.route("/:id")
    .get(getSingleRestaurantCtrl)
    .put(updateRestaurantCtrl)
    .delete(deleteRestaurantCtrl);

module.exports = router;