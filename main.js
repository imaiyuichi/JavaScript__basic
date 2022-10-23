'use strict';
{
    function upDate() {
        // document.querySelector('h1').textContent = 'changed!';
        document.getElementById('target').textContent = '変更';
    }
    setTimeout(upDate, 1000);
}