const { taskOne, taskTwo } = require("./task");
async function main() {
  try {
    console.time("messuring time");

    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd("messuring time");
    console.log(results[0]);
    console.log(results[1]);
  } catch (e) {
    console.log(e);
  }
}
main();
