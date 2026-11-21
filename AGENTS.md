# learning-pi

Pi School 课程学习仓库，学生 ID `scrappy-operator-6313`。

## Pi School

入口 `https://pi-school.ziki.boo/llms.txt`（含 API 契约与每个 lesson 的 `agentInstructions`），按其中的方式用 `bash` + `curl` 调用；完整 schema 在 `https://pi-school.ziki.boo/api/openapi.json`。

## 本机环境

回答用中文。

远程仓库走 HTTPS（`origin` = `https://github.com/yusidon/learning-pi.git`）；本机没有 `~/.ssh`，SSH 不可用。

`gh` CLI 由 mise 管理（全局 `~/.config/mise/config.toml` 里的 `gh 2.105.0`），已登录 `yusidon`（token 带 `repo` scope）。mise 只在 `~/.bashrc` 里 activate，**非交互 bash 的 PATH 里没有 `gh`**，所以 agent 里要显式调用：

```bash
GH=~/.local/share/mise/shims/gh   # 或 mise x -- gh
$GH issue create --title "..." --body "..."
```

装新工具一律先用 `mise use -g <tool>`，不要往 `~/.local/bin` 里塞 tarball（会与 mise 重复）。

`python3` 被 kysec 拦截（`Fatal Python error: config_parse_cmdline: Permission denied by kysec`），脚本与数据处理用 `node`。

解析 JSON 响应先落盘再解析：

```bash
curl -sL <url> -o /tmp/r.json && node -e 'const d=require("/tmp/r.json");console.log(JSON.stringify(d,null,1))'
```

## 学生偏好

常用语言：Java、JavaScript/TypeScript、Python、Go。终端熟练，偏好「先看示例 → 再讲原理 → 最后动手」，由简入深、可多轮深入。

## Agent skills

### Issue tracker

Issues live as GitHub issues on `yusidon/learning-pi`, driven by the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage roles, label strings equal to their names (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
