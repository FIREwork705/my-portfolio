export default function Home() {
  const projects = [
    {
      title: "电商平台用户行为与转化链路深度分析",
      period: "2026.03 - 2026.05",
      background:
        "针对高净值用户转化特征不清晰的问题，基于千万级真实电商日志主动发起全链路瓶颈排查。",
      task:
        "定位关键流失环节，搭建指标看板并寻找次日留存与最终转化率的提升切入点。",
      action: [
        "处理 89.7M PV 原始日志，完成异常值清洗与多维特征提取，输出 Tableau 分析看板。",
        "构建“浏览-加购-收藏-购买”漏斗，采用 4 位特征编码追踪用户决策流向，定位收藏/加购到购买环节转化率仅 32.76%。",
        "结合 RF 模型与对数压缩优化长尾阈值，将用户划分为价值、发展、保持、挽留四类，识别挽留群体占比 36.23%。",
      ],
      result:
        "识别 46.95%“无收藏/加购直接购买”高优人群，建议优化详情页“立即购买”按钮视觉层级，缩短决策链路。",
    },
    {
      title: "油茶产业 IP 文创全链路开发",
      period: "2025.05 - 2025.11",
      background:
        "传统产业品牌感知度偏低，需通过用户研究与品牌重塑完成从需求洞察到产品落地的闭环。",
      task:
        "回收问卷与深访样本，提炼核心视觉资产并验证内容传播路径，支撑 IP 产品化决策。",
      action: [
        "线下回收 580 份有效问卷（有效率 89.2%）和 20 户农户访谈，交叉分析提炼“油茶果造型”（58.3% 认可度）。",
        "基于 40% 用户对国潮水墨风格偏好，引入生成式 AI 辅助产出样图与宣发素材。",
        "制作短视频并进行推文预热，持续监控阅读互动与点击转化数据，迭代传播策略。",
      ],
      result:
        "交付 10 款 IP 周边并搭建内容矩阵，推文累计阅读量 10w+、短视频播放量 5w+，低成本跑通“内容引流-用户共鸣”链路。",
    },
  ];

  const skills = [
    "Python (Pandas, NumPy, Matplotlib)",
    "SQL (MySQL / PostgreSQL)",
    "数据可视化 (Tableau / Power BI)",
    "统计分析与 A/B Test",
  ];

  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-50 text-slate-900">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 py-10 md:px-10">
        <header className="flex flex-col gap-8 rounded-2xl border border-sky-100 bg-white/90 p-8 shadow-sm backdrop-blur">
          <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="#about" className="transition hover:text-slate-900">
              首页
            </a>
            <a href="#projects" className="transition hover:text-slate-900">
              项目展示
            </a>
            <a href="#skills" className="transition hover:text-slate-900">
              技能列表
            </a>
          </nav>
          <section id="about" className="space-y-4">
            <p className="text-sm font-medium text-slate-500">
              正在寻找数据分析实习的数据科学与大数据技术专业学生
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Xian FangHui
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              将业务问题转化为可执行的数据分析方案，同时具备前端开发与数据处理能力。
              希望在数据分析/开发实习中，用扎实的方法论和工程能力为团队创造可衡量的价值。
            </p>
          </section>
        </header>

        <section id="projects" className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">项目展示</h2>
            <p className="text-slate-600">聚焦数据驱动的洞察方法、落地动作与可量化结果。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm backdrop-blur"
              >
                <p className="text-sm text-slate-500">{project.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">背景：</span>
                    {project.background}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">任务：</span>
                    {project.task}
                  </p>
                  <ul className="space-y-2">
                    <li className="font-semibold text-slate-900">行动：</li>
                    {project.action.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    <span className="font-semibold text-slate-900">结果：</span>
                    {project.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-5 pb-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">技能列表</h2>
            <p className="text-slate-600">覆盖数据分析、可视化与开发能力。</p>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm backdrop-blur">
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
