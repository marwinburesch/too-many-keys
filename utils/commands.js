const passwords = {
  wifi: "asdf123",
  banking: "pw123"
};

function get(key) {
  return passwords[key];
}

function set(key, value) {
  console.log("setting: " + key + " to: " + value);
  passwords[key] = value;
  return;
}

function unset(key) {
  delete passwords[key];
  console.log(key + " unset");
}

module.exports = {
  get,
  set,
  unset
};
