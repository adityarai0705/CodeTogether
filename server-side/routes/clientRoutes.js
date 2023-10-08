const { educationCategories, videos, leaderboard, contactUs, noticeboard, login, register } = require("../controllers/clientControllers");
const router = require("express").Router();
router.post("/education", educationCategories);
router.post("/education/videos", videos);
router.post("/leaderboard", leaderboard);
router.post("/login", login);
router.post("/register", register);
router.post("/contactus", contactUs);
router.get("/noticeboard", noticeboard);
module.exports = router;