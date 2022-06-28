const imageController = require("../controllers/imageController.js");

// router
const router = require("express").Router();

// use routers
router.post("/addImages", imageController.upload, imageController.addImage);

router.get("/allImages", imageController.getAllImages);

module.exports = router;
