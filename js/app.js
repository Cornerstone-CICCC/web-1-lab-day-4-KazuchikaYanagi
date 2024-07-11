const form = document.querySelector("form");

const trElement = document.createElement("tr");
const tdElement = document.createElement("td");
const employedList = document.querySelector("#employeeList");

let num = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   collecting each data from form tag
  const formData = new FormData(form);
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const hire_date = formData.get("hire_date");
  const photo = formData.get("photo");

  //   insert tr tag inside tbody tag
  const newTr = employedList.insertRow();
  newTr.setAttribute("id", `tr-${num}`);
  const getTr = document.querySelector("tbody tr");

  //   create img tag to embed tbody tag
  const img = document.createElement("img");
  //   retrieve img from directory below
  img.src = `images/${photo.name}`;

  //   create delete button
  const delBtn = document.createElement("button");
  // add "Delete" text on delete button
  delBtn.innerHTML = "Delete";
  //   attach type="submit" on button tag
  delBtn.setAttribute("type", "submit");
  //   attach unique id
  delBtn.setAttribute("id", `delBtn-${num}`);

  //   make td tag space each
  const td0 = newTr.insertCell(0);
  const td1 = newTr.insertCell(1);
  const td2 = newTr.insertCell(2);
  const td3 = newTr.insertCell(3);
  const td4 = newTr.insertCell(4);
  const td5 = newTr.insertCell(5);

  //   insert each data in td tag
  td0.appendChild(img);
  td1.innerText = firstname;
  td2.innerText = lastname;
  td3.innerText = email;
  td4.innerText = hire_date;
  td5.append(delBtn);

  td5.addEventListener("click", (e) => {
    const result = confirm("Are you sure you want to delete this employee?");
    if (result) {
      const parentTr = e.target.parentElement.parentElement;
      parentTr.remove();
    }
  });

  num++;
  form.reset();
});
