'use strict';
{
    // const name = 'imai';
    // // toUpperCase = 小文字を大文字に変更する。文字列にのみ使用できる。
    // console.log(name.toUpperCase());
    // console.log('finish')

    // プログラムはエラーが発生してしまうと、それ以降の処理が停止してしまう。
    // 開発者が想定していなかった理由で起きるエラーを例外という。
    // 例外が発生しても、処理を止めたくない場合はtyr{}で囲ってあげる

    const name = 3;
    // toUpperCase = 小文字を大文字に変更する。文字列にのみ使用できる。
    // 今回は使用者が誤って文字列に数字を入れてしまった場合
    try {
        console.log(name.toUpperCase());
    // catchは引数を取ることができる
    } catch (e) {
        console.log(e);
    }
    console.log('finish');
}