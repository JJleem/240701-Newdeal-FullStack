const asyncHandler = require("express-async-handler");

//각 요청별 구현해하는 함수 정의

// 전체 보기
const getAllContacts = asyncHandler(async (req, res) => {
  res.send("Contacts Page");
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }

  res.send("Create Contacts" + `${name} , ${email}, ${phone}`);
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).send(`View Page ID: ${req.params.id}`);
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Update Page ID: ${req.params.id}`);
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Delete Page ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
