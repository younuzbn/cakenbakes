NProgress.start();
jQuery(function() {

    $(document).on("statechangecomplete", function(e) {
        onloadEvents();
    });
    $(document).ajaxStart(function() {
        NProgress.start();
    });
    $(document).ajaxStop(function() {
        NProgress.done();
    });
    $(document).on("zoomboxClose", function(event) {
        $.event.trigger({
            type: 'ajaxpageload',
            url: window.location.pathname
        });

    });
    $.event.trigger('statechangecomplete');
    NProgress.done();
});
function onloadEvents() {
    $('a.zoombox').zoombox();
    $('a.fancybox').fancybox();
    $('#categorySortProduct select').change(function() {
        return $(this).closest('form').submit();
    });
    $('#categoryAdditionalProduct select').change(function() {
        $(this).closest('form').submit();
    });
    $('#weddingcakeSortProduct select').change(function() {
        return $(this).closest('form').submit();
    });
    $('#findSortProduct select').change(function() {
        return $(this).closest('form').submit();
    });
    $('#weddingcakeAdditionalProduct select').change(function() {
        $(this).closest('form').submit();
    });
    $('#searchSortProduct select').change(function() {
        $(this).closest('form').submit();
    });
    $('#searchAdditionalProduct select').change(function() {
        $(this).closest('form').submit();
    });
    $('#findAdditionalProduct select').change(function() {
        $(this).closest('form').submit();
    });
    $modal = $('#ajax-modal');
    $('a.ajax-modal').click(function() {
        $modal = $('#ajax-modal');
        var href = $(this).attr('href');
        ajaxModal($modal, href, 'get', null);
        return false;
    });
    $('a.ajax-modal-medium').click(function() {
        $modal = $('#ajax-modal-medium');
        var href = $(this).attr('href');

        ajaxModal($modal, href, 'get', null);
        return false;
    });
    $('form.ajax-modal').submit(function() {
        $modal = $('#ajax-modal');
        var href = $(this).attr('action');
        var type = $(this).attr('method') || 'get';
        type = type.toLowerCase();
        var data = $(this).serialize();
        if ($(this).valid()) {
            ajaxModal($modal, href, type, data);
        }

        return false;
    });
    $('form.ajax-modal-medium').submit(function() {
        $modal = $('#ajax-modal-medium');
        var href = $(this).attr('action');
        var type = $(this).attr('method') || 'get';
        type = type.toLowerCase();
        var data = $(this).serialize();
        if ($(this).valid()) {
            ajaxModal($modal, href, type, data);
        }
        return false;
    });

    // $('input[type="radio"]').radioImageSelect();

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // If a menu is already open we close it
        $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
        // opening the one you clicked on
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();

        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = -menu.width();
        } else {
            var newpos = $(this).parent().width();
        }
        menu.css({left: newpos});

    });



}

function ajaxModal($modal, url, type, data) {
    var href = $(this).attr('href');
    $('body').modalmanager('loading');
    $.ajax({
        url: url,
        data: data,
        type: type,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-BLUCART-MODAL', 'TRUE');
        },
        success: function(data, textStatus, jqXHR) {

            $modal.html(data);
            $modal.modal();
            return false;
        },
        error: function() {
            $modal.modal();
            return false;
        }
    });
    return false;

}

$('a.ajax-modal-large').click(function() {
        $modal = $('#ajax-modal-large');
        var href = $(this).attr('href');

        ajaxModal($modal, href, 'get', null);
        return false;
    });

$('form.ajax-modal-large').submit(function() {
        $modal = $('#ajax-modal-large');
        var href = $(this).attr('action');
        var type = $(this).attr('method') || 'get';
        type = type.toLowerCase();
        var data = $(this).serialize();
        if ($(this).valid()) {
            ajaxModal($modal, href, type, data);
        }
        return false;
    });
