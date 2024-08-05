const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("./controllers/contactController");
// 모든 연락처 가져오기
// 새 연락처 추가하기
router.route("/").get(getAllContacts).post(createContact);

// 연락처 상세보기
// 연락처 수정하기
// 연락처 삭제하기
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
