const btn = document.getElementById("submitPostButton");
const textArea = document.getElementById("postTextarea");
textArea.addEventListener("keyup", (e) => {
  // console.log("event triggered")
  const text = e.currentTarget.value.trim();

  btn.disabled = false;
  if (text === "") {
    btn.disabled = true;
  }
  else{
    btn.disabled = false
  }
});

btn.addEventListener("click", () => {
  const data = {
    postarea: textArea.value,
  };
  const xhr = new XMLHttpRequest()
  xhr.open("POST", "/api/posts")
  xhr.setRequestHeader("Content-type", "application/json")

  xhr.onreadystatechange = function () {
    if (this.status == 200) {
      
    }
  };
  xhr.send(JSON.stringify(data))
});
