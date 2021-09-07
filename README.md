# GooglePlay Console の売上レポート（CSV）をアプリと商品ID毎に集計するツール

## About

タイトルでだいたい説明できている

## How to use

### Install


```
git clone https://github.com/suzukiplan/playconsole-report-calc.git
cd playconsole-report-calc
npm install
```

## Execute

node calc レポートcsvのパス

## g.e.

```
node calc ~/Downloads/PlayConsole_200001.csv
{
  'アプリID: 商品ID': { purchased: 売上数（払い戻し数を減算済み）, amount: 合計金額, countries: { JP: 日本の売上数, US: アメリカの売上数, GB: イギリスの売上数... } }
}
```

