'use strict';
{
    // let x = 1;
    // let y = x;
    // x = 5;
    // console.log(x);  //1
    // console.log(y);  //5

    // let x = [1, 2];
    // let y = x;
    // x[0] = 5;
    // console.log(x);  //5,2
    // console.log(y);  //5,2

    // 配列を書き換えた場合は、配列の場所を記憶し探しにいく。
    // そのため、xの配列を書き換えると、yはxの場所を探しxの値を出力する。

    // スプレット演算子
    // 配列として記憶させたい場合はスプレット演算子を使う。
    let x = [1, 2];
    let y = [...x];
    x[0] = 5;
    console.log(x);  //5,2
    console.log(y);  //1,2
}