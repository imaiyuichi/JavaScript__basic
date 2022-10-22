'use strict';
{
    // function showTime() {
    //     console.log(new Date());
    // }

    // // setTimeout = 指定した時間が経過後に一度だけ処理を実行する
    // setTimeout(showTime, 1000);

    // ↓setTimeoutを使用して繰り返し処理をしたい場合
    // 関数の中で、setTimeoutを実行する

    // function showTime() {
    //     console.log(new Date());
    //     // setTimeout = 指定した時間が経過後に一度だけ処理を実行する
    //     setTimeout(showTime, 1000);
    // }
    // showTime();

    // 繰り返し処理を、指定の回数の後止める方法

    let i = 0;

    function showTime() {
        console.log(new Date());
        // setTimeout = 指定した時間が経過後に一度だけ処理を実行する
        const setTimeoutId = setTimeout(showTime, 1000);
        i ++;
        if (i > 2) {
            clearTimeout(setTimeoutId);
        }
    }
    showTime();
}