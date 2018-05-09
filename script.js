(function(){
   let $salvar = document.querySelector(".save");
   let $typeArea = document.querySelector("textarea"); 
   let $notes = document.querySelector(".notes-text");

   $salvar.addEventListener('click', function(e){
        let note = $typeArea.value + '\n';
        $notes.value += note
   })

   
})();