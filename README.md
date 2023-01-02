# 初始化依赖

执行：`pnpm i` 初始化依赖。

# .npmrc

[文档地址](https://pnpm.io/zh/npmrc)

# workspace

[文档地址](https://pnpm.io/zh/workspaces)

# pnpm 相关命令

## -w 命令

在工作空间的根目录中启动 pnpm ，而不是当前的工作目录。（全局安装，下面各项目直接可以调用总包），如：

https://pnpm.io/zh/pnpm-cli

`pnpm -w add typescript -D`

## --filter

[文档地址](https://pnpm.io/zh/filtering)

给指定的应用安装 axios 包我们可以使用 `--filter` 或 `-F`（别名）：`pnpm add axios --filter @yzapp/web`

同样运行命令也是，比如我们想要启动 `@yzapp/web` 这个项目：`pnpm --filter @yzapp/web run dev`
