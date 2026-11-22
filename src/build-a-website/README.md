# 我喜欢的技能

把一线工程师每天在用的 agent skills 整理成中文的个人站点。Hono + JSX,部署在 Cloudflare Workers。

- 线上地址:https://my-favorite-skills.yusidon.workers.dev
- 本地目录:`src/build-a-website/`
- 技能源:`src/data/sources.ts`

## 命令

```bash
npm run dev      # 本地开发,http://localhost:8787
npm run deploy   # 部署到 Cloudflare Workers
```

## 目录结构

```text
src/
  index.tsx              # 路由
  site.ts                # 站名、tagline、作者等站点级文案
  types.ts               # Source / Skill 类型
  data/sources.ts        # 所有内容:技能源 + 技能条目
  components/layout.tsx  # 页面骨架、页头、页脚、Badge
  pages.tsx              # 首页、技能源详情页、关于页、404
```

## 加一个技能

在 `src/data/sources.ts` 里对应技能源的 `skills` 数组追加一条:

```ts
{
  slug: 'upstream-slug',   // 上游仓库里的名字,同时是页面锚点
  name: '/xxx 中文名',
  phase: '实现',            // 可选,用于分组标签
  when: '什么时候用它。',
  note: '我自己的理解,可选。'
}
```

想加一整套新的技能源,往 `sources` 数组里加一个 `Source` 对象即可,首页卡片和详情页会自动出现。

## 约定

- 页面文案全中文,安装命令、链接、专有名词保持原文。
- 译文以准确为先,不做营销化改写;版权归原作者。
