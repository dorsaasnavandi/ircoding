function typing(id, start , stop) {
    x = document.getElementById(id).innerHTML;
    x.substring(0.10);
    counter = 0;
    end = 0;
    intervalVar = setInterval(function () {
        document.getElementById(id).innerHTML = x.substr(0, counter) + '|';
        if (end == 0) {
            ++counter;
        }
        else {
            --counter;
        }

        if (counter > x.length) {
            setTimeout(function () {
                end = 1;
            },stop)
        }

        else if (counter < 0) {
            end = 0;
        }
    }, start);
}
typing('typemode', 200 , 1000);
function  validateform() {
    y = document.forms["ir-form"]["irname"].value;
    alert(y);

}

