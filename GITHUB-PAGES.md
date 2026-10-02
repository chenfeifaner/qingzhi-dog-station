# GitHub Pages 发布说明

这个目录中的静态文件可以直接发布到 GitHub Pages：

```text
index.html
styles.css
app-shared.js
assets/qingque-bg.jpg
favicon.svg
.nojekyll
```

背景素材来源：Alpha Coders（Qingque Honkai: Star Rail Wallpaper）。

## 使用 GitHub 网页发布

1. 在 GitHub 新建一个仓库。
2. 把 `resource-hub-github-pages.zip` 解压到仓库根目录。
3. 提交所有文件到 `main` 分支。
4. 打开仓库的 `Settings` -> `Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. 分支选择 `main`，目录选择 `/ (root)`，然后保存。
7. 等待发布完成后访问 `https://用户名.github.io/仓库名/`。

页面连接共享资源库后，所有访客会看到同一份资源列表。连接中断时产生的临时文件只保存在当前浏览器，连接恢复后会自动继续上传。

## 共享存储

在 Supabase 的 SQL Editor 中执行 `supabase-setup.sql`。页面会自动检测 `resource_items` 数据表与 `resource-files` 存储桶；配置成功后，所有访客会读取同一份云端资源列表。

管理员模式的默认密码是 `我是青雀大人的狗`。访客只能上传和下载，管理员可以预览、编辑、批量选择和删除。

上传中会对文档、代码和超过 100 MB 的文件尝试无损 Gzip 压缩，并在下载时恢复原文件。仓库中的 `Supabase Keep Alive` 工作流每 6 小时访问一次数据库，降低项目因长期不活跃而暂停的风险。

访客上传时可以填写文件名称，留空则使用原文件名。超过 100 MB 的文件会按 45 MB 分片上传；上传前先保存临时副本，上传完成后自动清理。下载时会自动合并分片并恢复原文件。
