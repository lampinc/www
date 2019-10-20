(function ($) {
    'use strict';

    /*[ Wizard Config ]
        ===========================================================*/
    
    try {
        var $validator = $("#js-wizard-form").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 3
                },
                password: {
                    required: true,
                    minlength: 8
                },
                re_password: {
                    required: true,
                    minlength: 8,
                    equalTo: '#password'
                }
            },
            messages: {
                username: {
                    required: "Insira o nome de usu&aacute;rio"
                },
    
                email: {
                    required: "Insira seu email",
    
                },
                password: {
                    required: "Digite a chave",
                    minlength: "A senha deve ter mais de 10 caracteres"
                },
                re_password: {
                    required: "Por favor, confirme sua chave",
                    minlength: "A senha deve ter mais de 10 caracteres",
                    equalTo: "A chave digitada n&atilde;o &eacute; igual &agrave; anterior"
                }
            }
        });
    
        $("#js-wizard-form").bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn--next',
            'onNext': function(tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            'onTabClick': function (tab, navigation, index) {
                var $valid = $("#js-wizard-form").valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            }
    
        });
    
    }
    catch (e) {
        console.log(e)
    }

})(jQuery);