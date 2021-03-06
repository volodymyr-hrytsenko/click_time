const fsp = require("fs").promises;

module.exports.getData = async () => {
  try {
    const buffer = await fsp.readFile( __dirname + "/settings.json");
    const data = JSON.parse(buffer);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.setData = async data => {
  try {
    await fsp.writeFile(__dirname + "/settings.json", JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};