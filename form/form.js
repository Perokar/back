window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title",form.title.value);
    formData.append("text", form.text.value);
    formData.append("image", document.querySelector('#img').files[0]);
    formData.append('imgName', document.querySelector('#img').files[0].name)
    formData.append("date",form.date.value);

    // document.querySelector('button').addEventListener('click',sendData(formData))
    sendData(formData)
  });
});
 function sendData(data){
  fetch('/api/uploads',{
    method:'POST',
    body:data
  })
  .then(data=>data.json())
  .then(jsonData=>console.log(jsonData))
}
document.querySelector("#getData").addEventListener('click',getData)

function getData(){
  fetch('/api/uploads',{
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({all:'getMeAllData'})
  })
  .then(data=>data.json())
  .then(jsonData=>console.log(jsonData))
}