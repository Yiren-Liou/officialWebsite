# THE F2E 2023 - Mission 1 立委競選官網
###### ` vue ` / ` vite ` / ` bootstrap `

2023 年 F2E 比賽的第一關挑戰：立委競選官網。 

![Cover](https://i.imgur.com/oF4T6ns.png)

## Live link
- [2023 The F2E 立委競選官網](https://yiren-liou.github.io/officialWebsite/)

## Built with
- [vue](https://vuejs.org/)
- [vite](https://vitejs.dev/)
- [bootstrap](https://getbootstrap.com/)
- [Swiper](https://swiperjs.com/)
- [aos](https://michalsnik.github.io/aos/)
- [Counter-Up2](https://github.com/bfintal/Counter-Up2)

## Screenshot
#### Desktop
![Cover](https://i.imgur.com/WtLchie.jpg)

<br>

#### Mobile
![Cover](https://i.imgur.com/Fkg3aSK.jpg)

## Getting Started
Install the project

```bash
$ npm install
or
$ yarn install
```

Run the project

```bash
$ npm run dev
# or
$ yarn dev
```
如果您需要更多詳細資訊，請參考專案的 package.json。

## File structure
<details>
<summary>Click to open file structure</summary>

```
├── node_modules
├── public
├── src
│   ├── assets
│   │     ├── data
│   │     └──  images
│   │     
│   ├── components
│   │     ├── card
│   │     │   ├── HorizontalCard.vue
│   │     │   ├── TextCard.vue
│   │     │   └── VerticalCard.vue
│   │     │
│   │     ├── layout
│   │     │   ├── Footer.vue
│   │     │   └── Navbar.vue
│   │     │
│   │     ├── lightbox
│   │     │   └── ServiceMail.vue
│   │     │
│   │     └──  swiper
│   │        └── NewActivity.vue
│   │
│   ├── css
│   │     ├── components
│   │     │   ├── _button.module.scss
│   │     │   ├── _font.module.scss
│   │     │   └── _img.module.scss
│   │     │
│   │     ├── helpers
│   │     │   ├── _animation.module.scss
│   │     │   ├── _base.module.scss
│   │     │   ├── _font.module.scss
│   │     │   └── _variables.module.scss
│   │     │
│   │     └── style.scss
│   │         
│   ├── methods
│   │     ├── emitter.js
│   │     └── getImageUrl.js
│   │
│   ├── views
│   │     ├── Donate.vue
│   │     ├── NewActivity.vue
│   │     ├── Opinions.vue
│   │     ├── Policy.vue
│   │     └── ServiceMail.vue
│   │
│   ├── App.vue
│   ├── main.js
│   └── index.css
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```
</details>

## Acknowledgments
- [2023 THE F2E Organizer](https://2023.thef2e.com/news)
- [Design by Una](<https://www.figma.com/file/GDvhrmKAtFgcHe5aVjBci0/2023TheF2E-%E7%AC%AC%E4%B8%80%E9%9A%8E%E6%AE%B5-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2(UNA)?type=design&node-id=0-1&mode=design>)