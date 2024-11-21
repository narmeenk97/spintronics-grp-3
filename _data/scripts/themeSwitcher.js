// modified code from: https://tinyprojects.dev global.js
if (typeof window !== "undefined") {
    var theme = window.localStorage.getItem('theme');
    if(!theme){
        theme =  'light';
    }
    else if(theme === "true"){
        theme = 'dark';
    }
    else{
        theme = 'light';
    }

    function toggle(){
        theme = !theme;
        window.localStorage.setItem('theme', theme);	
    }

    document.documentElement.setAttribute('data-bs-theme',theme)

    // modified code from boostrap 5 enable dark: https://www.codeply.com/p/BmyKLq8RTV
    var btn = document.getElementById('btnSwitch')
    btn.addEventListener('click',()=>{
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
            btn.classList.add("btn-dark")
            btn.classList.remove("btn-light")
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
            btn.classList.remove("btn-dark")
            btn.classList.add("btn-light")
        }
        toggle();
    })
}




