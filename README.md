# Project name：3cm 短網址轉換器

- 此專案創造隨機的短網址，轉換到想要去的網頁中

# Features：功能列表

- 產生短網址

- 點擊短網址．可以轉換到對應的網站

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)
[Mongodb](https://www.mongodb.com/)
[Heroku](https://dashboard.heroku.com/)

# Installing Procedure：專案安裝

1.開啟終端機，新建資料夾後，並 cd 到預計要儲存的專案位置，執行：

```
mkdir url_shortener //建立專案資料夾
```

```
cd url_shortener //切換到專案資料夾
```

```
git clone https://github.com/DennisWei9898/url_shortener
```

2.安裝套件和種子資料：

```
npm install //安裝 npm 套件
```

```
npm run seed //安裝種子資料
```

3.啟動伺服器，執行 app.js 檔案

```
npm run dev //成功啟動後，終端機會顯示：This server is running on http://localhost:3000
            //mongodb connected!
```

4.打開網址，體驗短網址服務

> 進入本地網址來體驗短網址服務： [http://localhost:3000/](https://)
> 或是可以到自行部署的 heroku 網站上體驗服務，但部署上去後，請記得將.env 中的 heroku 網站，轉換成新的 heroku 連結

# 作業過程

- 這次使用 clipboard 和 dotenv 的套件，來達到一鍵複製，以及透過增加額外的環境變數，來達到短網址轉換的效果
- 每次部署 heroku 時，發現常常伺服器連線錯誤的原因，是因為 mongodb 連線問題，這次在 mongodb atlas 的 project 用全英文命名後，就可以解決這個 bug;似乎盡量少用特殊符號，用英文或數字來表示比較不容易出錯
