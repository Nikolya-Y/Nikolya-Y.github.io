var get_id;

const requestURL = "http://localhost:3000/main";


function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
      get_id = xhr.response;
    }

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
    
  });
}


let SEND_list_1 = {
  
};
let SEND_list_2 = {

};
let SEND_list_3 = {

};
let SEND_list_4 = {

};
CHANGE_SCENE.onclick = function CONFIRM() {
  select_cheker = document.getElementById("select_cheker").value;
  if (select_cheker == "first") {
    console.log("yes")
    area_01.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q1 + "'; youTubePlayerChangeVideoId();");
    area_02.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q2 + "'; youTubePlayerChangeVideoId();");
    area_03.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q3 + "'; youTubePlayerChangeVideoId();");
    area_04.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q4 + "'; youTubePlayerChangeVideoId();");
    area_05.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q5 + "'; youTubePlayerChangeVideoId();");
    area_06.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q6 + "'; youTubePlayerChangeVideoId();");
    area_07.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[0].q7 + "'; youTubePlayerChangeVideoId();");

    first.setAttribute("value",get_id[0].q1);
    second.setAttribute("value",get_id[0].q2);
    third.setAttribute("value",get_id[0].q3);
    fourth.setAttribute("value",get_id[0].q4);
    fifth.setAttribute("value",get_id[0].q5);
    sixth.setAttribute("value",get_id[0].q6);
    seventh.setAttribute("value",get_id[0].q7);

    //xhr.js:69 Uncaught TypeError: id_tag.setAttribute is not a functionat HTMLButtonElement.CONFIRM (xhr.js:69)
    //ОШИБКА КОГДА ВМЕСТО АЙИД У СЕТАТРИБУТ СТОИТ
  } else if (select_cheker == "second") {

    area_01.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q1 + "'; youTubePlayerChangeVideoId();");
    area_02.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q2 + "'; youTubePlayerChangeVideoId();");
    area_03.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q3 + "'; youTubePlayerChangeVideoId();");
    area_04.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q4 + "'; youTubePlayerChangeVideoId();");
    area_05.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q5 + "'; youTubePlayerChangeVideoId();");
    area_06.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q6 + "'; youTubePlayerChangeVideoId();");
    area_07.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[1].q7 + "'; youTubePlayerChangeVideoId();");

    first.setAttribute("value",get_id[1].q1);
    second.setAttribute("value",get_id[1].q2);
    third.setAttribute("value",get_id[1].q3);
    fourth.setAttribute("value",get_id[1].q4);
    fifth.setAttribute("value",get_id[1].q5);
    sixth.setAttribute("value",get_id[1].q6);
    seventh.setAttribute("value",get_id[1].q7);
  } else if (select_cheker == "third") {

    area_01.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q1 + "'; youTubePlayerChangeVideoId();");
    area_02.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q2 + "'; youTubePlayerChangeVideoId();");
    area_03.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q3 + "'; youTubePlayerChangeVideoId();");
    area_04.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q4 + "'; youTubePlayerChangeVideoId();");
    area_05.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q5 + "'; youTubePlayerChangeVideoId();");
    area_06.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q6 + "'; youTubePlayerChangeVideoId();");
    area_07.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[2].q7 + "'; youTubePlayerChangeVideoId();");

    first.setAttribute("value",get_id[2].q1);
    second.setAttribute("value",get_id[2].q2);
    third.setAttribute("value",get_id[2].q3);
    fourth.setAttribute("value",get_id[2].q4);
    fifth.setAttribute("value",get_id[2].q5);
    sixth.setAttribute("value",get_id[2].q6);
    seventh.setAttribute("value",get_id[2].q7);

  } else if (select_cheker == "fourth") {

    area_01.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q1 + "'; youTubePlayerChangeVideoId();");
    area_02.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q2 + "'; youTubePlayerChangeVideoId();");
    area_03.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q3 + "'; youTubePlayerChangeVideoId();");
    area_04.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q4 + "'; youTubePlayerChangeVideoId();");
    area_05.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q5 + "'; youTubePlayerChangeVideoId();");
    area_06.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q6 + "'; youTubePlayerChangeVideoId();");
    area_07.setAttribute("onclick", "document.getElementById('YouTube-video-id').value='" + get_id[3].q7 + "'; youTubePlayerChangeVideoId();");

    first.setAttribute("value",get_id[3].q1);
    second.setAttribute("value",get_id[3].q2);
    third.setAttribute("value",get_id[3].q3);
    fourth.setAttribute("value",get_id[3].q4);
    fifth.setAttribute("value",get_id[3].q5);
    sixth.setAttribute("value",get_id[3].q6);
    seventh.setAttribute("value",get_id[3].q7);
  }
};

CONFIRM.onclick = function CONFIRM() {
  select_cheker = document.getElementById("select_cheker").value;
  if (select_cheker == "first") {
    SEND_list_1 = {
      "q1" : document.getElementById("first").value,
      "q2" : document.getElementById("second").value,
      "q3" : document.getElementById("third").value,
      "q4" : document.getElementById("fourth").value,
      "q5" : document.getElementById("fifth").value,
      "q6" : document.getElementById("sixth").value,
      "q7" : document.getElementById("seventh").value 
    };
    
        
  } else if (select_cheker == "second") {
    SEND_list_2 = {

      "q1" : document.getElementById("first").value,
      "q2" : document.getElementById("second").value,
      "q3" : document.getElementById("third").value,
      "q4" : document.getElementById("fourth").value,
      "q5" : document.getElementById("fifth").value,
      "q6" : document.getElementById("sixth").value,
      "q7" : document.getElementById("seventh").value 
    };


  } else if (select_cheker == "third") {
    SEND_list_3 = {
     
      "q1" : document.getElementById("first").value,
      "q2" : document.getElementById("second").value,
      "q3" : document.getElementById("third").value,
      "q4" : document.getElementById("fourth").value,
      "q5" : document.getElementById("fifth").value,
      "q6" : document.getElementById("sixth").value,
      "q7" : document.getElementById("seventh").value 
    };

  } else if (select_cheker == "fourth") {
    SEND_list_4 = {   
      "q1" : document.getElementById("first").value,
      "q2" : document.getElementById("second").value,
      "q3" : document.getElementById("third").value,
      "q4" : document.getElementById("fourth").value,
      "q5" : document.getElementById("fifth").value,
      "q6" : document.getElementById("sixth").value,
      "q7" : document.getElementById("seventh").value 
    };


  } 
};
PLASE_SOMETHIG.onclick = function() {
  first.setAttribute("value", "EMPTY");
  second.setAttribute("value", "5EEMYHTwaD4");
  third.setAttribute("value", "tLckFqM459E");
  fourth.setAttribute("value", "hp_6ddIrAFI");
  fifth.setAttribute("value", "sjxT3W5RQQE");
  sixth.setAttribute("value", "aVtLZ6-ICSE");
  seventh.setAttribute("value", "KgJWczFxVJE");
}

btn_send_id.onclick = function btn_send_id() {
  
    console.log(SEND_list_1);
    sendRequest("PUT", requestURL+"/0", SEND_list_1)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
    console.log(SEND_list_2);
    sendRequest("PUT", requestURL+"/1", SEND_list_2)
    .then(data => console.log(data))
    .catch(err => console.log(err));

    console.log(SEND_list_3);
    sendRequest("PUT", requestURL+"/2", SEND_list_3)
    .then(data => console.log(data))
    .catch(err => console.log(err));

    console.log(SEND_list_4);
    sendRequest("PUT", requestURL+"/3", SEND_list_4)
    .then(data => console.log(data))
    .catch(err => console.log(err));

};



UPDATE.onclick = function previous_list_id() {
    sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err)); 
};




