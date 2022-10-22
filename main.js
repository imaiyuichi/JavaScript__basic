'use strict';
{

    let i = 0;

    function showTime() {
        // 今の日付をコンソールで表示
        console.log(new Date());
        // 今日の日付がコンソールをされるたびに、iに1を追加
        i ++;

        if( i > 2) {
            // clearInterval = setIntervalの処理を中止する
            clearInterval(setIntervalID);
        }
    }

    // setInterval = 引数によって設定された時間毎に処理を実行する
    const setIntervalID = setInterval(showTime, 1000);
}