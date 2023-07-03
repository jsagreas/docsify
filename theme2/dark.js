window.$docsify.plugins = [].concat((e, o) => {
    let t = {

        dark: {

            toogleBackground: "#ffffff",
            background: "#091a28",
            textColor: "#b4b4b4",
            toogleImage: "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/sun.svg)"
        },
        light: {

            toogleBackground: "#091a28",
            background: "#ffffff",
            textColor: "#34495e",
            codeTextColor: "#525252",
            codeBackgroundColor: "#f8f8f8",
            toogleImage: "url(https://cdn.jsdelivr.net/npm/docsify-darklight-theme@latest/icons/moon.svg)"
        }
    };
    if (o.config.hasOwnProperty("darklightTheme")) {
        for (var [r, l] of Object.entries(o.config.darklightTheme)) "light" !== r && "dark" !== r && "defaultTheme" !== r && (t[r] = l);
        for (var [r, l] of Object.entries(t)) "light" !== r && "dark" !== r && (t[r] = l, document.documentElement.style.setProperty("--" + r, l));
        if (o.config.darklightTheme.hasOwnProperty("dark"))
            for (var [r, l] of Object.entries(o.config.darklightTheme.dark)) t.dark[r] = l;
        if (o.config.darklightTheme.hasOwnProperty("light"))
            for (var [r, l] of Object.entries(o.config.darklightTheme.light)) t.light[r] = l
    } else
        for (var [r, l] of Object.entries(t)) "light" !== r && "dark" !== r && (t[r] = l, document.documentElement.style.setProperty("--" + r, l));
    window.matchMedia("(prefers-color-scheme: dark)").matches ? t.defaultTheme = "dark" : window.matchMedia("(prefers-color-scheme: light)").matches && (t.defaultTheme = "light");
    var d = e => {
        if (localStorage.setItem("DARK_LIGHT_THEME", e), t.defaultTheme = e, "light" == e)
            for (var [o, r] of Object.entries(t.light)) document.documentElement.style.setProperty("--" + o, r);
        else if ("dark" == e)
            for (var [o, r] of Object.entries(t.dark)) document.documentElement.style.setProperty("--" + o, r);
        document.documentElement.style.setProperty("color-scheme", e)
    };
    e.afterEach((function(e, o) {
        o(e = '<div id="docsify-darklight-theme"><p>.</p></div>' + e)
    })), e.doneEach((function() {
        let e = localStorage.getItem("DARK_LIGHT_THEME");
        "light" == e || "dark" == e ? (t.defaultTheme = e, d(t.defaultTheme)) : d(t.defaultTheme);
        const o = document.getElementById("docsify-darklight-theme");
        null !== o && o.addEventListener("click", (function() {
            console.log(d)
            "light" === t.defaultTheme ? d("dark") : d("light")
        }))
    }))
}, window.$docsify.plugins);