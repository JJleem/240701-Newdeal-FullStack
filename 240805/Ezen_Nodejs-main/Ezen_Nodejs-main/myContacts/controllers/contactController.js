const asyncHandler = require("express-async-handler");
const { Contact, Register } = require("../models/contactModel");
const bcrypt = require("bcrypt");

//각 요청별 구현해하는 함수 정의

// 전체 보기
const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.render("index", { contact: contact });
});

const getContactForm = (req, res) => {
  res.render("add");
};

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  //입력값
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  // res.status(201).send(contact);
  res.redirect("/contacts");
});

const getContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`View Page ID: ${req.params.id}`);
  const contact = await Contact.findById(req.params.id);
  // res.send(contact);
  res.render("update", { contact: contact });
});

const updateContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`Update Page ID: ${req.params.id}`);
  const contact = await Contact.findById(req.params.id);
  const { name, email, phone } = req.body;
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  await contact.save();
  // res.status(200).send(contact);
  res.redirect("/contacts");
});

const deleteContact = asyncHandler(async (req, res) => {
  // res.status(200).send(`Delete Page ID: ${req.params.id}`);
  const contact = await Contact.findById(req.params.id);
  await Contact.deleteOne();

  res.redirect("/contacts");
});
const homeContact = asyncHandler(async (req, res) => {
  res.render("home");
});

const registerHome = asyncHandler(async (req, res) => {
  res.render("register");
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // 필수값 확인
  if (!username || !password) {
    return res.status(400).send("아이디와 비밀번호를 입력하세요.");
  }

  // 사용자 찾기
  const user = await Register.findOne({ username });
  if (!user) {
    return res.status(401).send("아이디 또는 비밀번호가 잘못되었습니다.");
  }

  // 비밀번호 확인
  try {
    const isMatch = await bcrypt.compare(password, user.password); // 해시된 비밀번호와 비교
    if (!isMatch) {
      return res.status(401).send("아이디 또는 비밀번호가 잘못되었습니다.");
    }

    res.redirect("/");
  } catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류가 발생했습니다.");
  }
});
//회원등록
const register = asyncHandler(async (req, res) => {
  const { username, password1, password2 } = req.body;
  if (!username || !password1 || !password2) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  if (password1 !== password2) {
    return res.status(400).send("비밀번호가 일치하지 않습니다.");
  }
  const hashedPassword = await bcrypt.hash(password1, 10);
  // 사용자 등록
  const register = await Register.create({
    username,
    password: hashedPassword,
  });
  res.redirect("/home");
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getContactForm,
  homeContact,
  register,
  registerHome,
  login,
};
