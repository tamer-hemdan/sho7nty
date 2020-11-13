
$(document).ready(function()
  { $(".haeder-title").show(700); 
 });   //for header title


$('.searchGo').click(function(){  //for search boox open
  $('.searsh-box').show(500);
  
});

$('.closs-search').click(function(){  //for search boox clos
  $('.searsh-box').hide(500);
  
});




function openNav() {     //for open side nav
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {     //for clos side nav
  document.getElementById("mySidenav").style.width = "0";
};

