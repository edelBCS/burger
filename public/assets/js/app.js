$(function(){
    $("#burgerAddBtn").on("click", e => {
        e.preventDefault();
        console.log($("#burgerAddName").val())
        $.post("/api/add/" + $("#burgerAddName").val(), (data, status) => {
            console.log("Burger Created...\nData: " + data + "\nStatus: " + status)
            $("#burgerAddName").text("");
        }).then(function(){
            console.log("New Burger Created");
            location.reload();
        });
    });

    $(".devourBtn").on("click", e => {
        e.preventDefault();
        
    });
});