function onLoad() {
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        var ip = data.split("\n")[2].slice(3);
        $("#ip").html("Your ip is: " + ip);
    })
}