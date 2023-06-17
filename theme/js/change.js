
window.onload=function(){
    const el = document.querySelector("#change");
    const el2 = document.querySelector("#day");
    const link = document.querySelector("#link");


    el.addEventListener("click", function() {
        link.href = "css/dark.css";
      });

      el2.addEventListener("click", function() {
        link.href = "css/simple.css";
      });

}






