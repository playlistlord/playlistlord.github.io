$(function () {
    $( '#table' ).searchable({
        searchField: '#search',
        selector: 'tr',
        childSelector: 'td',
        striped: true,
        oddRow: { 'background-color': '#B4C6E7' },
        evenRow: { 'background-color': '#D9E1F2' },
        searchType: 'strict'
    });
    
    // $( '#table' ).searchable({
 
    //     show: function( elem ) {
    //         elem.slideDown(100);
    //     },
    //     hide: function( elem ) {
    //         elem.slideUp( 100 );
    //     }
    // })
});