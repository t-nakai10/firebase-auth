# firebase × 認証 × react

## firebase 側

### 認証を追加する

- firebase の設定 > web > Authentication
- google 等様々な認証が追加できる

## React 側

- firebase.js ファイルに実装.
- Home コンポーネント内で使用している.

## エラー

- ログインを押すとエラーが出力された。

### メッセージ内容

- `Uncaught (in promise) FirebaseError: Firebase: Error (auth/api-key-not-valid.-please-pass-a-valid-api-key.).`
  - 認証キーが参照されてない

### 修正方法

- .env ファイルを作成
  - .env.local ファイルだけ作成してしまっていた
