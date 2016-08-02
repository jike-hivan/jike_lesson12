 $(window).resize(function() {
   location.reload();
 })


 var index = {};

 index.init = function() {
   this.tabMenu();
   this.tabMain();
   this.search();
 }
 
 index.tabMenu = function() {
   // 获取窗口高度
   var height = $(window).height();
   console.log(height);

   $('.menu-user').hover(function() {
     $('.user-items').show();
   }, function() {
     $('.user-items').hide();
   })

   $('.menu-setts').hover(function() {
     $('.setts-items').show();
   }, function() {
     $('.setts-items').hide();
   });

   $('.more_product').hover(function() {
     $('.more-product-items').show();
   }, function() {
     $('.more-product-items').hide();
   });

   $('.more-product-items').hover(function() {
     $(this).show();
   }, function() {
     $(this).hide();
   });

   $('.more-product-items').css('height', height);
 }

 index.tabMain = function() {
   $('.tab-menus .tab-menus-items').click(function() {
     var index = $(this).index();
     $('.tab-menus-items').removeClass('tab-selected');
     $('.tab-menus-mine').removeClass('tab-selected');
     $(this).addClass('tab-selected');
     $('.tab-content').hide();
     $('.tab-content').eq(index + 1).show();
   })

   $('.tab-menus-mine').on('click', function() {
     console.log('tab-mine');
     $('.tab-menus-items').removeClass('tab-selected');
     $(this).addClass('tab-selected');
     $('.tab-content').hide();
     $('.my-attention').show();
   })
 }

 index.search = function() {
   $(window).scroll(function(event) {

     var t = $(window).scrollTop();
     console.log(t);
     if (t >= 170) {
       $('.search_form').addClass('search-fixed');
     } else {
       $('.search_form').removeClass('search-fixed');
     }

     if (t >= 265) {
       $('.hot-news-items').addClass('news-items-fixed');
     } else {
       $('.hot-news-items').removeClass('news-items-fixed');
     }
   });
 }

 index.init();
