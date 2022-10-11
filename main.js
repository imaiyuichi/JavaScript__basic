'use strict';
{
    const scores = [10, 6, 8];

    let sum = 0;

    // forEachを使用し、scoresの配列ないを計算する
    scores.forEach(score => {
        sum += score;
    });
    
    // length = 文字数
    const avg = sum / scores.length;
    console.log(sum);
    console.log(avg);
}