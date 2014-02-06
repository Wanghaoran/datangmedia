$(function() {

    var isMobile = screen.width < 600 || /iphone|android|blackberry|windows phone|palm|symbian|webos|opera mini|opera mobi|skyfire|iemobile|fennec|ucbrowser/i.test(navigator.userAgent);

    var all_images = $('.one-page').map(function() {
        return $(this).find('.wrapper').html()
    }).toArray();

    if (!isMobile) {

        var magazine = $('.magazine'),
            container = $('.container'),
            scale = 1.55,
            gscale = 0.97,
            height = window.innerHeight,
            width = window.innerWidth;

        var mh = height * gscale;
        var mw = mh * scale;
        if (height > width) {
            mw = width * gscale;
            mh = mw / scale;
        }

        container.css({
            width: mw,
            height: mh,
            marginTop: (height - mh) / 2
        });

        magazine.booklet({
            width: mw,
            height: mh,
            pagePadding: 0,
            pageNumbers: false
        });

        $('[data-original]').each(function() {
            $(this).attr('src', $(this).attr('data-original'));
        });

        var resetGallary = function() {

            //分别处理单张和多张图片显示效果
            $('.gallary .wrapper').each(function() {
                var self = $(this);
                var img = self.find('img');
                if (img.length > 1) {
                    self.slidesjs({
                        play: {
                            auto: true,
                            interval: 3000,
                            swap: true,
                            pauseOnHover: true,
                            restartDelay: 2500
                        },
                        navigation: {
                            active: false
                        },
                        callback: {
                            loaded: function(number) {
                                $('.slidesjs-pagination-item a').html('');
                            },
                            complete: function(number) {
                            }
                        }
                    });
                } else {
                    img.css({
                        height: '100%'
                    });
                }
            });

            //添加按钮和页码
            var count = 26;
            $('.b-page').each(function() {

                var self = $(this).find('.one-page');
                var index = +$(this).index();
                var hasBtn = self.find('[class*="-button"]').length > 0;
                if (self.parent().is('.b-wrap-right') && !hasBtn && !(index == 0 || index >= count)) {
                    self.append('<div class="next-button"></div>');
                } else if (self.parent().is('.b-wrap-left') && !hasBtn && !(index == 0 || index == count)) {
                    self.append('<div class="prev-button"></div>');
                }
                var pn = $('<div class="page-number">' + (index) + ' / ' + (count - 2) + '</div>');
                var hasPageNumber = self.find('.page-number').length > 0;
                if (index == 0 || index >= count - 1 || hasPageNumber) return;
                self.append(pn);
            });

        };

        resetGallary();

        magazine.on('click', '.prev-button',
            function() {
                magazine.booklet("prev");
            });

        magazine.on('click', '.next-button',
            function() {
                magazine.booklet("next");
            });

        if (!$.browser.msie) {
            if ($.browser.safari) bgMusic = new Audio('/music/music2014.mp3');
            else bgMusic = new Audio('/music/music2014.ogg');
            bgMusic.loop = true;
            bgMusic.volume = 0.5;
            $('#bgMusicSwitch').click(function() {
                if (bgMusic.paused) {
                    bgMusic.play();
                    $(".triangle").css("display", "none");
                    $(".pause").css("display", "block");
                    $("#bgMusicSwitch").attr("title", "暂停背景音乐");
                } else {
                    bgMusic.pause();
                    $(".pause").css("display", "none");
                    $(".triangle").css("display", "block");
                    $("#bgMusicSwitch").attr("title", "播放背景音乐");
                }
            });
            var bgSwitch = function() {
                $('#bgMusicSwitch').trigger('click');
            }

            bgSwitch();
        } else {
            $(".music").hide();
        }

    } else {

        $(".music").hide();

        /*$('[data-original]').each(function(){
         $(this).attr('src',$(this).attr('data-original'));
         });*/

        $("img.lazy").show().lazyload({
            failure_limit: 10,
            effect: "fadeIn",
            event: 'showit'
        });

        $('.gallary .wrapper').each(function() {
            var self = $(this);
            var img = self.find('img');
            if (img.length > 1) {
                self.slidesjs({
                    navigation: {
                        active: false
                    },
                    callback: {
                        loaded: function(number) {
                            $(this.element).find('img').eq(0).trigger('showit');
                            $('.slidesjs-pagination-item a').html('');
                        },
                        complete: function(number) {
                            $(this.element).find('img').eq(number - 1).trigger('showit');
                        }
                    }
                });
            } else {
                img.trigger('showit');
            }
        });
    }
});