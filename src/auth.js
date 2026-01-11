function isPasswordValid(password) {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return password.length >= 8 && hasLetter && hasNumber;
}

module.exports = isPasswordValid;
