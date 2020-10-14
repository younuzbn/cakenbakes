$(function() {
    var xhr;
    $(document).on("modalLoaded", function(e) {
        if (e.name == 'productAddToCartForm') {
            $.event.trigger({
                'type': 'loadminicart'
            });
        }
    });


    $('form#productAddToCartForm').on('change',
            'input:radio,input:checkbox,select', function() {
                var form = $(this).closest('form');
                caluclateForm(form);

            });
    $('form#productAddToCartForm').on('blur', 'input[type="text"]', function() {
        var form = $(this).closest('form');
        caluclateForm(form);
    });

    function caluclateForm(form) {

        var url = $(form).attr('action');
        if (xhr && xhr.readyState != 4) {
            xhr.abort();
        }
        productId = $(form).find('[name="product"]').val();
        xhr = $.ajax({
            type: "POST",
            url: url + '/preview/true',
            data: $(form).serialize(),
            success: function(data) {
                var content = $(data);
                var form1 = content.find('form');
                /* radio */
                var controls = form1.find('[type="radio"],select');
                $.each(controls, function(index) {
                    var id = $(this).attr('name');
                    $(form).find('[name="' + id + '"]').replaceWith($(this));

                });

                var sellPrice = content.find('#sellPrice').html();
                var listPrice = content.find('#listPrice').html();
                $('#listPrice-' + productId + '.full-view').html(listPrice);
                if (sellPrice === '£0.00') {
                    $('#sellPrice-' + productId + '.full-view').html(listPrice);
                }
                else {
                    $('#sellPrice-' + productId + '.full-view').html(sellPrice);
                }

                var image = content.find('#image').html();
                if (image) {
                    $('.product-top-image').html(image);
                }
                $.event.trigger({
                    type: 'product-full-data-change',
                    data: content
                });
                var s = content.find('script');
                $('body').append(s);

            }
        });
    }

});