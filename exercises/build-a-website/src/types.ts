export type Skill = {
  /** 上游仓库里的 skill 名字，用作锚点 */
  slug: string
  /** 中文名 */
  name: string
  /** 什么时候用它 */
  when: string
  /** 所属阶段，用于分组展示 */
  phase?: string
  /** 我自己补充的理解，可选 */
  note?: string
}

export type Source = {
  /** URL 里用的标识 */
  slug: string
  /** 中文标题 */
  name: string
  /** 原作者 */
  author: string
  authorUrl: string
  /** 一句话简介 */
  tagline: string
  /** 两三句详细介绍 */
  description: string
  /** 安装命令 */
  install: string
  /** 官网 */
  homepage: string
  /** 源码仓库 */
  repo: string
  /** 首页精选的 skill slug 列表 */
  featured: string[]
  skills: Skill[]
}
