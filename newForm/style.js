$(document).ready(function(){
    jQuery.validator.addMethod('passwordRule',function(value,element,args){
        return/^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
    });
    
    $("#submit-section").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            lname:{
                required:true,
                minlength:2,
                maxlength:5
            },
            email:{
                required:true,
                email_or_mobile:true
            },
            password:{
                required:true,
                minlength:8,
                passwordRule:true
                
            },
            confpassword:{
                required:true,
                equalTo:'#password'

            },
            genter:{
                required:true
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            }
        },
        messages:{
            fname:{
                required:'Enter first name',
                minlength:'Enter minimum 4 letters'
            },
            lname:{
                required:'Enter last name',
                minlength:'Enter 2 minimum letters',
                maxlength:'Enter 5 maximum letters'

            },
            email:{
                required:'Enter email or mobile number',
                email_or_mobile:'valid email or mobile number'
            },
            password:{
                required:'Enter the password',
                minlength:'Enter the minimum 8 charecters',
                passwordRule:'Enter alphanumeric,one capital letter and small letters'
            },
            confpassword:'Enter the confirm password',
            equalTo:'match to password'
        }
    })
})