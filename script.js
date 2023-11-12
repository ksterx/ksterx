document.addEventListener('DOMContentLoaded', function () {
    // ここにJavaScriptコードを書く
});

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
