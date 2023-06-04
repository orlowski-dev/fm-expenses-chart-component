
$(window).ready(function () {
    const currentDay = new Date().getDay();

    $.getJSON('data.json', function (json) {
        for (let i = 0; i < json.length; i++) {
            $(`#bar-${i+1}`).css('height', Math.floor(json[i].amount) * getChartBarMultiply());
            $(`#amount-${i+1}`).text(`$${json[i].amount}`);
            $(`#amount-${i+1} .day`).text(json[i].day);

            if (currentDay == i) {
                $(`#bar-${i}`).addClass('current-day');
            } else {
                $('#bar-7').addClass('current-day');
            }
        }

    });
})

function getChartBarMultiply() {
    if ($(window).width() < 440) {
        return 3;
    }
    return 2;
}
