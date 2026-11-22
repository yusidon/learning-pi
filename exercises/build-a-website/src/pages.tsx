import type { FC } from 'hono/jsx'
import { Badge, Layout } from './components/layout'
import { findSource, sources, totalSkills } from './data/sources'
import { site } from './site'
import type { Source } from './types'

export const HomePage: FC = () => (
  <Layout>
    <section class="py-16 sm:py-24">
      <h1 class="text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">{site.name}</h1>
      <p class="mt-5 max-w-2xl text-lg text-sky-400 sm:text-xl">{site.tagline}</p>
      <p class="mt-6 max-w-2xl leading-relaxed text-slate-400">{site.description}</p>
      <div class="mt-8 flex flex-wrap gap-3 text-xs text-slate-500">
        <Badge>{sources.length} 套技能源</Badge>
        <Badge>{totalSkills} 个技能</Badge>
        <Badge>全中文</Badge>
      </div>
    </section>

    <section>
      <h2 class="text-sm font-medium tracking-widest text-slate-500 uppercase">技能源</h2>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((source) => (
          <SourceCard source={source} />
        ))}
      </div>
    </section>

    <section class="mt-20">
      <h2 class="text-sm font-medium tracking-widest text-slate-500 uppercase">随手就能用上的</h2>
      <div class="mt-6 grid gap-3 sm:grid-cols-2">
        {sources.flatMap((source) =>
          source.featured
            .map((slug) => ({ source, skill: source.skills.find((s) => s.slug === slug) }))
            .filter((x) => x.skill)
            .map(({ source, skill }) => (
              <a
                href={`/sources/${source.slug}#${skill!.slug}`}
                class="rounded-xl border border-slate-800 p-4 transition hover:border-sky-400/60 hover:bg-slate-900/40"
              >
                <div class="text-sm font-medium text-slate-100">{skill!.name}</div>
                <div class="mt-1.5 text-xs leading-relaxed text-slate-400">{skill!.when}</div>
                <div class="mt-2 text-xs text-slate-600">来自「{source.name}」</div>
              </a>
            ))
        )}
      </div>
    </section>

    <section class="mt-20 rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
      <h2 class="text-xl font-semibold text-slate-100">这是怎么来的</h2>
      <p class="mt-4 leading-relaxed text-slate-400">
        这些技能我平时都在用。官方的说明是英文的，读起来其实不难，但放到中文语境里解释一遍，才知道自己有没有真的懂。所以这里做两件事：把官网内容翻成中文，再补上我用下来的体会。
      </p>
      <p class="mt-4 leading-relaxed text-slate-400">
        收录什么完全看我自己用不用，不是排行榜。以后用上新的就往里加。
      </p>
      <a href="/about" class="mt-6 inline-block text-sm text-sky-400 hover:text-sky-300">
        关于本站 →
      </a>
    </section>
  </Layout>
)

const SourceCard: FC<{ source: Source }> = ({ source }) => (
  <a
    href={`/sources/${source.slug}`}
    class="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-sky-400/60 hover:bg-slate-900/60"
  >
    <div class="text-xs text-slate-500">{source.author}</div>
    <h3 class="mt-2 text-lg font-semibold text-slate-100">{source.name}</h3>
    <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{source.tagline}</p>
    <div class="mt-5 flex items-center justify-between text-xs">
      <Badge tone="sky">{source.skills.length} 个技能</Badge>
      <span class="text-slate-500">看看 →</span>
    </div>
  </a>
)

export const SourcePage: FC<{ source: Source }> = ({ source }) => {
  const phases = [...new Set(source.skills.map((s) => s.phase ?? '其它'))]

  return (
    <Layout title={source.name} description={source.tagline}>
      <article class="py-12">
        <a href="/" class="text-xs text-slate-500 hover:text-sky-400">
          ← 全部技能源
        </a>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {source.name}
        </h1>
        <p class="mt-3 text-lg text-sky-400">{source.tagline}</p>
        <p class="mt-5 max-w-3xl leading-relaxed text-slate-400">{source.description}</p>

        <div class="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <a href={source.homepage} class="text-slate-400 hover:text-sky-400">
            官网 ↗
          </a>
          <a href={source.repo} class="text-slate-400 hover:text-sky-400">
            源码 ↗
          </a>
          <a href={source.authorUrl} class="text-slate-400 hover:text-sky-400">
            {source.author} ↗
          </a>
        </div>

        <div class="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3">
          <code class="font-mono text-xs whitespace-pre text-sky-300">{source.install}</code>
        </div>

        <div class="mt-10 flex flex-wrap gap-2">
          {phases.map((phase) => (
            <Badge>{phase}</Badge>
          ))}
        </div>

        <ul class="mt-6 divide-y divide-slate-900 border-t border-slate-900">
          {source.skills.map((skill) => (
            <li id={skill.slug} class="scroll-mt-24 py-5">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 class="text-base font-medium text-slate-100">{skill.name}</h2>
                {skill.phase ? <Badge>{skill.phase}</Badge> : null}
              </div>
              <p class="mt-2 text-sm leading-relaxed text-slate-400">{skill.when}</p>
              {skill.note ? (
                <p class="mt-2 border-l-2 border-sky-400/40 pl-3 text-sm leading-relaxed text-slate-500">
                  {skill.note}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export const AboutPage: FC = () => (
  <Layout title="关于本站">
    <article class="prose-invert py-12">
      <h1 class="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">关于本站</h1>

      <p class="mt-6 max-w-3xl leading-relaxed text-slate-400">
        「{site.name}」收的是我自己每天在用的 agent skills。名字取得很直白：不是排行榜，也不是大全，就是我喜欢的那几个。
      </p>

      <h2 class="mt-10 text-xl font-semibold text-slate-100">为什么做中文站</h2>
      <p class="mt-3 max-w-3xl leading-relaxed text-slate-400">
        这些技能的作者都是英语母语者，写出来的说明很自然，但读过去容易「好像懂了」。翻译一遍是检验：如果翻不出准确的中文，说明那句话我并没有真的理解。翻完再补一句自己用它的时候踩到的坑，一份内容就变成了两份。
      </p>

      <h2 class="mt-10 text-xl font-semibold text-slate-100">收录标准</h2>
      <ul class="mt-3 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-slate-400">
        <li>我实际在用，或者认真读过它的 SKILL.md。</li>
        <li>作者有真实的工程背景，而不是把提示词包装成技能。</li>
        <li>技能本身可读、可改、可拆——黑盒流程包不进来。</li>
      </ul>

      <h2 class="mt-10 text-xl font-semibold text-slate-100">内容怎么来的</h2>
      <p class="mt-3 max-w-3xl leading-relaxed text-slate-400">
        主体是官网、仓库 README 和 SKILL.md 的中文翻译，加上我自己的使用笔记。翻译以准确为先，不做营销化的改写；原文里的专有名词、命令和链接保持原样。著作权归各作者所有，这里只做整理和转述。
      </p>

      <h2 class="mt-10 text-xl font-semibold text-slate-100">想推荐一个</h2>
      <p class="mt-3 max-w-3xl leading-relaxed text-slate-400">
        用着顺手的技能欢迎丢给我：
        <a href={site.github} class="text-sky-400 hover:text-sky-300">
          {' '}
          {site.author} · GitHub{' '}
        </a>
        。
      </p>

      <a href="/" class="mt-12 inline-block text-sm text-sky-400 hover:text-sky-300">
        ← 回首页
      </a>
    </article>
  </Layout>
)

export const NotFoundPage: FC = () => (
  <Layout title="页面不存在">
    <div class="py-24 text-center">
      <p class="text-6xl font-bold text-slate-800">404</p>
      <p class="mt-4 text-slate-400">这一页还没有内容。</p>
      <a href="/" class="mt-8 inline-block text-sm text-sky-400 hover:text-sky-300">
        ← 回首页
      </a>
    </div>
  </Layout>
)

export const sourceFromParam = (slug: string) => findSource(slug)
