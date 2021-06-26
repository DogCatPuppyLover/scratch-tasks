setInterval(title, 5000);
function title() {
    $.getJSON("https://api.scratch.mit.edu/studios/29963772/comments/", function(data) {
        $.ajax({
            type: "PUT",
            url: "https://scratch.mit.edu/site-api/galleries/all/5842709/",
            data: JSON.stringify({"title":"♥️ LGBTQ+ ♥️ " + data[0].content}) 
        });
        console.log("♥️ LGBTQ+ ♥️ " + data[0].content);
    });
}
