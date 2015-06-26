module.exports = {
  redacted: redacted
};

var blacklist = {
    "selfie": "self-portrait",
    "yummers": "delicious",
    "outchea": "are out here",
    "bruh": "wow",
    "doge": "pug",
    "cilantro": "soap",
    "bae": "loved one",
    "swag": "style",
    "yolo": "carpe diem"
};

function redacted(input){
  input = input.replace(new RegExp(Object.keys(blacklist).join("|"), "gi"), function(matched){
    return blacklist[matched];
  });
  return input;
}