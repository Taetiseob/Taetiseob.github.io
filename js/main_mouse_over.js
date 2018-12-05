var beforeMenu = null;

        $(function() {
            $(".nav>li").on("mouseover focus", function() {
                if (beforeMenu) beforeMenu.css({
                    background: "none"
                });
                $(this).css({
                    "background-color": "#becbdb",
                    "color":"#becbdb"
                    });
                beforeMenu = $(this);
            });
            $(".nav").on("mouseleave", function() {
                if (beforeMenu) beforeMenu.css({
                    background: "none"
                });
            });
        });
