!function(t){function e(t){return"object"==typeof t?t:{top:t,left:t}}var n=t.scrollTo=function(e,n,i){t(window).scrollTo(e,n,i)};n.defaults={axis:"xy",duration:parseFloat(t.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(){return t(window)._scrollable()},t.fn._scrollable=function(){return this.map(function(){var e=this,n=!e.nodeName||t.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return e;var i=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==i.compatMode?i.body:i.documentElement})},t.fn.scrollTo=function(i,o,r){return"object"==typeof o&&(r=o,o=0),"function"==typeof r&&(r={onAfter:r}),"max"==i&&(i=9e9),r=t.extend({},n.defaults,r),o=o||r.duration,r.queue=r.queue&&r.axis.length>1,r.queue&&(o/=2),r.offset=e(r.offset),r.over=e(r.over),this._scrollable().each(function(){function s(t){c.animate(p,o,r.easing,t&&function(){t.call(this,u,r)})}if(null!=i){var a,l=this,c=t(l),u=i,p={},f=c.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)){u=e(u);break}if(u=t(u,this),!u.length)return;case"object":(u.is||u.style)&&(a=(u=t(u)).offset())}t.each(r.axis.split(""),function(t,e){var i="x"==e?"Left":"Top",o=i.toLowerCase(),d="scroll"+i,h=l[d],g=n.max(l,e);if(a)p[d]=a[o]+(f?0:h-c.offset()[o]),r.margin&&(p[d]-=parseInt(u.css("margin"+i))||0,p[d]-=parseInt(u.css("border"+i+"Width"))||0),p[d]+=r.offset[o]||0,r.over[o]&&(p[d]+=u["x"==e?"width":"height"]()*r.over[o]);else{var v=u[o];p[d]=v.slice&&"%"==v.slice(-1)?parseFloat(v)/100*g:v}r.limit&&/^\d+$/.test(p[d])&&(p[d]=p[d]<=0?0:Math.min(p[d],g)),!t&&r.queue&&(h!=p[d]&&s(r.onAfterFirst),delete p[d])}),s(r.onAfter)}}).end()},n.max=function(e,n){var i="x"==n?"Width":"Height",o="scroll"+i;if(!t(e).is("html,body"))return e[o]-t(e)[i.toLowerCase()]();var r="client"+i,s=e.ownerDocument.documentElement,a=e.ownerDocument.body;return Math.max(s[o],a[o])-Math.min(s[r],a[r])}}(jQuery);