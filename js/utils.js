$(document).ready(function(){

    // Validate First & Last Name
    $("[name='firstName'], [name='lastName']").on('keyup', function(){
        validateName(this);
    });

    // Validate email
    $("[name='email']").on('keyup', function(){
        validateEmail();
    });

    // Confirm email
    $("[name='email'], [name='confEmail']").on('keyup', function(){
        confirmEmail();
    });

    // Submit if everything is valid
    $("form").submit(function(event){
        if(
            validateName("[name='firstName']") &&
            validateName("[name='lastName']") &&
            validateEmail() && confirmEmail() &&
            validateNotEmpty("[name='country']") &&
            validateNotEmpty("[name='city']")
        )
            return true;
        else
            return false;
    });

    // Populate countries
    $.each(countries, function(country, cities){
        $("[name='country']").append($('<option></option>').val(country).text(country));
    });

    // Populate cities
    $("[name='country']").on('change', function(){
        $("[name='city'] option:not(:first-child)").remove();
        $.each(countries[$(this).val()], function(i, city){
            $("[name='city']").append($('<option></option>').val(city).text(city));
        });
    });

    // Validate Country and City
    $("[name='country'], [name='city']").on('change', function(){
        validateNotEmpty(this);
    });

    // Send email
    $("#sendEmail").on('click', function(){
        var flag = false;
        var email = $('#emailAddress i').text();
        var content = $('#emailContent i').text();

        $.ajax({
            url: 'index.php',
            type: 'post',
            async: false,
            data: {action: 'sendEmail', email: {to: email, content: content}},
            success: function(data){
                flag = data;
            }
        });

        if(flag){
            alert('Email have been send!');
            return true;
        }else{
            alert('An error occurred, please try later!');
            return false;
        }
    });
});

function confirmEmail(){
    var flag = false;
    if($("[name='email']").val() != $("[name='confEmail']").val()) {
        $("[name='confEmail']").removeClass('form-control-success').addClass('form-control-danger');
        flag = false;
    }else {
        $("[name='confEmail']").removeClass('form-control-danger').addClass('form-control-success');
        flag = true;
    }

    return flag;
}

function validateEmail(){
    var flag = false;
    var email = $("[name='email']").val();
    var reg_e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg_e.test(email)) {
        $("[name='email']").removeClass('form-control-danger').addClass('form-control-success');
        flag = true;
    }else{
        $("[name='email']").removeClass('form-control-success').addClass('form-control-danger');
        flag = false;
    }

    return flag;
}

function validateName(input){
    var flag = false;
    var name = $(input).val();
    var reg_e = /^[a-z]+$/i;

    if(reg_e.test(name)) {
        $(input).removeClass('form-control-danger').addClass('form-control-success');
        flag = true;
    }else {
        $(input).removeClass('form-control-success').addClass('form-control-danger');
        flag = false;
    }

    return flag;
}

function validateNotEmpty(input){
    var value = $(input).val();
    var flag = false;

    if(value == '') {
        $(input).removeClass('form-control-success').addClass('form-control-danger');
        flag = false;
    }else {
        $(input).removeClass('form-control-danger').addClass('form-control-success');
        flag = true;
    }

    return flag;
}

var countries = {
    'Romania': ['Timisoara', 'Bucuresti', 'Cluj', 'Iasi'],
    'Republic of Moldova': ['Chisinau', 'Balti', 'Tiraspol', 'Orhei'],
    'Ukraine': ['Kiev', 'Odessa', 'Cernauti', 'Yalta'],
    'France': ['Paris', 'Rennes', 'Marseille', 'Lyon', 'Strasbourg']
};