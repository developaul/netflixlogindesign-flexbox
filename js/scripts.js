// Variables
const inputs = document.querySelectorAll( 'form .campo input' );

// Functions
const validateInput = event => {
    const estado = [ 'valido', 'no-valido' ];

    const clase = ( event.target.value.length === 0 ) ? estado[1] : estado[0];

    event.target.classList.remove( ...estado );
    event.target.nextElementSibling.classList.remove( ...estado );
    event.target.classList.add( clase );
    event.target.nextElementSibling.classList.add( clase );

    // Inyectar el div con el error 
    if( clase === 'no-valido' ) {
        if( event.target.parentElement.nextElementSibling.classList[0] !== 'alerta' ) {
            const errorDiv = document.createElement( 'div' );
            errorDiv.appendChild( document.createTextNode( 'Este campo es obligatorio' ) );
            errorDiv.classList.add( 'alerta' );
            
            event.target.parentElement.parentElement.insertBefore( errorDiv, event.target.parentElement.nextElementSibling );
        }
    } else {
        // eliminar el mensaje de error
        if( event.target.parentElement.nextElementSibling.classList[0] === 'alerta' ) {
            event.target.parentElement.nextElementSibling.remove();
        }
    }
} 


// Events
inputs.forEach( input => {
    input.addEventListener( 'blur', validateInput );
});
inputs.forEach( input => {
    input.addEventListener( 'input', validateInput );
});

// mostrar y ocultar password
const mostrarPasswordBtn = document.querySelector( 'form .campo span' );
mostrarPasswordBtn.addEventListener( 'click', event => {
    const passwordInput = document.querySelector( '#password' );

    if( event.target.classList.contains( 'mostrar' ) ) {
        // mostrar el texto
        event.target.classList.remove( 'mostrar' );

        event.target.textContent = 'Ocultar';

        // Cambiar a password
        passwordInput.type = 'text';
    } else {
        // mostrar el password
        event.target.classList.add( 'mostrar' );

        // Cambiar el texto 
        event.target.textContent = 'Mostrar';

        // Cambiar a password
        passwordInput.type = 'password';
    }
});
