const { notice, noticeDelete, noticeCreate, educationCategories, educationDelete, educationCreate, videos, videoDelete, videoCreate, feedback } = require("../controllers/adminControllers");
const router = require("express").Router();
router.post("/notice", notice);
router.post("/notice/delete", noticeDelete);
router.post("/notice/create", noticeCreate);
router.post("/education", educationCategories);
router.post("/education/delete", educationDelete);
router.post("/education/create", educationCreate);
router.post("/education/videos", videos);
router.post("/education/videos/delete", videoDelete);
router.post("/education/videos/create", videoCreate);
router.get("/feedback", feedback);
module.exports = router;