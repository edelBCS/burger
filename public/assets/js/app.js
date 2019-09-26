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

    $(".devourBtn").click(e => {
        //e.preventDefault();
        var id = $(e.currentTarget).data("id");
        console.log(id)
        $.ajax("/api/update/" + id, 
            {
                type: "PUT",
                data: {
                    col: "devoured",
                    val: 1
                }            
            }
        ).then(function(){
            console.log("Burger ID" + id + " has been devoured!");
            location.reload();
        });
    });
});