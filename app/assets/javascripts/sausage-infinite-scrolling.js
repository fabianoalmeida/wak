$( function() {
  var page = 1,
      loading = false;

  function nearBottomOfPage() {
    return $(window).scrollTop() > $(document).height() - $(window).height() - 300;
  }

  function showLoader () {
	$("#infinite_scrolling_loading").show();
  }

  $(window).scroll(function(){
    if (loading) {
      return;
    }

    if(nearBottomOfPage()) {
	  showLoader()
      loading=true;
      page++;
      $.ajax({
        url: '/internships?page=' + page,
        type: 'get',
        dataType: 'script',
        success: function() {
          $(window).sausage('draw');
          loading=false;
        }
      });
    }
  });

  $(window).sausage();
})