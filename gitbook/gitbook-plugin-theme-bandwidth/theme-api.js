require(["gitbook","jquery"],function(a,e){function n(){return"btn-"+x++}function t(a,e,n,t){var s=a.children(e).length;0>n&&(n=Math.max(0,s+1+n)),a.append(t),s>n&&a.children(e).eq(n).before(a.children(e).last())}function s(a){a.preventDefault()}function o(a){return a=e.extend({label:"",icon:"",text:"",position:"left",className:"",onClick:s,dropdown:null,index:null,id:n()},a||{}),C.push(a),i(a),a.id}function i(a){var n,s=e(".api-code-top"),o=e("<a>",{"class":"btn",text:a.text?" "+a.text:"","aria-label":a.label,href:""});o.click(a.onClick),a.icon&&e("<i>",{"class":a.icon}).prependTo(o),o.addClass(a.className),n=o,n.addClass("js-langbar-action"),t(s,".btn",a.index,n)}function d(){e(".js-langbar-action").remove(),C.forEach(i)}function l(a){C=e.grep(C,function(e){return-1==a.indexOf(e.id)}),d()}function r(e){b=a.storage.get("themeApi",{split:e.split,currentLang:null})}function h(){a.storage.set("themeApi",b),c()}function c(){u(),e(".book").toggleClass("two-columns",b.split),m=e(".api-method-sample"),m.each(function(){var a=!(e(this).data("lang")==b.currentLang);e(this).toggleClass("hidden",a)})}function g(){l(w),w=[],m=e(".api-method-sample");var a=[],n=!1;m.each(function(){var t,s,o=!1,i=e(this).data("lang"),d=e(this).data("name");i==b.currentLang&&(n=!0,o=!0),t=e.grep(a,function(a){return a.name==d}),s=!!t.length,s||a.push({name:d,lang:i,"default":o})});var t=0;e.each(a,function(s,i){var d,l,r=i["default"]||!n&&s==a.length-1;l=0===t?"lang-switcher first-code-lang "+(r?" active ":""):t===a.length-1?"lang-switcher last-code-lang "+(r?" active ":""):"lang-switcher"+(r?" active ":""),d=o({text:i.name,position:"left",className:l,index:t,onClick:function(a){b.currentLang=i.lang,h(),e(".btn.lang-switcher.active").removeClass("active"),e(a.currentTarget).addClass("active")}}),w.push(d),t+=1,r&&(b.currentLang=i.lang)})}function p(){"shown"!=localStorage.getItem("popState")&&e(window).width()<980?(e("#banner").show(),e(".head").has("#banner").siblings(".book-body, .book-summary").css("height","calc(100% - 220px)"),e(".head").has("#banner").siblings().children().find(".book-header").css("top","220px"),localStorage.setItem("popState","shown")):"shown"!=localStorage.getItem("popState")?(e("#banner").show(),e(".head").has("#banner").siblings(".book-body, .book-summary").css("height","calc(100% - 140px)"),e(".head").has("#banner").siblings().children().find(".book-header").css("top","140px"),localStorage.setItem("popState","shown")):e(".book-body, .book-summary").css("height","calc(100% - 83px)"),e("#bannerClose").click(function(a){e(".head").has("#banner").siblings(".book-body, .book-summary").css("height","calc(100% - 83px)"),e(".head").has("#banner").siblings().children().find(".book-header").css("top","83px"),e("#banner").hide()})}function u(){var a=e(".api-method-sample > pre");a.each(function(){e(this).outerHeight()>e(this).parent().height()?e(this).parent().addClass("expandable"):e(this).parent().after("")})}function f(){e(".api-method-code").closest(".markdown-section").css("padding-top","0px")}var m,b,w=[],v=[{config:"light",text:"Light",id:0},{config:"dark",text:"Dark",id:3}],C=[],x=0;a.events.bind("start",function(e,n){var t=n["theme-bandwidth"];a.fontsettings.setThemes(v),a.fontsettings.setTheme(t.theme),r(t)}),a.events.on("page.change",function(){g(),f(),c(),p(),u(),e(".expandable").after('<div class="expandFade"><div class="expandCode"></div></div>'),e(".expandFade").click(function(){e(this).prev().toggleClass("collapse"),e(this).children(".expandCode").toggleClass("showLessText")}),e(".hasSecondary").click(function(){e(this).parent().next(".headerDropdown").toggle()}),e(document).mouseup(function(a){var n=e(".headerDropdown");n.is(a.target)||0!==n.has(a.target).length||n.hide()}),e(".markdown-section").find("a[target='_blank']").addClass("anchor-external"),e(".markdown-section").find("a[target='_blank']:not(:has(>code)):not(:has(>img)):not(td > a)").append('&nbsp;<i class="icons8-open-in-window"></i>'),e("a.button").removeClass("anchor-external"),e("a").has("code").addClass("anchor-code"),e("a").has("img").addClass("aimg"),e(".markdown-section").find("table").wrap("<div class='table-wrap'></div>"),e("table").each(function(){var a=this,n=e(this).parent(".table-wrap"),t=e(n).width(),s=e(a).outerWidth();s>t?e(n).addClass("shadow-r"):e(n).removeClass("shadow-r"),e(n).scroll(function(){var a=e(this).scrollLeft();a==s-t?e(this).removeClass("shadow-rl shadow-r").addClass("shadow-l"):a>0?e(this).removeClass("shadow-l shadow-r").addClass("shadow-rl"):e(this).removeClass("shadow-l shadow-rl").addClass("shadow-r")}),e(window).resize(function(){var o=e(n).scrollLeft();t=e(n).width(),s=e(a).outerWidth(),s>t?o==s-t?e(n).removeClass("shadow-rl shadow-r").addClass("shadow-l"):o>0?e(n).removeClass("shadow-l shadow-r").addClass("shadow-rl"):e(n).removeClass("shadow-l shadow-rl").addClass("shadow-r"):e(n).removeClass("shadow-l shadow-rl shadow-r")})})}),a.events.on("comment.toggled",function(e,n,t){if(n.parents(".api-method-definition").length){var s=a.state.$book.find(".page-wrapper");s.toggleClass("comments-open-from-definition",t&&b.split)}})});
