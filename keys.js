const { get, set, unset } = require("./utils/commands");

const useArgs = process.argv.slice(2);
const [cmd, key, value] = useArgs;

switch (cmd) {
  case "get":
    console.log(get(key));
    break;
  case "set":
    set(key, value);
    break;
  case "unset":
    unset(key);
    break;
  default:
    console.log("unknown command");
}
