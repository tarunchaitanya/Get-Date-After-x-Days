var addDays = require("date-fns/addDays");

const result = (n) => {
  let newDate = addDays(new Date(2020, 7, 22), n);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = result;
