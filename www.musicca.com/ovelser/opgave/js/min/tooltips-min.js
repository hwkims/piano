var MusikipediaTooltips=function(){"use strict";function t(t){var i;for(i=0;i<e.length;i++)if(t.target==e[i].element){null!==e[i].stickytip&&(e[i].stickytipVisesNu?(e[i].opentip.activate(),e[i].opentip.hide(),e[i].stickytip.hide(),e[i].stickytipVisesNu=!1):(e[i].opentip.hide(),e[i].opentip.deactivate(),e[i].stickytip.show(),e[i].stickytipVisesNu=!0));break}}function i(t){var i;for(i=0;i<e.length;i++)t.target!=e[i].element&&(null!==e[i].stickytip&&(e[i].opentip.activate(),e[i].stickytip.hide(),e[i].stickytipVisesNu=!1),e[i].opentip.hide())}var e;return{initialisering:function(){e=[],window.addEventListener("load",function(){document.addEventListener("mousedown",i),document.addEventListener("touchstart",i)})},oprettetTip:function(i){var n,s;return i.sticky=void 0!==i.sticky&&i.sticky,s={element:i.element,stickytipVisesNu:!1},n={background:"#FFFFFF",borderColor:"#EBEBEB"},s.opentip=new Opentip(i.element,i.tekst,n),i.sticky?(n.showOn=null,n.hideOn=["click"],s.stickytip=new Opentip(i.element,i.tekst,n),i.element.addEventListener("click",t,s)):s.stickytip=null,e.push(s),s.opentip},skjulAlleTips:function(){var t;for(t=0;t<e.length;t++)null!==e[t].stickytip&&(e[t].opentip.activate(),e[t].stickytip.hide(),e[t].stickytipVisesNu=!1),e[t].opentip.hide()}}}();