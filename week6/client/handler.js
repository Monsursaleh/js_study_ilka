"use strict";

(function () {
  let nameField;
  let resultarea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    nameField = document.getElementById("name");
    resultarea = document.getElementById("result");

    document
      .getElementById("searchowner")
      .addEventListener("click", () => search("owner", "name"));
    document
      .getElementById("searchbooks")
      .addEventListener("click", () => search("booknames", "value"));
  }

  async function search(route, key) {
    const value = nameField.value;
    const url = `http://localhost:3001/${route}?${key}=${value}`;
    console.log(url);
    const data = await fetch(url, { mode: "cors" });
    console.log(data.headers);
    const jsonData = await data.json();
    console.log(jsonData);
    resultarea.textContent = JSON.stringify(jsonData, null, 2);
    console.log(resultarea);
  }
})();
