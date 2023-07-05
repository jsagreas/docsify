// ! function() {
//   $docsify.plugins = [].concat(function(e) {
//       e.afterEach(function(e) {
          
//           let style = localStorage.getItem('style');
//           let btn = document.getElementById("btn");
//           if (style == null) {
//               setTheme('light');
//           } else {
//               setTheme(style);
//           }
//           function setTheme(theme) {
//               if (theme == 'light') {
//                   document.getElementById('switcher-id').href = 'css/light.css';
//               } else if (theme == 'dark') {
//                   document.getElementById('switcher-id').href = 'css/dark.css';
//               }
//               localStorage.setItem('style', theme);
//           }
       
//           btn.addEventListener("click", () => {
//               btn.classList.toggle("dark");
//               flag = btn.classList.contains("dark");
//               if (flag) {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "dark";
//                   setTheme(theme);
//               } else {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "light";
//                   setTheme(theme);
//               }
//           })
//       })
//   }, $docsify.plugins)
// }();




// window.onload=function(){



// let btn = document.getElementById("btn");

//   let style = localStorage.getItem('style');

//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }



//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);

//   }



//   btn.addEventListener("click", () => {

//       btn.classList.toggle("dark");

//       flag = btn.classList.contains("dark");
//       if (flag) {
//           let theme = "dark";
//           setTheme(theme);

//       } else {
//           let theme = "light";
//           setTheme(theme);


//       }
//   })
// }






//   let switches = document.getElementsByClassName('switch');
//   let style = localStorage.getItem('style');

// if (style == null) {
//   setTheme('light');
// } else {
//   setTheme(style);
// }

// for (let i of switches) {
//   i.addEventListener('click', function () {
//     let theme = this.dataset.theme;
//     setTheme(theme);

//   });
// }

// function setTheme(theme) {
//   if (theme == 'light') {
//     document.getElementById('switcher-id').href = 'css/light.css';
//   } else if (theme == 'dark') {
//     document.getElementById('switcher-id').href = 'css/dark.css';
//   }
//   localStorage.setItem('style', theme);

// }


// }




// function myFunction() {

//   let btn = document.getElementById("btn");
//   alert(btn)
//   let style = localStorage.getItem('style');
//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }
//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);
//   }
//   btn.classList.toggle("dark");
//   flag = btn.classList.contains("dark");
//   if (flag) {
//       let theme = "dark";
//       setTheme(theme);
//   } else {
//       let theme = "light";
//       setTheme(theme);
//   }
// }
// ! function() {
//   $docsify.plugins = [].concat(function(e) {
//       e.afterEach(function(e) {
          
//           let style = localStorage.getItem('style');
//           let btn = document.getElementById("btn");
//           if (style == null) {
//               setTheme('light');
//           } else {
//               setTheme(style);
//           }
//           function setTheme(theme) {
//               if (theme == 'light') {
//                   document.getElementById('switcher-id').href = 'css/light.css';
//               } else if (theme == 'dark') {
//                   document.getElementById('switcher-id').href = 'css/dark.css';
//               }
//               localStorage.setItem('style', theme);
//           }
       
//           btn.addEventListener("click", () => {
//               btn.classList.toggle("dark");
//               flag = btn.classList.contains("dark");
//               if (flag) {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "dark";
//                   setTheme(theme);
//               } else {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "light";
//                   setTheme(theme);
//               }
//           })
//       })
//   }, $docsify.plugins)
// }();




// window.onload=function(){



// let btn = document.getElementById("btn");

//   let style = localStorage.getItem('style');

//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }



//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);

//   }



//   btn.addEventListener("click", () => {

//       btn.classList.toggle("dark");

//       flag = btn.classList.contains("dark");
//       if (flag) {
//           let theme = "dark";
//           setTheme(theme);

//       } else {
//           let theme = "light";
//           setTheme(theme);


//       }
//   })
// }






//   let switches = document.getElementsByClassName('switch');
//   let style = localStorage.getItem('style');

// if (style == null) {
//   setTheme('light');
// } else {
//   setTheme(style);
// }

// for (let i of switches) {
//   i.addEventListener('click', function () {
//     let theme = this.dataset.theme;
//     setTheme(theme);

//   });
// }

// function setTheme(theme) {
//   if (theme == 'light') {
//     document.getElementById('switcher-id').href = 'css/light.css';
//   } else if (theme == 'dark') {
//     document.getElementById('switcher-id').href = 'css/dark.css';
//   }
//   localStorage.setItem('style', theme);

// }


// }




// function myFunction() {

//   let btn = document.getElementById("btn");
//   alert(btn)
//   let style = localStorage.getItem('style');
//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }
//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);
//   }
//   btn.classList.toggle("dark");
//   flag = btn.classList.contains("dark");
//   if (flag) {
//       let theme = "dark";
//       setTheme(theme);
//   } else {
//       let theme = "light";
//       setTheme(theme);
//   }
// }

// ! function() {
//   $docsify.plugins = [].concat(function(e) {
//       e.afterEach(function(e) {
          
//           let style = localStorage.getItem('style');
//           let btn = document.getElementById("btn");
//           if (style == null) {
//               setTheme('light');
//           } else {
//               setTheme(style);
//           }
//           function setTheme(theme) {
//               if (theme == 'light') {
//                   document.getElementById('switcher-id').href = 'css/light.css';
//               } else if (theme == 'dark') {
//                   document.getElementById('switcher-id').href = 'css/dark.css';
//               }
//               localStorage.setItem('style', theme);
//           }
       
//           btn.addEventListener("click", () => {
//               btn.classList.toggle("dark");
//               flag = btn.classList.contains("dark");
//               if (flag) {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "dark";
//                   setTheme(theme);
//               } else {
//                 // document.getElementById('darkIcon').style.display = 'block';
//                 // document.getElementById('lightIcon').style.display = 'none';
//                   let theme = "light";
//                   setTheme(theme);
//               }
//           })
//       })
//   }, $docsify.plugins)
// }();




// window.onload=function(){



// let btn = document.getElementById("btn");

//   let style = localStorage.getItem('style');

//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }



//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);

//   }



//   btn.addEventListener("click", () => {

//       btn.classList.toggle("dark");

//       flag = btn.classList.contains("dark");
//       if (flag) {
//           let theme = "dark";
//           setTheme(theme);

//       } else {
//           let theme = "light";
//           setTheme(theme);


//       }
//   })
// }






//   let switches = document.getElementsByClassName('switch');
//   let style = localStorage.getItem('style');

// if (style == null) {
//   setTheme('light');
// } else {
//   setTheme(style);
// }

// for (let i of switches) {
//   i.addEventListener('click', function () {
//     let theme = this.dataset.theme;
//     setTheme(theme);

//   });
// }

// function setTheme(theme) {
//   if (theme == 'light') {
//     document.getElementById('switcher-id').href = 'css/light.css';
//   } else if (theme == 'dark') {
//     document.getElementById('switcher-id').href = 'css/dark.css';
//   }
//   localStorage.setItem('style', theme);

// }


// }




// function myFunction() {

//   let btn = document.getElementById("btn");
//   alert(btn)
//   let style = localStorage.getItem('style');
//   if (style == null) {
//       setTheme('light');
//   } else {
//       setTheme(style);
//   }
//   function setTheme(theme) {
//       if (theme == 'light') {
//           document.getElementById('switcher-id').href = 'css/light.css';
//       } else if (theme == 'dark') {
//           document.getElementById('switcher-id').href = 'css/dark.css';
//       }
//       localStorage.setItem('style', theme);
//   }
//   btn.classList.toggle("dark");
//   flag = btn.classList.contains("dark");
//   if (flag) {
//       let theme = "dark";
//       setTheme(theme);
//   } else {
//       let theme = "light";
//       setTheme(theme);
//   }
// }


window.onload=function(){
  let nav = document.getElementById("nav");
  let style = localStorage.getItem('style');
  let display = localStorage.getItem('display');

  if(style=='dark'){
    nav.classList.add("dark");
    document.getElementById('darkIcon').classList.remove("visible");
  }
  if (style == null) {
        setTheme('light','sun');
  }else if(style == "light"){
    setTheme('light','sun');
  } else if(style=="dark"){
    setTheme('dark','moon');
    }


    function setTheme(theme,display) {
      if (theme == 'light'&& display == 'sun') {
        document.getElementById('switcher-id').href = 'css/light.css';
        document.getElementById('lightIcon').style.display="block";
        document.getElementById('darkIcon').style.display="none";


      } else if (theme == 'dark' && display == 'moon' ) {
          document.getElementById('darkIcon').classList.remove("visible");
          document.getElementById('switcher-id').href = 'css/dark.css';
          document.getElementById('darkIcon').style.display="block";
          document.getElementById('lightIcon').style.display="none";


      }
      localStorage.setItem('style', theme);
      localStorage.setItem('display', display);

  }







  nav.addEventListener('click', function (e) {

    if ((e.target.tagName === "button")||(e.target.tagName ==="svg") ||(e.target.tagName ==="path")) {
      nav.classList.toggle("dark");
      flag = nav.classList.contains("dark");
      if (flag) {
          display = "moon";
           theme = "dark";
          setTheme(theme,display);
  
      } else {
           theme = "light";
           display = "sun";
          setTheme(theme,display);

      }

    }
   })



   window.onhashchange=function(){
    let style = localStorage.getItem('style');
    let display = localStorage.getItem('display');
    if(style=="dark" &&display=="moon"){

      document.getElementById('darkIcon').style.display="block";
      document.getElementById('lightIcon').style.display="none";

    }else if (style=="light" &&display=="sun"){

      document.getElementById('darkIcon').style.display="none";
      document.getElementById('lightIcon').style.display="block";
    }

  }
}



