# new_YT-ad-remover
YouTubeの広告の除去を行うChrome拡張です。旧版の不具合の解消と、古い仕様の改変を行っています。

# インストール
1. zipファイルをダウンロード（右上の緑色の"↓Code"ボタンをクリック）し、ローカル環境で解凍。
2. Chrome拡張に移動。
> * `chrome://extensions/`
> * ![safgshdjf (2)](https://user-images.githubusercontent.com/49482246/84563612-c54c4b80-ad97-11ea-9559-584dcc268f4f.png) `(config)` > `その他のツール` > `拡張機能`
3. `デベロッパー モード`を有効化(ページ右上のトグルをクリック)。
4. `パッケージ化されていない拡張機能を読み込む`をクリックし、以下のファイルを選択。

```
new_YT-ad-remover-master
└── new_YT-ad-remover-master <-これ!
    ├── assets
    │   ├── y_128.png
    │   ├── y_48.png
    │   └── y_16.png
    ├── js
    │   ├── loader.js
    │   └── remover.js
    ├── .gitignore
    ├── README.md
    └── manifest.json
```
