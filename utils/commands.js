const fs = require("fs");

const filePath = "./utils/passwords.json";

async function readPasswords() {
  return new Promise(resolve => {
    fs.readFile(filePath, (error, passwordsJSON) => {
      if (error) {
        return resolve({});
      }
      try {
        const passwords = JSON.parse(passwordsJSON);
        resolve(passwords);
      } catch (error) {
        console.error(`Invalid ${filePath}`);
        resolve({});
      }
    });
  });
}

function writePasswords(passwords) {
  fs.writeFileSync(
    "./utils/passwords.json",
    JSON.stringify(passwords, null, 2)
  );
}

async function get(key) {
  const passwords = await readPasswords();
  return passwords[key];
}

async function set(key, value) {
  const passwords = await readPasswords();
  console.log("setting: " + key + " to: " + value);
  passwords[key] = value;
  writePasswords(passwords);
  return;
}

async function unset(key) {
  const passwords = await readPasswords();
  delete passwords[key];
  writePasswords(passwords);
  console.log(key + " unset");
}

module.exports = {
  get,
  set,
  unset
};
