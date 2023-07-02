window.onload=function(){



  let  btn = document.getElementById("btn")

  // let switches = document.getElementsByClassName('switch');
  let style = localStorage.getItem('style');

  if (style == null) {
    setTheme('light');
  } else {
    setTheme(style);
  }

// for (let i of switches) {
//   i.addEventListener('click', function () {
//     let theme = this.dataset.theme;
//     setTheme(theme);

//   });
// }



function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = 'css/light.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = 'css/dark.css';
  }
  localStorage.setItem('style', theme);

}


btn.addEventListener("click", () => {

  btn.classList.toggle("dark");

  flag=btn.classList.contains("dark");
  if(flag){
    let theme ="dark";
    setTheme(theme);
    alert(theme)
  }else{
    let theme ="light";
    setTheme(theme);
    alert(theme)

  }
})

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


}