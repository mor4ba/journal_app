export const setUpFormData = (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target));
  var dateObj = new Date();
  var month = dateObj.toLocaleString("en-us", { month: "short" });
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = `${month.toUpperCase()} ${day}, ${year}`;

  let obj = {
    name: data.input_name,
    armor: data.input_armor,
    ini: data.input_ini,
    date: newdate,
    hp: data.input_hp,
  };

  return obj;
};
