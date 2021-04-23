(function(){
    var menu = document.querySelector('i'),
        menulink = document.querySelector('.links');
    menu.addEventListener('click', function(){
        menulink.classList.toggle('active');
        //e.preventDefault(); 	
    })
});