const util = require("util");//trato algunos metodos de promesas con async
const sleep = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      throw new Error("some problem");
      await sleep(4000);
      return "ONE";
    } catch (e) {
      console.log(e);
    }
  },
  async taskTwo() {
    await sleep(2000);
    return "TWO";
  },
};
