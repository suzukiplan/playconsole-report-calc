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

```
node calc レポートcsvのパス
```

## g.e.

```
node calc ~/Downloads/PlayConsole_200001.csv
{
  'アプリID: 商品iD': { purchased: 数量, amount: 金額, countries: { 国名: 数量 } }
}
```

- purchased: 売上数量（払い戻しを減算済み）
- amount: 為替レート反映済みの売上金額 (Google手数料を減算済み)
- countries: 各国の売上数量

