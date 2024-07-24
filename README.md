# Main domain 301

## 介绍

访问 `huashuiai.com` 主域名，会指向这个程序。这个程序会 301 重定向到 `www.huashuiai.com` 二级域名。保证项目域名的统一。

由于使用阿里云 FC 没有像 nginx 一样的转发功能，所以只能通过 nodejs 代码完成这部分操作。

## 部署到阿里云 FC

然后在代码包的根目录下执行 `zip -rq -y code.zip ./` 命令进行打包，
最后上传到阿里云函数 https://fcnext.console.aliyun.com/cn-hongkong/functions
