// 本文件由 idea-pipeline-dashboard.mjs 自动生成，请勿手改
window.IDEA_PIPELINE_DATA = {
  "meta": {
    "project": "generic_endless_mine_endless_mode",
    "version": "2026/5/11.01",
    "updatedAt": "2026/6/22 15:40:47",
    "dashboardFile": "流水线总览.html",
    "dataFile": "idea-pipeline-data.js"
  },
  "current": 8,
  "steps": [
    {
      "id": 1,
      "name": "脑暴",
      "hint": "产出 3×3 方案矩阵或 PRD 单方案包装文档",
      "status": "done",
      "todoCount": 1,
      "artifactCount": 1,
      "existsCount": 1
    },
    {
      "id": 2,
      "name": "生成概念图",
      "hint": "生成概念图提示词、概念图引用和图片资源",
      "status": "done",
      "todoCount": 1,
      "artifactCount": 2,
      "existsCount": 2
    },
    {
      "id": 3,
      "name": "Draft Concept",
      "hint": "锁定方案，生成玩法概念文档与视觉锚点",
      "status": "done",
      "todoCount": 0,
      "artifactCount": 1,
      "existsCount": 1
    },
    {
      "id": 4,
      "name": "需求澄清",
      "hint": "输出最终 PRD / GDD，作为业务 SSOT",
      "status": "done",
      "todoCount": 2,
      "artifactCount": 1,
      "existsCount": 1
    },
    {
      "id": 5,
      "name": "方案确立",
      "hint": "输出设计方案、技术方案、元素实现清单骨架",
      "status": "done",
      "todoCount": 2,
      "artifactCount": 2,
      "existsCount": 2
    },
    {
      "id": 6,
      "name": "视觉设计",
      "hint": "总览定版、Page 图生成、读图回填、元素清单确认、Asset Sheet 提示词与素材生成",
      "status": "done",
      "todoCount": 10,
      "artifactCount": 4,
      "existsCount": 4
    },
    {
      "id": 7,
      "name": "代码开发",
      "hint": "生成完整项目代码",
      "status": "done",
      "todoCount": 2,
      "artifactCount": 0,
      "existsCount": 0
    },
    {
      "id": 8,
      "name": "独立评审",
      "hint": "三层审查输出评审报告",
      "status": "current",
      "todoCount": 3,
      "artifactCount": 1,
      "existsCount": 1
    }
  ],
  "currentTodos": [
    {
      "gate": "review-confirm",
      "title": "评审结果确认",
      "artifactFiles": [
        "评审-评审报告.md"
      ],
      "todos": [
        "查看评审报告结论和 P0 / P1 问题列表。",
        "若存在 P0 问题，确认是否自动修复并重新评审。",
        "若评审通过或接受当前状态，可结束流程。"
      ]
    }
  ],
  "todosByArtifact": {
    "评审-评审报告.md": [
      {
        "gate": "review-confirm",
        "title": "评审结果确认",
        "artifactFiles": [
          "评审-评审报告.md"
        ],
        "todos": [
          "查看评审报告结论和 P0 / P1 问题列表。",
          "若存在 P0 问题，确认是否自动修复并重新评审。",
          "若评审通过或接受当前状态，可结束流程。"
        ]
      }
    ]
  },
  "allStepTodos": {
    "1": [
      {
        "gate": "brainstorm-confirm",
        "title": "脑暴方案确认",
        "artifactFiles": [
          "策划-脑暴方案.md"
        ],
        "todos": [
          "idea 输入模式下，需要在对话中完成方案与复杂度选择。"
        ]
      }
    ],
    "2": [
      {
        "gate": "concept-confirm",
        "title": "概念图确认",
        "artifactFiles": [
          "策划-脑暴方案概念图提示词.md",
          "策划-概念图引用.json"
        ],
        "todos": [
          "确认概念图是否体现选定方案的核心体验和视觉方向，不符合预期可在对话中选择重试或调整"
        ]
      }
    ],
    "3": [
      {
        "gate": "draft-confirm",
        "title": "Draft Concept 确认",
        "artifactFiles": [
          "策划-玩法概念文档.md"
        ],
        "todos": []
      }
    ],
    "4": [
      {
        "gate": "prd-confirm",
        "title": "最终 PRD 确认",
        "artifactFiles": [
          "需求-最终PRD.md"
        ],
        "todos": [
          "核对功能清单是否覆盖核心玩法和所有关键状态。",
          "核对状态机是否闭环，开始 / 进行 / 结算 / 异常路径是否完整。"
        ]
      }
    ],
    "5": [
      {
        "gate": "architecture-confirm",
        "title": "方案确立确认",
        "artifactFiles": [
          "架构-设计方案.md",
          "架构-技术方案.md"
        ],
        "todos": [
          "核对页面结构、技术方案、元素大类是否合理。",
          "确认是否有明显遗漏的页面、状态、元素或素材类别。"
        ]
      }
    ],
    "6": [
      {
        "gate": "overview-design-confirm",
        "title": "全页面总览图确认",
        "artifactFiles": [
          "设计-总览图引用.json"
        ],
        "todos": [
          "查看全页面总览图，确认页面/场景缩略图是否完整。",
          "确认跨页共享元素、整体 UI 风格、按钮体系、字体气质和材质是否统一。",
          "总览图满意后再逐页生成 Page 图。"
        ]
      },
      {
        "gate": "page-design-confirm",
        "title": "页面 Page 图确认",
        "artifactFiles": [
          "设计-页面设计图引用.json"
        ],
        "todos": [
          "查看各页面 Page 图，确认是否继承总览图中的共享元素、配色、材质、按钮和字体气质。",
          "不符合预期可在对话中选择重新生成、调整总览图或调整风格。"
        ]
      },
      {
        "gate": "visual-element-confirm",
        "title": "元素清单确认",
        "artifactFiles": [
          "设计-元素实现清单.html"
        ],
        "todos": [
          "核对 CSS / 图片判定、背景透明、出图方式（独立素材/并入背景/无字底板/带字整图）、复用标注是否合理。",
          "如有修改，在专用编辑器导出变更记录并粘回对话。"
        ]
      },
      {
        "gate": "asset-prompt-confirm",
        "title": "Asset Sheet 提示词确认",
        "artifactFiles": [
          "设计-design-sheet提示词.html"
        ],
        "todos": [
          "核对素材列表是否有缺失、核对素材提示词是否准确。",
          "核对所属场景、目标比例、烘焙内容是否与 page 图一致。",
          "确认后再生成 Asset Sheet 图片，避免带错切片进入素材生成。"
        ]
      }
    ],
    "7": [
      {
        "gate": "code-confirm",
        "title": "代码开发确认",
        "todos": [
          "等待代码开发完成，确认是否进入独立评审。",
          "如需人工预览，可先本地运行项目查看效果后再继续。"
        ]
      }
    ],
    "8": [
      {
        "gate": "review-confirm",
        "title": "评审结果确认",
        "artifactFiles": [
          "评审-评审报告.md"
        ],
        "todos": [
          "查看评审报告结论和 P0 / P1 问题列表。",
          "若存在 P0 问题，确认是否自动修复并重新评审。",
          "若评审通过或接受当前状态，可结束流程。"
        ]
      }
    ]
  },
  "artifacts": [
    {
      "id": "brainstorm",
      "label": "脑暴方案",
      "type": "md",
      "file": "策划-脑暴方案.md",
      "stepId": 1,
      "exists": true,
      "path": "策划-脑暴方案.md",
      "content": "模式: PRD单方案包装\nsource_path: /Users/miracleshen/GameAgent/GDD-无限矿井无尽模式.md\nsource_truth: user_prd\n\n# 策划-脑暴方案\n\n本文件为用户 PRD 的单方案包装文档，仅服务于概念图生成与 Draft 桥接链路。用户 PRD 是业务 SSOT；所有产品定位、核心体验、核心循环、关键系统与视觉基调均以用户 PRD 为准。本文件不扩展 PRD 未定义的核心玩法或核心系统。\n\n## 方案A\n\n固定复杂度：🧠标准\n\n### 产品定位\n\n《无限矿井》无尽模式是一个基于 `grid_logic` 格子逻辑模板的移动端卡通矿井下挖玩法 Demo。玩家在 `7 x 6` 可视棋盘中，通过自由点击格子进行挖掘或释放范围工具，持续向更深矿层推进，直到工具耗尽或主动收队返场后进入本局收获结算。\n\n### 核心体验\n\n- 点击格子后立即产生挖掘、碎裂、显露、资源飞入 HUD 的反馈。\n- 玩家围绕木镐、横排炸弹、九宫格炸弹进行即时选择，在有限工具库存下尽量推进更深深度。\n- 棋盘随底部通路打通而整体上卷，并追加新底行，形成持续下挖的无尽感。\n- 深度推进带来矿区背景、内容分布、宝箱、盲盒砖、稀有矿等阶段变化。\n- 本局结束后以结算页展示最终深度、深度类型、金币、矿石、材料与开启宝箱次数。\n\n### 核心循环\n\n1. 进入 `EndlessMineRunScene`，获得固定开局工具并显示当前深度区、补给进度、本局状态与收益。\n2. 选择当前工具：木镐、横排炸弹或九宫格炸弹。\n3. 点击合法格子：木镐只能作用于与当前坑道连通的格；炸弹施放落点也必须合法。\n4. 结算本次行动：消耗工具、降低耐久、破坏遮挡层、显露内容、处理炸弹范围命中。\n5. 自动处理世界阶段：宝箱开启、工具入包、资源入账、补给积分增长、阶段提示与 HUD 刷新。\n6. 当底部形成真实通路时，棋盘上卷一行并生成新底行，当前深度增加。\n7. 重复下挖，直到工具耗尽自动结算，或玩家主动点击“收队返场”结算。\n\n### 关键系统\n\n- 格子点击结算系统：单次点击视为一次 action，通过 `onCellClicked()`、`onProcessComplete()`、`onWorldPhase()` 等流程结算。\n- 可视棋盘系统：固定 `7 x 6` 棋盘，使用 `CellType.EMPTY`、`CellType.WALL`、`CellType.SPECIAL` 与 metadata 表达坑道、不可敲砖和可破坏内容。\n- 遮挡与内容显露系统：多数可破坏格先有深红遮挡层，破坏遮挡层后才显露真实内容。\n- 合法点击与连通系统：木镐目标必须与当前坑道四方向连通或位于坑道边缘；炸弹可波及未连通可视格，但施放落点必须合法。\n- 工具系统：木镐、横排炸弹、九宫格炸弹分别对应单格挖掘、整行命中、`3x3` 范围命中；炸弹不破坏不可敲砖。\n- 深度推进与新行生成系统：底部形成可推进通路后，棋盘整体上卷并生成新底行，持续增加深度。\n- 深度区系统：地表矿区、深地表、浅海、深海、地心火山泥随深度切换，影响背景与内容侧重点。\n- 掉落与补给系统：沙砖、矿砖、盲盒砖、宝箱、工具砖、空显露分别承担打通、收益、工具、积分或空坑道等职责；补给积分满后按深度区发放工具。\n- 结算系统：无通关条件，工具耗尽或主动返场进入“本局收获结算”，展示深度与本局收益。\n\n### 视觉基调\n\n移动端卡通矿井风格，强调厚重泥土体块、矿灯暖光、分层矿洞背景和随深度变化的色带。首层偏明亮暖棕与木架矿灯，中层转向更冷的岩层与尘雾，浅海与深海矿区加入青蓝湿润洞穴光感，地心火山泥区域使用红色热光、烟雾与不稳定岩层。整体反馈应突出点击后的挖空下陷、砖块碎裂、资源飞入顶部 HUD 的爽感。\n\n## 选择记录\n\n固定选择: 方案A / 🧠标准",
      "size": 3994,
      "truncated": false
    },
    {
      "id": "concept-prompts",
      "label": "概念图提示词",
      "type": "md",
      "file": "策划-脑暴方案概念图提示词.md",
      "stepId": 2,
      "exists": true,
      "path": "策划-脑暴方案概念图提示词.md",
      "content": "# 概念图提示词\n\n## 方案A：无限矿井无尽模式\n\n### 方案A — 🏠 主页全景\n\n- scene_id: concept_a_main\n- 场景类型: main\n- 建议文件名: concept_a_main.png\n- 建议尺寸: 512×910\n\n📋 🇨🇳:\n移动端卡通矿井主界面概念图，厚重泥土体块与圆润描边结合，暖棕矿灯光、柔和渐变阴影、轻微尘雾和爽快下挖氛围，非写实风、非暗黑恐怖、非赛博朋克。手机竖屏 9:16 构图，主视角为略俯视等距视角：画面中央是一块清晰可读的 7 x 6 矿井棋盘，格子呈向下延伸的竖向矿洞结构，顶部是明亮地表矿区与木架矿灯，中段可见冷灰岩层、青蓝湿润洞穴、远处深海矿洞色带，最底部隐约出现红色地心火山热光，形成“越挖越深”的分层背景。棋盘格包含已挖空坑道、深红遮挡砖、浅红沙砖、矿砖、盲盒砖、宝箱、工具提示砖和不可敲岩块；其中一个被点击的格子正在碎裂下陷，碎块飞散，金币、矿石、材料以弧线飞入顶部 HUD。核心交互按钮放在底部中央偏上，当前选中的木镐按钮最大，带金色呼吸光效和按压高亮，旁边是横排炸弹与九宫格炸弹按钮，能看出数量徽标。顶部栏分两行：第一行显示当前深度类型“地表矿区”、本局推进“8/12”、本局状态“推进中”；第二行显示金币、矿石、材料图标与数值。右侧或底部角落有“收队返场”按钮，清晰但不抢主操作；底部工具区包含“镐子 20”“横炸 1”“九炸 1”“背包”等控件。画面中无可移动玩家角色，但需要一个小型矿工吉祥物/棋子作为角色形态锚点，站在棋盘边缘的坑道入口处，戴黄色矿工帽、头灯发光、拿木镐，Q版小身材，大小约为单个格子的 0.8 倍，正做出准备下挖姿态。整体 UI 必须清晰像真实可玩的游戏首屏，按钮和状态栏边缘使用木质、铜钉、矿石装饰，避免文字过多堆叠。输出规格：手机竖屏 9:16，512×910px，高质量游戏概念图。 \n",
      "size": 2103,
      "truncated": false
    },
    {
      "id": "concept-images",
      "label": "概念图",
      "type": "concepts",
      "file": "策划-概念图引用.json",
      "stepId": 2,
      "exists": true,
      "path": "策划-概念图引用.json",
      "conceptCount": 1,
      "refsExists": true,
      "generatedAt": "2026-06-21T10:16:17.801Z"
    },
    {
      "id": "draft-concept",
      "label": "玩法概念文档",
      "type": "md",
      "file": "策划-玩法概念文档.md",
      "stepId": 3,
      "exists": true,
      "path": "策划-玩法概念文档.md",
      "content": "模式: PRD桥接\nsource_path: /Users/miracleshen/GameAgent/GDD-无限矿井无尽模式.md\nsource_truth: user_prd\n\n# 策划-玩法概念文档\n\n## 文档定位\n\n本文档为 PRD 桥接版玩法概念文档，仅提供视觉锚点、玩法摘要和概念图引用，供后续视觉设计、概念图 img2img 风格锚定与 Demo 产物衔接使用。\n\n用户 PRD / GDD 是业务 SSOT。本文档不重写、缩写或覆盖用户 PRD 中的功能、页面、规则、状态、数值、文案和验收标准；涉及实现、规则、数值与验收时，均以 `source_path` 指向的用户 PRD / GDD 为准。\n\n## 选择记录\n\n- 固定选择: 方案A / 🧠标准\n- 输入模式: prd_doc\n- 方案来源: `/Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode/game-agent/策划-脑暴方案.md`\n\n## 玩法摘要\n\n《无限矿井》无尽模式是一个移动端卡通矿井下挖玩法 Demo，玩家在格子棋盘中通过点击挖掘与使用工具持续向更深矿层推进，并在本局结束后查看本局收获。\n\n本摘要仅作为概念层理解入口，不作为功能、页面、规则、状态、数值、文案或验收标准来源。具体业务定义、实现归类、流程、系统、配置、关卡、收益、结算和验收要求均以用户 PRD / GDD 为准。\n\n## 视觉与情绪基调\n\n移动端卡通矿井风格，强调厚重泥土体块、矿灯暖光、分层矿洞背景和随深度变化的色带。首层偏明亮暖棕与木架矿灯，中层转向更冷的岩层与尘雾，浅海与深海矿区加入青蓝湿润洞穴光感，地心火山泥区域使用红色热光、烟雾与不稳定岩层。整体反馈应突出点击后的挖空下陷、砖块碎裂、资源飞入顶部 HUD 的爽感。\n\n## 视觉锚点\n\n- 主视觉锚点: 方案A 主概念图\n- 风格传递方式: 使用下方 `selected_concept_url` 作为后续 img2img seed-ref；本文档不从 PNG 中提取 hex、材质、光影等文字化风格描述。\n- PRD 未明确: 除用户 PRD / GDD 与脑暴方案已明确内容外的额外美术细节、色号、材质参数、构图参数和镜头参数。\n\n## 概念图引用\n\nselected_concept_path: \"assets/refs/concepts-brainstorm/concept_a_main.png\"\nselected_concept_url: \"https://game.kg.qq.com/walle-img-gen/output/bj21BQO6FHyYspbvhm_W4.png\"\n\n## SSOT 约束\n\n- 用户 PRD / GDD 是业务 SSOT。\n- 本文档只承接视觉锚点、玩法摘要和概念图引用。\n- 不以本文档内容替代用户 PRD / GDD 中的功能、页面、规则、状态、数值、文案和验收标准。\n- 后续如发现本文档与用户 PRD / GDD 冲突，以用户 PRD / GDD 为准。\n",
      "size": 2647,
      "truncated": false
    },
    {
      "id": "final-prd",
      "label": "最终 PRD",
      "type": "md",
      "file": "需求-最终PRD.md",
      "stepId": 4,
      "exists": true,
      "path": "需求-最终PRD.md",
      "content": "# 《无限矿井》无尽模式 游戏设计文档（GDD）\n\n> 阶段: Game Design Document  \n> 日期: 2026-06-21  \n> 输入模式: PRD 输入  \n> 业务输入: `/Users/miracleshen/GameAgent/GDD-无限矿井无尽模式.md`  \n> 视觉锚点: `/Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode/game-agent/策划-玩法概念文档.md`  \n> SSOT 说明: 用户 PRD 是业务唯一事实源；桥接文档仅用于 `selected_concept_path`、`selected_concept_url`、视觉基调和概念图引用。\n\n---\n\n## 一、需求审查结果\n\n| # | 维度 | 状态 | 说明 |\n|---|------|------|------|\n| 1 | 产品定位 | ✅ | 《无限矿井》无尽模式，移动端卡通矿井下挖玩法 Demo；实现归类为 `grid_logic`，子类型 `freeform`，核心交互为点击格子直接结算挖掘或范围工具释放。 |\n| 2 | 核心体验 | ✅ | 以持续向更深矿层推进、挖空下陷、资源飞入 HUD、补给续航和本局收获结算为核心体验；视觉强调厚重泥土体块、矿灯暖光和深度色带变化。 |\n| 3 | 核心循环 | ✅ | 开始一局并消耗体力 → 获得初始工具 → 点击合法格挖掘/释放炸弹 → 破坏格子并获得资源/补给积分/工具 → 底部打通后推进深度并生成新行 → 工具耗尽或主动返场 → 结算页展示本局收获。 |\n| 4 | 视觉基调 | ✅ | 用户 PRD 明确移动端卡通矿井风格、分深度背景资源和资源注册表；桥接文档提供主概念图引用。 |\n| 5 | 平台与环境 | ✅ | PRD 明确分辨率 `1152 x 768`、移动端优先布局、OpenGame `grid_logic` 模板、`BaseGridScene` 与 `UIScene`；未要求渲染框架选型。 |\n| 6 | 开始/结束条件 | ✅ | `TitleScreen` 进入唯一可玩关卡 `EndlessMineRunScene`；无通关条件；工具耗尽或点击 `收队返场` 进入 `GameOverUIScene` 作为本局收获结算页。 |\n| 7 | 异常与边界 | ✅ | PRD 明确点击合法性、连通判定、遮挡层、WALL、炸弹范围、最底行规则、至少一条下行路径、输入防抖、工具耗尽和主动返场等边界。缺失信息：断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理未在 PRD 明确。 |\n| 8 | 社交与传播 | ❓ | 缺失信息：PRD 未提及分享、排行榜、好友互动、邀请、社交传播或外部活动结算规则。 |\n\n---\n\n## 二、产品定位（继承用户 PRD）\n\n- **项目名称**: 《无限矿井》无尽模式\n- **一句话定位**: 基于 OpenGame `grid_logic` 模板实现的移动端卡通矿井无尽下挖 Demo，玩家通过点击格子挖掘和使用工具持续向下推进，并在本局结束后查看本局收获。\n- **目标用户**: 缺失信息：用户 PRD 未明确人群画像、年龄段、地区、付费倾向或使用场景。\n- **平台与环境**:\n  - 模板类型: `grid_logic`\n  - 子类型 / 结算节奏: `freeform`\n  - 运行分辨率: `1152 x 768`\n  - 可视棋盘: `7 x 6`\n  - 核心场景基类: `BaseGridScene`\n  - 界面场景: `UIScene`\n  - P0 结算承载页: 复用 `GameOverUIScene`，语义改为“本局收获结算”。\n- **核心交互**: 点击格子直接结算一次挖掘或范围工具释放，不使用方向移动主角。\n- **业务边界**:\n  - 不创建玩家可移动实体。\n  - 不创建敌人实体。\n  - 不切分多个固定关卡，`EndlessMineRunScene` 为单场景持续生成式关卡。\n  - P0 以棋盘格内容、工具库存、深度和收益累计驱动状态。\n\n---\n\n## 三、系统设计\n\n### 3.1 场景流转与关卡入口系统\n\n- **系统概述**: 管理从预加载、标题页、无尽矿井运行场景到结算页的固定流程。\n- **核心流程**:\n  1. `Preloader` 完成资源预加载。\n  2. 进入 `TitleScreen`。\n  3. `TitleScreen` 的入口按钮文案为“进入无尽矿井”。\n  4. 点击后进入唯一可玩关卡 `EndlessMineRunScene`。\n  5. 玩家点击 `收队返场` 或工具耗尽时，进入 `GameOverUIScene`。\n  6. `GameOverUIScene` 在本项目中承担“本局收获结算”职责，而不是失败语义。\n- **规则定义**:\n  - 场景流转为 `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene`。\n  - `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。\n  - 场景键名清单: `Preloader`、`TitleScreen`、`EndlessMineRunScene`、`UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。\n  - `EndlessMineRunScene` 是单场景持续生成式关卡。\n- **资源关联**:\n  - 依赖 `src/LevelManager.ts`、`src/main.ts`、`src/scenes/TitleScreen.ts`、`src/scenes/EndlessMineRunScene.ts`、`src/scenes/GameOverUIScene.ts`。\n- **边界与异常**:\n  - `checkWinCondition()` 恒为 `false`，不进入胜利流程。\n  - `VictoryUIScene`、`GameCompleteUIScene` 保留注册，但无尽模式 P0 不以其作为主结算页。\n  - 缺失信息：暂停页在本模式中的具体入口、返回、退出和结算关系未在 PRD 明确。\n\n### 3.2 运行时状态模型系统\n\n- **系统概述**: 维护无尽矿井单局内深度、深度区、工具、补给、收益和结算状态。\n- **核心流程**:\n  1. 进入一局后初始化深度、深度区、工具、补给和收益字段。\n  2. 每次点击或炸弹释放后进入处理流水线。\n  3. 破坏、掉落、补给、深度推进后同步运行态字段。\n  4. 状态变化后刷新 HUD、深度牌、顶部累计区和结算数据。\n- **规则定义**:\n  - 必须维护字段:\n    - `currentDepth: number`\n    - `currentBiomeIndex: number`\n    - `currentBiomeName: string`\n    - `supplyPoints: number`\n    - `supplyTarget: number`\n    - `woodPick: number`\n    - `rowBomb: number`\n    - `areaBomb: number`\n    - `selectedTool: 'pick' | 'rowBomb' | 'areaBomb'`\n    - `runStatus: '推进中' | '工具耗尽' | '结算中'`\n    - `runLoot.gold: number`\n    - `runLoot.ore: number`\n    - `runLoot.material: number`\n    - `runLoot.openedChests: number`\n    - `rareOreUnlockedShown: boolean`\n  - 初始工具: `woodPick = 20`、`rowBomb = 2`、`areaBomb = 2`（2026-06-21 用户确认：进入游戏后每个炸弹类型的个数增加为 2）。\n  - 默认工具: `pick`。\n  - 开始一局体力消耗: `startEnergyCost = 1`。\n- **资源关联**:\n  - HUD 展示、棋盘处理、补给发放、掉落结算和结算页均读取该运行态。\n- **边界与异常**:\n  - 工具库存三项均小于等于 0 时进入工具耗尽结算路径。\n  - 主动返场将 `runStatus` 设为 `结算中` 并进入同一结算跳转。\n  - 缺失信息：主矿区真实货币、体力与宿主系统的接口、扣减失败回滚、跨局持久化未在 PRD 明确；PRD 约定独立 Demo 先以场景内本地展示字段代替。\n\n### 3.3 棋盘编码与格子元数据系统\n\n- **系统概述**: 使用格子数值与场景内 metadata 组合表达可挖内容、不可敲砖、遮挡层、提示和奖励表。\n- **核心流程**:\n  1. 初始化 `7 x 6` 可视棋盘。\n  2. Terrain layer 记录基础格类型。\n  3. `SPECIAL` 格额外挂载 metadata。\n  4. 点击或炸弹命中时先根据格类型与 metadata 判断伤害、显露、掉落和空洞状态。\n- **规则定义**:\n  - `CellType.EMPTY (0)`: 已挖空通路。\n  - `CellType.WALL (1)`: 不可敲砖。\n  - `CellType.FLOOR (2)`: 预留，不直接用于 P0 主要内容。\n  - `CellType.SPECIAL (6)`: 所有可破坏砖内容的统一外层表示。\n  - `SPECIAL` metadata 字段:\n    - `coverVisible: boolean`\n    - `contentType: 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal'`\n    - `durability: number`\n    - `hasOreHint: boolean`\n    - `hasToolHint: boolean`\n    - `rewardTableId: string`\n- **资源关联**:\n  - 与挖掘点击、炸弹命中、掉落、补给、深度推进和 HUD 刷新系统关联。\n- **边界与异常**:\n  - `WALL` 不可被木镐或炸弹破坏。\n  - 深红遮挡层存在时，点击只能作用于遮挡层，不能越过遮挡层直接伤害真实内容。\n  - 缺失信息：`rewardTableId` 的完整枚举、每个掉落表的精确内容和概率未在 PRD 中以表格完全展开。\n\n### 3.4 输入、连通与工具释放系统\n\n- **系统概述**: 处理木镐、横排炸弹、九宫格炸弹的选择、合法性校验、消耗和命中范围。\n- **核心流程**:\n  1. 玩家选中当前工具，默认 `pick`。\n  2. 点击目标格后校验当前工具是否可用。\n  3. 校验落点是否合法：木镐目标需与当前坑道四方向连通或位于坑道边缘第一层可破坏格；炸弹落点必须是已连通的坑道格本身。\n  4. 合法时保存撤销状态并调用 `runProcessingPipeline()`。\n  5. `onProcessComplete()` 结算耐久、显露、破坏、资源、飞字和音效。\n- **规则定义**:\n  - 单次点击视为一次 action。\n  - `onCellClicked()` 处理木镐挖掘、横排炸弹释放、九宫格炸弹释放。\n  - `pick`: 消耗 `1` 木镐，对目标格造成 `1` 点伤害。\n  - `rowBomb`: 消耗 `1` 横排炸弹，命中当前行全部可破坏格。\n  - `areaBomb`: 消耗 `1` 九宫格炸弹，命中目标 `3x3` 全部可破坏格。\n  - 点击 `WALL`: 不消耗工具，播放无效反馈。\n  - 炸弹对 `WALL` 无效。\n  - 木镐只能点击“与当前坑道连通”的格。\n  - 当前坑道连通判定: 目标格与任一 `CellType.EMPTY` 坑道格在四方向邻接意义上连通，或目标格本身就是紧贴当前坑道边缘的第一层可破坏格。\n  - 四方向邻接，不采用斜向连通。\n  - 炸弹允许波及未连通但可见的格；炸弹施放落点必须是已连通的 `CellType.EMPTY` 坑道格本身，且该坑道格必须属于当前四方向可达坑道集合。\n  - 不能把炸弹直接放在坑道边缘可破坏格、未连通格、封闭格或 `WALL` 上。\n  - 最底行与其余 `7x6` 可视区域完全同规则，不是预览层。\n  - 输入防抖: `inputDebounceMs = 120ms`。\n- **资源关联**:\n  - 消耗 `woodPick`、`rowBomb`、`areaBomb`。\n  - 触发格子 metadata 更新、掉落和 HUD 刷新。\n- **边界与异常**:\n  - 当前工具数量不足时不得释放该工具。\n  - 未连通格不能作为木镐目标。\n  - 未显露格不能跳过遮挡层直接操作第二层真实内容。\n  - 缺失信息：多指同时点击、拖动取消、长按时长、桌面 Hover 预览的精确触发阈值未在 PRD 明确。\n\n### 3.5 挖掘处理流水线与模板钩子系统\n\n- **系统概述**: 将一次点击动作映射到模板生命周期钩子，完成破坏、掉落、补给、推进和状态刷新。\n- **核心流程**:\n  1. `onCellClicked(gridX, gridY)`: 选择目标、校验工具、校验合法性、保存 undo 状态、触发处理流水线。\n  2. `onProcessComplete()`: 当前点击造成耐久变化、炸弹范围破坏、砖块碎裂、飞字、命中音效。\n  3. `onWorldPhase()`: 自动开箱、工具增加、资源入账、积分条积累、阶段提升 toast。\n  4. `onEnemyPhase()`: 空实现。\n  5. `onMoveProcessed()`: 若底部形成真实通路，上卷棋盘并生成新底行；如仍需继续推进则返回 `true` 继续链式处理。\n  6. `onBoardStateChanged()`: HUD 文案刷新、当前深度类型刷新、顶部累计区刷新。\n  7. `onLoseConditionMet()`: 打开结算页并写入本局深度、矿石、材料、金币、宝箱次数。\n- **规则定义**:\n  - `EndlessMineRunScene` 必须实现 `getBoardConfig()`、`getTurnConfig()`、`createEnvironment()`、`createEntities()`、`checkWinCondition()`、`checkLoseCondition()`。\n  - 建议重写 `onCellClicked()`、`onProcessComplete()`、`onWorldPhase()`、`onMoveProcessed()`、`onBoardStateChanged()`、`onLoseConditionMet()`、`onActionInput()`、`onCellHovered()`。\n  - `onEnemyPhase()` 保持空实现。\n- **资源关联**:\n  - 关联棋盘、实体展示、HUD、音效、背景、掉落、结算数据。\n- **边界与异常**:\n  - P0 尽量少建实体，避免和模板能力冲突。\n  - 可选轻量展示实体包括 `ChestMarkerEntity`、`OreHintEntity`、`ToolHintEntity`；若实现成本过高，退化为 Scene 内直接绘制 image/sprite，而非 BoardManager tracked entity。\n\n### 3.6 初始棋盘与新行生成系统\n\n- **系统概述**: 定义首屏固定棋盘与推进一层后的底部新行生成规则。\n- **核心流程**:\n  1. 初始进入时使用固定 `7 x 6` 首屏棋盘保证手感一致。\n  2. 玩家挖掘并在底部形成真实通路。\n  3. 每推进一层，棋盘整体上卷 1 行，删除顶部 1 行，在底部生成 1 行新数据。\n  4. 根据当前深度区调整内容概率和背景。\n- **规则定义**:\n  - 初始 Terrain layer:\n\n```text\n_ _ _ _ _ _ _\n_ * * # * * _\n_ * * * * # _\n_ # * * * * _\n_ * * # * * _\n_ * * * * * _\n```\n\n  - Terrain 约定: `_ = CellType.EMPTY`，`# = CellType.WALL`，`* = CellType.SPECIAL`。\n  - 初始 metadata layer:\n\n```text\nE S O X S S E\nS O S W B X S\nS S O S T W S\nE W S O S S E\nS T S W O S S\nS S O S S B T\n```\n\n  - Metadata 约定: `S = sand`，`O = ore`，`B = blindBox`，`W = indestructible wall`，`T = tool hint brick`，`X = chest`，`E = empty reveal`。\n  - 首屏目标:\n    - 教会玩家“多数格先有遮挡层”。\n    - 保证至少 2 条向下可推进路线。\n    - 首屏允许出现 1 个工具格和 1 个宝箱。\n    - 首屏不出现稀有矿石提示。\n  - 新行生成规则:\n    1. 至少保留 1 条从当前底部可继续向下的可破坏路径。\n    2. 浅红色沙砖是所有深度区中概率最高内容。\n    3. 深度越深，`coverVisible` 概率更高、`WALL` 占比更高、`ore` 更分散、`blindBox` 与 `chest` 概率逐步提高。\n    4. `chest` 仅 biome 2 及以后可出现。\n    5. `blindBox` 与 rare ore 仅 biome 3 及以后可出现。\n    6. 每个深度区内 `supplyTarget` 增长，补给更难积满。\n- **资源关联**:\n  - 关联深度区、背景资源、格子 metadata、补给目标和掉落内容。\n- **边界与异常**:\n  - 生成新行时必须保证玩家始终至少存在一条继续向下扩张的合法操作链，而不是仅存在理论上的视觉通路。\n  - 缺失信息：新行内容的逐格精确概率表未在 PRD 明确。\n\n### 3.7 深度区与背景切换系统\n\n- **系统概述**: 根据当前深度划分矿区阶段，切换背景资源与内容侧重点。\n- **核心流程**:\n  1. 当前深度增加后计算深度区编号和名称。\n  2. 切换对应背景资源。\n  3. 更新 HUD 的当前深度类型。\n  4. 到达稀有矿首次解锁条件时显示一次提示。\n- **规则定义**:\n\n| 深度区编号 | 深度区名称 | 深度范围 | 对应背景资源 | 内容侧重点 |\n|------------|-----------|------------|-------------------|------------------|\n| 1 | 地表矿区 | 1-30 | `mine_surface_bg` | 沙砖多，障碍少，开局教学 |\n| 2 | 深地表 | 31-80 | `mine_mid_bg` | 开始出现宝箱，路径略绕 |\n| 3 | 浅海 | 81-150 | `mine_shallow_sea_bg` | 首次解锁稀有矿、盲盒矿 |\n| 4 | 深海 | 151-260 | `mine_deep_sea_bg` | 宝箱与盲盒概率上升，墙面更密 |\n| 5 | 地心火山泥 | 261+ | `mine_core_bg` | 高价值最高，遮挡和障碍最强 |\n\n  - `rareOreUnlockBiomeIndex = 3`。\n  - `chestUnlockBiomeIndex = 2`。\n  - `blindBoxUnlockBiomeIndex = 3`。\n  - `firstRareToastEnabled = true`。\n- **资源关联**:\n  - 背景资源: `mine_surface_bg`、`mine_mid_bg`、`mine_shallow_sea_bg`、`mine_deep_sea_bg`、`mine_core_bg`。\n  - HUD 文案: `当前深度类型：{biomeName}`。\n- **边界与异常**:\n  - 深度 `261+` 均归入地心火山泥。\n  - 缺失信息：每个深度区内精确难度曲线和精确掉落概率未在 PRD 明确。\n\n### 3.8 掉落、收益与补给积分系统\n\n- **系统概述**: 处理挖掘内容带来的金币、矿石、材料、工具、积分、宝箱和补给奖励。\n- **核心流程**:\n  1. 挖开内容格或宝箱后，根据 `contentType` 结算收益。\n  2. 资源即时入账并播放飞入顶部 HUD 的反馈。\n  3. 推进深度或随机积分掉落增加 `supplyPoints`。\n  4. 当 `supplyPoints >= supplyTarget` 时，扣除一轮目标值或清空一轮目标值，并按当前深度区发放工具补给。\n  5. 刷新工具数量与补给条。\n- **规则定义**:\n  - `sand`: 不直接掉金币或材料，只承担打通与推进。\n  - `ore`: 掉落金币、矿石、材料三选二或三选三。\n  - `blindBox`: 掉落工具、积分、宝箱中的高波动组合。\n  - `chest`: 自动开启，掉落工具和矿石中的一种或多种。\n  - `tool`: 只掉落 `woodPick / rowBomb / areaBomb`。\n  - `emptyReveal`: 仅显露坑道，不掉收益。\n  - 每推进 1 层: `supplyPoints +1`。\n  - 掉落积分奖励时: 立即增加 `supplyPoints`。\n  - `supplyPoints >= supplyTarget` 时:\n    - 清空或扣除一轮目标值。\n    - 根据当前深度区发一份工具补给。\n    - 触发轻量奖励反馈。\n  - 补给奖励表:\n\n| 深度区 | 补给奖励 |\n|------|---------------|\n| 地表矿区 | `woodPick +4` |\n| 深地表 | `woodPick +3`, `rowBomb +1` |\n| 浅海 | `woodPick +3`, `rowBomb +1` |\n| 深海 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |\n| 地心火山泥 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |\n\n- **资源关联**:\n  - 写入 `runLoot.gold`、`runLoot.ore`、`runLoot.material`、`runLoot.openedChests`、`woodPick`、`rowBomb`、`areaBomb`、`supplyPoints`。\n- **边界与异常**:\n  - PRD 中存在“清空或扣除一轮目标值”的二选一描述；缺失信息：最终采用清空还是扣除目标值未唯一明确。\n  - 缺失信息：金币、矿石、材料的精确掉落数量、每类内容的精确概率、宝箱掉落表、盲盒掉落表未在 PRD 明确。\n\n### 3.9 HUD、工具栏与结算展示系统\n\n- **系统概述**: 固定展示顶部状态、顶部收益、底部工具区和结算页数据。\n- **核心流程**:\n  1. 游戏中持续展示顶部状态行、顶部收益行和底部工具区。\n  2. 每次棋盘状态变化后刷新 HUD。\n  3. 主动返场或工具耗尽时进入结算页。\n  4. 结算页展示本局最终深度、深度类型、金币、矿石、材料和开启宝箱次数。\n- **规则定义**:\n  - 顶部状态行固定展示:\n    - `当前深度类型：{biomeName}`\n    - `本局推进：{supplyPoints}/{supplyTarget}`\n    - `本局状态：{runStatus}`\n  - 顶部收益行固定展示:\n    - `金币 {runLoot.gold}`\n    - `矿石 {runLoot.ore}`\n    - `材料 {runLoot.material}`\n  - 底部工具区固定展示:\n    - `[镐子 {woodPick}]`\n    - `[横炸 {rowBomb}]`\n    - `[九炸 {areaBomb}]`\n    - `[背包]`\n    - `[收队返场]`\n  - 结算页展示:\n    - 最终深度\n    - 深度类型\n    - 金币\n    - 矿石\n    - 材料\n    - 本局开启宝箱次数\n- **资源关联**:\n  - 读取运行态字段和结算数据。\n  - 使用 `GameOverUIScene` 作为“本局收获结算”承载页。\n- **边界与异常**:\n  - `GameOverUIScene` 文案需从失败改为结算。\n  - 缺失信息：背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互未在 PRD 明确。\n\n### 3.10 资源注册与音画反馈系统\n\n- **系统概述**: 继承用户 PRD 中的背景、瓦片、图标、宝箱、提示标记和音频资源需求。\n- **核心流程**:\n  1. 按深度区加载或切换对应背景。\n  2. 用 tileset 表达墙面、沙砖、矿砖、盲盒砖、不可破坏岩石、空洞、宝箱、矿石提示和工具提示。\n  3. 点击、破坏、炸弹、奖励、深度提升时播放对应 SFX/BGM。\n- **规则定义**:\n\n| type | key | description | params |\n|------|-----|-------------|--------|\n| background | `title_bg` | warm cartoon mining camp entrance with wood scaffold, lantern glow, elevator cage, FRONT VIEW, mobile game title backdrop | resolution: `1536*1024` |\n| background | `mine_surface_bg` | bright near-surface mine shaft with dusty brown walls, wood braces, soft sunlight spill, layered tunnel depth | resolution: `1536*1024` |\n| background | `mine_mid_bg` | deeper earth mine with cooler rocks, denser scaffold, dim lamps, stronger dust haze and depth shadows | resolution: `1536*1024` |\n| background | `mine_shallow_sea_bg` | underground shallow-sea cavern mine, teal moisture glow, wet stone, shells and mineral veins | resolution: `1536*1024` |\n| background | `mine_deep_sea_bg` | dark deep-sea cavern shaft, blue-black humidity, rare crystal gleam, heavy contrast | resolution: `1536*1024` |\n| background | `mine_core_bg` | volcanic mud-core mine with ember cracks, red heat bloom, dense smoke and unstable rock | resolution: `1536*1024` |\n| tileset | `mine_blocks_tiles` | chunky mining tiles for wall cover, sand brick, stone ore, blind-box brick, indestructible rock, empty tunnel pit, chest, ore hint, tool hint | tileset_size: `3` |\n| image | `hud_pickaxe_icon` | simple mobile UI icon for wooden pickaxe count, warm wood and iron head | - |\n| image | `hud_row_bomb_icon` | mobile UI icon for horizontal bomb, long stick explosive with fuse | - |\n| image | `hud_area_bomb_icon` | mobile UI icon for 3x3 bomb, compact satchel explosive with fuse | - |\n| image | `chest_closed` | chunky treasure chest for mine grid, brass corners, readable from top-front angle | - |\n| image | `ore_hint_marker` | glowing ore marker embedded in block center, gem sparkle, readable at small size | - |\n| image | `tool_hint_marker` | glowing tool marker embedded in block center, wrench and pickaxe motif | - |\n| audio | `mine_hit_sfx` | crisp single pickaxe hit on dirt and stone | audioType: `sfx` |\n| audio | `mine_break_sfx` | satisfying block crumble with debris fall | audioType: `sfx` |\n| audio | `mine_bomb_row_sfx` | horizontal blasting explosion with rolling debris | audioType: `sfx` |\n| audio | `mine_bomb_area_sfx` | compact heavy area explosion with echo | audioType: `sfx` |\n| audio | `mine_reward_sfx` | reward pop with coin and gem sparkle | audioType: `sfx` |\n| audio | `mine_depth_up_sfx` | short celebratory progression sting for entering deeper layer | audioType: `sfx` |\n| audio | `mine_bgm` | light but addictive mining expedition music, playful groove with tension rising in deeper zones | audioType: `bgm`, duration: `20` |\n\n- **资源关联**:\n  - `createEnvironment()`、点击反馈、破坏反馈、资源飞入、深度提升、HUD 图标。\n- **边界与异常**:\n  - 缺失信息：音量、静音入口、音频失败降级、资源加载失败占位表现未在 PRD 明确。\n\n### 3.11 实施路线与验收映射系统\n\n- **系统概述**: 继承用户 PRD 的开发任务和验收要求，保证 P0 MVP 可接入模板流程。\n- **核心流程 / 规则定义**:\n  1. 更新 `src/LevelManager.ts`: 将 `LEVEL_ORDER` 改为 `['EndlessMineRunScene']`。\n  2. 更新 `src/main.ts`: 导入并注册 `EndlessMineRunScene`，保留 `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。\n  3. 更新 `src/gameConfig.json`: 合并 `gridConfig`、`mineRunConfig`、`mineLayerConfig`、`mineDepthConfig`、`mineRewardConfig`、`mineToolRewardConfig`、`mineMetaConfig`。\n  4. 更新 `src/scenes/TitleScreen.ts`: 标题替换为“无限矿井”，入口按钮文案改为“进入无尽矿井”。\n  5. 复制 `_TemplateGridLevel.ts` 为 `EndlessMineRunScene.ts`，场景 key 改为 `EndlessMineRunScene`。\n  6. `getBoardConfig()` 设定 `7x6` 可视棋盘、首屏 terrain layer 和初始 metadata。\n  7. `getTurnConfig()` 使用 `mode: 'freeform'`，`maxMoves: -1`。\n  8. `createEnvironment()` 根据 biome 切换背景图，绘制棋盘、深度线、补给条和深度牌。\n  9. `createEntities()` P0 可保持空实现，或仅创建宝箱/提示 marker 的轻量展示对象。\n  10. `onCellClicked()` 实现木镐、横排炸弹、九宫格炸弹、不可敲砖无效反馈、连通合法性校验、炸弹施放落点合法性校验。\n  11. `onProcessComplete()` 处理砖块减耐久、显露内容、遮挡层先破再显露、炸弹范围命中、飞字和音效。\n  12. `onWorldPhase()` 处理宝箱自动开启、资源即时入账、积分条增长、补给发放、首次稀有矿 toast。\n  13. `onMoveProcessed()` 当底部形成可推进通路时，上卷 1 行并生成新底行；如仍需继续推进则返回 `true`。\n  14. `onBoardStateChanged()` 同步刷新 `UIScene` 所需状态文案与顶部收获区。\n  15. `checkWinCondition()` 永远返回 `false`。\n  16. `checkLoseCondition()` 当三类工具都为 `0` 时返回 `true`。\n  17. `onLoseConditionMet()` 跳转到 `GameOverUIScene`，将其作为“本局收获结算”使用。\n  18. `GameOverUIScene` 文案从失败改为结算，展示深度与本局收益。\n  19. 可选复制 `_TemplateEntity.ts` 为 `ChestMarkerEntity.ts`、`OreHintEntity.ts`、`ToolHintEntity.ts`。\n- **验收要求**:\n  - `TitleScreen` 的入口目标、`main.ts` 注册和 `LevelManager.LEVEL_ORDER[0]` 一致。\n  - 最终 `gameConfig.json` 保留 `screenSize`、`debugConfig`、`renderConfig`。\n  - 工具耗尽自动结算。\n  - 主动返场结算。\n  - 炸弹不破坏不可敲砖。\n  - 木镐只能点击与当前坑道连通的格。\n  - 炸弹允许波及未连通可视格，但施放落点必须是已连通的 `CellType.EMPTY` 坑道格。\n  - 最底行与其他可视格完全同规则。\n  - 至少始终存在一条向下路径。\n- **边界与异常**:\n  - PRD 中标记可选的实体复制不作为 P0 必须项。\n\n---\n\n## 四、数值平衡\n\n> 本节严格继承用户 PRD 已明确数值。用户 PRD 未明确的数值按特殊要求标注“缺失信息”，不自行补默认值。\n\n### 4.1 关键数值表\n\n| 参数 | 值 | 来源 | 设计意图 / 说明 |\n|------|---|------|---------|\n| 运行分辨率 | `1152 x 768` | 继承 | 移动端优先 Demo 画布规格。 |\n| 背景资源分辨率 | `1536*1024` | 继承 | 用于标题与各深度矿区背景。 |\n| 可视棋盘宽度 | `7` | 继承 | 移动端可读的横向格数。 |\n| 可视棋盘高度 | `6` | 继承 | 单屏可操作深度。 |\n| 格子尺寸 | `88 px` | 继承 | 适配 `7x6` 棋盘。 |\n| `maxMoves` | `-1` | 继承 | 无行动次数上限，直到工具耗尽或玩家退出。 |\n| 默认动画时长 | `180 ms` | 继承 | 单元格动画节奏。 |\n| 输入防抖 | `120 ms` | 继承 | 降低快速点击误触。 |\n| 开局体力消耗 | `1` | 继承 | 每局入口消耗。 |\n| 初始木镐 | `20` | 继承 | 开局基础续航。 |\n| 初始横排炸弹 | `2` | 用户变更 | 进入游戏后横排炸弹初始数量为 2，后续仍可通过局内奖励获得。 |\n| 初始九宫格炸弹 | `2` | 用户变更 | 进入游戏后九宫格炸弹初始数量为 2，后续仍可通过局内奖励获得。 |\n| 推进 1 行增加深度 | `1` | 继承 | 深度与棋盘上卷绑定。 |\n| 深度线展示行 | `4` | 继承 | 显示在第 4 行和第 5 行之间。 |\n| 结算延迟 | `600 ms` | 继承 | 结束后进入结算页的延迟。 |\n| 遮挡墙耐久 | `1` | 继承 | 深红遮挡层一次破坏。 |\n| 沙砖耐久 | `1` | 继承 | 基础砖一次破坏。 |\n| 矿砖耐久 | `2` | 继承 | 矿砖需要更多消耗。 |\n| 盲盒砖耐久 | `1` | 继承 | 盲盒内容快速反馈。 |\n| 不可破坏砖占位耐久 | `999` | 继承 | 不被常规工具破坏。 |\n| 炸弹影响不可破坏砖 | `false` | 继承 | 保持墙体边界。 |\n| 空格编码 | `0` | 继承 | `CellType.EMPTY`。 |\n| 墙格编码 | `1` | 继承 | `CellType.WALL`。 |\n| 预留地板编码 | `2` | 继承 | `CellType.FLOOR`。 |\n| 可破坏内容编码 | `6` | 继承 | `CellType.SPECIAL`。 |\n| 地表矿区深度 | `1-30` | 继承 | 开局教学。 |\n| 深地表深度 | `31-80` | 继承 | 宝箱开始出现。 |\n| 浅海深度 | `81-150` | 继承 | 稀有矿与盲盒矿首次解锁。 |\n| 深海深度 | `151-260` | 继承 | 宝箱、盲盒、墙面密度上升。 |\n| 地心火山泥深度 | `261+` | 继承 | 高价值与最高阻碍。 |\n| 稀有矿解锁深度区 | `3` | 继承 | 浅海开始。 |\n| 宝箱解锁深度区 | `2` | 继承 | 深地表开始。 |\n| 盲盒砖解锁深度区 | `3` | 继承 | 浅海开始。 |\n| 首次稀有矿提示 | `true` | 继承 | 只显示一次解锁提示。 |\n| 每推进 1 层补给积分 | `+1` | 继承 | 推进转化为续航资源。 |\n| 随机积分掉落最小值 | `1` | 继承 | 积分奖励下限。 |\n| 随机积分掉落最大值 | `4` | 继承 | 积分奖励上限。 |\n| 基础补给目标 | `12` | 继承 | 首个深度区补给条目标。 |\n| 每深度区补给目标增量 | `4` | 继承 | 深层补给更难积满。 |\n| 金币飞字时长 | `550 ms` | 继承 | 金币反馈表现。 |\n| 资源飞入 HUD 时长 | `420 ms` | 继承 | 资源反馈表现。 |\n| 早期补给木镐奖励 | `+4` | 继承 | 地表矿区补给。 |\n| 中深层补给横炸奖励 | `+1` | 继承 | 深地表/浅海/深海/地心补给。 |\n| 深层补给九炸奖励 | `+1` | 继承 | 深海/地心补给。 |\n| 工具提示木镐奖励 | `+3` | 继承 | 工具格木镐收益。 |\n| 工具提示横炸奖励 | `+1` | 继承 | 工具格横炸收益。 |\n| 工具提示九炸奖励 | `+1` | 继承 | 工具格九炸收益。 |\n| 木镐单次消耗 | `1` | 继承 | 基础点击成本。 |\n| 木镐单次伤害 | `1` | 继承 | 与耐久结合。 |\n| 横排炸弹单次消耗 | `1` | 继承 | 横排范围工具成本。 |\n| 九宫格炸弹单次消耗 | `1` | 继承 | `3x3` 范围工具成本。 |\n| 横排炸弹命中范围 | 当前行全部可破坏格 | 继承 | 行范围爆破。 |\n| 九宫格炸弹命中范围 | 目标 `3x3` 全部可破坏格 | 继承 | 区域爆破。 |\n| BGM 时长 | `20 s` | 继承 | 循环音乐素材时长。 |\n| 金币、矿石、材料精确掉落数量 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 各内容类型出现概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 宝箱/盲盒掉落概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 社交/排行榜奖励数值 | 缺失信息 | 用户 PRD 未提及 | 不新增系统。 |\n\n### 4.2 资源流转\n\n```text\n开局输入:\n  startEnergyCost = 1\n  startWoodPick = 20\n  startRowBomb = 2\n  startAreaBomb = 2\n\n单次行动消耗:\n  pick 点击合法可破坏格 -> woodPick -1 -> 目标格 durability -1\n  rowBomb 合法施放 -> rowBomb -1 -> 当前行全部可破坏格受影响\n  areaBomb 合法施放 -> areaBomb -1 -> 目标 3x3 可破坏格受影响\n  点击 WALL -> 不消耗工具\n\n行动产出:\n  sand -> 打通与推进，不直接掉金币或材料\n  ore -> 金币、矿石、材料三选二或三选三\n  blindBox -> 工具、积分、宝箱中的高波动组合\n  chest -> 自动开启，掉落工具和矿石中的一种或多种\n  tool -> woodPick / rowBomb / areaBomb\n  emptyReveal -> 显露坑道，不掉收益\n\n推进产出:\n  底部形成真实通路 -> currentDepth + 1 -> supplyPoints + 1 -> 棋盘上卷 1 行并生成新底行\n\n补给闭环:\n  supplyPoints >= supplyTarget -> 清空或扣除一轮目标值 -> 按当前深度区发工具补给 -> 延长挖掘续航\n\n结束输出:\n  工具耗尽或主动返场 -> GameOverUIScene 结算 -> 展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数\n```\n\n- **数值验算（继承 PRD 可验算部分）**:\n  - 开局拥有 `20` 次木镐基础行动、`2` 次横排炸弹和 `2` 次九宫格炸弹；若不获得任何工具或补给，最多消耗完这些初始工具后触发工具耗尽结算。\n  - 地表矿区补给目标初始为 `12`，每推进 1 层获得 `1` 积分；若没有随机积分掉落，至少推进 `12` 层可触发一次地表矿区补给，获得 `woodPick +4`。\n  - 深度区补给目标随 biome 每级 `+4`，目标序列按已明确配置为 `12 / 16 / 20 / 24 / 28`。\n  - 缺失信息：`supplyPoints >= supplyTarget` 后是清空全部积分还是扣除一轮目标值，PRD 未唯一明确，因此不能计算溢出积分保留策略。\n  - 缺失信息：掉落金币、矿石、材料、工具和积分的概率与数量表未明确，因此不能完成完整经济闭环期望值验算。\n\n### 4.3 成长曲线\n\n| 阶段 | 深度范围 | 已明确变化 | 数值 |\n|------|----------|------------|------|\n| 前期 | `1-30` 地表矿区 | 沙砖多、障碍少、开局教学；补给为木镐。 | 补给目标 `12`；补给 `woodPick +4`。 |\n| 中前期 | `31-80` 深地表 | 开始出现宝箱，路径略绕。 | 补给目标 `16`；补给 `woodPick +3`, `rowBomb +1`。 |\n| 中期 | `81-150` 浅海 | 首次解锁稀有矿、盲盒矿。 | 补给目标 `20`；补给 `woodPick +3`, `rowBomb +1`。 |\n| 后期 | `151-260` 深海 | 宝箱与盲盒概率上升，墙面更密。 | 补给目标 `24`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |\n| 深后期 | `261+` 地心火山泥 | 高价值最高，遮挡和障碍最强。 | 补给目标 `28`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |\n\n### 4.4 概率公示\n\n| 事件 | 概率 | 来源 | 说明 |\n|------|------|------|------|\n| 宝箱出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 2 及以后可出现。 |\n| 盲盒砖出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后可出现。 |\n| 稀有矿出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后解锁。 |\n| WALL 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深占比更高。 |\n| ore 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深更分散。 |\n| coverVisible 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深概率更高。 |\n| randomPointDrop 概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确单次掉落积分范围为 `1-4`。 |\n| ore 掉落金币/矿石/材料组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确三选二或三选三。 |\n| blindBox 掉落工具/积分/宝箱组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确高波动组合。 |\n| chest 掉落工具/矿石组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确一种或多种。 |\n\n---\n\n## 五、核心状态机\n\n### 5.1 状态枚举\n\n| 状态 | 含义 | 进入条件 | 退出条件 |\n|------|------|---------|---------|\n| `preloading` | 资源预加载 | 启动项目进入 `Preloader` | 资源加载完成后进入 `title` |\n| `title` | 标题页 | `Preloader` 完成 | 点击“进入无尽矿井”进入 `run_initializing` |\n| `run_initializing` | 单局初始化 | 从 `TitleScreen` 进入 `EndlessMineRunScene` | 初始化棋盘、工具、深度、补给、收益后进入 `running_idle` |\n| `running_idle` / `推进中` | 等待玩家操作 | 单局初始化完成或一次处理流水线结束 | 合法点击进入 `processing_action`；主动返场进入 `settling_manual`; 工具耗尽进入 `settling_exhausted` |\n| `processing_action` | 处理一次点击动作 | 合法木镐/炸弹点击并调用 `runProcessingPipeline()` | `onProcessComplete()` 完成后进入 `world_phase` |\n| `world_phase` | 世界阶段结算 | 一次点击破坏结算完成 | 宝箱、资源、补给、toast 处理完成后进入 `advance_check` |\n| `advance_check` | 推进检测 | `onWorldPhase()` 完成 | 底部形成真实通路时进入 `rolling_board`；否则进入 `state_refresh` |\n| `rolling_board` | 棋盘上卷与新行生成 | `onMoveProcessed()` 判断可推进 | 上卷 1 行并生成新底行后，如果仍需继续推进则保持该状态继续链式处理；否则进入 `state_refresh` |\n| `state_refresh` | 刷新展示与结束检测 | 推进检测或上卷结束 | HUD 刷新后，若工具耗尽进入 `settling_exhausted`，否则回到 `running_idle` |\n| `settling_manual` / `结算中` | 主动返场结算 | 点击 `[收队返场]` | 设置 `runStatus = 结算中` 并进入 `settlement_delay` |\n| `settling_exhausted` / `工具耗尽` | 工具耗尽结算 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 设置工具耗尽状态并进入 `settlement_delay` |\n| `settlement_delay` | 结算前延迟 | 主动返场或工具耗尽 | `600ms` 后进入 `settlement_scene` |\n| `settlement_scene` | 本局收获结算页 | 跳转 `GameOverUIScene` | 缺失信息：结算页返回标题页、再来一局或退出路径未在 PRD 明确 |\n\n### 5.2 运行态 `runStatus` 枚举\n\n| `runStatus` | 含义 | 进入条件 | 退出条件 |\n|-------------|------|----------|----------|\n| `推进中` | 单局正常推进 | 初始化完成，且工具未耗尽，且未主动返场 | 工具耗尽或主动返场 |\n| `工具耗尽` | 无工具可继续行动 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 进入结算跳转 |\n| `结算中` | 主动返场或正在结算 | 点击 `[收队返场]` 或结算流程开始 | 进入 `GameOverUIScene` |\n\n### 5.3 状态流转图\n\n```text\nPreloader\n  -> TitleScreen\n  -> EndlessMineRunScene.run_initializing\n  -> EndlessMineRunScene.running_idle / 推进中\n\nrunning_idle / 推进中\n  -> 合法木镐点击 -> processing_action\n  -> 合法横排炸弹释放 -> processing_action\n  -> 合法九宫格炸弹释放 -> processing_action\n  -> 点击 WALL 或非法目标 -> running_idle / 推进中（播放无效反馈，不消耗工具）\n  -> 点击 收队返场 -> settling_manual / 结算中\n  -> 工具耗尽 -> settling_exhausted / 工具耗尽\n\nprocessing_action\n  -> onProcessComplete\n  -> world_phase\n  -> onWorldPhase\n  -> advance_check\n\nadvance_check\n  -> 底部形成真实通路 -> rolling_board\n  -> 未形成推进通路 -> state_refresh\n\nrolling_board\n  -> 上卷 1 行 + 生成新底行 + currentDepth + 1 + supplyPoints + 1\n  -> 如继续触发通路 -> rolling_board\n  -> 链式处理结束 -> state_refresh\n\nstate_refresh\n  -> onBoardStateChanged\n  -> 工具仍可用 -> running_idle / 推进中\n  -> woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0 -> settling_exhausted / 工具耗尽\n\nsettling_manual / 结算中\n  -> settlementDelayMs 600\n  -> GameOverUIScene（本局收获结算）\n\nsettling_exhausted / 工具耗尽\n  -> settlementDelayMs 600\n  -> GameOverUIScene（本局收获结算）\n```\n\n---\n\n## 六、信息架构\n\n### 6.1 页面层级结构\n\n```text\nGame App\n├── Preloader\n├── TitleScreen\n│   └── 入口按钮：进入无尽矿井\n├── EndlessMineRunScene\n│   ├── 顶部状态行\n│   │   ├── 当前深度类型：{biomeName}\n│   │   ├── 本局推进：{supplyPoints}/{supplyTarget}\n│   │   └── 本局状态：{runStatus}\n│   ├── 顶部收益行\n│   │   ├── 金币 {runLoot.gold}\n│   │   ├── 矿石 {runLoot.ore}\n│   │   └── 材料 {runLoot.material}\n│   ├── 矿井棋盘 7 x 6\n│   │   ├── EMPTY 坑道格\n│   │   ├── WALL 不可敲砖\n│   │   └── SPECIAL 可破坏内容格 + metadata\n│   ├── 深度线\n│   ├── 补给条\n│   ├── 深度牌\n│   └── 底部工具区\n│       ├── [镐子 {woodPick}]\n│       ├── [横炸 {rowBomb}]\n│       ├── [九炸 {areaBomb}]\n│       ├── [背包]\n│       └── [收队返场]\n└── GameOverUIScene（本局收获结算）\n    ├── 最终深度\n    ├── 深度类型\n    ├── 金币\n    ├── 矿石\n    ├── 材料\n    └── 本局开启宝箱次数\n```\n\n### 6.2 页面流程图\n\n```text\n启动\n  -> Preloader\n  -> TitleScreen\n  -> 点击“进入无尽矿井”\n  -> EndlessMineRunScene\n     -> 挖掘 / 炸弹 / 补给 / 深度推进循环\n     -> 点击“收队返场” -> GameOverUIScene（本局收获结算）\n     -> 工具耗尽 -> GameOverUIScene（本局收获结算）\n```\n\n- 缺失信息：结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航未在 PRD 明确。\n\n---\n\n## 七、功能清单\n\n1. `grid_logic` + `freeform` 模板接入。\n2. `1152 x 768` 分辨率配置。\n3. `7 x 6` 可视棋盘。\n4. `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene` 场景流转。\n5. `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。\n6. 标题替换为“无限矿井”。\n7. 入口按钮文案改为“进入无尽矿井”。\n8. `EndlessMineRunScene` 继承 `BaseGridScene`。\n9. `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` 保留注册。\n10. 不创建玩家可移动实体。\n11. 不创建敌人实体。\n12. 不创建移动收集物实体。\n13. 可选宝箱、矿石提示、工具提示轻量展示实体。\n14. Terrain layer 编码: EMPTY、WALL、FLOOR、SPECIAL。\n15. SPECIAL metadata: 遮挡层、内容类型、耐久、矿石提示、工具提示、掉落表编号。\n16. 固定首屏 Terrain layer。\n17. 固定首屏 metadata layer。\n18. 初始木镐 `20`、横排炸弹 `2`、九宫格炸弹 `2`。\n19. 默认工具 `pick`。\n20. 木镐点击合法格消耗 `1` 木镐并造成 `1` 伤害。\n21. 横排炸弹消耗 `1` 并命中当前行全部可破坏格。\n22. 九宫格炸弹消耗 `1` 并命中目标 `3x3` 全部可破坏格。\n23. 点击 WALL 不消耗工具并播放无效反馈。\n24. 炸弹不破坏 WALL。\n25. 木镐只能点击与当前坑道连通的格。\n26. 连通判定采用四方向邻接。\n27. 遮挡层必须先破坏，不能越层伤害真实内容。\n28. 炸弹可波及未连通但可见格，但施放落点必须是已连通的 `CellType.EMPTY` 坑道格。\n29. 最底行与其他行同规则，不是预览层。\n30. 每推进一层，棋盘上卷 1 行并生成新底行。\n31. 新行至少保留 1 条从当前底部继续向下的可破坏路径。\n32. 深度区系统: 地表矿区、深地表、浅海、深海、地心火山泥。\n33. 按深度切换背景资源。\n34. 稀有矿 biome 3 解锁。\n35. 宝箱 biome 2 解锁。\n36. 盲盒 biome 3 解锁。\n37. 首次稀有矿 toast。\n38. sand、ore、blindBox、chest、tool、emptyReveal 收益规则。\n39. 每推进 1 层 `supplyPoints +1`。\n40. 随机积分掉落范围 `1-4`。\n41. `supplyPoints >= supplyTarget` 时发放当前深度区工具补给。\n42. 基础补给目标 `12`，每深度区 `+4`。\n43. 顶部状态行展示当前深度类型、本局推进、本局状态。\n44. 顶部收益行展示金币、矿石、材料。\n45. 底部工具区展示镐子、横炸、九炸、背包、收队返场。\n46. 无通关条件。\n47. 主动返场结算退出。\n48. 工具耗尽自动结算退出。\n49. `GameOverUIScene` 改为“本局收获结算”语义。\n50. 结算页展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数。\n51. 音画资源注册: 标题背景、五个矿区背景、矿块 tileset、HUD 工具图标、宝箱、矿石提示、工具提示、挖掘/破坏/炸弹/奖励/深度提升 SFX、BGM。\n52. 验收: 场景注册一致、配置合并保留基础配置、工具耗尽自动结算、主动返场结算、炸弹不破坏不可敲砖、木镐连通限制、炸弹落点必须在已连通坑道格、最底行同规则、始终存在向下路径。\n\n---\n\n## 八、视觉与情绪基调（视觉锚点）\n\n> 以下内容仅继承桥接文档中的视觉锚点与概念图引用，不参与业务语义判定。\n\n移动端卡通矿井风格，强调厚重泥土体块、矿灯暖光、分层矿洞背景和随深度变化的色带。首层偏明亮暖棕与木架矿灯，中层转向更冷的岩层与尘雾，浅海与深海矿区加入青蓝湿润洞穴光感，地心火山泥区域使用红色热光、烟雾与不稳定岩层。整体反馈应突出点击后的挖空下陷、砖块碎裂、资源飞入顶部 HUD 的爽感。\n\n### 视觉锚点\n\n- 主视觉锚点: 方案A 主概念图\n- 风格传递方式: 使用下方 `selected_concept_url` 作为后续 img2img seed-ref；本文档不从 PNG 中提取 hex、材质、光影等文字化风格描述。\n- PRD 未明确: 除用户 PRD / GDD 与脑暴方案已明确内容外的额外美术细节、色号、材质参数、构图参数和镜头参数。\n\n### 概念图引用\n\nselected_concept_path: \"assets/refs/concepts-brainstorm/concept_a_main.png\"  \nselected_concept_url: \"https://game.kg.qq.com/walle-img-gen/output/bj21BQO6FHyYspbvhm_W4.png\"\n\n---\n\n## 九、用户 PRD 覆盖清单摘要\n\n| 用户 PRD 章节 | 覆盖状态 | 本 GDD 覆盖位置 |\n|--------------|----------|----------------|\n| 0. 技术架构 | 已覆盖 | 二、三、五、六、七 |\n| 0.1 模板归类与运行方式 | 已覆盖 | 二、三.1、七 |\n| 0.2 场景流转 | 已覆盖 | 三.1、五、六 |\n| 0.3 场景键名清单 | 已覆盖 | 三.1、七 |\n| 0.4 `LevelManager.LEVEL_ORDER` | 已覆盖 | 三.1、三.11、七 |\n| 0.5 P0 技术说明 | 已覆盖 | 二、三.2、三.5、三.11、五 |\n| 1. 视觉风格与资源注册表 | 已覆盖 | 三.10、八 |\n| 2. 游戏配置 | 已覆盖 | 四.1、四.2、四.3 |\n| 3. 实体与场景结构 | 已覆盖 | 三.2、三.3、三.4、三.5 |\n| 3.1 场景职责 | 已覆盖 | 三.5、三.11 |\n| 3.2 运行时状态模型 | 已覆盖 | 三.2、五.2 |\n| 3.3 棋盘编码方式 | 已覆盖 | 三.3 |\n| 3.4 实体策略 | 已覆盖 | 三.5、七 |\n| 3.5 输入与点击规则 | 已覆盖 | 三.4、五、七 |\n| 3.6 结束与结算规则 | 已覆盖 | 三.1、三.9、五 |\n| 3.7 钩子与功能映射 | 已覆盖 | 三.5、三.11 |\n| 4. 关卡与内容设计 | 已覆盖 | 三.6、三.7、三.8、四 |\n| 4.1 初始可视棋盘 | 已覆盖 | 三.6 |\n| 4.2 新行生成规则 | 已覆盖 | 三.6、三.7 |\n| 4.3 可挖掘范围与目标合法性 | 已覆盖 | 三.4、七 |\n| 4.4 深度区表 | 已覆盖 | 三.7、四.3 |\n| 4.5 掉落与收益规则 | 已覆盖 | 三.8、四.2、四.4 |\n| 4.6 补给积分规则 | 已覆盖 | 三.8、四.1、四.2、四.3 |\n| 4.7 界面展示内容 | 已覆盖 | 三.9、六、七 |\n| 4.8 P0 结束与退出内容 | 已覆盖 | 三.9、五、六 |\n| 5. 实施路线图 | 已覆盖 | 三.11、七 |\n| 约定与假设 | 已覆盖 | 二、三.1、三.2 |\n\n### 明确标注的缺失信息\n\n1. 目标用户画像、年龄段、地区、付费倾向或具体使用场景。\n2. 断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理。\n3. 社交、分享、排行榜、好友互动、邀请、外部活动结算。\n4. 暂停页在本模式中的具体入口、返回、退出和结算关系。\n5. 主矿区真实货币、体力与宿主系统接口、扣减失败回滚、跨局持久化。\n6. `rewardTableId` 完整枚举、每个掉落表的精确内容和概率。\n7. 新行内容逐格精确概率表。\n8. 金币、矿石、材料精确掉落数量。\n9. 宝箱掉落表、盲盒掉落表、各内容类型出现概率。\n10. `supplyPoints >= supplyTarget` 后清空全部积分还是扣除一轮目标值的唯一规则。\n11. 背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互。\n12. 音量、静音入口、音频失败降级、资源加载失败占位表现。\n13. 结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航。\n",
      "size": 47022,
      "truncated": false
    },
    {
      "id": "design-plan",
      "label": "设计方案",
      "type": "md",
      "file": "架构-设计方案.md",
      "stepId": 5,
      "exists": true,
      "path": "架构-设计方案.md",
      "content": "# 《无限矿井》无尽模式 设计实施方案\n\n> 阶段: Design Spec  \n> 日期: 2026-06-21  \n> 基于: 需求-最终PRD.md\n\n> ⚠️ **本阶段不写视觉风格文字描述**。画风/配色/质感/光影/氛围词**全部不在本文档定义**：\n> - 精确风格由 Draft Concept §概念图引用 中的 `selected_concept_url` 作为 img2img seed-ref 传递给 PAGE_GEN / ASSET_GEN\n> - 精确视觉数值（hex / 间距 / 圆角 / 阴影）由 READ_BACK 阶段读 page 图回填到 `设计-元素实现清单.md`\n> 本文档只负责“结构语义”：UI 拓扑、ASCII 布局、组件层级、动画参数。\n\n> ⚠️ **视觉审批覆盖声明**：`需求-最终PRD.md` 中仍包含旧的 `1152 x 768`、`1536*1024` 或横向资源描述。用户视觉审批阶段已覆盖为**竖屏移动端单屏设计目标**；本架构阶段不修改 PRD 文件，但所有页面 page 图、page prompt、元素实现清单场景画布比例均以 `9:16`（推荐 768×1152）为唯一主目标，不保留横屏/宽屏主方案。\n\n## UI 拓扑\n\n### 元素提取表\n\n> 完整元素信息（ID、坐标、尺寸、层级、实现方式、文件名、复用关系）见 `设计-元素实现清单.md`（产物三）。  \n> 设计方案不再内联元素提取表，统一由元素实现清单作为 SSOT。\n\n### 页面结构 — ASCII 布局草图\n\n> 以下 ASCII 布局从 `需求-最终PRD.md` 的功能清单、信息架构和系统设计推导：标题页入口、7×6 矿井棋盘、顶部状态/收益、深度/补给信息、底部工具区、结算页数据。  \n> 页面草图不画弹窗/浮层；PRD 未定义业务弹窗，本阶段不创建弹窗母版。  \n> ASCII 图只表达结构/相对位置/区域比例，不标精确像素尺寸；精确几何由 READ_BACK 阶段读 page 图实测补齐。  \n> 所有页面默认态画布均为**竖屏移动端单屏**：`9:16`，推荐 `768×1152`。RunPage 采用纵向堆叠：顶部 HUD → 棋盘核心 → 深度/补给 → 工具栏。\n\n#### TitlePage / title（标题页默认态）\n\n```text\n┌──────────────────────────────────┐ 9:16 mobile page / recommended 768×1152\n│ TitleBackground                  │\n│                                  │ 顶部留出安全区\n│                                  │\n│        ┌────────────────┐        │\n│        │   TitleLogo     │        │  标题区 ~28%\n│        └────────────────┘        │\n│                                  │\n│                                  │  中部留白/场景展示 ~42%\n│                                  │\n│        ┌────────────────┐        │\n│        │ StartMineButton │        │  底部入口区 ~18%\n│        └────────────────┘        │\n│                                  │\n└──────────────────────────────────┘\n```\n\n#### RunPage / endless_run（无尽矿井主游玩界面默认态）\n\n```text\n┌──────────────────────────────────┐ 9:16 mobile page / recommended 768×1152\n│ TopStatusBar                     │ 顶部状态行 ~8%\n│ ┌──────────┐ ┌──────────┐ ┌────┐ │\n│ │深度类型   │ │推进/补给   │ │状态│ │\n│ └──────────┘ └──────────┘ └────┘ │\n├──────────────────────────────────┤\n│ TopLootBar                       │ 顶部收益行 ~7%\n│ ┌──────┐ ┌──────┐ ┌──────┐       │\n│ │金币   │ │矿石   │ │材料   │       │\n│ └──────┘ └──────┘ └──────┘       │\n├──────────────────────────────────┤\n│ GameViewport / MineBoardCanvas   │ 棋盘核心 ~50-55%，Canvas ≤屏幕 60%\n│        ┌────────────────┐        │\n│        │                │        │\n│        │    7 × 6 Grid   │        │\n│        │ EMPTY/WALL/     │        │\n│        │ SPECIAL metadata│        │\n│        │ 深度线：第4/5行间│        │\n│        │                │        │\n│        └────────────────┘        │\n├──────────────────────────────────┤\n│ DepthSupplyStack                 │ 深度/补给信息 ~12%\n│ ┌──────────────┐ ┌─────────────┐ │\n│ │ DepthPanel    │ │ SupplyPanel │ │\n│ │ 当前层数/区名  │ │ 积分/目标/条 │ │\n│ └──────────────┘ └─────────────┘ │\n├──────────────────────────────────┤\n│ ToolBar                          │ 底部工具区 ~18%，单屏内固定\n│ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌──┐ │\n│ │镐子│ │横炸│ │九炸│ │背包│ │返场│ │\n│ │ n  │ │ n  │ │ n  │ │    │ │    │ │\n│ └────┘ └────┘ └────┘ └────┘ └──┘ │\n└──────────────────────────────────┘\n```\n\nRunPage 单屏安排约束：\n- 顶部状态与收益合计控制在约 15%，用于展示 `biomeName`、`supplyPoints/supplyTarget`、`runStatus`、金币、矿石、材料。\n- 7×6 棋盘为页面主视觉中心，使用 Pixi Canvas 承载，Canvas 高度目标不超过屏幕 60%，棋盘按容器等比缩放。\n- 原横屏左右侧栏改为竖屏下方 `DepthSupplyStack`，将深度牌与补给条横向并排或窄屏时纵向压缩，但仍保持单屏内可见。\n- 底部工具栏固定在页面下方，容纳镐子、横炸、九炸、背包、收队返场五个入口；如文案过长，按钮内部优先使用图标 + 数值短标签。\n\n#### SettlementPage / settlement（本局收获结算页默认态）\n\n```text\n┌──────────────────────────────────┐ 9:16 mobile page / recommended 768×1152\n│ SettlementBackground             │\n│                                  │ 顶部安全区\n│        ┌────────────────┐        │\n│        │ SettlementTitle │        │ 标题区 ~18%\n│        └────────────────┘        │\n│                                  │\n│        ┌────────────────┐        │\n│        │ ResultPanel     │        │ 结果面板 ~52%\n│        │ 最终深度         │        │\n│        │ 深度类型         │        │\n│        │ 金币/矿石/材料   │        │\n│        │ 本局开启宝箱次数 │        │\n│        └────────────────┘        │\n│                                  │\n│        ┌───────┐ ┌───────┐       │\n│        │再来一局│ │返回标题│       │ 底部导航 ~16%\n│        └───────┘ └───────┘       │\n└──────────────────────────────────┘\n```\n\n> `再来一局` / `返回标题` 说明：PRD 未明确结算页之后的返回/再来一局路径。为保证独立 Demo 可闭环，按钮作为 Demo 导航承载；若后续 PRD 确认无该入口，可从元素清单和代码中删除。\n\n### 页面列表\n\n| 页面 | 代码标识 | 路由状态 | 职责 | 主要区域 |\n|------|---------|---------|------|---------|\n| 标题页 | TitlePage | `title` | 展示标题与进入唯一可玩关卡入口 | TitleBackground、TitleLogo、StartMineButton |\n| 无尽矿井主游玩界面 | RunPage | `running` | 在竖屏移动端单屏中承载 7×6 棋盘、挖掘/炸弹交互、深度推进、HUD 与工具栏 | TopStatusBar、TopLootBar、MineBoardCanvas、DepthSupplyStack、ToolBar、ToastLayer |\n| 本局收获结算页 | SettlementPage | `settlement` | 展示工具耗尽或主动返场后的本局最终数据 | SettlementTitle、ResultPanel、DemoNavButtons |\n\n## 组件层级\n\n```text\nApp.tsx (AppRoute 状态机)\n├── TitlePage\n│   ├── BackgroundLayer\n│   ├── TitleLogo\n│   └── PrimaryButton(StartMineButton)\n├── RunPage\n│   ├── BackgroundLayer\n│   ├── TopStatusBar\n│   │   ├── BiomeLabel\n│   │   ├── SupplyProgressText\n│   │   └── RunStatusBadge\n│   ├── TopLootBar\n│   │   ├── LootCounter(gold)\n│   │   ├── LootCounter(ore)\n│   │   └── LootCounter(material)\n│   ├── GameViewport\n│   │   └── MineBoardCanvas (Pixi mount)\n│   ├── DepthSupplyStack\n│   │   ├── DepthPanel\n│   │   └── SupplyPanel\n│   ├── ToolBar\n│   │   ├── ToolButton(pick)\n│   │   ├── ToolButton(rowBomb)\n│   │   ├── ToolButton(areaBomb)\n│   │   ├── InventoryButton\n│   │   └── ReturnButton\n│   └── ToastLayer\n└── SettlementPage\n    ├── BackgroundLayer\n    ├── SettlementTitle\n    ├── ResultPanel\n    │   ├── ResultStat(depth)\n    │   ├── ResultStat(biomeName)\n    │   ├── ResultStat(gold)\n    │   ├── ResultStat(ore)\n    │   ├── ResultStat(material)\n    │   └── ResultStat(openedChests)\n    └── DemoNavBar\n        ├── ReplayButton\n        └── BackTitleButton\n```\n\n## 元素实现清单\n\n> 完整清单见独立文件 `设计-元素实现清单.md`（产物三），包含所有元素的坐标、尺寸、层级、实现方式、素材文件名和复用关系。  \n> 设计方案**不再内联**任何元素表格，统一由元素实现清单作为 SSOT。\n\n## 音频资产（可选）\n\n| 音频 | 类型 | 用途 | 建议文件名 | 说明 |\n|------|------|------|-----------|------|\n| 矿井 BGM | BGM | 主游玩循环背景音乐 | mine_bgm | PRD 明确要求，20s 循环音乐 |\n| 挖掘命中 | SFX | 木镐点击命中 | mine_hit_sfx | PRD 明确要求 |\n| 方块破坏 | SFX | 砖块碎裂 | mine_break_sfx | PRD 明确要求 |\n| 横排炸弹 | SFX | 横排爆破 | mine_bomb_row_sfx | PRD 明确要求 |\n| 九宫格炸弹 | SFX | 区域爆破 | mine_bomb_area_sfx | PRD 明确要求 |\n| 奖励入账 | SFX | 金币/矿石/材料/工具奖励 | mine_reward_sfx | PRD 明确要求 |\n| 深度提升 | SFX | 进入更深层反馈 | mine_depth_up_sfx | PRD 明确要求 |\n\n## 动画参数\n\n| 动画 | 类型 | 时长 | 缓动 | 说明 |\n|------|------|------|------|------|\n| 标题页入场 | CSS | 360ms | ease-out | 标题与入口按钮入场 |\n| 主按钮按下反馈 | CSS | 120ms | ease-out | 按钮点击缩放/回弹 |\n| 格子受击 | Pixi | 180ms | ease-out | PRD 默认动画时长，用于格子命中反馈 |\n| 格子破碎/消失 | Pixi | 180ms | ease-in | 耐久归零后破坏表现 |\n| 横排炸弹命中 | Pixi | 220ms | ease-out | 当前行范围反馈 |\n| 九宫格炸弹命中 | Pixi | 240ms | ease-out | 3×3 范围反馈 |\n| 棋盘上卷 | Pixi | 180ms | ease-in-out | 推进一层后整体上卷一行 |\n| 资源飞入 HUD | Pixi/CSS | 420ms | ease-in | PRD 明确资源飞入 HUD 时长 |\n| 金币飞字 | Pixi | 550ms | ease-out | PRD 明确金币飞字时长 |\n| 首次稀有矿 toast | CSS | 220ms 入 / 180ms 出 | ease-out | biome 3 首次提示 |\n| 结算页入场 | CSS | 360ms | ease-out | 结算标题与面板入场 |\n",
      "size": 12189,
      "truncated": false
    },
    {
      "id": "tech-plan",
      "label": "技术方案",
      "type": "md",
      "file": "架构-技术方案.md",
      "stepId": 5,
      "exists": true,
      "path": "架构-技术方案.md",
      "content": "# 《无限矿井》无尽模式 开发架构方案\n\n> 阶段: Tech Spec  \n> 日期: 2026-06-21  \n> 基于: 需求-最终PRD.md  \n> 视觉参考: 架构-设计方案.md\n\n> ⚠️ 不包含视觉风格、页面列表、详细 ASCII 布局图、组件层级树、动画参数——这些在设计方案中。元素完整信息（坐标、尺寸、层级、实现方式、素材文件名）见独立文件 `设计-元素实现清单.md`。\n\n> ⚠️ **视觉审批覆盖声明**：`需求-最终PRD.md` 中仍包含旧的 `1152 x 768`、`1536*1024` 或横向资源描述。用户视觉审批阶段已覆盖为**竖屏移动端单屏设计目标**；本架构阶段不修改 PRD 文件。实现与设计出图均以 `9:16` 竖屏移动端单屏为唯一主目标。\n\n## 技术栈\n\n| 类别 | 选型 | 版本 | 说明 |\n|------|------|------|------|\n| 框架 | React | 18.x | UI 层、页面状态、HUD、结算页 |\n| 渲染引擎 | Canvas 2D（standalone 等价实现） | Browser Canvas API | 本轮代码实现采用 Canvas 2D 渲染 7×6 棋盘与轻量反馈，保留 `MineBoardRenderer` 接口语义；与原 Pixi 方案差异为不创建 Pixi Application/Sprite/Container，避免额外运行时依赖，不改变棋盘逻辑、资源语义或验收可观察结果 |\n| 语言 | TypeScript | 5.x | 全局类型、Store、引擎回调强类型 |\n| 样式 | Less + postcss-pxtorem | — | 750px 移动端设计稿适配，页面主比例为竖屏 9:16 |\n| 状态管理 | Redux (@reduxjs/toolkit) | 2.x | 保存跨组件运行态、HUD 和结算数据 |\n| 构建 | Vite | 5.x | `npm run dev` 即可预览 |\n\n> 渲染实现同步说明：现有 standalone 代码以 Canvas 2D 作为原 Pixi 方案的等价实现；若后续切回 Pixi，可复用 `EndlessMineGame`、`MineBoardModel`、`MineRowGenerator`、`RewardResolver` 与 `AudioGenerator` 的接口边界。\n\n## 项目文件结构\n\n```text\ngeneric_endless_mine_endless_mode/\n├── index.html\n├── vite.config.ts\n├── tsconfig.json\n├── package.json\n├── public/\n│   └── assets/imgs/\n│       ├── bg_title.png\n│       ├── mine_surface_bg.png\n│       ├── mine_mid_bg.png\n│       ├── mine_shallow_sea_bg.png\n│       ├── mine_deep_sea_bg.png\n│       ├── mine_core_bg.png\n│       └── ...\n├── src/\n│   ├── main.tsx\n│   ├── App.tsx\n│   ├── apis/\n│   │   ├── index.ts\n│   │   └── mocks/index.ts\n│   ├── components/\n│   │   ├── BackgroundLayer/\n│   │   ├── PrimaryButton/\n│   │   ├── TopStatusBar/\n│   │   ├── TopLootBar/\n│   │   ├── MineBoardCanvas/\n│   │   ├── DepthSupplyStack/\n│   │   ├── DepthPanel/\n│   │   ├── SupplyPanel/\n│   │   ├── ToolBar/\n│   │   ├── ToastLayer/\n│   │   └── ResultPanel/\n│   ├── constants/\n│   │   ├── index.ts\n│   │   ├── enum.ts\n│   │   └── game.ts\n│   ├── data/\n│   │   ├── initialBoard.ts\n│   │   ├── biomeConfig.ts\n│   │   ├── rewardConfig.ts\n│   │   └── assetKeys.ts\n│   ├── game/\n│   │   ├── EndlessMineGame.ts\n│   │   ├── MineBoardRenderer.ts\n│   │   ├── MineBoardModel.ts\n│   │   ├── MineRowGenerator.ts\n│   │   ├── RewardResolver.ts\n│   │   ├── AudioGenerator.ts\n│   │   └── types.ts\n│   ├── hooks/\n│   │   ├── useAppActions.ts\n│   │   ├── useEndlessMineGame.ts\n│   │   └── useRouteGuard.ts\n│   ├── pages/\n│   │   ├── TitlePage/\n│   │   │   ├── index.tsx\n│   │   │   └── index.750.less\n│   │   ├── RunPage/\n│   │   │   ├── index.tsx\n│   │   │   └── index.750.less\n│   │   └── SettlementPage/\n│   │       ├── index.tsx\n│   │       └── index.750.less\n│   ├── store/\n│   │   ├── index.ts\n│   │   └── slices/\n│   │       ├── appSlice.ts\n│   │       └── mineRunSlice.ts\n│   ├── styles/\n│   │   ├── variables.less\n│   │   └── global.less\n│   ├── types/global.d.ts\n│   └── utils/index.ts\n```\n\n## 关键类型定义\n\n```typescript\nexport type AppRoute = 'title' | 'running' | 'settlement';\nexport type RunStatus = '推进中' | '工具耗尽' | '结算中';\nexport type ToolType = 'pick' | 'rowBomb' | 'areaBomb';\nexport type CellType = 0 | 1 | 2 | 6;\nexport type MineContentType = 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal';\n\nexport interface MineCellMeta {\n  coverVisible: boolean;\n  contentType: MineContentType;\n  durability: number;\n  hasOreHint: boolean;\n  hasToolHint: boolean;\n  rewardTableId: string;\n}\n\nexport interface RunLoot {\n  gold: number;\n  ore: number;\n  material: number;\n  openedChests: number;\n}\n\nexport interface SettlementSnapshot {\n  finalDepth: number;\n  finalBiomeName: string;\n  runLoot: RunLoot;\n  reason: 'manual' | 'exhausted';\n}\n\nexport interface MineGameCallbacks {\n  onStatePatch: (patch: Partial<MineRunState>) => void;\n  onLootChange: (loot: RunLoot) => void;\n  onToast: (message: string) => void;\n  onSettle: (reason: 'manual' | 'exhausted') => void;\n}\n```\n\n## 数据层设计\n\n### Store Slice 总览\n\n| Slice | 文件 | 负责状态 |\n|-------|------|---------|\n| app | slices/appSlice.ts | 页面路由、加载状态、toast、输入锁提示 |\n| mineRun | slices/mineRunSlice.ts | 单局深度、工具、补给、收益、棋盘摘要、结算数据 |\n\n### app — 字段级设计\n\n| 字段 | 类型 | 初始值 | 说明 |\n|------|------|--------|------|\n| route | `AppRoute` | `'title'` | 当前页面路由 |\n| isLoading | `boolean` | `false` | 初始化或资源加载中 |\n| toastMessage | `string` | `''` | 当前轻提示文案 |\n| toastSeq | `number` | `0` | toast 刷新序号，避免相同文案不重播 |\n| inputLocked | `boolean` | `false` | 结算延迟或动作处理中禁用 DOM 按钮 |\n\n**Actions**:\n\n| Action | 参数 | 说明 |\n|--------|------|------|\n| setRoute | `AppRoute` | 切换标题、主玩法、结算页 |\n| updateApp | `Partial<AppState>` | 批量更新 app 状态 |\n| showToast | `string` | 写入 toast 并递增 `toastSeq` |\n| clearToast | — | 清空 toast |\n\n### mineRun — 字段级设计\n\n| 字段 | 类型 | 初始值 | 说明 |\n|------|------|--------|------|\n| currentDepth | `number` | `1` | 当前推进深度 |\n| currentBiomeIndex | `number` | `1` | 当前深度区编号 |\n| currentBiomeName | `string` | `'地表矿区'` | 当前深度区名称 |\n| supplyPoints | `number` | `0` | 本局补给积分 |\n| supplyTarget | `number` | `12` | 当前补给目标 |\n| woodPick | `number` | `20` | 木镐库存 |\n| rowBomb | `number` | `0` | 横排炸弹库存 |\n| areaBomb | `number` | `0` | 九宫格炸弹库存 |\n| selectedTool | `ToolType` | `'pick'` | 当前选中工具 |\n| runStatus | `RunStatus` | `'推进中'` | 本局状态 |\n| runLoot | `RunLoot` | `{ gold: 0, ore: 0, material: 0, openedChests: 0 }` | 本局累计收益 |\n| rareOreUnlockedShown | `boolean` | `false` | 首次稀有矿提示是否已显示 |\n| boardVersion | `number` | `0` | Canvas 2D 棋盘快照更新版本 |\n| lastActionAt | `number` | `0` | 最近一次合法输入时间戳，用于防抖辅助 |\n| settlementReason | `'manual' \\| 'exhausted' \\| null` | `null` | 进入结算原因 |\n| finalSnapshot | `SettlementSnapshot \\| null` | `null` | 结算页展示数据快照 |\n\n**Actions**:\n\n| Action | 参数 | 说明 |\n|--------|------|------|\n| resetRun | — | 开始新一局，恢复初始工具/深度/收益 |\n| updateRun | `Partial<MineRunState>` | 批量更新运行态 |\n| selectTool | `ToolType` | 切换当前工具 |\n| addLoot | `Partial<RunLoot>` | 累加金币、矿石、材料、宝箱数 |\n| setSettlement | `SettlementSnapshot` | 写入结算快照 |\n| bumpBoardVersion | — | 通知 UI / 引擎棋盘已刷新 |\n\n### API 设计\n\n| 接口 | 函数名 | 参数 | 返回 | 说明 |\n|------|--------|------|------|------|\n| 初始化首页 | getHomePage | — | `ApiResp<HomePageData>` | 获取标题页和资源配置；Mock 返回本地配置 |\n| 开始一局 | submitStartRun | `{ startEnergyCost: number }` | `ApiResp<StartRunData>` | 独立 Demo 中模拟扣体力并返回初始单局数据 |\n| 提交结算 | submitRunSettlement | `SettlementSnapshot` | `ApiResp<SettlementResult>` | 工具耗尽或主动返场后提交本局收获 |\n\n## 引擎核心类设计（Canvas 2D standalone 等价实现）\n\n### EndlessMineGame\n\n```typescript\nclass EndlessMineGame {\n  init(canvas: HTMLCanvasElement, config: MineGameConfig, callbacks: MineGameCallbacks): Promise<void>;\n  startRun(initialState: MineRunState): void;\n  selectTool(tool: ToolType): void;\n  handleCellClick(gridX: number, gridY: number): void;\n  requestReturnToCamp(): void;\n  resize(width: number, height: number): void;\n  destroy(): void;\n}\n```\n\n职责：维护 Canvas 2D 棋盘、程序化音频、输入防抖、处理流水线调度、结算触发；通过 Typed Callbacks 回写 Redux，不引入 EventBus。Canvas 挂载在 RunPage 中部 `GameViewport`，按竖屏容器缩放 7×6 棋盘。\n\n### MineBoardModel\n\n```typescript\nclass MineBoardModel {\n  terrain: CellType[][];\n  metadata: MineCellMeta[][];\n  isLegalTarget(x: number, y: number, tool: ToolType): boolean;\n  applyDamage(targets: GridPoint[], damage: number): ProcessResult;\n  canAdvanceFromBottom(): boolean;\n  rollOneRow(newRow: GeneratedRow): void;\n  getSnapshot(): BoardSnapshot;\n}\n```\n\n职责：封装 7×6 棋盘、四方向连通、WALL 不可破坏、遮挡层优先破坏、底部通路检测。\n\n### MineBoardRenderer\n\n```typescript\nclass MineBoardRenderer {\n  loadAssets(assetManifest: MineAssetManifest): Promise<void>;\n  mount(stage: PIXI.Container): void;\n  renderBoard(snapshot: BoardSnapshot): void;\n  playHit(point: GridPoint): Promise<void>;\n  playBreak(points: GridPoint[]): Promise<void>;\n  playBomb(type: 'rowBomb' | 'areaBomb', targets: GridPoint[]): Promise<void>;\n  playRewardFly(reward: RewardPayload): Promise<void>;\n  playRoll(): Promise<void>;\n  resizeToViewport(width: number, height: number): void;\n  destroy(): void;\n}\n```\n\n职责：只处理 Canvas 2D 图片绘制、点击反馈与破坏反馈；不直接修改 Redux。`resizeToViewport` 以竖屏单屏中部棋盘容器为边界，优先保证 7 列可读、6 行完整可见。\n\n### MineRowGenerator / RewardResolver\n\n```typescript\nclass MineRowGenerator {\n  generate(depth: number, biomeIndex: number, currentBottomOpenings: number[]): GeneratedRow;\n}\n\nclass RewardResolver {\n  resolve(meta: MineCellMeta, biomeIndex: number): RewardPayload;\n  resolveSupply(biomeIndex: number): ToolReward;\n}\n```\n\n职责：生成新底行和结算奖励。PRD 缺失概率表时，Mock 配置采用可替换的本地占位表，并在常量中标注来源为 Demo fallback。\n\n### AudioGenerator\n\n```typescript\nclass AudioGenerator {\n  register(): Record<AudioCue, string>;\n  playMineHit(): void;\n  playMineBreak(): void;\n  playBomb(type: 'rowBomb' | 'areaBomb'): void;\n  playReward(): void;\n  playDepthUp(): void;\n  playBgm(): void;\n  stopBgm(): void;\n  destroy(): void;\n}\n```\n\n职责：当前项目无真实音频素材时，使用 Web Audio 程序化生成等价 mock audio，并注册 `mine_bgm`、`mine_hit_sfx`、`mine_break_sfx`、`mine_bomb_row_sfx`、`mine_bomb_area_sfx`、`mine_reward_sfx`、`mine_depth_up_sfx`。音频入口由 `EndlessMineGame` 在初始化、合法挖掘、砖块破坏、炸弹、奖励入账和深度提升时调用，且不修改玩法数据。\n\n## Hook 设计\n\n### useEndlessMineGame()\n\n- **输出**: `{ canvasRef, startRun(), selectTool(tool), returnToCamp(), resizeGame() }`\n- **内部状态**: `gameRef`（Canvas 2D 游戏实例）、`lockRef`（异步防重锁）、`settlementTimerRef`、`latestRunStateRef`\n- **核心逻辑**:\n  1. `useEffect` 创建 `EndlessMineGame`，传入 canvas、配置和 typed callbacks。\n  2. 根据 `GameViewport` ResizeObserver 触发 `resizeGame()`，保证竖屏移动端单屏内棋盘完整可见。\n  3. `callbacks.onStatePatch` dispatch `updateRun`。\n  4. `callbacks.onToast` dispatch `showToast`。\n  5. `callbacks.onSettle` 写入 `finalSnapshot`，等待 `600ms` 后切到 `settlement`。\n  6. unmount 时清理 Canvas 2D、timer、监听器，保证 0 内存泄漏。\n\n### useAppActions()\n\n- **输出**: `{ goTitle(), startNewRun(), replay(), submitSettlementAndShow() }`\n- **内部状态**: `lockRef`\n- **核心逻辑**: 封装 `getHomePage`、`submitStartRun`、`submitRunSettlement` 调用与路由切换。\n\n### useRouteGuard()\n\n- **输出**: `{ canInteract }`\n- **内部状态**: 无额外状态\n- **核心逻辑**: 根据 `route`、`inputLocked`、`runStatus` 判断 DOM 按钮是否可点击。\n\n## Mock 数据方案\n\n- Mock 函数使用闭包维护状态：体力展示值、最近一局结算结果、累计开始次数。\n- 返回新对象（展开运算符）保证 React 重渲染。\n- 模拟 150-300ms 网络延迟。\n- 通过 `import.meta.env.VITE_USE_MOCK` 切换。\n- 缺失的掉落概率、宝箱/盲盒表以 `rewardConfig.ts` 中 `demoFallback` 字段隔离，便于后续替换为正式 PRD 表。\n\n## 性能约束\n\n| 指标 | 目标 | 实现手段 |\n|------|------|---------|\n| 首屏加载 | < 3s | Canvas 2D CDN 外链；首屏仅预加载标题背景、当前 biome 背景、tileset 和 HUD 图标 |\n| JS bundle | < 200KB gzip | Canvas 2D 不打入 bundle；按页面拆分组件；移除未用依赖 |\n| 图片资源 | < 1MB 初始关键路径 | 深层背景按 biome 延迟加载；标题和地表资源优先 |\n| 动画帧率 | ≥ 30fps | 棋盘 Sprite 复用；避免每帧创建对象；资源飞字结束后归还对象池 |\n| 内存泄漏 | 0 | `destroy()` 清 Canvas 2D application、ticker、texture 引用、DOM listener、timer |\n| Canvas 高度 | 目标 ≤ 屏幕 60% | RunPage 使用纵向堆叠，Canvas 2D viewport 位于顶部 HUD 与底部工具区之间，7×6 棋盘按容器等比缩放 |\n| 输入防抖 | 120ms | 引擎层记录 `lastActionAt`，动作处理中锁输入 |\n\n## 页面开发手册\n\n> 本章按页面维度聚合技术实现信息。  \n> 视觉布局（详细 ASCII 图）见 `架构-设计方案.md`，元素完整信息见 `设计-元素实现清单.md`。\n\n### 页面 1: TitlePage\n\n#### 布局概览\n\n> 详细布局见 架构-设计方案.md §TitlePage / title（标题页默认态）\n\n```text\n┌──────────────────────────────┐ 9:16 mobile\n│ [BackgroundLayer]       z:0  │\n│ [TitleLogo]             z:10 │\n│ [StartMineButton]       z:10 │\n└──────────────────────────────┘\n```\n\n#### 涉及组件\n\n| 组件 | Props | 关键交互 |\n|------|-------|---------|\n| BackgroundLayer | `{ assetKey }` | 静态背景 |\n| TitleLogo | `{ title }` | 无 |\n| PrimaryButton | `{ label, disabled, onClick }` | 点击开始一局 |\n\n#### 涉及 Store 字段\n\n| Slice | 字段 | 读/写 | 触发时机 |\n|-------|------|-------|---------|\n| app | route | R+W | 点击入口后切到 `running` |\n| app | isLoading | R+W | `submitStartRun` 期间 |\n| mineRun | 全部初始字段 | W | `resetRun` |\n\n#### 涉及 Hooks\n\n| Hook | 用途 | 关键输出 |\n|------|------|---------|\n| useAppActions | 开始一局 | `startNewRun()` |\n\n#### 涉及 API\n\n| API | 调用时机 | 说明 |\n|-----|---------|------|\n| getHomePage | App 初始化 | 获取标题页/资源配置 |\n| submitStartRun | 点击开始按钮 | 模拟消耗体力并返回初始单局数据 |\n\n#### 核心数据流（时序）\n\n```text\n1. App mount -> getHomePage -> app.route = title\n2. 点击 StartMineButton -> submitStartRun({ startEnergyCost: 1 })\n3. dispatch(resetRun)\n4. dispatch(setRoute('running'))\n5. RunPage mount 后由 useEndlessMineGame 启动 Canvas 2D\n```\n\n#### 页面内开发顺序\n\n1. 实现 BackgroundLayer、TitleLogo、PrimaryButton。\n2. 接入 `useAppActions.startNewRun()`。\n3. 加入 loading/防重复点击。\n\n### 页面 2: RunPage\n\n#### 布局概览\n\n> 详细布局见 架构-设计方案.md §RunPage / endless_run（无尽矿井主游玩界面默认态）\n\n```text\n┌──────────────────────────────┐ 9:16 mobile single screen\n│ [BackgroundLayer]       z:0  │\n│ [TopStatusBar]          z:10 │ 顶部状态\n│ [TopLootBar]            z:10 │ 顶部收益\n│ [MineBoardCanvas/Canvas 2D]  z:0  │ 7×6 棋盘核心，Canvas ≤屏幕 60%\n│ [DepthSupplyStack]      z:10 │ 深度与补给信息\n│ [ToolBar]               z:10 │ 底部工具区\n│ [ToastLayer]            z:100│\n└──────────────────────────────┘\n```\n\n#### 涉及组件\n\n| 组件 | Props | 关键交互 |\n|------|-------|---------|\n| TopStatusBar | `{ biomeName, supplyPoints, supplyTarget, runStatus }` | 无 |\n| TopLootBar | `{ gold, ore, material }` | 无 |\n| MineBoardCanvas | `{ canvasRef }` | Canvas 2D 内处理格子点击 |\n| DepthSupplyStack | `{ currentDepth, currentBiomeName, supplyPoints, supplyTarget }` | 无 |\n| DepthPanel | `{ currentDepth, currentBiomeName }` | 无 |\n| SupplyPanel | `{ supplyPoints, supplyTarget }` | 无 |\n| ToolBar | `{ selectedTool, counts, onSelectTool, onReturn }` | 工具切换、收队返场 |\n| ToastLayer | `{ message, seq }` | 自动展示/隐藏 |\n\n#### 涉及 Store 字段\n\n| Slice | 字段 | 读/写 | 触发时机 |\n|-------|------|-------|---------|\n| mineRun | currentDepth/currentBiomeIndex/currentBiomeName | R+W | 棋盘推进、biome 切换 |\n| mineRun | supplyPoints/supplyTarget | R+W | 推进、积分掉落、补给发放 |\n| mineRun | woodPick/rowBomb/areaBomb | R+W | 工具消耗、补给、tool 格奖励 |\n| mineRun | selectedTool | R+W | 工具按钮点击 |\n| mineRun | runStatus | R+W | 推进中、工具耗尽、结算中 |\n| mineRun | runLoot | R+W | ore/chest/blindBox 奖励入账 |\n| mineRun | rareOreUnlockedShown | R+W | biome 3 首次提示 |\n| app | toastMessage/toastSeq | R+W | 无效点击、稀有矿、补给奖励 |\n| app | route/inputLocked | R+W | 结算延迟、跳转结算页 |\n\n#### 涉及 Hooks\n\n| Hook | 用途 | 关键输出 |\n|------|------|---------|\n| useEndlessMineGame | Canvas 2D 初始化、动作处理、结算触发、竖屏 viewport resize | `canvasRef`, `selectTool`, `returnToCamp`, `resizeGame` |\n| useRouteGuard | 控制按钮是否可交互 | `canInteract` |\n\n#### 涉及 API\n\n| API | 调用时机 | 说明 |\n|-----|---------|------|\n| submitRunSettlement | 主动返场或工具耗尽后 | 提交本局结算快照 |\n\n#### 核心数据流（时序）\n\n```text\n1. RunPage mount -> useEndlessMineGame -> new EndlessMineGame().init(canvas, config, callbacks)\n2. GameViewport ResizeObserver -> resizeGame -> Canvas 2D 棋盘按竖屏容器缩放\n3. game.startRun(initialRunState) -> renderer.renderBoard(initialBoard)\n4. 用户点击格子 -> EndlessMineGame.handleCellClick(gridX, gridY)\n5. 校验工具库存、连通性、WALL、遮挡层 -> 合法则进入处理流水线\n6. MineBoardModel.applyDamage -> RewardResolver.resolve -> MineBoardRenderer 播放反馈\n7. callbacks.onStatePatch / onLootChange -> dispatch(updateRun / addLoot)\n8. 底部通路成立 -> MineRowGenerator.generate -> rollOneRow -> currentDepth + 1\n9. 三类工具均 <= 0 或点击收队返场 -> callbacks.onSettle\n10. 600ms 结算延迟 -> submitRunSettlement -> route = settlement\n```\n\n#### 页面内开发顺序\n\n1. 实现 `MineRunState`、常量配置、初始棋盘数据。\n2. 实现 RunPage 竖屏移动端单屏 DOM 框架和 HUD 组件。\n3. 实现 Canvas 2D `EndlessMineGame` 初始化与资产预加载。\n4. 实现 `MineBoardModel` 合法性、破坏和推进。\n5. 接入工具栏、奖励、toast 和结算流。\n6. 补齐动画与音频反馈。\n\n### 页面 3: SettlementPage\n\n#### 布局概览\n\n> 详细布局见 架构-设计方案.md §SettlementPage / settlement（本局收获结算页默认态）\n\n```text\n┌──────────────────────────────┐ 9:16 mobile\n│ [BackgroundLayer]       z:0  │\n│ [SettlementTitle]       z:10 │\n│ [ResultPanel]           z:10 │\n│ [DemoNavBar]            z:10 │\n└──────────────────────────────┘\n```\n\n#### 涉及组件\n\n| 组件 | Props | 关键交互 |\n|------|-------|---------|\n| SettlementTitle | `{ title }` | 无 |\n| ResultPanel | `{ snapshot }` | 无 |\n| DemoNavBar | `{ onReplay, onBackTitle }` | Demo 闭环导航 |\n\n#### 涉及 Store 字段\n\n| Slice | 字段 | 读/写 | 触发时机 |\n|-------|------|-------|---------|\n| mineRun | finalSnapshot | R | 展示结算数据 |\n| app | route | R+W | 返回标题或再来一局 |\n| mineRun | 全部初始字段 | W | 再来一局 |\n\n#### 涉及 Hooks\n\n| Hook | 用途 | 关键输出 |\n|------|------|---------|\n| useAppActions | Demo 导航 | `replay`, `goTitle` |\n\n#### 涉及 API\n\n| API | 调用时机 | 说明 |\n|-----|---------|------|\n| submitStartRun | 点击再来一局 | 重新开始单局 |\n\n#### 核心数据流（时序）\n\n```text\n1. route = settlement -> SettlementPage 读取 finalSnapshot\n2. 展示最终深度、深度类型、金币、矿石、材料、开启宝箱次数\n3. 点击再来一局 -> submitStartRun -> resetRun -> route = running\n4. 点击返回标题 -> route = title\n```\n\n#### 页面内开发顺序\n\n1. 实现 ResultPanel 数据映射。\n2. 接入 DemoNavBar。\n3. 处理 `finalSnapshot` 为空时回退到标题页。\n",
      "size": 21791,
      "truncated": false
    },
    {
      "id": "overview-image",
      "label": "全页面总览图",
      "type": "overview",
      "file": "设计-总览图引用.json",
      "stepId": 6,
      "exists": true,
      "path": "设计-总览图引用.json",
      "overviewCount": 1,
      "refsExists": true,
      "generatedAt": "2026-06-21T11:16:06.997Z"
    },
    {
      "id": "page-images",
      "label": "页面 Page 图",
      "type": "pages",
      "file": "设计-页面设计图引用.json",
      "stepId": 6,
      "exists": true,
      "path": "设计-页面设计图引用.json",
      "pageCount": 3,
      "refsExists": true,
      "generatedAt": "2026-06-21T11:26:35.128Z"
    },
    {
      "id": "element-list-html",
      "label": "元素清单编辑器",
      "type": "html",
      "file": "设计-元素实现清单.html",
      "special": true,
      "replaces": [
        "设计-元素实现清单.md"
      ],
      "stepId": 6,
      "exists": true,
      "path": "设计-元素实现清单.html"
    },
    {
      "id": "asset-prompt-html",
      "label": "Asset Sheet 提示词审核器",
      "type": "html",
      "file": "设计-design-sheet提示词.html",
      "special": true,
      "replaces": [
        "设计-design-sheet提示词.md"
      ],
      "stepId": 6,
      "exists": true,
      "path": "设计-design-sheet提示词.html"
    },
    {
      "id": "review-report",
      "label": "评审报告",
      "type": "md",
      "file": "评审-评审报告.md",
      "stepId": 8,
      "exists": true,
      "path": "评审-评审报告.md",
      "content": "# generic_endless_mine_endless_mode 代码评审报告\n\n> 评审时间: 2026-06-21 21:32  \n> 评审对象: /Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode  \n> 对照产物: 需求-最终PRD / 架构-技术方案 / 设计-元素实现清单 / 验证-页面功能实现清单 / 需求-验收用例  \n> 评审 Skill: standalone-reviewer  \n> 复审背景: P0 自动修复第 2 轮后的最终复审（循环上限最后一次）\n\n## 评审结果: PASS WITH WARNINGS\n\n## 统计\n\n| 指标 | 数量 |\n|------|------|\n| P0 问题 | 0 |\n| P1 问题 | 2 |\n| tech-spec 不一致 | 1 |\n| 元素实现清单违规 | 0 |\n| PRD 功能未覆盖 | 0 |\n| 页面功能清单违规 | 0 |\n| 验收用例未实现/演示直通 | 0 |\n\n---\n\n## Layer 0: 构建时检查\n\n| 检查项 | 状态 | 说明 |\n|--------|------|------|\n| 0.1 TypeScript 类型检查（`tsc --noEmit`） | PASS | `cd /Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode && npx tsc --noEmit` 无输出，零 TS 错误 |\n| 0.2 Vite 构建（`vite build`） | PASS | `npx vite build` 成功，`dist/index.html` 存在，主产物 `dist/assets/index-DeD9EkfU.js` 200.24 kB / gzip 65.59 kB |\n| 0.3 Playwright 运行时 | PASS | `title` / `endless_run` / `settlement` 三个 scene 均无 pageerror / console.error / 非噪声 4xx |\n\n### P0 问题（构建/类型错误）\n\n| # | 来源 | 文件 | 行号 | 错误信息 | 修复建议 |\n|---|------|------|------|---------|---------|\n| - | - | - | - | 无 | - |\n\n### P1 问题\n\n| # | 来源 | 位置 | 信息 |\n|---|------|------|------|\n| - | - | - | 无 |\n\n---\n\n## Layer 1: 确定性检查\n\n### 1.1 ES 兼容性红线（P0）\n\n| # | 文件 | 行号 | 命中模式 | 代码片段 | 修复建议 |\n|---|------|------|---------|---------|---------|\n| - | - | - | - | 未命中 `.flat()` / `.flatMap()` / `.at()` / `.replaceAll()` / `Object.fromEntries` | - |\n\n复核重点结论: `Object.fromEntries` 已清除。`src/game/AudioGenerator.ts:18-23` 使用 `Object.keys(AUDIO_MANIFEST).forEach(...)` 构造 manifest，未再命中 ES 兼容性 P0 红线。\n\n### 1.2 编码规范（P1）\n\n| # | 文件 | 行号 | 命中规则 | 代码片段 | 修复建议 |\n|---|------|------|---------|---------|---------|\n| 1 | src/game/AudioGenerator.ts | 30 / 33 / 36 | `setTimeout` 同文件无 `clearTimeout` | `window.setTimeout(() => this.playNoise(...), 25)`；数组音效延迟播放也使用 `window.setTimeout` | 在 `AudioGenerator` 中保存 timeout id，并在 `destroy()` 中统一 `clearTimeout`；避免离开页面后延迟音效继续触发 |\n| 2 | src/hooks/useAppActions.ts | 50 | `setTimeout` 同文件无 `clearTimeout` | `window.setTimeout(() => { dispatch(updateApp(...)); dispatch(setRoute(AppRoute.Settlement)); ... }, 600)` | 将结算延迟 timer id 放入 ref 或由调用方 hook cleanup 清理，避免页面卸载或重入后延迟路由写入 |\n\n说明: `src/utils/index.ts:22-23` 的 `delay(ms)` 是 Promise mock 延迟工具，不属于 React 组件生命周期内遗留 timer；`src/game/MineBoardRenderer.ts:40/45` 的短 Promise 动画延迟由调用流程 await，当前未作为 P1 计入。\n\n### 1.3 样式规范（standalone 专属）\n\n| # | 检查项 | 状态 | 说明 |\n|---|-------|------|------|\n| 1.3.1a | `src/styles/global.less` 存在 | PASS | 文件存在 |\n| 1.3.1b | `global.less` 包含 `@import './variables.less'` | PASS | 第 1 行导入 `@import './variables.less';` |\n| 1.3.1c | `src/styles/variables.less` 存在 | PASS | 文件存在 |\n| 1.3.1d | `variables.less` `:root` 块非空（≥ 1 个 CSS Variable） | PASS | 12 个 CSS variable 声明 |\n| 1.3.1e | `main.tsx` 导入 `./styles/global.less` | PASS | `src/main.tsx:10` 导入全局样式 |\n| 1.3.2 | 组件级 less 全部 `.750.less` 后缀 | PASS | `TitlePage` / `RunPage` / `SettlementPage` 均为 `index.750.less`；`src/styles/` 全局样式不适用 |\n| 1.3.3 | 无覆盖 root font-size / 无 JS 动态根字号 | PASS | 未发现实际 `html { font-size }`、`document.documentElement.style.fontSize` 或 `pxtorem(` 调用；仅注释中出现禁止说明 |\n| 1.3.4 | fixed-stage 缩放管线 | PASS | `src/utils/index.ts` 设置 `--scene-scale` 与 `--scene-vh`；`src/styles/page-common.less` 的 `.scene-stage` 消费 `scale(var(--scene-scale, 1))` 与 `height: var(--scene-vh, 1334px)` |\n| 1.3.5 | 弹窗 / 浮层居中方式 | PASS | `OverlayStage` / `.overlay-stage__canvas` 使用 `translate(-50%, -50%) scale(var(--scene-scale, 1))`，未用 flex 居中 750px 画布 |\n\n### 1.4 素材路径\n\n| # | 文件 | 行号 | 问题 | 修复建议 |\n|---|------|------|------|---------|\n| - | - | - | 未发现 P0 素材路径违规。JS/TSX 图片均通过 `./assets/imgs/` 字符串或 `assetUrl()` 生成；Less `url('/assets/imgs/btn_tool_slot.png')` 符合 standalone Less 规则 | - |\n\n### 1.5 Emoji 占位残留\n\n| # | 文件 | 行号 | 匹配字符 | 建议替换的素材（查清单） |\n|---|------|------|---------|----------------------|\n| - | - | - | 未发现非注释代码 emoji 占位 | - |\n\n---\n\n## Layer 2: 语义级检查\n\n### 2.1 tech-spec 一致性\n\n| # | 检查项 | 状态 | 差异说明 |\n|---|-------|------|---------|\n| 2.1.1 | 页面组件齐全 | PASS | `src/pages/TitlePage/index.tsx`、`src/pages/RunPage/index.tsx`、`src/pages/SettlementPage/index.tsx` 均存在 |\n| 2.1.2 | Store slice 齐全 | PASS | `src/store/slices/appSlice.ts`、`src/store/slices/mineRunSlice.ts` 均存在 |\n| 2.1.3 | Store 字段一致 | PASS | `app` 与 `mineRun` 初始字段覆盖 tech-spec 字段表；`finalSnapshot`、`settlementReason`、`board` 等实现字段存在 |\n| 2.1.4 | API 函数齐全 | PASS | `getHomePage`、`submitStartRun`、`submitRunSettlement` 均在 `src/apis/index.ts` 导出 |\n| 2.1.5 | Mock 覆盖 | PASS | 三个 API 均在 `src/apis/mocks/index.ts` 有 mock 实现 |\n| 2.1.6 | Hook 齐全 | PASS | `useAppActions`、`useEndlessMineGame`、`useRouteGuard` 均存在 |\n| 2.1.7 | 状态枚举齐全 | PASS | `AppRoute`、`RunStatus`、`ToolType`、`CellType` 在 `src/constants/enum.ts` 定义；`AppRoute.Running = 'endless_run'` 与设计清单 sceneId 对齐 |\n| 2.1.8 | 组件拆分与技术方案目录 | WARNING | 技术方案结构列出 `BackgroundLayer`、`PrimaryButton`、`TopStatusBar`、`ToolBar`、`ResultPanel` 等独立组件目录；当前实现将这些 UI 合并在页面 JSX 与 `src/components/Stage.tsx` 中。可运行与功能不受影响，但与 tech-spec 的组件拆分粒度不一致 |\n\n### 2.2 元素实现清单一致性（SSOT 核心）\n\n| # | 检查项 | 状态 | 违规数 | 说明 |\n|---|-------|------|--------|------|\n| 2.2.1 | 文件名 SSOT（代码引用 ⊆ 清单建议文件名） | PASS | 0 | 代码引用图片 stem 均出自清单页面图片行或 `mine_blocks_tiles` 子素材定义块 |\n| 2.2.2 | 渲染完整性（清单图片元素 ⊆ 代码引用） | PASS | 0 | `title_logo`、`title_settlement` 的清单出图方式为“并入背景”，code_contract 要求不单独渲染；其余图片均被引用 |\n| 2.2.3 | 实现方式锁定（图片元素未被 CSS 降级） | PASS | 0 | 背景、按钮、底板、面板、工具图标、棋盘 tile 均使用图片引用；未发现用 CSS 渐变替代图片元素 |\n| 2.2.4 | 实现方式锁定（CSS 元素未引用图片） | PASS | 0 | CSS-only 文本/栏位元素未以单独图片替代；工具 slot 背景 `btn_tool_slot` 对应图片元素 R19/R20/R21 |\n| 2.2.5 | 几何锁定 + 坐标空间 | PASS | 0 | 页面主元素使用 `Abs box=[...]` 与清单 bbox 对齐；底部工具栏和结算按钮使用 `anchor=\"bottom\"`，底部换算为 `1334-y-h` |\n| 2.2.6 | 父子关系一致 | PASS | 0 | 深度牌/补给条/工具栏/结算面板的文本叠加关系与清单父元素一致；并入背景元素无独立节点 |\n| 2.2.7 | 无字底板文字叠加 + 并入背景约束 | PASS | 0 | R13/R15/R18/R19/R20/R21/S03 均为底板图片加运行时文本；T02/S02 未单独渲染，符合“并入背景” code_contract |\n\n#### 违规明细\n\n| # | 元素ID | 违规类型 | 清单定义 | 代码实际 | 修复建议 |\n|---|--------|---------|---------|---------|---------|\n| - | - | - | - | 无 | - |\n\n### 2.3 PRD 功能覆盖\n\n| # | 功能 | 状态 | 对应代码 |\n|---|------|------|---------|\n| F001-F005 | grid_logic/freeform、旧场景流转、LEVEL_ORDER 等 standalone 等价映射 | PASS | `src/data/legacySceneMapping.ts`：`STANDALONE_ACCEPTANCE_PROFILE`、`LEGACY_SCENE_MAPPING`、`LevelManager.LEVEL_ORDER` |\n| F006-F007 | 标题与入口按钮文案语义 | PASS | `src/apis/mocks/index.ts:14-17`；`src/pages/TitlePage/index.tsx:17-20`，按钮 alt 为“进入无尽矿井”，标题艺术字按清单并入背景 |\n| F008-F009 | `EndlessMineRunScene` / UI Scene 保留注册等价映射 | PASS | `src/data/legacySceneMapping.ts:14-23` 覆盖 `EndlessMineRunScene`、`UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` |\n| F010-F013 | 无玩家/敌人/移动收集物，宝箱和提示轻量展示 | PASS | `src/game/MineBoardRenderer.ts` 仅绘制 tile/marker，无玩家、敌人或移动收集物实体 |\n| F014-F019 | 棋盘编码、metadata、首屏布局、初始工具和默认工具 | PASS | `src/constants/enum.ts`、`src/constants/game.ts`、`src/data/initialBoard.ts`、`src/store/slices/mineRunSlice.ts` |\n| F020-F029 | 木镐/炸弹消耗、WALL、连通、遮挡层、底行同规则 | PASS | `src/game/MineBoardModel.ts:24-83`、`src/game/EndlessMineGame.ts:49-110` |\n| F030-F031 | 上卷 1 行、新底行、向下路径 | PASS | `src/game/MineBoardModel.ts:94-140`、`src/game/MineRowGenerator.ts:6-16` |\n| F032-F037 | 深度区、背景切换、稀有矿/宝箱/盲盒解锁、首次 toast | PASS | `src/constants/game.ts:16-22`、`src/data/biomeConfig.ts`、`src/pages/RunPage/index.tsx:12/34`、`src/game/EndlessMineGame.ts:67-108` |\n| F038-F042 | 掉落、收益、补给积分、补给目标 | PASS | `src/data/rewardConfig.ts`、`src/game/EndlessMineGame.ts:71-84` |\n| F043-F045 | HUD 与工具栏展示 | PASS | `src/pages/RunPage/index.tsx:35-80` |\n| F046 | 无通关条件 | PASS | `src/data/legacySceneMapping.ts` 将 Victory/GameComplete 映射为非主流程等价入口；代码无胜利触发分支 |\n| F047-F050 | 主动返场、工具耗尽、结算页语义和数据展示 | PASS | `src/game/EndlessMineGame.ts:110-115`、`src/hooks/useAppActions.ts:39-56`、`src/pages/SettlementPage/index.tsx:8-31` |\n| F051-F052 | 音画资源注册与验收集合 | PASS | `src/data/assetKeys.ts`、`src/game/AudioGenerator.ts`、`src/data/legacySceneMapping.ts` |\n\n#### 状态机完整性\n\n| # | PRD 状态 | 枚举定义 | 路由分支 | Reducer / 代码覆盖 |\n|---|---------|---------|---------|-------------|\n| 1 | `title` / `TitleScreen` | `AppRoute.Title = 'title'` | `App.tsx` 渲染 `TitlePage` | `setRoute(AppRoute.Title)`、`LEGACY_SCENE_MAPPING.TitleScreen` |\n| 2 | `running_idle / 推进中` / `EndlessMineRunScene` | `AppRoute.Running = 'endless_run'`，`RunStatus.Running` | `App.tsx` 渲染 `RunPage` | `resetRun()` 初始 `runStatus = RunStatus.Running`；`EndlessMineGame` 驱动动作处理 |\n| 3 | `processing_action` / `world_phase` / `advance_check` / `rolling_board` | 无单独枚举，作为 `EndlessMineGame.handleCellClick()` 同步流水线实现 | 不切路由 | `MineBoardModel.applyAction()`、`rollOneRow()`、`RewardResolver`、`callbacks.onStatePatch` |\n| 4 | `settling_manual / 结算中` | `RunStatus.Settling` | 延迟后 `AppRoute.Settlement` | `requestReturnToCamp()` 传 `manual` snapshot；`setSettlement()` 写入 `RunStatus.Settling` |\n| 5 | `settling_exhausted / 工具耗尽` | `RunStatus.Exhausted` | 延迟后 `AppRoute.Settlement` | 工具归零时 `patch.runStatus = RunStatus.Exhausted`，并用最终态 snapshot 调 `onSettle('exhausted', snapshot)` |\n| 6 | `settlement_scene` / `GameOverUIScene` | `AppRoute.Settlement = 'settlement'` | `App.tsx` 渲染 `SettlementPage` | `finalSnapshot` 驱动结算展示 |\n\n### 2.4 页面功能实现清单复验\n\n| # | 检查项 | 状态 | 违规数 | 说明 |\n|---|-------|------|--------|------|\n| 2.4.1 | `验证-页面功能实现清单.md` 存在 | PASS | 0 | 文件存在 |\n| 2.4.2 | 页面章节覆盖 | PASS | 0 | 覆盖 `TitlePage / title`、`RunPage / endless_run`、`SettlementPage / settlement` |\n| 2.4.3 | PRD 功能进入清单 | PASS | 0 | 清单覆盖标题入口、棋盘、工具、深度推进、掉落补给、结算、AC009 standalone 映射等关键 PRD 功能 |\n| 2.4.4 | 页面手册交互进入清单 | PASS | 0 | 开始、工具选择、棋盘点击、返场、再来一局、返回标题均有记录 |\n| 2.4.5 | 实现位置有效 | PASS | 0 | 清单中引用的 `src/pages/**`、`src/game/**`、`src/hooks/**`、`src/data/legacySceneMapping.ts` 均存在 |\n| 2.4.6 | 按类型复验关键逻辑 | PASS | 0 | navigation/api/state/interactive/static/animation 均可追到 handler、store、API/mock 或渲染代码 |\n| 2.4.7 | 可观察结果有效 | PASS | 0 | HUD 数值、工具数量、toast、背景切换、结算页数据均绑定 state 或 finalSnapshot |\n| 2.4.8 | 自检状态无未处理项 | PASS | 0 | 清单内未发现未处理 `FAIL` / `WARNING` 标记；原文使用通过标记表示完成 |\n\n#### 页面功能违规明细\n\n| # | 页面 | 功能点 | 清单状态 | 代码证据 | 复验结果 | 问题 |\n|---|------|--------|----------|----------|----------|------|\n| - | - | - | - | - | PASS | 无 |\n\n### 2.5 功能验收用例逐条判定（防演示直通）\n\n| # | 用例ID | 断言（期望可观察变化） | 代码证据 | 判定 | 问题 |\n|---|--------|----------------------|---------|------|------|\n| 1 | AC001-AC005 | grid_logic/freeform、旧场景顺序、LEVEL_ORDER、竖屏 override 下的 legacy config 可检查 | `src/data/legacySceneMapping.ts:4-30` | PASS | 无 |\n| 2 | AC006-AC009 | 标题/入口语义与保留 UI scene 注册映射 | `TitlePage/index.tsx:17-20`；`legacySceneMapping.ts:14-23` | PASS | AC009 本轮已修复，`UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` 均有映射 |\n| 3 | AC010-AC019 | 无玩家/敌人/移动收集物；棋盘编码、metadata、初始工具/默认工具 | `MineBoardRenderer.ts`；`enum.ts`；`game.ts`；`initialBoard.ts`；`mineRunSlice.ts` | PASS | 无 |\n| 4 | AC020-AC029 / AC053-AC060 | 工具消耗、WALL、四方向连通、遮挡层、炸弹范围与底行同规则 | `MineBoardModel.ts:24-83`；`EndlessMineGame.ts:49-110` | PASS | 无 |\n| 5 | AC030-AC037 / AC061-AC063 | 推进、新行、深度区、背景、稀有矿/宝箱/盲盒门槛、首次 toast | `MineBoardModel.ts:94-140`；`MineRowGenerator.ts:6-16`；`EndlessMineGame.ts:67-108` | PASS | 无 |\n| 6 | AC038-AC045 | 掉落、收益、补给、HUD 与工具栏刷新 | `rewardConfig.ts`；`EndlessMineGame.ts:71-97`；`RunPage/index.tsx:35-80` | PASS | 无 |\n| 7 | AC046 / AC064 | 无胜利/通关条件 | `App.tsx` 仅三路由；`legacySceneMapping.ts` 将胜利/完成 UI 保留为等价映射但不作为主流程触发 | PASS | 无 |\n| 8 | AC047-AC050 / AC077-AC078 | 主动返场与工具耗尽结算，结算页展示最终 snapshot | `EndlessMineGame.ts:110-115`；`useAppActions.ts:39-56`；`SettlementPage/index.tsx:8-24` | PASS | 本轮重点复核通过：工具耗尽路径传入 `createSettlementSnapshot('exhausted')`，snapshot 来源为引擎同一次动作合成后的 `this.state` 最终态，不再依赖上一帧 React 闭包 |\n| 9 | AC051 / AC066 | 音画资源注册与音效不改变玩法数据 | `assetKeys.ts`；`AudioGenerator.ts`；`EndlessMineGame.ts:63-108` | PASS | 音频仅播放；玩法数据由 model/reward/patch 更新 |\n| 10 | AC052 / AC065 | 综合验收与结算后输入冻结 | `useRouteGuard.ts:4-8`；`useAppActions.ts:43-54`；`EndlessMineGame.destroy()` | PASS | 无 |\n\n---\n\n## 重点 P0 复核结果\n\n| 上轮剩余 P0 | 当前判定 | 证据 |\n|---|---|---|\n| `Object.fromEntries` ES 兼容 | 已修复 | Layer 1.1 扫描无 `Object.fromEntries`；`AudioGenerator.register()` 改为 `Object.keys(...).forEach(...)` |\n| AC009 保留 UI 场景映射 | 已修复 | `src/data/legacySceneMapping.ts:18-22` 已包含 `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` |\n| 工具耗尽结算 snapshot 使用最终态 | 已修复 | `src/game/EndlessMineGame.ts:95-110` 先合成 `this.state = { ...this.state, ...patch, runLoot: nextRunLoot }`，再 `onSettle('exhausted', this.createSettlementSnapshot('exhausted'))`；`src/hooks/useAppActions.ts:39-43` 优先使用传入的 `finalSnapshot` |\n\n---\n\n## 系统性问题标记\n\n- 未发现 3 次以上重复出现的 P0 模式。\n- 建议沉淀的 P1 模式: 延迟音效与结算延迟 timer 缺少统一清理策略，建议 standalone-coding 在 Web Audio / action delay 示例中加入 timeout id 管理与 cleanup 模板。\n\n---\n\n## 评审结论\n\n**判定规则:**\n\n| 结果 | 条件 |\n|------|------|\n| PASS | 所有层 P0 = 0 且 PRD 功能未覆盖 = 0 且页面功能清单违规 = 0 且验收用例未实现/演示直通 = 0 |\n| PASS WITH WARNINGS | 所有层 P0 = 0 但有 P1 或 tech-spec 不一致 |\n| NEEDS FIX | 任意层 P0 > 0 或 PRD 功能未覆盖 > 0 或页面功能清单违规 > 0 或验收用例未实现/演示直通 > 0 |\n\n**本次结论: PASS WITH WARNINGS**\n\nP0 问题清单: 无。\n\n剩余警告不阻断通过:\n\n1. P1: `src/game/AudioGenerator.ts` 延迟音效 timer 未在 `destroy()` 中集中清理。\n2. P1: `src/hooks/useAppActions.ts` 结算延迟 timer 未显式 cleanup。\n3. tech-spec 不一致: 技术方案列出的多个 UI 子组件目录在当前实现中合并为页面内 JSX + `Stage` 通用定位组件，属于拆分粒度偏差，不影响本次功能验收。",
      "size": 17831,
      "truncated": false
    }
  ],
  "concepts": [
    {
      "sceneId": "concept_a_main",
      "label": "方案A · main",
      "src": "../assets/refs/concepts-brainstorm/concept_a_main.png",
      "srcKind": "local",
      "localPath": "assets/refs/concepts-brainstorm/concept_a_main.png",
      "localExists": true,
      "imageUrl": "https://game.kg.qq.com/walle-img-gen/output/bj21BQO6FHyYspbvhm_W4.png",
      "fileName": "concept_a_main.png",
      "taskId": "LEJ4GH0nxZldIbcXFL0Bh",
      "model": "gpt-image-2"
    }
  ],
  "overviews": [
    {
      "sceneId": "allpages",
      "label": "Overview · allpages",
      "src": "../assets/refs/design-sheets/overview_allpages.webp",
      "srcKind": "local",
      "localPath": "assets/refs/design-sheets/overview_allpages.webp",
      "localExists": true,
      "imageUrl": "https://game.kg.qq.com/walle-img-gen/output/HNH2gMes6QpNpO5Cq0jK9.png",
      "fileName": "overview_allpages.webp",
      "mimeType": "image/webp",
      "taskId": "yIk4vYhaKuazAubiZbwHW",
      "model": "gpt-image-2",
      "promptTitle": "总览图 — Overview Design",
      "promptFileName": "overview_allpages.png",
      "promptRatio": "3:2",
      "promptZh": "生成一张横向 3:2 画板，展示《无限矿井》无尽模式 3 个核心场景的 UI 缩略图；缩略图外区域是纯绿色 #00FF00 画板背景，缩略图内部是正式游戏 UI 成片截图。\n\n【单行排布】\n3 个严格 9:16 竖屏缩略图在 3:2 画板上单行横向排列，每个缩略图上下左右留清晰的纯绿 #00FF00 间隙。各格尺寸一致、水平等距、垂直居中。宁可格子小一些、绿边多一些，也严禁为填满高度或宽度把缩略图拉高、压宽、贴边；不要让任何缩略图变成横向或非 9:16 单元格。\n\n【核心场景清单】\n（1）标题页默认态（TitlePage / title）——整屏标题背景承载矿井入口场景，画面上部展示游戏标题艺术字，中下部留出进入无尽矿井的主按钮，作为从预加载后进入唯一可玩关卡的入口页。\n（2）无尽矿井主游玩界面默认态（RunPage / endless_run）——竖屏移动端单屏承载顶部状态行、顶部收益行、7×6 矿井棋盘、深度线、深度牌、补给条和底部工具区；底部工具区包含镐子、横炸、九炸、背包、收队返场五个入口；基础页面缩略图内不绘制任何弹窗、遮罩或 toast。\n（3）本局收获结算页默认态（SettlementPage / settlement）——主动返场或工具耗尽后展示本局最终数据；中部结果面板列出最终深度、深度类型、金币、矿石、材料和本局开启宝箱次数，底部展示再来一局与返回标题两个 Demo 导航按钮。\n\n【跨页统一】\n这 3 个核心场景共同覆盖全部跨页共享元素：地表矿区背景、标题与结算页的主标题视觉身份、主行动按钮体系、结果面板与工具底板的卡框体系、资源图标体系、矿井棋盘格与提示物、工具按钮槽、木镐图标、横排炸弹图标、九宫格炸弹图标、背包按钮、收队返场按钮、再来一局按钮、返回标题按钮。同一共享元素在所有缩略图中保持相同造型、色相、切面结构、笔触和材质；按钮体系、卡框体系、资源图标、工具图标、棋盘格、背景变体的视觉语言必须跨缩略图一致。\n\n【质量要求】\n- 每个缩略图都是高完成度 UI 设计稿，像商业上线项目截图\n- 画面干净，主体突出，信息清晰\n- 缩略图内部为正式游戏 UI 成片截图，外部仅为纯绿色画板背景\n- 分辨率：2K\n- 画布比例：3:2，3072×2048px\n\n【负面约束】\n- 不要 annotation，不要 label，不要 callout，不要 redline，不要 measurement line\n- 不要 blueprint，不要 wireframe，不要 technical notes，不要坐标，不要尺寸，不要编号\n- 不要边界框，不要辅助线，不要标尺，不要指示箭头\n- 不要在画面上出现文件名、变量名、英文占位符\n- 基础页面缩略图内不绘制任何弹窗、遮罩、toast、跑马灯或结算浮层\n- 不要把缩略图拉伸成横向，不要让 UI 填满非 9:16 单元格；每个缩略图保持 9:16 竖屏、四周留绿",
      "promptEn": "",
      "promptExists": true
    }
  ],
  "pages": [
    {
      "sceneId": "endless_run",
      "label": "Page · endless / run",
      "src": "../assets/refs/design-sheets/page_endless_run.webp",
      "srcKind": "local",
      "localPath": "assets/refs/design-sheets/page_endless_run.webp",
      "localExists": true,
      "imageUrl": "https://game.kg.qq.com/walle-img-gen/output/DTigFYDTWMy8WLIKlsNY6.png",
      "fileName": "page_endless_run.webp",
      "mimeType": "image/webp",
      "taskId": "BDf7aYuXNaA-N3dOYeoxq",
      "model": "gpt-image-2",
      "promptTitle": "无尽矿井主游玩界面默认态（RunPage）— Per-Page Design",
      "promptFileName": "page_endless_run.png",
      "promptRatio": "9:16",
      "promptZh": "生成一张 h5 游戏“无尽矿井主游玩界面默认态”的最终 UI 成片截图——在竖屏移动端单屏中承载 7×6 棋盘、挖掘与炸弹交互、深度推进、HUD 与工具栏的运行页面，展示单局推进中的完整画面。按 9:16（750×1334px）构图，正面平视视角，中心构图，像真实可落地的商业游戏玩法界面截图。\n\n【总览参考】\n继承 Overview 锁定的整体视觉语言：共享元素造型、按钮/卡片风格、卡片轮廓、资源图标、道具/角色外形、字体气质、色彩关系、描边厚度、阴影方向与材质。本页出现的跨页共享框架件——顶部状态与收益栏、资源图标体系、矿井棋盘格与提示物、深度牌、补给面板、底部工具栏、工具按钮槽、木镐图标、横排炸弹图标、九宫格炸弹图标、背包按钮、收队返场按钮——必须与 Overview 保持同一套造型与结构角色：顶栏贯穿顶部，深度与补给信息位于棋盘上方，补给进度条最右侧必须展示本次补给内容，棋盘位于中部主视觉区，底部工具栏贴近底部，图标同源，不得在本页重新设计成另一套样式。Overview 只传视觉语言与共享元素身份，不决定本页版面宽高比与构图：本图按完整 9:16 竖屏独立展开，顶部/中部/底部分区自然纵向延展、内容填满画布，共享元素的尺寸与占比以本页正常版面为准。优先级：完整 9:16 竖屏构图与形状约束 > Overview 视觉语言与共享元素一致性 > 下方内容描述。不复制 Overview 外部绿色画板背景、不复制其他核心场景缩略图、不把 3:2 板的多格构图/间距/边框带入本图。\n\n【内容】\n- 地表矿区背景（运行页默认背景）：铺满完整竖屏画布，作为运行时所有 HUD、棋盘和工具区的底层承载；深地表背景、浅海背景、深海背景、地心火山泥背景作为同一背景变体组的后续深度变体，不在默认态同时铺满出现。\n- 顶部状态栏容器（顶部第一信息行）：位于页面最上方，承载当前深度类型、本局推进与本局状态三类运行状态。\n- 当前深度类型文本（深度区状态）：位于顶部状态栏内，展示当前深度区名，例如地表矿区。\n- 本局推进文本（补给推进状态）：位于顶部状态栏内，展示本局推进积分与补给目标的进度关系。\n- 本局状态文本（运行状态徽记）：位于顶部状态栏内，展示推进中、工具耗尽或结算中等状态；默认态为推进中。\n- 顶部收益栏容器（顶部第二信息行）：位于顶部状态栏下方，承载本局累计收益。\n- 金币数值文本（收益计数）：位于顶部收益栏内，展示金币累计。\n- 矿石数值文本（收益计数）：位于顶部收益栏内，展示矿石累计。\n- 材料数值文本（收益计数）：位于顶部收益栏内，展示材料累计。\n- 深度牌容器（当前层数信息）：位于棋盘上方的信息栈左侧或上方主信息位，承载当前深度文本；必须清晰地位于 7×6 棋盘之上，而不是棋盘下方。\n- 当前深度文本（层数显示）：位于深度牌容器内，展示当前层数或深度进展。\n- 补给条容器（补给积分面板）：位于棋盘上方的信息栈中，与深度牌共同构成棋盘上方的深度补给区域；补给进度条横向展开。\n- 补给进度填充（补给进度可视化）：位于补给条容器内，表示 supplyPoints 到 supplyTarget 的当前进度。\n- 补给进度文本（补给数值）：位于补给条容器内，展示本局推进积分与目标。\n- 补给内容展示（补给奖励预告）：位于补给进度条最右侧，展示本次补给内容，例如“补给：木镐+4”或对应深度区工具补给；该信息必须和进度条同一行右端对齐，不能放到棋盘下方或底部工具栏。\n- Pixi 棋盘视口容器（中部主玩法区）：位于深度/补给信息下方、底部工具栏上方，是 7×6 矿井棋盘的主操作区域，视觉层级高于背景且低于顶部和底部 UI。\n- 矿井棋盘格素材组（7×6 可挖棋盘内容）：在棋盘视口内排列为 7 列 6 行，包含 EMPTY 坑道格、WALL 不可敲砖、sand 沙砖、ore 矿砖、blindBox 盲盒砖、coverVisible 遮挡层、chest 宝箱格、ore hint 矿石提示标记、tool hint 工具提示标记九类子素材；同质格子在棋盘中按不同内容语义分布，避免所有格子完全同款复制。\n- 深度线（棋盘推进标记）：位于棋盘视口内第 4 行和第 5 行之间的区域，用于提示推进深度检测位置。\n- 底部工具栏底板（底部操作区）：位于页面底部，承载五个操作入口。\n- 镐子工具按钮（默认工具入口）：位于底部工具栏内，代表木镐点击挖掘工具。\n- 横炸工具按钮（行范围工具入口）：位于底部工具栏内，代表横排炸弹。\n- 九炸工具按钮（区域范围工具入口）：位于底部工具栏内，代表九宫格炸弹。\n- 木镐图标（工具图标）：位于镐子工具按钮内，配合工具数量文本表示木镐库存。\n- 横排炸弹图标（工具图标）：位于横炸工具按钮内，配合工具数量文本表示横排炸弹库存。\n- 九宫格炸弹图标（工具图标）：位于九炸工具按钮内，配合工具数量文本表示九宫格炸弹库存。\n- 背包按钮（辅助入口）：位于底部工具栏内，作为背包入口。\n- 收队返场按钮（主动结算入口）：位于底部工具栏内，触发主动返场并进入本局收获结算。\n- 工具数量文本组（工具库存数字）：位于底部工具栏内，共 3 组，分别对应木镐、横排炸弹、九宫格炸弹数量。\n- Toast 提示层（临时反馈层）：默认态不显示；仅作为运行时首次稀有矿提示等临时反馈的承载层，不在本张默认态画面中绘制可见 toast。\n\n【形状约束】\n以下元素必须按指定比例/形状渲染，避免被拉伸或变形（仅列出 opaque 整张直出型元素，透明叠加元素不在此段约束）：\n- 地表矿区背景: 整屏 9:16 竖版矩形\n- 深地表背景: 整屏 9:16 竖版矩形（作为同组背景变体语义锁，不与默认背景同时铺满绘制）\n- 浅海背景: 整屏 9:16 竖版矩形（作为同组背景变体语义锁，不与默认背景同时铺满绘制）\n- 深海背景: 整屏 9:16 竖版矩形（作为同组背景变体语义锁，不与默认背景同时铺满绘制）\n- 地心火山泥背景: 整屏 9:16 竖版矩形（作为同组背景变体语义锁，不与默认背景同时铺满绘制）\n这些约束仅作用于形状与比例的语义正确性，不可渲染为任何可见文字、数字、边框、测量线或标注。\n\n【质量要求】\n- 高完成度 UI 设计稿，像商业上线项目截图\n- 画面干净，主体突出，信息清晰\n- 元素风格统一，不得风格混杂\n- 具有正式上线项目质感\n- 所有内容都服务于“玩法界面”而非“宣传海报”\n- 分辨率：2K\n- 比例：9:16，750×1334px\n\n【负面约束】\n- 不要 annotation，不要 label，不要 callout，不要 redline，不要 measurement line\n- 不要 blueprint，不要 wireframe，不要 overlay text，不要 technical notes\n- 不要任何可见坐标、尺寸、编号、边界框、辅助线、标尺、指示箭头\n- 不要在画面上出现文件名、变量名、英文占位符（如 “button_start”、“bg_main”）\n- 不要 landscape 横向 UI 构图，不要把 Overview 缩略图的单元格比例/外框/间距带入本图，不要压扁或拉伸页面\n- 不要任何弹窗/遮罩/广告弹窗/结果弹窗/奖励弹窗/toast/跑马灯浮层/结算浮层——这些由独立 Modal Archetype 图承载",
      "promptEn": "",
      "promptExists": true
    },
    {
      "sceneId": "settlement",
      "label": "Page · settlement",
      "src": "../assets/refs/design-sheets/page_settlement.webp",
      "srcKind": "local",
      "localPath": "assets/refs/design-sheets/page_settlement.webp",
      "localExists": true,
      "imageUrl": "https://game.kg.qq.com/walle-img-gen/output/U_TGAXSrGvJgZhQ9tD1qm.png",
      "fileName": "page_settlement.webp",
      "mimeType": "image/webp",
      "taskId": "_XX15X2A-kMaeJa9jx9oK",
      "model": "gpt-image-2",
      "promptTitle": "本局收获结算页默认态（SettlementPage）— Per-Page Design",
      "promptFileName": "page_settlement.png",
      "promptRatio": "9:16",
      "promptZh": "生成一张 h5 游戏“本局收获结算页默认态”的最终 UI 成片截图——展示工具耗尽或主动返场后的本局最终数据的《无限矿井》无尽模式结算页面，展示本局收获统计与 Demo 导航的完整画面。按 9:16（750×1334px）构图，正面平视视角，中心构图，像真实可落地的商业游戏玩法界面截图。\n\n【总览参考】\n继承 Overview 锁定的整体视觉语言：共享元素造型、按钮/卡片风格、卡片轮廓、资源图标、道具/角色外形、字体气质、色彩关系、描边厚度、阴影方向与材质。本页出现的跨页共享框架件——地表矿区背景、结算标题视觉身份、结果面板卡框、金币/矿石/材料资源图标体系、主行动按钮体系、再来一局按钮、返回标题按钮——必须与 Overview 保持同一套造型与结构角色，不得在本页重新设计成另一套样式。Overview 只传视觉语言与共享元素身份，不决定本页版面宽高比与构图：本图按完整 9:16 竖屏独立展开，顶部/中部/底部分区自然纵向延展、内容填满画布，共享元素的尺寸与占比以本页正常版面为准。优先级：完整 9:16 竖屏构图与形状约束 > Overview 视觉语言与共享元素一致性 > 下方内容描述。不复制 Overview 外部绿色画板背景、不复制其他核心场景缩略图、不把 3:2 板的多格构图/间距/边框带入本图。\n\n【内容】\n- 结算页背景（整屏结算背景）：铺满完整竖屏画布，复用运行页地表矿区背景体系，为本局收获结算提供底层场景承载。\n- 本局收获结算标题（页面主标题）：位于页面上部标题区，明确当前页面语义为本局收获结算，而不是失败页面。\n- 结算结果面板（核心数据面板）：位于页面中部，是结算页主视觉容器，承载本局最终数据。\n- 结算数据文本组（本局收获统计）：位于结算结果面板内，共 6 项，分别为最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数；每项有清晰的信息层级，避免混成一行。\n- 再来一局按钮（Demo 续玩入口）：位于页面底部导航区，触发重新开始一局。\n- 返回标题按钮（Demo 返回入口）：位于页面底部导航区，触发返回标题页。\n- 结算原因提示文本（结束原因说明）：位于结算结果面板内，说明本次结算来自工具耗尽或主动返场，作为数据统计的辅助解释。\n\n【形状约束】\n以下元素必须按指定比例/形状渲染，避免被拉伸或变形（仅列出 opaque 整张直出型元素，透明叠加元素不在此段约束）：\n- 结算页背景: 整屏 9:16 竖版矩形\n这些约束仅作用于形状与比例的语义正确性，不可渲染为任何可见文字、数字、边框、测量线或标注。\n\n【质量要求】\n- 高完成度 UI 设计稿，像商业上线项目截图\n- 画面干净，主体突出，信息清晰\n- 元素风格统一，不得风格混杂\n- 具有正式上线项目质感\n- 所有内容都服务于“玩法界面”而非“宣传海报”\n- 分辨率：2K\n- 比例：9:16，750×1334px\n\n【负面约束】\n- 不要 annotation，不要 label，不要 callout，不要 redline，不要 measurement line\n- 不要 blueprint，不要 wireframe，不要 overlay text，不要 technical notes\n- 不要任何可见坐标、尺寸、编号、边界框、辅助线、标尺、指示箭头\n- 不要在画面上出现文件名、变量名、英文占位符（如 “button_start”、“bg_main”）\n- 不要 landscape 横向 UI 构图，不要把 Overview 缩略图的单元格比例/外框/间距带入本图，不要压扁或拉伸页面\n- 不要任何弹窗/遮罩/广告弹窗/结果弹窗/奖励弹窗/toast/跑马灯浮层/结算浮层——这些由独立 Modal Archetype 图承载\n\n\n---\n\n# Asset Sheet 提示词（纯素材提取图）\n\n## TitlePage / title（标题页默认态）",
      "promptEn": "",
      "promptExists": true
    },
    {
      "sceneId": "title",
      "label": "Page · title",
      "src": "../assets/refs/design-sheets/page_title.webp",
      "srcKind": "local",
      "localPath": "assets/refs/design-sheets/page_title.webp",
      "localExists": true,
      "imageUrl": "https://game.kg.qq.com/walle-img-gen/output/7RCUy8W6hfXsvRut-aI87.png",
      "fileName": "page_title.webp",
      "mimeType": "image/webp",
      "taskId": "I7b8pRXb0XzjC5y0RHTw5",
      "model": "gpt-image-2",
      "promptTitle": "标题页默认态（TitlePage）— Per-Page Design",
      "promptFileName": "page_title.png",
      "promptRatio": "9:16",
      "promptZh": "生成一张 h5 游戏“标题页默认态”的最终 UI 成片截图——展示标题与进入唯一可玩关卡入口的《无限矿井》无尽模式启动页面，展示等待玩家点击“进入无尽矿井”的完整画面。按 9:16（750×1334px）构图，正面平视视角，中心构图，像真实可落地的商业游戏玩法界面截图。\n\n【总览参考】\n继承 Overview 锁定的整体视觉语言：共享元素造型、按钮/卡片风格、卡片轮廓、资源图标、道具/角色外形、字体气质、色彩关系、描边厚度、阴影方向与材质。本页出现的跨页共享框架件——标题艺术字身份、主行动按钮体系、矿井背景体系——必须与 Overview 保持同一套造型与结构角色，不得在本页重新设计成另一套样式。Overview 只传视觉语言与共享元素身份，不决定本页版面宽高比与构图：本图按完整 9:16 竖屏独立展开，顶部/中部/底部分区自然纵向延展、内容填满画布，共享元素的尺寸与占比以本页正常版面为准。优先级：完整 9:16 竖屏构图与形状约束 > Overview 视觉语言与共享元素一致性 > 下方内容描述。不复制 Overview 外部绿色画板背景、不复制其他核心场景缩略图、不把 3:2 板的多格构图/间距/边框带入本图。\n\n【内容】\n- 标题背景（整屏入口背景）：铺满完整竖屏画布，是标题页的主环境承载层，为标题与入口按钮提供背景，不出现运行时 HUD 或棋盘。\n- 游戏标题艺术字（页面主标题）：位于页面上部标题区，是“无限矿井”的主视觉识别，层级高于背景，作为进入无尽矿井前的主题锚点。\n- 进入无尽矿井按钮（主行动入口）：位于页面底部入口区，承载从 TitleScreen 进入 EndlessMineRunScene 的主操作，视觉层级仅次于标题艺术字，按钮语义明确为开始一局。\n\n【形状约束】\n以下元素必须按指定比例/形状渲染，避免被拉伸或变形（仅列出 opaque 整张直出型元素，透明叠加元素不在此段约束）：\n- 标题背景: 整屏 9:16 竖版矩形\n这些约束仅作用于形状与比例的语义正确性，不可渲染为任何可见文字、数字、边框、测量线或标注。\n\n【质量要求】\n- 高完成度 UI 设计稿，像商业上线项目截图\n- 画面干净，主体突出，信息清晰\n- 元素风格统一，不得风格混杂\n- 具有正式上线项目质感\n- 所有内容都服务于“玩法界面”而非“宣传海报”\n- 分辨率：2K\n- 比例：9:16，750×1334px\n\n【负面约束】\n- 不要 annotation，不要 label，不要 callout，不要 redline，不要 measurement line\n- 不要 blueprint，不要 wireframe，不要 overlay text，不要 technical notes\n- 不要任何可见坐标、尺寸、编号、边界框、辅助线、标尺、指示箭头\n- 不要在画面上出现文件名、变量名、英文占位符（如 “button_start”、“bg_main”）\n- 不要 landscape 横向 UI 构图，不要把 Overview 缩略图的单元格比例/外框/间距带入本图，不要压扁或拉伸页面\n- 不要任何弹窗/遮罩/广告弹窗/结果弹窗/奖励弹窗/toast/跑马灯浮层/结算浮层——这些由独立 Modal Archetype 图承载",
      "promptEn": "",
      "promptExists": true
    }
  ],
  "serverBaseUrl": "http://127.0.0.1:4192",
  "conceptRefs": {
    "file": "策划-概念图引用.json",
    "exists": true,
    "generatedAt": "2026-06-21T10:16:17.801Z",
    "readError": ""
  },
  "overviewRefs": {
    "file": "设计-总览图引用.json",
    "exists": true,
    "generatedAt": "2026-06-21T11:16:06.997Z",
    "readError": ""
  },
  "overviewPrompts": {
    "file": "设计-design-sheet提示词.md",
    "exists": true,
    "count": 1,
    "readError": ""
  },
  "pageRefs": {
    "file": "设计-页面设计图引用.json",
    "exists": true,
    "generatedAt": "2026-06-21T11:26:35.128Z",
    "readError": ""
  },
  "pagePrompts": {
    "file": "设计-design-sheet提示词.md",
    "exists": true,
    "count": 3,
    "readError": ""
  }
};
