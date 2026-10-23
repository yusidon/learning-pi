# learning-pi

Pi School 课程学习仓库，学生 ID `scrappy-operator-6313`。

## Pi School

入口 `https://pi-school.ziki.boo/llms.txt`（含 API 契约与每个 lesson 的 `agentInstructions`），按其中的方式用 `bash` + `curl` 调用；完整 schema 在 `https://pi-school.ziki.boo/api/openapi.json`。

## 本机环境

回答用中文。

远程仓库一律走 SSH：`git@github.com:<owner>/<repo>.git`，验证 `ssh -T git@github.com`（`~/.ssh/config` 把 `github.com` 指向 `ssh.github.com:443`）。没有 `gh` CLI，也没有 GitHub token，建 issue / PR 的做法是生成预填 URL 交给用户点开提交。

`python3` 被 kysec 拦截（`Fatal Python error: config_parse_cmdline: Permission denied by kysec`），脚本与数据处理用 `node`。

解析 JSON 响应先落盘再解析：

```bash
curl -sL <url> -o /tmp/r.json && node -e 'const d=require("/tmp/r.json");console.log(JSON.stringify(d,null,1))'
```

## 学生偏好

常用语言：Java、JavaScript/TypeScript、Python、Go。终端熟练，偏好「先看示例 → 再讲原理 → 最后动手」，由简入深、可多轮深入。
