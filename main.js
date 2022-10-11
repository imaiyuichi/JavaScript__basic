'use strict';
{
    // join()
    // 複数の文字列に対して、結合して"/"をつける
    const d = [2019, 11 , 14];
    console.log(d.join('/'));
    console.log(d.join(''));

    // split()
    // 文字列を分割する
    const t = '17:08:24';
    console.log(t.split(':'));

    // 分割代入を使用し、返り値を別々の定数に代入する
    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);
}