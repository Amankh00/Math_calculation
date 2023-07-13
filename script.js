
let q = document.querySelector(".hist");

const fetchData = () => {
  let question = document.getElementById("inputBox").value;
  let optionIndex = document.querySelector("#categoryBar").selectedIndex;
  let opration = document.getElementById("categoryBar")[optionIndex].value;
  let res = document.getElementById("res");

  fetch(`https://newton.vercel.app/api/v2/${opration}/${question}`)
    .then(res => res.json())
    .then(data => {
      var result = `${opration} : ${question} <br/> Result --> ${data.result}`;
      res.innerHTML = result;
      oprator = `${opration}:${question}`;
      var existingHistory = localStorage.getItem('history');
      var newHistory = `${result}<br/>`;
      if (existingHistory  && !existingHistory.includes(newHistory)) {
        localStorage.setItem('history', existingHistory + newHistory);
      } else {
        localStorage.setItem('history', newHistory);
      }

      console.log(result);
      console.log(localStorage.getItem('history'));
      console.log(data);
    })
    .catch(error => {
      console.error("Something went wrong", error);
    });
};

var search = document.getElementById("searchButton");
search.addEventListener("click", fetchData);

const getHistory = () => {
  q.classList.toggle("camera");
  q.innerHTML = localStorage.getItem('history');
};

const clearHistory = () => {
    localStorage.removeItem('history');
    q.innerHTML = '';
  };

  const deleteButton =() =>
  {
    document.getElementById("inputBox").value = "";
    // document.querySelector("#inputBox").value = "";
    document.querySelector("#res").innerHTML = "";
  }