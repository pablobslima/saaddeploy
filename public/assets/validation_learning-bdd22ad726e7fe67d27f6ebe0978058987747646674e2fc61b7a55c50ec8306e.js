$(document).ready(function(){$("input").keypress(function(e){e.preventDefault()}),$("input").change(function(){var e=$(this);$(this).parent().siblings().each(function(){$(this).find("input").each(function(){$(this).val()>0,$(this).val()==e.val()&&e.val()>0&&(e.css("border","5px solid red"),e.addClass("borderclass"),$(this).css("border","5px solid red"),$(this).addClass("borderclass"),$(this).parent("div").parent("div").find(".alert").show())})});$(".borderclass").each(function(){var e=$(this);count=0,$(this).parent().siblings().each(function(){$(this).find("input").each(function(){e.val()==$(this).val()&&(count++,alert++)})}),0==count&&(e.removeClass("borderclass"),e.css("border","1px solid #ccc"),$(this).parent("div").parent("div").find(".alert").hide())});var t=0,n=0;$(".form-control").each(function(){$(this).val()>0&&t++}),$(".borderclass").each(function(){n++}),48==t&&0==n&&$("input[type='submit']").removeAttr("disabled")})});