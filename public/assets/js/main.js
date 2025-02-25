const checkbox_wrapper = document.querySelector( 'form .flexbox' );
const checkbox = document.querySelector( 'form .flexbox span' );

checkbox_wrapper.addEventListener("click", function(){
    checkbox.classList.toggle( "checked" );
});