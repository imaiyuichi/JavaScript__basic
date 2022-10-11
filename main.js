'use strict';
{
    // lengthを使用すると、文字数を取得する
    const str = 'hello';
    console.log(str.length);

    // 指定した場所の文字列を取得する。
    // atr.substring(開始位置,終了位置)
    console.log(str.substring(2,4));

    // 配列のように記述する事で、個々の文字に対してアクセルする事ができる。
    // ただ値の取得をしている訳ではないので、forEach()など使える訳ではない。
    console.log(str[1]);
}