async function update() {
  const response = await fetch("http://127.0.0.1:5000/");

  if (!response.ok) {
    throw new Error("Not Found");
  }

  const data = await response.json(); //get data from api and reads it as json
  const str_data = JSON.stringify(data); // turns it into a string *to remove the ""*
  return str_data;
}

async function display() {
  str_result = await update(); // recalls the promise from update func
  raw = JSON.parse(str_result); // turns it back into json without quotes
  result_img = raw.logos;
  result_date = raw.dates;
  result_team = raw.teams;
  result_score = raw.scores;

  for (let i = 0; i <= 15; i++) {
    element = "img" + i;

    if (result_img[i] == null) {
      document.getElementById(element) == null;
    } else {
      if (document.getElementById(element) !== null) {
        document.getElementById(element).src = result_img[i];
      }
    }
  }

  for (let a = 0; a <= 7; a++) {
    element_date = "date" + a;
    if (result_date[a] == null) {
      document.getElementById(element_date) == null;
    } else {
      if (document.getElementById(element_date) !== null) {
        document.getElementById(element_date).innerHTML = result_date[a];
      }
    }
  }

  for (let a = 0; a <= 15; a++) {
    element_team = "team" + a;

    if (result_team[a] == null) {
      document.getElementById(element_team) == null;
    } else {
      if (document.getElementById(element_team) !== null) {
        document.getElementById(element_team).innerHTML = result_team[a];
      }
    }
  }

  for (let i = 0; i <= 15; i++) {
    if (result_score[i] == null) {
      document.getElementById("score" + i) == null;
    } else {
      if (document.getElementById("score" + i) !== null) {
        document.getElementById("score" + i).innerHTML = result_score[i];
      }
    }
  }

  for (let i = 16; i <= 27; i++) {
    element = "img" + i;
    if (result_img[i] == null) {
      document.getElementById(element) == null;
    } else {
      if (document.getElementById(element) !== null) {
        document.getElementById(element).src = result_img[i];
      }
    }
  }

  for (let a = 8; a <= 13; a++) {
    element_date = "date" + a;
    if (result_date[a] == null) {
      document.getElementById(element_date) == null;
    } else {
      if (document.getElementById(element_date) !== null) {
        document.getElementById(element_date).innerHTML = result_date[a];
      }
    }
  }

  for (let a = 16; a <= 27; a++) {
    element_team = "team" + a;
    if (result_team[a] == null) {
      document.getElementById(element_team) == null;
    } else {
      if (document.getElementById(element_team) !== null) {
        document.getElementById(element_team).innerHTML = result_team[a];
      }
    }
  }
  for (let i = 16; i <= 27; i++) {
    if (result_score[i] == null) {
      document.getElementById("score" + i) == null; //sets a value of nothing to the id if the value for it doesnt exist
    } else {
      if (document.getElementById("score" + i) !== null) {
        //checks if  id exists on the page that its on and only runs if it exists
        document.getElementById("score" + i).innerHTML = result_score[i];
      }
    }
  }
}
display();

//setInterval(update, 12000);
//setInterval(display, 13000);7
//for (let i = 0; i <= 15; i++) {
//if (document.getElementById("score" + i) !== null) {
//document.getElementById("score" + i).innerHTML = result_score[i];
//  }
//  }
//for (let i = 16; i <= 27; i++) {
//if (document.getElementById("score" + i) !== null) {
//document.getElementById("score" + i).innerHTML = result_score[i];
//}
//}
//if (document.getElementById("score" + i) !== null) {
//if (document.getElementById("score" + i) !== null) {
