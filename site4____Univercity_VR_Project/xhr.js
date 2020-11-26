let get_id;
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
      get_id = xhr.response;
      // for (let i = 0; i < Object.keys(get_id.first).length; i++) {
      //   console.log("yes");
      // }

    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
    
  })
}


let SEND_list_1 = {
  
};
let SEND_list_2 = {

};
let SEND_list_3 = {

};
let SEND_list_4 = {

};


CONFIRM.onclick = function CONFIRM() {
  select_cheker = document.getElementById("select_cheker").value;
  if (select_cheker == "first") {
    SEND_list_1 = {
      list1: [
        document.getElementById("first").value,
        document.getElementById("second").value,
        document.getElementById("third").value,
        document.getElementById("fourth").value,
        document.getElementById("fifth").value,
        document.getElementById("sixth").value,
        document.getElementById("seventh").value
    ]
    };
    for (i=1; i<8; i++) {
      id_tag = area_0 + i;
      console.log(id_tag);
      id_vids = "get_id[0].list1[" + i + "]";
      console.log(id_vids);
      // id_tag.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='"+ id_vids +"'; youTubePlayerChangeVideoId();");
    };
    
  } else if (select_cheker == "second") {
    SEND_list_2 = {
      list2: [
          document.getElementById("first").value,
          document.getElementById("second").value,
          document.getElementById("third").value,
          document.getElementById("fourth").value,
          document.getElementById("fifth").value,
          document.getElementById("sixth").value,
          document.getElementById("seventh").value
      ]
    };
  } else if (select_cheker == "third") {
    SEND_list_3 = {
      list3: [
          document.getElementById("first").value,
          document.getElementById("second").value,
          document.getElementById("third").value,
          document.getElementById("fourth").value,
          document.getElementById("fifth").value,
          document.getElementById("sixth").value,
          document.getElementById("seventh").value
      ]
    };
  } else if (select_cheker == "fourth") {
    SEND_list_4 = {
      list4: [
          document.getElementById("first").value,
          document.getElementById("second").value,
          document.getElementById("third").value,
          document.getElementById("fourth").value,
          document.getElementById("fifth").value,
          document.getElementById("sixth").value,
          document.getElementById("seventh").value
      ]
    };
  } 
}


btn_send_id.onclick = function btn_send_id() {
  SEND_list = [
    SEND_list_1, SEND_list_2, SEND_list_3, SEND_list_4
  ];
    sendRequest("PUT", requestURL, SEND_list)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    console.log("SEND");
};



UPDATE.onclick = function previous_list_id() {
    sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
}


// first.onchange = function () {
//     first = document.getElementById("first").value;
//     body.second = {
//       qwwerwe
//     }
//     console.log(body);
// };


// console.log("get_id");


// document.getElementById("first").value,
// document.getElementById("second").value,
// document.getElementById("third").value,
// document.getElementById("fourth").value,
// document.getElementById("fifth").value,
// document.getElementById("sixth").value,
// document.getElementById("seventh").value