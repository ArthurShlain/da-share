jQuery(function ($) {

    // FUCKING AWESOME CODE

    da_share = {
        fb: function (url = false) {
            if (url == false) {
                url = window.location.href;
            }
            link = 'https://facebook.com/share.php?u=';
            link += url;
            da_share.popup(link);
        },
        vk: function (url = false, title = false, description = false, image = false) {
            if (url == false) {
                url = window.location.href;
            }
            link = 'https://vk.com/share.php?url=';
            link += url;
            if (title != false) {
                link += '&title=';
                link += title;
            }
            if (description != false) {
                link += '&description=';
                link += description;
            }
            if (image != false) {
                link += '&image=';
                link += image;
            }
            da_share.popup(link);
        },
        tw: function (url = false, text = false, hashtags = false, via = false) {
            if (url == false) {
                url = window.location.href;
            }
            link = 'https://twitter.com/intent/tweet?url=';
            link += url;
            link += '&text=';
            link += text;
            if (text != false) {
                link += '&text=';
                link += text;
            }
            if (hashtags != false) {
                link += '&hashtags=';
                link += hashtags;
            }
            if (via != false) {
                link += '&via=';
                link += via;
            }
            da_share.popup(link);
        },
        ok: function (url = false, title = false, image = false) {
            if (url == false) {
                url = window.location.href;
            }
            link = 'https://connect.ok.ru/offer?url=';
            link += url;
            if (title != false) {
                link += '&title=';
                link += title;
            }
            if (image != false) {
                link += '&imageUrl=';
                link += image;
            }
            da_share.popup(link);
        },
        gp: function (url = false) {
            if (url == false) {
                url = window.location.href;
            }
            link = 'https://plus.google.com/share?url=';
            link += url;
            da_share.popup(link);
        },
        popup: function(link) {
            window.open(link,'_blank','toolbar=0,status=0,width=626,height=436');
        }
    }




    // STUPID HTML TEMPLATE

    var da_share_elements = $('.da-share-html');

    da_share_elements.each(function(index){

        var da_share_html = "<div class='btn-group'>";

        if ( da_share_elements.eq(index).hasClass('da-fb') ) {
            da_share_html += "<a class='btn btn-lg px-2 text-white' style='background:#3b5998;' onclick='da_share.fb()'><i class='fa fa-facebook-square fa-fw fa-lg my-1'></i></a>";
        }
        if ( da_share_elements.eq(index).hasClass('da-vk') ) {
            da_share_html += "<a class='btn btn-lg px-2 text-white' style='background:#0976b4' onclick='da_share.vk()'><i class='fa fa-lg fa-vk fa-fw my-1'></i></a>";
        }
        if ( da_share_elements.eq(index).hasClass('da-tw') ) {
            da_share_html += "<a class='btn btn-lg px-2 text-white' style='background:#55acee' onclick='da_share.tw()'><i class='fa fa-twitter fa-fw fa-lg my-1'></i></a>";
        }
        if ( da_share_elements.eq(index).hasClass('da-ok') ) {
            da_share_html += "<a class='btn btn-lg px-2 text-white' style='background:#ed812b' onclick='da_share.ok()'><i class='fa fa-odnoklassniki fa-fw fa-lg my-1'></i></a>";
        }
        if ( da_share_elements.eq(index).hasClass('da-gp') ) {
            da_share_html += "<a class='btn btn-lg px-2 text-white' style='background:#cc2127' onclick='da_share.gp()'><i class='fa fa-fw fa-lg fa-google-plus-circle my-1'></i></a>";
        }

        da_share_html += "</div>";

        da_share_elements.eq(index).html(da_share_html);

    });




});
