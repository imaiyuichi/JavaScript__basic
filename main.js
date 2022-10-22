'use strict';
{
    // alert('hello') //OKボタンのみ
    const answer = confirm('削除しますか')  //OK、キャンセル両方が表示される

    // OK = true
    // キャンセル = false

    if(answer) {
        console.log('削除しました');
    } else {
        console.log('キャンセルしました');
    }
}