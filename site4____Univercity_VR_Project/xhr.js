
const requestURL = "http://localhost:3000/main"

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = "json"
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

// sendRequest("GET", requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

let body = {
    "first": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "second": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "third": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "fourth": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "fifth": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "sixth": [
      {
        "id": "RuTM3OHuAfo"
      }
    ],
    "seventh": [
      {
        "id": "RuTM3OHuAfo"
      }
    ]
  };

first.onchange = function () {
    first = document.getElementById("first").value;
    body = {
        first: [
          {
            id: "RuTM3OHuAfo"
          }
        ]};
    console.log(body);
};
// sendRequest("POST", requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


// let first = document.getElementById("first").value;
// let second = document.getElementById("second").value;
// let third = document.getElementById("third").value;
// let fourth = document.getElementById("fourth").value;
// let fifth = document.getElementById("fifth").value;
// let sixth = document.getElementById("sixth").value;
// let seventh = document.getElementById("seventh").value;

btn_send_id.onclick = function () {
    sendRequest("POST", requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    console.log("SEND");
}

UPDATE.onclick = function previous_list_id() {
    sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    console.log("UPDATE");
}


DELETE_ID_DATA.onclick = function DELETE_ID_DATA() {
    console.log("yes");
    sendRequest("DELETE", requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    console.log("DELETE");
}

