$(document).ready(function () {
    var url = 'http://localhost:3001/posts'

    $(document).ready(function () {
        $('#btnLoad').on('click', loadPosts);
        $('#btnAdd').on('click', savePost);

      //  $('#btnLoadMore').on('click', loadMorePosts);

       // $('#main').on('click', '.btnLoadBody', loadBody);
        //$('.btnLoadBody').on('click', loadBody);

        $('#btnLoadMore').hide();
        $('.loading').hide();
        loadPosts();
    });

    function savePost(e) {
        e.preventDefault();
        var postObj = $('#frm').serialize();

        $('.loading').show()
        if (isPosting === false) {
            isPosting = true;
            $.post(url, postObj, function (result) {
                loadPosts();
                isPosting = false;
            });
        }

    }

    function loadPosts() {
        //$('#main').html(loadingHtml);
        $('.loading').show()

        $.get(url, function (result) {
            console.log(result);
           // var templateHtml = $('#entry-template').html();
            // var hbs = Handlebars.compile(templateHtml);
            // var filteredEntries = filterEntries(result)

          //  var pagedEntries = pageEntries(filteredEntries);

            var obj = {
                entry: pagedEntries
            };

         //   allEntries = pagedEntries;

            var html = hbs(obj);

            $('.loading').hide()
            $('#main').append(html);
        });
    }
});