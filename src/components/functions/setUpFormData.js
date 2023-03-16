import { createListElement } from "./createListElement";

export const setUpFormData = (event) => {
  event.preventDefault();
  let data = Object.fromEntries(new FormData(event.target));
  var dateObj = new Date();
  var month = dateObj.toLocaleString("default", { month: "short" });
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = `${month.toUpperCase()} ${day}, ${year}`;

  createListElement(data.input_head, data.input_text, newdate);
};
