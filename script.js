const checkbox = document.getElementById('checkbox')
var modoClaro = true;
// console.log(getCookie('modoClaro'));

if (getCookie('modoClaro123456') == true || getCookie('modoClaro123456') == ''){

    }
    else {
        mudarModo();
     }


checkbox.addEventListener ('change', () => {
    mudarModo();  
})

    function mudarModo(){
        
        document.body.classList.toggle('dark')
        document.body.classList.toggle('lead')
        document.body.classList.toggle('btn-outline-secondary')
        document.body.classList.toggle('body') 

        modoClaro = !modoClaro;
        console.log(modoClaro);
         // Set a Cookie
        setCookie('modoClaro123456', modoClaro, 30);
    
        // Set a Cookie
        setCookie('modoEscuro', !modoClaro, 30);
    
        console.log(document.cookie);
    }

    function setCookie(cName, cValue, expDays) {

         let date = new Date();

         date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));

         const expires = "expires=" + date.toUTCString();

         document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

        function getCookie(cname) {

            let name = cname + "=";

            let ca = document.cookie.split(';');

            for(let i = 0; i < ca.length; i++) {

                let c = ca[i];

                while (c.charAt(0) == ' ') {

                c = c.substring(1);

                }

                if (c.indexOf(name) == 0) {

                return c.substring(name.length, c.length);

                }
            }
                return "";
            }

// Apply setCookie


