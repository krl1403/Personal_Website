var a;
function show_hide_a()
 {

    if(a==1) {
        document.getElementById(img).style.display="inline";
        return a=0;
    }
    else {
        document.getElementById(img).style.display="none";
        return a=1;
    }

}