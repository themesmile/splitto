

        $(document).ready(function() {
            var slider = $("#slider").kendoSlider({
                increaseButtonTitle: "Right",
                decreaseButtonTitle: "Left",
                min: -10,
                max: 10,
                smallStep: 2,
                largeStep: 1
            }).data("kendoSlider");

            $(".eqSlider").kendoSlider({
                orientation: "vertical",
                min: -20,
                max: 20,
                smallStep: 1,
                largeStep: 20,
                showButtons: false
            });
        });
