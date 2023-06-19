
window.onload=function(){
    const el = document.querySelector("#change");
    const el2 = document.querySelector("#day");
    const link = document.querySelector("#link");
   
    
   
    

    el.addEventListener("click", function() {
      window.localStorage.setItem("dark", "css/dark.css");
      var dark = localStorage.getItem("dark");
        link.href = dark;
      });

      el2.addEventListener("click", function() {
        window.localStorage.setItem("day", "css/simple.css");
        var day = localStorage.getItem("day");
        link.href = day;
      });

}






