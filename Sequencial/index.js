const { taskOne, taskTwo } = require("./task");
async function main() {
  try {
    console.time("messuring time");
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();

    console.timeEnd("messuring time");
    console.log(valueOne);
    console.log(valueTwo);
  } catch (e) {
    console.log(e);
  }
}
main();
