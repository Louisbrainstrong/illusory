$.fn.followFrom = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: 0
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};


$(document).ready(function() {
  $('.blackline').scrollToFixed({ marginTop: 10});
  $('#dreams').followFrom(50);
});