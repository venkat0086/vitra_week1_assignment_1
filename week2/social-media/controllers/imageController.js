const db = require("../models");

// image Upload
const multer = require("multer");
const path = require("path");

// create main Model
const Image = db.images;

// main work

// 1. create product

const addImage = async (req, res) => {
  let info = {
    image: req.file.path,
    title: req.body.title,
  };

  const image = await Image.create(info);
  res.status(200).send(image);
  console.log(image);
};

// 2. get all images

const getAllImages = async (req, res) => {
  let images = await Image.findAll({});
  res.status(200).send(images);
};

// 3. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  addImage,
  getAllImages,
  upload,
};
