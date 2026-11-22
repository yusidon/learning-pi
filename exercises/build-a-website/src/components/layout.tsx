import type { FC, PropsWithChildren } from 'hono/jsx'
import { site } from '../site'

/** 中文优先的字体栈，挂在 body 上（不用 <style> 标签，避免 innerHTML）。 */
const CJK_FONT_STACK =
  'font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif;'

const nav = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于本站' }
]

export const Layout: FC<PropsWithChildren<{ title?: string; description?: string }>> = ({
  title,
  description,
  children
}) => {
  const pageTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`

  return (
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={description ?? site.description} />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        class="min-h-screen bg-slate-950 text-slate-200 antialiased"
        style={CJK_FONT_STACK}
      >
        <Header />
        <main class="mx-auto max-w-5xl px-6 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

const Header: FC = () => (
  <header class="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
    <a href="/" class="group flex items-baseline gap-2">
      <span class="text-lg font-semibold text-slate-100 group-hover:text-sky-400">{site.name}</span>
      <span class="text-xs uppercase tracking-widest text-slate-600">{site.latin}</span>
    </a>
    <nav class="flex gap-6 text-sm text-slate-400">
      {nav.map((item) => (
        <a href={item.href} class="transition hover:text-sky-400">
          {item.label}
        </a>
      ))}
    </nav>
  </header>
)

const Footer: FC = () => (
  <footer class="border-t border-slate-900">
    <div class="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>内容译自各家官网，观点和著作权归原作者。翻译难免有偏差，欢迎指正。</p>
      <a href={site.github} class="transition hover:text-sky-400">
        {site.author} · GitHub
      </a>
    </div>
  </footer>
)

export const Badge: FC<PropsWithChildren<{ tone?: 'sky' | 'slate' }>> = ({
  tone = 'slate',
  children
}) => {
  const cls =
    tone === 'sky'
      ? 'border-sky-400/30 bg-sky-400/10 text-sky-300'
      : 'border-slate-700 bg-slate-800/50 text-slate-400'
  return (
    <span class={`rounded-full border px-2.5 py-0.5 text-xs whitespace-nowrap ${cls}`}>
      {children}
    </span>
  )
}
