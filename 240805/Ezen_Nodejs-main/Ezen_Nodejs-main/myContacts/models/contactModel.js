const mongoose = require("mongoose");
//스키마 정의
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: {
      type: String,
      required: [true, "전화번호는 필수항목 입니다."],
    },
  },
  {
    timestamps: true, // 데이터 추가 수정 될때 시간 함께 기록됨
  }
);
const registerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
//스카마 => 모델
//mongoose.model(모델명(대문자로 ), 스키마명)

const Contact = mongoose.model("Contact", contactSchema);
const Register = mongoose.model("Register", registerSchema);

module.exports = { Register, Contact };
