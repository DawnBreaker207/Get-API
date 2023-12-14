const URL = "https://mocki.io/v1/cc581d8f-4960-4793-b63c-7d10360bfb3f";
fetch(URL)
  // Take Status
  .then((res) => {
    return res.json();
  })
  // Take Data
  .then((data) => {
    console.log(data);
    data.data.forEach((list) => {
      const markUp = `<li>${list.material_id}: ${list.material_name} 
                </li>
                <li>Amout Time: ${list.borrow_time}</li>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", markUp);
    });
  })
  //   Catch Error
  .catch((error) => console.log("Error fetching data", error));
