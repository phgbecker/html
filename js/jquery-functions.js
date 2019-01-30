$(document).ready(function() {
    // Fade in the signIn div
    $('#signInBox').fadeIn(500);

    $('#signInAction').submit(function (event) {
        // Consume the default event
        event.preventDefault();

        /**
         * Validate a series of user inputs
         */
        if (!$('#usernameInput').val()) {
            $('#usernameValidation').text('Login field is mandatory').show().fadeOut(1500);
            return;
        }

        if ($('#usernameInput').val().length <= 3) {
            $('#usernameValidation').text('Login field length should be bigger than 3').show().fadeOut(1500);
            return;
        }

        if (!$('#passwordInput').val()) {
            $('#passwordValidation').text('Password field is mandatory').show().fadeOut(1500);
            return;
        }

        if ($('#passwordInput').val().length <= 5) {
            $('#passwordValidation').text('Password field length should be bigger than 5').show().fadeOut(1500);
            return;
        }

        // If got this far, give the user a sign in message
        $('#signInValidation').text('Login successful!').show().fadeOut(3000);
    });

});