  $(document).ready(function(){
    $("#signin-section").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            email:{
                required:true,
                email_or_mobile:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            genter:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"enter the first name",
                minlength:"minimum 4 letter used"

            }
        }
    })
    
    })