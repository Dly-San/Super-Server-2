/*************************/
/*       PRELOADER       */
/*************************/

var preLoader;

function Loader() {
    preLoader = setTimeout(showPage, 1500)
}

function showPage() {
    document.location.href = "https://www.super-server.ml"
}
