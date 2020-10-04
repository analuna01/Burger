// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newBurger");

        var newBurgerState = { 
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState,
        }).then(function () {
                console.log("changed devoured burger", newBurger);
                // Reload the page to get the updated list
                location.reload();
            });
    });
});

$(function(){
    $(".create-form").on("submit", function (event) {
        // PreventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
            // devoured: $("[name = devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger,
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

    // $(".delete").on('click', function() {
    //   const burgerId = $(this).data('id');
    //   $.ajax(`/api/burgers/${burgerId}`, {
    //     type: 'DELETE'
    //   })
    //   .then(function() {
    //     console.log(`Deleted burgers with ID: ${burgerId}`);
    //     location.reload();
    //   })
    // });

