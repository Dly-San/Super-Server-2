/*************************/
/*       PRELOADER       */
/*************************/

var preLoader;

function Loader() {
    preLoader = setTimeout(showPage, 1500)
}

function showPage() {
    document.getElementById("spinner-wrapper").style.display = "none";
}
