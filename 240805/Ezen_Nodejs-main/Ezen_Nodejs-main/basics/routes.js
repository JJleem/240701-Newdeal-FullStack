const express = require("express");
const router = express.Router();

// 모든 연락처 가져오기
// 새 연락처 추가하기
router
  .route("/")
  .get((req, res) => {
    res.send("Contacts Page");
  })
  .post((req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.send("필수값이 입력되지 않았습니다.");
    }
    res.send("Create New Contacts");
  });

// 연락처 상세보기
// 연락처 수정하기
// 연락처 삭제하기
router
  .route("/:id")
  .get((req, res) => {
    res.status(200).send(`View Page ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.status(200).send(`Update Page ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.status(200).send(`Delete Page ID: ${req.params.id}`);
  });

module.exports = router;
