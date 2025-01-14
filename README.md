# カレンダー仕様等

React 開発の学習のために作ったカレンダーアプリ。

## URL

https://famc-git-main-rikitoishizus-projects.vercel.app/

## 仕様ライブラリ

TypeScript ver 5.7.3<br/>
react-modal ver 3.16.3<br/>
dayjs ver 1.11.13<br/>
tailwindcss ver 3.4.17<br/>
prettier ver 3.4.2<br/>

## ページ

PC で使う想定のため、SP のデザインはあまり対応していない。

### カレンダーページ

◯ ページを開くと、当月のカレンダーが表示される。  
○ 当月の前後の月の日にちを取得して、全部で 35 日分表示される。  
○ カレンダーを 1 ヶ月ずつ変更できるボタンがある.  
◯ 当月じゃない場合、カレンダーをリセットできる。(当月の場合はこのボタンを表示しない)  
◯ 数ヶ月以上とばしてカレンダーを見たい場合のために、select タグで年月を選択できる。年は前後 10 年、月は 12 ヶ月を選択することが可能。  
◯ 日付をクリックすると、その日の予定が見れる。

##### 祝日を表示

日付が決まっているものと成人の日や母の日など、週と曜日が決まっていて日付がずれる祝日も該当の日に表示されるようにしている。

##### 祝日ではない特別な日も表示している

クリスマスやハロウィン、日本のひな祭りや節分、元日などの何かしら名称がついている日は表示している。  
ただし、日付が定まっていないものは除く。
