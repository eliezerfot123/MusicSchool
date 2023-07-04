
$( function() {
    $('#dni').on('change', function(e) {
        e.preventDefault();
        let dni = $(this).val();
        dni=dni===''?'vacio':dni;

        $.ajax({
            url: '/person/d/' + dni,
            success: function(data) {
                if(data){
                    $('#error_dni').attr('hidden', false)

                    $('#error_dni').append('Cédula ya existe, intente con otra')
                }else{
                    $('#error_dni').attr('hidden', true)
                }
            }
            
        })
    });

    $('#email').on('change', function(e) {
        e.preventDefault();
        let email = $(this).val();
        $.ajax({
            url: '/person/e/' + email,
            success: function(data) {
                if(data){
                    $('#error_email').attr('hidden', false)

                    $('#error_email').append('Email ya existe, intente con otro')
                }else{
                    $('#error_email').attr('hidden', true)
                }
            }
        })        
    });

    $('#submit').on('click', function(e) {
        e.preventDefault();
        
        let full_name = $('#full_name').val()
        let dni = $('#dni').val()
        let phone = $('#phone').val()
        let email = $('#email').val()
        let address = $('#address').val()
        let intruments = $('#intruments').val()

        $.ajax({
            url: '/person/create/',
            data: {
                full_name,
                dni,
                phone,
                email,
                address,
                intruments
            },
            type: 'POST',
            success: function(data) {
                $("#staticBackdrop").modal("toggle");
                $('#full_name').val('');
                $('#dni').val('');
                $('#phone').val('');
                $('#email').val('');
                $('#address').val('');
                $('#intruments').val('');
                $('#verRegistro').val(data)
                
            },
            error: function(data){
                console.log(data)
            }
        })   
    })
    $('#verRegistro').on('click', function(e){
        e.preventDefault();
        let registro = $('#verRegistro').val()
        document.getElementById("verRegistro").href=`/registered/${registro}`;
        document.getElementById('verRegistro').click();
    })
})