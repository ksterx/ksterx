document.getElementById("language-select").addEventListener("change", function (e) {
    if (e.target.value === "ja") {
        // ここに日本語への変換ロジックを追加
    } else {
        // ここに英語への変換ロジックを追加
    }
});

// ここではダミーデータを使用しますが、実際にはAPIからデータを取得します
const newsData = [
    { title: "Article 1", description: "Description for article 1" },
    { title: "Article 2", description: "Description for article 2" }
];

const newsSection = document.getElementById("news-articles");
newsData.forEach(news => {
    const articleDiv = document.createElement("div");
    articleDiv.innerHTML = `<h3>${news.title}</h3><p>${news.description}</p>`;
    newsSection.appendChild(articleDiv);
});

document.addEventListener('DOMContentLoaded', (event) => {
    // タイピングアニメーションのオプション
    const options = {
        stringsElement: '#typed-strings', // アニメーションするテキストを含む要素のID
        typeSpeed: 50, // タイピングの速さ
        backSpeed: 25, // バックスペースの速さ
        backDelay: 1500, // テキストが削除される前の遅延時間
        startDelay: 500, // アニメーション開始までの遅延時間
        loop: true, // アニメーションのループ
        loopCount: Infinity, // ループの回数
        showCursor: true, // カーソル表示の有無
        cursorChar: '|', // カーソルのキャラクター
        autoInsertCss: true, // CSSを自動挿入するかどうか
    };

    // idが'typed'の要素にタイピングアニメーションを適用
    const typed = new Typed('#typed', options);
});
