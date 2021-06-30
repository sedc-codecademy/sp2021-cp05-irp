
  $(".qr-code-options").hide();


  $( "#templates" ).click(function() {
    $(".templates-options").fadeIn(700);
    $(".qr-code-options").hide();
    
  });

  $( "#code-qr" ).click(function() {
    $(".templates-options").hide();
    $(".qr-code-options").fadeIn(700);

    
  });
  $( ".menu" ).click(function() {
    $(".text-Options").hide();
  });
   
 $(".text-Options").hide();

 $( "#textarea-div" ).click(function() {
    $(".text-Options").fadeIn(700);
  });



//    ===============================  font style  ============================


function italics() {
   var i = document.getElementById('nameInput');
   i.style.fontStyle = i.style.fontStyle == 'italic' ? 'normal' : 'italic';
 }

function bolds() {
   var b = document.getElementById('nameInput');
   b.style.fontWeight = b.style.fontWeight == 'bold' ? 'normal' : 'bold';
 }

 function underlines() {
   var u = document.getElementById('nameInput');
   u.style.textDecoration = u.style.textDecoration == 'underline' ? 'none' : 'underline';
 }

 function uppercases() {
   var up = document.getElementById('nameInput');
   up.style.textTransform = up.style.textTransform == 'uppercase' ? 'none' : 'uppercase';
 }




//   ======================   show templates in menu    ===================


   $(document).ready(function(){
      $("#templates-select").on('change', function(){
          $(".t").hide();
         $("." + $(this).val()).fadeIn(700);
      }).change();
      
   });

   // ========================== font size  ===================

   $(document).ready(function(){
      $("#fontSizeSelect").on('change', function(){        
             $(".textBox").css("font-size", $(this).val());       
      }).change();
      
   });


   // =================== delete text box  ===================


 $( ".fa-trash" ).click(function() {
    $(".textBox").hide();

    
   });


    // ==================  show template on card   ====================

$(".example").hide();

$(".artist2").click(function(){
  $(".example").show();
})