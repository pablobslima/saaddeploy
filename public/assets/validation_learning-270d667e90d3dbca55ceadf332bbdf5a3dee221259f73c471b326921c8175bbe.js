$(document).ready(function(){$("input").keypress(function(t){t.preventDefault()}),$("input").change(function(){var t=$(this);$(this).parent().siblings().each(function(){$(this).find("input").each(function(){$(this).val()>0,$(this).val()==t.val()&&t.val()>0&&(t.css("border","5px solid red"),t.addClass("borderclass"),$(this).css("border","5px solid red"),$(this).addClass("borderclass"),$(this).parent("div").parent("div").find(".alert").show())})});$(".borderclass").each(function(){var t=$(this);count=0,$(this).parent().siblings().each(function(){$(this).find("input").each(function(){t.val()==$(this).val()&&(count++,alert++)})}),0==count&&(t.removeClass("borderclass"),t.css("border","1px solid #ccc"),$(this).parent("div").parent("div").find(".alert").hide())});var e=0,n=0;$(".form-control").each(function(){$(this).val()>0&&e++}),$(".borderclass").each(function(){n++}),48==e&&0==n&&$("input[type='submit']").removeAttr("disabled")})});