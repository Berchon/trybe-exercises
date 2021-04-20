require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const { PORT } = process.env;

const controllers = require("./controllers");
const middlewares = require("./middlewares");

const app = express();

app.use(express.static(`${__dirname}/uploads`));

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|json/;
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype) {
      return cb(null, true);
    } else {
      cb({ statusCode: 403, message: "Extension must be `png`" });
    }

    // if (fileExists(file.originalname)) {
    //   return cb({ statusCode: 409, message: "File already exists" });
    // }
  },
});

app.get("/ping", controllers.ping);

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ body: req.body, file: req.file });
});

app.use(express.static(`${__dirname}/uploads`));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
