# GitHub Pages 发布说明

这个目录中的静态文件可以直接发布到 GitHub Pages：

```text
index.html
styles.css
app.js
.nojekyll
```

## 使用 GitHub 网页发布

1. 在 GitHub 新建一个仓库。
2. 把 `resource-hub-github-pages.zip` 解压到仓库根目录。
3. 提交所有文件到 `main` 分支。
4. 打开仓库的 `Settings` -> `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. 分支选择 `main`，目录选择 `/ (root)`，然后保存。
7. 等待发布完成后访问 `https://用户名.github.io/仓库名/`。

GitHub Pages 只能托管静态页面。资源会在访问者自己的浏览器中保存，不能在不同访客之间共享。如果需要共享上传，需要接入 Supabase 或其他后端存储。
