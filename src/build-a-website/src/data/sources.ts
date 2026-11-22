import type { Source } from '../types'

export const sources: Source[] = [
  {
    slug: 'mattpocock-skills',
    name: '真正工程师的 AI 技能',
    author: 'Matt Pocock',
    authorUrl: 'https://www.aihero.dev/skills',
    tagline: '小而可组合的工程技能，不接管你的流程。',
    description:
      '很多技能包的做法是把流程整个吞下去：你只能照它说的做，流程里一旦有 bug 就很难拆。Matt Pocock 这套反着来——每个技能都很小、可以改、可以拼，任何模型都能用，而且始终把决定权留在你手上。',
    install: 'npx skills@latest add mattpocock/skills',
    homepage: 'https://www.aihero.dev/skills',
    repo: 'https://github.com/mattpocock/skills',
    featured: ['grill-me', 'to-prd', 'tdd'],
    skills: [
      {
        slug: 'grill-me',
        name: '/grill-me 拷问我',
        phase: '塑造',
        when: '你有一个想法或计划，想在被实现之前先把漏洞问出来。',
        note: '这套技能里传播最广的一个，也是一切流程的起点。'
      },
      {
        slug: 'grill-with-docs',
        name: '/grill-with-docs 带文档拷问',
        phase: '塑造',
        when: '拷问的同时，把谈出来的术语写进 GLOSSARY.md，让项目有一套统一的说法。'
      },
      {
        slug: 'domain-model',
        name: '/domain-model 领域建模',
        phase: '塑造',
        when: '概念还很模糊，需要先把领域里的名词、边界和关系理清楚。'
      },
      {
        slug: 'to-prd',
        name: '/to-prd 写成 PRD',
        phase: '塑造',
        when: '想法拷问清楚了，要落成一份能给人看的产品需求文档。'
      },
      {
        slug: 'to-spec',
        name: '/to-spec 写成规格',
        phase: '塑造',
        when: '要写的是给 agent 执行的技术规格，而不是给人看的需求文档。'
      },
      {
        slug: 'to-issues',
        name: '/to-issues 拆成 issue',
        phase: '规划',
        when: '规格有了，需要拆成一条条能直接开工的 issue。'
      },
      {
        slug: 'implement-spec',
        name: '/implement-spec 按规格实现',
        phase: '实现',
        when: '整份规格需要被完整实现掉，而不是一条一条手动派活。'
      },
      {
        slug: 'tdd',
        name: '/tdd 测试先行',
        phase: '实现',
        when: '要写有真实行为的逻辑，而不是拼页面。'
      },
      {
        slug: 'review',
        name: '/review 代码评审',
        phase: '维护',
        when: '改动要进主干之前，先用它把该挑的刺挑一遍。'
      },
      {
        slug: 'triage',
        name: '/triage 分诊',
        phase: '维护',
        when: 'backlog 堆积如山，需要判断哪些该做、哪些该关、哪些该等。'
      },
      {
        slug: 'pr',
        name: '/pr 写 PR 说明',
        phase: '维护',
        when: '代码写完了，要写一份评审者看得下去的 PR 描述。'
      },
      {
        slug: 'retro',
        name: '/retro 复盘',
        phase: '维护',
        when: '一段工作结束了，想改进 agent 的工作环境本身，而不只是改代码。'
      },
      {
        slug: 'prototype',
        name: '/prototype 做原型',
        phase: '塑造',
        when: '某个设计问题值得用一次性的代码快速验证一下。'
      },
      {
        slug: 'handoff',
        name: '/handoff 交接',
        phase: '维护',
        when: '上下文要传给下一个 agent 或下一次会话。'
      },
      {
        slug: 'writing-for-agents',
        name: '/writing-for-agents 写给 agent 读',
        phase: '维护',
        when: '要写 AGENTS.md、技能文件或说明文档，而读者是 agent。'
      },
      {
        slug: 'ask-matt',
        name: '/ask-matt 问 Matt',
        phase: '入口',
        when: '你不知道现在该用哪个技能。它只负责告诉你下一个该敲什么，不替你做事。'
      },
      {
        slug: 'wayfinder',
        name: '/wayfinder 探路',
        phase: '规划',
        when: '面对一块陌生代码，需要先摸清地形再动手。'
      }
    ]
  },
  {
    slug: 'addyosmani-agent-skills',
    name: '生产级工程技能',
    author: 'Addy Osmani',
    authorUrl: 'https://skills.addy.ie',
    tagline: '24 个技能，每个对应一件具体的事。',
    description:
      '每个技能都是一个结构化的工作流——有步骤、有验证关卡、还专门有一张「反合理化表」，防止 agent 找借口跳过检查。按软件生命周期分阶段组织：定义、规划、实现、验证、评审、发布。',
    install: 'npx skills add addyosmani/agent-skills',
    homepage: 'https://skills.addy.ie/skills/',
    repo: 'https://github.com/addyosmani/agent-skills',
    featured: ['spec-driven-development', 'test-driven-development', 'code-review-and-quality'],
    skills: [
      {
        slug: 'using-agent-skills',
        name: '技能总控',
        phase: '元',
        when: '刚开始一次会话，或者不知道当前该用哪个技能。它负责把活派给对的技能，并统一操作规则。'
      },
      {
        slug: 'interview-me',
        name: '一次一问的访谈',
        phase: '定义',
        when: '你的需求还不够具体，或者你想让 agent 先把真正想要的东西问出来。'
      },
      {
        slug: 'idea-refine',
        name: '想法打磨',
        phase: '定义',
        when: '只有一个粗糙的念头，需要先发散再收敛，压力测试一下。'
      },
      {
        slug: 'spec-driven-development',
        name: '规格驱动开发',
        phase: '定义',
        when: '开新项目、新功能或重大改动之前，先把目标、结构、风格、测试和边界写成 PRD。'
      },
      {
        slug: 'planning-and-task-breakdown',
        name: '计划与任务拆解',
        phase: '规划',
        when: '规格有了，要把它们拆成一个个可验证、没依赖顺序问题的小任务。'
      },
      {
        slug: 'incremental-implementation',
        name: '增量实现',
        phase: '实现',
        when: '任何一次改动动了不止一个文件。切成薄薄的垂直切片，实现、测试、验证、提交，随时能回滚。'
      },
      {
        slug: 'test-driven-development',
        name: '测试驱动开发',
        phase: '实现',
        when: '写逻辑、修 bug、改行为。红了再绿再重构；讲测试金字塔、DAMP 优于 DRY、以及「碧昂丝法则」。'
      },
      {
        slug: 'context-engineering',
        name: '上下文工程',
        phase: '实现',
        when: '会话刚开始、切换任务、或者你发现输出质量在下降。它教你怎么把对的信息在对的时间喂给 agent。'
      },
      {
        slug: 'source-driven-development',
        name: '文档驱动开发',
        phase: '实现',
        when: '你要用某个框架或库，希望每个决定都有官方文档背书，而不是 agent 凭印象编。'
      },
      {
        slug: 'doubt-driven-development',
        name: '怀疑驱动开发',
        phase: '实现',
        when: '风险高、代码你不熟，或者现在花十分钟验证比以后花两天调 bug 划算。'
      },
      {
        slug: 'frontend-ui-engineering',
        name: '前端界面工程',
        phase: '实现',
        when: '做用户能看见的东西：组件架构、设计系统、状态、响应式、无障碍。'
      },
      {
        slug: 'api-and-interface-design',
        name: 'API 与接口设计',
        phase: '实现',
        when: '设计 API、模块边界或对外接口。契约先行，记住海勒姆定律和「只留一个版本」规则。'
      },
      {
        slug: 'browser-testing-with-devtools',
        name: '用 DevTools 测浏览器',
        phase: '验证',
        when: '在浏览器里跑的东西要调试：DOM、控制台、网络、性能剖析，全用真实运行时数据说话。'
      },
      {
        slug: 'debugging-and-error-recovery',
        name: '调试与恢复',
        phase: '验证',
        when: '测试挂了、构建炸了、行为不对。五步走：复现、定位、缩小、修复、加防线。'
      },
      {
        slug: 'code-review-and-quality',
        name: '代码评审与质量',
        phase: '评审',
        when: '任何改动合并进主干之前。五维评审、一次约 100 行的改动量、严重程度分级。'
      },
      {
        slug: 'code-simplification',
        name: '代码简化',
        phase: '评审',
        when: '代码能跑，但比它应该有的样子难读难维护。记住「切斯特顿之围栏」和「500 行规则」。'
      },
      {
        slug: 'security-and-hardening',
        name: '安全加固',
        phase: '评审',
        when: '要处理用户输入、认证、数据存储或外部系统集成。覆盖 OWASP Top 10、密钥管理和依赖审计。'
      },
      {
        slug: 'performance-optimization',
        name: '性能优化',
        phase: '评审',
        when: '有性能指标要求，或者你怀疑出现了退化。先测量再动手：Core Web Vitals、剖析、打包体积、N+1 查询。'
      },
      {
        slug: 'git-workflow-and-versioning',
        name: 'Git 工作流',
        phase: '发布',
        when: '任何一次代码改动。主干开发、原子提交、每次提交都是一个可回退的存档点。'
      },
      {
        slug: 'ci-cd-and-automation',
        name: 'CI/CD 与自动化',
        phase: '发布',
        when: '搭或改构建、发布流水线。左移、越快越安全、特性开关、质量门禁。'
      },
      {
        slug: 'deprecation-and-migration',
        name: '下线与迁移',
        phase: '发布',
        when: '要拆掉旧系统、迁移用户或停掉一个功能。代码是负债，不是资产。'
      },
      {
        slug: 'documentation-and-adrs',
        name: '文档与 ADR',
        phase: '发布',
        when: '做了架构决定、改了 API、上线了功能——把「为什么」记下来。'
      },
      {
        slug: 'observability-and-instrumentation',
        name: '可观测性',
        phase: '发布',
        when: '要加埋点，或者要发布任何跑在生产环境里的东西。结构化日志、RED 指标、链路追踪、按症状报警。'
      },
      {
        slug: 'shipping-and-launch',
        name: '发布与上线',
        phase: '发布',
        when: '准备上生产。上线前清单、特性开关的完整生命周期、分阶段放量、回滚预案。'
      }
    ]
  },
  {
    slug: 'pstack',
    name: 'pstack 个人技能栈',
    author: 'Lauren Tan（poteto）',
    authorUrl: 'https://x.com/poteto',
    tagline: '想写得更少，但写得更好。',
    description:
      '作者在 Meta、Netflix、Cursor 里跟几百万行代码打过交道，也在 React 核心团队维护 React Compiler。这套技能是她在 Cursor 每天用来交付高质量代码的那一套：先深后快，用可验证的代码换取真正的并行。',
    install: 'npx skills add backnotprop/pstack',
    homepage: 'https://github.com/cursor/plugins/tree/main/pstack',
    repo: 'https://github.com/backnotprop/pstack',
    featured: ['poteto-mode', 'unslop', 'blast-radius'],
    skills: [
      {
        slug: 'poteto-mode',
        name: 'poteto-mode 总入口',
        phase: '入口',
        when: '任何不简单的任务。告诉它你的目标，它负责挑出对的 playbook 并派活。',
        note: '装了 poteto-mode 之后，其它技能基本都从它进。'
      },
      {
        slug: 'how',
        name: '/how 讲清机制',
        phase: '理解',
        when: '你想知道某个子系统到底是怎么运转的，一步步走一遍。'
      },
      {
        slug: 'why',
        name: '/why 讲清缘由',
        phase: '理解',
        when: '你想知道某段代码为什么这么写，而不是它做了什么。'
      },
      {
        slug: 'unslop',
        name: '/unslop 去 AI 味',
        phase: '写作',
        when: '代码或文档一股 AI 味：堆砌、啰嗦、看似完备其实空洞。'
      },
      {
        slug: 'in-your-own-words',
        name: '/in-your-own-words 用你自己的话',
        phase: '写作',
        when: '要确认自己真的懂了，而不是复读了一遍文档。'
      },
      {
        slug: 'architect',
        name: '/architect 架构',
        phase: '设计',
        when: '要做有分量的结构决定，需要先摊开几种方案比一比。'
      },
      {
        slug: 'arena',
        name: '/arena 竞技场',
        phase: '设计',
        when: '同一个问题让多个模型各做一遍，再挑最好的那版。'
      },
      {
        slug: 'interrogate',
        name: '/interrogate 审问',
        phase: '设计',
        when: '要逼着 agent 把前提、假设和没验证的地方全交代出来。'
      },
      {
        slug: 'tdd',
        name: '/tdd 测试先行',
        phase: '实现',
        when: '要写逻辑，而不是写胶水。'
      },
      {
        slug: 'typescript-best-practices',
        name: 'TypeScript 最佳实践',
        phase: '实现',
        when: '写 TS 的时候不希望 agent 随手 any 一把梭。'
      },
      {
        slug: 'figure-it-out',
        name: '/figure-it-out 自己想办法',
        phase: '实现',
        when: '你不想被反问一堆问题，希望 agent 自己查、自己试、自己决定。'
      },
      {
        slug: 'correct',
        name: '/correct 纠偏',
        phase: '实现',
        when: 'agent 跑偏了，把它拽回你要的方向。'
      },
      {
        slug: 'blast-radius',
        name: '/blast-radius 影响范围',
        phase: '验证',
        when: '动手之前想知道这次改动会波及哪里。',
        note: '依赖 arena、how、why、unslop，装的时候要一起装。'
      },
      {
        slug: 'create-verification-skill',
        name: '自建验证技能',
        phase: '验证',
        when: '你反复用同一套方式验证同一件事，值得把它固化成技能。',
        note: '需要配合 maintain-verification-skill 一起装。'
      },
      {
        slug: 'no-comments',
        name: '/no-comments 别写注释',
        phase: '验证',
        when: '你相信好代码不需要注释。它会清掉解释性注释，但保留描述外部规则的注释。'
      },
      {
        slug: 'automate-me',
        name: '/automate-me 把我自动化',
        phase: '元',
        when: '把你最近的操作记录挖一遍，提炼成属于你自己的技能。'
      },
      {
        slug: 'benchmark-checklist',
        name: '基准清单',
        phase: '元',
        when: '给技能或改动设计一套可复现的对比清单。'
      },
      {
        slug: 'ketchup',
        name: '/ketchup 追上进度',
        phase: '理解',
        when: '你离开一阵回来，需要快速补齐这段代码发生了什么。'
      },
      {
        slug: 'principle-*',
        name: '13 条工程原则',
        phase: '元',
        when: '一组 principle-* 技能，把「先想根本」「别让读者多费脑子」「绝不阻塞在人身上」这类原则变成了可调用的技能。'
      }
    ]
  }
]

export const findSource = (slug: string) => sources.find((s) => s.slug === slug)

export const totalSkills = sources.reduce((n, s) => n + s.skills.length, 0)
