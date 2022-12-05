const { Schema, model } = require('mongoose');
const { genSalt, hash, compare } = require('bcryptjs');
const validator = require('validator');

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//static login method
async function login(email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Not a valid email');
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Incorrect email');
  }
  const match = await compare(password, user.password);
  if (!match) {
    throw Error('Incorrect password');
  }
  return user;
}

userSchema.statics.login = login;

//static signup method
async function signUp(name, email, password) {
  //validation
  if (!name || !email || !password) {
    throw Error('All field must be filled');
  }
  if (!validator.isEmail(email)) {
    throw Error('Not valid email');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough');
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('Email already in use');
  }
  const salt = await genSalt(10);
  const hashed = await hash(password, salt);
  const response = await this.create({ name, email, password: hashed });

  return response;
}
userSchema.statics.signup = signUp;
module.exports = model('User', userSchema);
