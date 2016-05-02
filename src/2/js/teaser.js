$(function() {
    $('[data-js-teaser]').each(function() {
        $(this).find('h2')
               .append('<br>(with non-blocking Javascript)');
    })
});
