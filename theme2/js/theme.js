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

      if (style == null) {
        setTheme('light');
    } else {
        setTheme(style);
    }

    function setTheme(theme) {
      if (theme == 'light') {
        document.getElementById('switcher-id').href = 'css/light.css';
        document.getElementById('darkIcon').style.display = 'none';
        document.getElementById('lightIcon').style.display = 'block';
      } else if (theme == 'dark') {
          document.getElementById('switcher-id').href = 'css/dark.css';
          document.getElementById('darkIcon').style.display = 'block';
          document.getElementById('lightIcon').style.display = 'none';
      }
      localStorage.setItem('style', theme);
  }

  nav.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.tagName === 'button'||'svg'||'path') {

      nav.classList.toggle("dark");

      flag = nav.classList.contains("dark");
      if (flag) {
          let theme = "dark";
          setTheme(theme);

      } else {
          let theme = "light";
          setTheme(theme);


      }

    }


   })
  
}



