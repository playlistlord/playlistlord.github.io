$(function () {
    $( '#table' ).searchable({
        striped: true,
        oddRow: { 'background-color': '#B4C6E7' },
        evenRow: { 'background-color': '#D9E1F2' },
        searchType: 'fuzzy'
    });
    
    $( '#searchable-container' ).searchable({
        searchField: '#container-search',
        selector: '.row',
        childSelector: '.col-xs-4',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
    })
});