const { get, set, unset } = require("./utils/commands");

const useArgs = process.argv.slice(2);
const [cmd, key, value] = useArgs;

async function run() {
  switch (cmd) {
    case "get":
      {
        const result = await get(key);
        console.log(result);
      }
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
}
run();
