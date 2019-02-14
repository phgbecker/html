/**
 * Global variables
 */
const USERNAME = 'phgbecker';
const PASSWORD = '123456';
const loadingRequest = '<img src=\"./images/loading.gif\" /> Loading...';

$(document).ready(function() {  
    /**
     * Loading transitions
     */
    $('#signInBox').fadeIn(500);
    $('#usernameInput').focus();

    $('#signInForm').submit(function (event) {        

        /**
         * Consume the default form event to avoid propagation
         */
        event.preventDefault();

            /**
             * Validate a series of user inputs before signing in
             */
            if (isSignInFormValid()) {
                /**
                 * Build the "User" JSON object
                 */
                const User = JSON.parse('{ "name" : "' + $('#usernameInput').val() + '", "password" : "' + $('#passwordInput').val() + '" }');
                console.log(User);

                /**
                 * Tries to SignIn
                 */
                doSignIn(User);
            }
    });

});

/**
 * Sign in form validation method
 * @returns boolean
 */
function isSignInFormValid() {
    if (!$('#usernameInput').val()) {        
        $('#usernameValidation').text('Login field is mandatory').show().fadeOut(1500);
        $('#usernameInput').focus();

        return false;
    }

    if ($('#usernameInput').val().length <= 3) {        
        $('#usernameValidation').text('Login field length should be bigger than 3').show().fadeOut(1500);
        $('#usernameInput').focus();

        return false;
    }

    if (!$('#passwordInput').val()) {        
        $('#passwordValidation').text('Password field is mandatory').show().fadeOut(1500);
        $('#passwordInput').focus();

        return false;
    }

    if ($('#passwordInput').val().length <= 5) {        
        $('#passwordValidation').text('Password field length should be bigger than 5').show().fadeOut(1500);
        $('#passwordInput').focus();

        return false;
    }

    return true;
}

/**
 * Sign in authentication method
 * @param {JSON} User 
 */
function doSignIn(User) {    
    $('#signInValidation').empty().show().css('color', 'black').append(loadingRequest);

    setTimeout(function() {

        if (User.name = USERNAME && User.password == PASSWORD) {
            /**
             * If got this far, give the user a "successful" sign in message
            */
            $('#signInValidation').css('color', 'green').text('Login successful!').show().fadeOut(2500);
            $('#signInImg').attr('src', './images/signedIn.png');

            /**
             * Wait 2,4s and reset the form input
             */
            setTimeout(function() {
                $('#signInForm')[0].reset();
                $('#signInImg').attr('src', './images/unsignedIn.png');
                $('#usernameInput').focus();
            }, 1500);
        } else {
            $('#signInValidation').css('color', 'red').text('Login unsuccessful! Try "phgbecker" and "123456" as credentials').show().fadeOut(2500);
        }

    }, 600);
}