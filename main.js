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
            console.log(`${this.text} - ${this.likeCount}いいね`);
        }
    }

    const posts = [
        new Post('JavaScript勉強中'),
        new Post('プログラミング楽しい'),
    ]
    posts[0].show();
    posts[1].show();
    
}