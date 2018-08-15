$(function() {
    let $submt = $(".submit");
    $submt.click(function() {
        let $name = $(".userName").val();
        if ($name == "admin") {
            alert("Hi, Admin! How are you?");
        }
        else if ($name === "") {
            alert("Введите имя пользователя");
        }
        else {
            alert("Hi, " + $name);
        }

    });

});