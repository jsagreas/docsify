! function() {
    $docsify.plugins = [].concat(function(e) {
        e.beforeEach(function(e) {
            return document.getElementById("main").style.visibility = "hidden", document.getElementById("load").style.display = "block", e
        }), e.doneEach(function(e) {
            for (var n = document.querySelectorAll("pre"), t = 0; t < n.length; ++t) n[t].classList.add("line-numbers");
            Prism.highlightAll(), document.getElementById("main").style.visibility = "visible", document.getElementById("load").style.display = "none"
        })
    }, $docsify.plugins)
}();