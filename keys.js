const [cmd, key, value] = process.argv.slice(2);

const passwords = {
  wifi: "asdf123",
  banking: "pw123"
};

switch (cmd) {
  case "get":
    console.log(passwords[key]);
    break;
  case "set":
    console.log("setting: " + key + " to: " + value);
    passwords[key] = value;
    break;
  case "unset":
    console.log(key + " unset");
    delete passwords[key];
    break;
  default:
    console.log("unknown command");
}
