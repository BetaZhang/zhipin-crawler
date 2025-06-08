# zhipin-crawler

基于 Puppeteer 实现的 BOSS 直聘爬虫程序。2025 年 6 月可用。

## 安装与启动

在开始之前，你可能需要安装 [`Nodejs`](https://nodejs.org/en/download) 。

1. 安装项目依赖。

``` bash
npm install
```

2. 启动项目。

``` bash
npm start
```

## 常见问题

1. 程序会爬取哪些信息？

爬取的职位信息数据结构：

``` json
{
  "url": "...", // 职位详情页 URL。
  "name": "...", // 职位名称。
  "city": "...", // 职位所在城市。
  "district": "...", // 职位所在区域。
  "location": "...", // 职位所在位置。
  "salary": "...", // 职位薪资。
  "experience": "...", // 职位工作经验要求。
  "degree": "...", // 职位学历。
  "tags": [ // 职位标签。
    "..."
  ],
  "contact": { // 联系人相关信息。
    "name": "...", // 联系人姓名。
    "title": "..." // 联系人职位。
  },
  "company": { // 公司相关信息。
    "url": "...", // 公司详情页 URL。
    "avatar": "...", // 公司头像 URL。
    "name": "...", // 公司名称。
    "industry": "...", // 公司所在行业。
    "scale": "...", // 公司规模。
    "stage": "", // 公司融资阶段。
    "benefits": [ // 公司福利待遇。
      "..."
    ]
  }
}
```

2. 程序每次运行会爬取多少条数据？

程序每次运行会爬取约 300 条数据。

3. 程序每次运行耗时多久？

程序每次运行大概耗时五分钟，请耐心等待。

4. 如何修改爬虫配置？

修改 `src/configs/queries.js` 文件。

``` javascript
export const city = "北京"; // 城市，查看 `src/constants/cities.js` 文件以获得更多选项。
export const degree = "本科"; // 学历要求，查看 `src/constants/degrees.js` 文件以获得更多选项。
export const experience = "1-3年"; // 工作经验，查看 `src/constants/experience.js` 文件以获得更多选项。
export const query = "Nodejs"; // 搜索关键字
export const salary = "不限"; // 薪资要求，查看 `src/constants/salaries.js` 文件以获得更多选项。
export const scale = "100-499人"; // 公司规模，查看 `src/constants/scales.js` 文件以获得更多选项。
export const stage = "不限"; // 融资阶段，查看 `src/constants/stages.js` 文件以获得更多选项。
```

5. 如何查看输出结果？

查看 `dist/jobs.json` 文件。程序运行时会在 `dist/jobs.json` 文件中已有的职位信息的基础上添加新的职位信息，并且不会保存重复的职位信息。请不要随便修改 `dist/jobs.json` 文件，以免数据读取时出错。

