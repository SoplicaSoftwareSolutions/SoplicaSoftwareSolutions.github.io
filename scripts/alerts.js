$(document).ready(function(){

    SubmitCheck();

})

function SubmitCheck(){
        
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    let submitted = params.submitted;
    if(submitted == 'true'){
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for getting in touch!',
            text: 'We will contact you as soon as we can',
            showConfirmButton: false,
            timer: 2500,
            iconColor: '#5271FF',
            width: '700px'
            })
    }
    var url= document.location.href;
    window.history.pushState({}, "", url.split("?")[0]);


    }