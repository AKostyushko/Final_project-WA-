    $(function() {
        let button = document.getElementsByClassName("leftSectionNavigation");
        for (let i = 0; i < button.length; i++) {
            let li = button[i];
                li.addEventListener("click", function () { //delete TEST
                alert("clicked");
            });
            li.onmouseover = function () {
                this.style.left = "-20%";
            };
            li.onmouseout = function () {
                this.style.left = "-130%";
            };
            let att = li.textContent; // добавляем Тайтл для дублирования в псевдоэлемент
            li.setAttribute("title", att);
        }

        $('.leftSectionNavigation').hover(function() {
            $(this).addClass('Special')
        }, function() {
            $(this).removeClass('Special')
        });

        $('.goods1').on("click", function (event) {
            let target = event.target;
            let $cont = $(target.parentNode.getElementsByClassName("goodsElements"));
            $cont.toggle(400);
            $("#mainGallery").css("height", "800px");
        });
            /**let $x = $('.goodsElements').css("visibility");
            alert($x);

                $('.goods1').on("click", function (event) {
                    let target = event.target;
                    let $cont = $(target.parentNode.getElementsByClassName("goodsElements"));

                        $cont.show("").css("visibility", "visible");


                    if ($x == "visible") {
                        $cont.show("").css("visibility", "hidden");
                    }
                });**/

   });




