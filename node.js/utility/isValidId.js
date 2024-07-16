const { ObjectId } = require("mongodb");
const isValidId = (id, res) => {
  const isValidId = ObjectId.isValid(id);
  if (!isValidId) {
    res.render("alert.ejs", { err: "존재하지 않는 게시물입니다." });
    return;
  }
  return new ObjectId(id);
};

module.exports = isValidId;
