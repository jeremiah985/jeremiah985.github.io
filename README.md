# jeremiah985.github.io

# 记录自己第一次的网站搭建过程

## 首先选择的模式是借助github来搭建网站
- 在github上创建一个新的仓库，这个仓库的名称是"jeremiahcn985.github.io"这个就是你访问的自己网站的网址[网站](https://jeremiah985.github.io/)
- 下载git工具：因为我们想要使用git命令
- 把仓库克隆到本地
~~~ bash
git clone https://github.com/jeremiah985/jeremiah985.github.io
~~~
- 建立网站的文件，比如index.html，styles-style.css等文件来构建我们网站的基本框架 
- 
- 提交并推送更改 
~~~ bash
1. git add . 把文件提交到缓冲区
2. git commit-m "这里是提交文件的描述"
3. git push origin main 推送到github
~~~ 

## 出现的bug以及解决方法
- fatal: unable to access 解决方法：断掉校园网链接个人热点
- 无法更新成功，包括图片和文字，但是本地显示已经push成功 
- 解决方法：可能是因为把images中的文件全部上传了，但是我们的文件缓冲区又没有这么大，所以上传失败了。删除掉一些大的图片文件就好了，也给个提示，不要在工程文件夹或者说必要文件夹中上传不必要的文件

## 网站更新维护记录：
2024/7/17
- 添加网站描述和个人介绍
- 上传头像
- 上传背景
- 添加自己的的github图片链接
- 更改网站<head>图标
- 添加子网站jeremiah985.github.io/pictures.jeremiah985.github.io/
2024/8/22
- 添加了音乐播放器
- 更新了ssh密钥
- 尝试使用vscode来进行网站更新，可能是网络原因导致报错
