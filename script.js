
/*Delete this value in token2 and insert yours*/
const token2 = "EABNKU9Bue5kBAMgMFZBtog9nT5whPMdmC7INBePvb58B46JASi3qxNzMFt65NoWoUG0tP1x7y2r2xDzoNndGMZB01dFbJXoLMdk5IzMZCVFyJEWvnK0KyUALpM5SKj0aZB94tUM0ZAKFcZBHWZBrqCn1myZBil4njfGn5JCF7yYoQCUqGlQLRCXvVQCEbjitZBUq2DSpL7V1nIZAOIuACqiwsipAPwmOfx138ZD"

/*Replace below the YOUR_PAGE_ID by your Facebook page ID
const url = "https://graph.facebook.com/v15.0/YOUR_PAGE_ID/ratings?access_token="+token2;*/

const url = "https://graph.facebook.com/v15.0/485602095170872/ratings?access_token="+token2;

//Var to store the data sent by API 
let dados = ""

fetch(url)
  .then(response => response.json())
  .then(json => {
    dados = json;

    console.log("Dados recebidos da API: ")
    console.log(JSON.stringify(dados))

    //Ads html to the page
    var elemento = 0;
    dados.data.forEach(element => {

      //document.querySelector("article").innerHTML += `
      document.getElementById("article").innerHTML += `
      <div class="classic">
        ${JSON.stringify(dados.data[elemento].created_time)}
        <p></p>
        ${dados.data[elemento].review_text}
      </div>
      </br>`
      elemento++;
    });
  })

//Just to debug in console
console.log(' **** Chamou o script.js');

/* When the user scrolls down 30px from the top of the document, resize the header's font size*/
window.onscroll = function() {scrollFunction()};

//Animates the Header to go smaller when scrolling
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
    document.querySelector("h1").style.fontSize = "20px";
  } else {
    document.getElementById("header").style.fontSize = "14px";
    document.querySelector("h1").style.fontSize = "30px";
  }
}