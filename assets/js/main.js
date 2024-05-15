
$(document).ready(function() {

    var current = location.pathname;
    $('#menu ul li a').each(function() {
        var $this = $(this);
        // if the current path is like this link, make it active
        if (current.indexOf($this.attr('href')) !== -1) {
            $this.parent().addClass('active');
        }
    })

});
