const fs = require("fs");

function get(key) {
  const passwords = fs.readFileSync("./utils/passwords.json", error => {
    if (error) throw error;
  });
  const parsedPasswords = JSON.parse(passwords);
  return parsedPasswords[key];
}

function writePasswords(passwords) {
  fs.writeFileSync(
    "./utils/passwords.json",
    JSON.stringify(passwords, null, 2)
  );
}

function set(key, value) {
  const passwords = fs.readFileSync("./utils/passwords.json", error => {
    if (error) throw error;
  });
  const parsedPasswords = JSON.parse(passwords);
  console.log("setting: " + key + " to: " + value);
  parsedPasswords[key] = value;
  writePasswords(parsedPasswords);
  return;
}

function unset(key) {
  const passwords = fs.readFileSync("./utils/passwords.json", error => {
    if (error) throw error;
  });
  const parsedPasswords = JSON.parse(passwords);
  delete parsedPasswords[key];
  writePasswords(parsedPasswords);
  console.log(key + " unset");
}

module.exports = {
  get,
  set,
  unset
};
