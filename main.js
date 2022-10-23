'use strict';
{
    // クラス名のPostの先頭の文字は慣例的に大文字にする事が多い
    class Post {
        // constructorは引数を取る事がでいる
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }
        show() {
            console.log(`${this.text} - ${this.likeCount}likes`);
        }
        like() {
            this.likeCount++;
            // 同じクラス内のメソッドはthisを使用して呼び正す事ができる
            this.show();
        }

        // 静的メソッド
        // インスタンスを作られず呼び出すため、メソット内にthisは使用できない
        static showInfo() {
            console.log('Post class version 1.0');
        }
    }

    const posts = [
        new Post('JavaScript勉強中'),
        new Post('プログラミング楽しい'),
    ]

    // posts[0].like();
    // posts[0].show();
    // posts[1].show();

    Post.showInfo();
    
}