//to display hidden search bar
$( function()
  {
    var $searchlink = $('#searchtoggl i');
    var $searchbar  = $('#searchbar');
  
  $('#clik ').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'clik') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
   
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});

//to display random page
function myFunction() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}

//Run some jQuery
$(document).ready(function(){
  
  
  //animations
 
  $(".hding").addClass('animated bounceInLeft');
   $("#rwp").addClass('animated flip');
  $("#clik").addClass('animated flip');
 
  
  //When search is clicked run code
  $('#search').click(function(){
    
    $(".fly").addClass('animated rollOut');
    //gets search input
    var searchTerm = $('#searchaterm').val();
   //API Url with searchterm 
    var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
       //get heading  console.log(data[1][0]);
       //get description console.log(data[2][0]);
       //get link  console.log(data[3][0]);
        $('#output').html('');
        for(var i=0;i<data[1].length;i++){
          
      $('#output').prepend("<li><b><em><h4><a href= "+data[3][i]+">"+data[1][i]+"</a><p></b></em>"+data[2][i]+"</p></li>");        
        }
        $("#searchaterm").val('');
      },
      error:function(errorMessage){
        console.log(errorMessage);
      }
    });
   
  });
   $("#searchaterm").keypress(function(e){
      if(e.which==13){
        $("#search").click();
      }
    //operations performed on pressing enter button
 
   
    });
});
 
function myFun() {
  
    location.reload(true);
}