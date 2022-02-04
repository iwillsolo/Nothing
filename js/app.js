/*
$('#myInput').on('keyup',function(e){
    // cache all the tag elements in an array
    var tagElems = $('#myUL > Div')();
  
    // hide all tags
    $(tagElems).hide();
    for(var i = 0; i < tagElems.length; i++){
        // loop through all tagElements
      var tag = $(tagElems).eq(i);
      console.log(tag);
      if(($(tag).text().toLowerCase()).indexOf($(this).val().toLowerCase()) === 0 ){
        // if element's text value starts with the hint show that tag element
        $(tag).show();

      }
    }
  });
  
  
*/
  $('#myInput').on('keyup',function(){
    $('.routers').parent().css("display","none");
   var txt = $('#myInput').val();
   $('.routers:contains("'+txt+'")').parent().css("display","block");
  });


  $('#myInputx').on('keyup',function(){
    $('.routers').parent().css("display","none");
   var txt = $('#myInputx').val();
   $('.routers:contains("'+txt+'")').parent().css("display","block");
  });
  