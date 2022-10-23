'use strict';
{
    const post = [
        {
            text: 'JavaScriptの勉強中・・・',
            likeCount: 0,
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`);
            }  
        },
        {
            text:'プログラミング楽しい',
            likeCount: 0,
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`);
            }  
        },
    ];
    post[0].show();
    post[1].show();
}