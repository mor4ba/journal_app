export const setUpFormData = (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target));
  var dateObj = new Date();
  var month = dateObj.toLocaleString("en-us", { month: "short" });
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = `${month.toUpperCase()} ${day}, ${year}`;

  let obj = {
    head: data.input_head,
    text: data.input_text,
    date: newdate,
    isFavorite: false,
  };

  return obj;
};
