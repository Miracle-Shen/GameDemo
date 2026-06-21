// 本文件由 idea-pipeline-dashboard.mjs 自动生成，请勿手改
window.IDEA_PIPELINE_DATA = {
  "meta": {
    "project": "generic_endless_mine_endless_mode",
    "version": "2026/5/11.01",
    "updatedAt": "2026/6/21 18:31:10",
    "dashboardFile": "流水线总览.html",
    "dataFile": "idea-pipeline-data.js"
  },
  "current": 4,
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
      "status": "current",
      "todoCount": 2,
      "artifactCount": 1,
      "existsCount": 1
    },
    {
      "id": 5,
      "name": "方案确立",
      "hint": "输出设计方案、技术方案、元素实现清单骨架",
      "status": "pending",
      "todoCount": 2,
      "artifactCount": 2,
      "existsCount": 0
    },
    {
      "id": 6,
      "name": "视觉设计",
      "hint": "总览定版、Page 图生成、读图回填、元素清单确认、Asset Sheet 提示词与素材生成",
      "status": "pending",
      "todoCount": 10,
      "artifactCount": 6,
      "existsCount": 0
    },
    {
      "id": 7,
      "name": "代码开发",
      "hint": "生成完整项目代码",
      "status": "pending",
      "todoCount": 2,
      "artifactCount": 0,
      "existsCount": 0
    },
    {
      "id": 8,
      "name": "独立评审",
      "hint": "三层审查输出评审报告",
      "status": "pending",
      "todoCount": 3,
      "artifactCount": 1,
      "existsCount": 0
    }
  ],
  "currentTodos": [
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
  "todosByArtifact": {
    "需求-最终PRD.md": [
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
      "content": "# 《无限矿井》无尽模式 游戏设计文档（GDD）\n\n> 阶段: Game Design Document  \n> 日期: 2026-06-21  \n> 输入模式: PRD 输入  \n> 业务输入: `/Users/miracleshen/GameAgent/GDD-无限矿井无尽模式.md`  \n> 视觉锚点: `/Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode/game-agent/策划-玩法概念文档.md`  \n> SSOT 说明: 用户 PRD 是业务唯一事实源；桥接文档仅用于 `selected_concept_path`、`selected_concept_url`、视觉基调和概念图引用。\n\n---\n\n## 一、需求审查结果\n\n| # | 维度 | 状态 | 说明 |\n|---|------|------|------|\n| 1 | 产品定位 | ✅ | 《无限矿井》无尽模式，移动端卡通矿井下挖玩法 Demo；实现归类为 `grid_logic`，子类型 `freeform`，核心交互为点击格子直接结算挖掘或范围工具释放。 |\n| 2 | 核心体验 | ✅ | 以持续向更深矿层推进、挖空下陷、资源飞入 HUD、补给续航和本局收获结算为核心体验；视觉强调厚重泥土体块、矿灯暖光和深度色带变化。 |\n| 3 | 核心循环 | ✅ | 开始一局并消耗体力 → 获得初始工具 → 点击合法格挖掘/释放炸弹 → 破坏格子并获得资源/补给积分/工具 → 底部打通后推进深度并生成新行 → 工具耗尽或主动返场 → 结算页展示本局收获。 |\n| 4 | 视觉基调 | ✅ | 用户 PRD 明确移动端卡通矿井风格、分深度背景资源和资源注册表；桥接文档提供主概念图引用。 |\n| 5 | 平台与环境 | ✅ | PRD 明确分辨率 `1152 x 768`、移动端优先布局、OpenGame `grid_logic` 模板、`BaseGridScene` 与 `UIScene`；未要求渲染框架选型。 |\n| 6 | 开始/结束条件 | ✅ | `TitleScreen` 进入唯一可玩关卡 `EndlessMineRunScene`；无通关条件；工具耗尽或点击 `收队返场` 进入 `GameOverUIScene` 作为本局收获结算页。 |\n| 7 | 异常与边界 | ✅ | PRD 明确点击合法性、连通判定、遮挡层、WALL、炸弹范围、最底行规则、至少一条下行路径、输入防抖、工具耗尽和主动返场等边界。缺失信息：断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理未在 PRD 明确。 |\n| 8 | 社交与传播 | ❓ | 缺失信息：PRD 未提及分享、排行榜、好友互动、邀请、社交传播或外部活动结算规则。 |\n\n---\n\n## 二、产品定位（继承用户 PRD）\n\n- **项目名称**: 《无限矿井》无尽模式\n- **一句话定位**: 基于 OpenGame `grid_logic` 模板实现的移动端卡通矿井无尽下挖 Demo，玩家通过点击格子挖掘和使用工具持续向下推进，并在本局结束后查看本局收获。\n- **目标用户**: 缺失信息：用户 PRD 未明确人群画像、年龄段、地区、付费倾向或使用场景。\n- **平台与环境**:\n  - 模板类型: `grid_logic`\n  - 子类型 / 结算节奏: `freeform`\n  - 运行分辨率: `1152 x 768`\n  - 可视棋盘: `7 x 6`\n  - 核心场景基类: `BaseGridScene`\n  - 界面场景: `UIScene`\n  - P0 结算承载页: 复用 `GameOverUIScene`，语义改为“本局收获结算”。\n- **核心交互**: 点击格子直接结算一次挖掘或范围工具释放，不使用方向移动主角。\n- **业务边界**:\n  - 不创建玩家可移动实体。\n  - 不创建敌人实体。\n  - 不切分多个固定关卡，`EndlessMineRunScene` 为单场景持续生成式关卡。\n  - P0 以棋盘格内容、工具库存、深度和收益累计驱动状态。\n\n---\n\n## 三、系统设计\n\n### 3.1 场景流转与关卡入口系统\n\n- **系统概述**: 管理从预加载、标题页、无尽矿井运行场景到结算页的固定流程。\n- **核心流程**:\n  1. `Preloader` 完成资源预加载。\n  2. 进入 `TitleScreen`。\n  3. `TitleScreen` 的入口按钮文案为“进入无尽矿井”。\n  4. 点击后进入唯一可玩关卡 `EndlessMineRunScene`。\n  5. 玩家点击 `收队返场` 或工具耗尽时，进入 `GameOverUIScene`。\n  6. `GameOverUIScene` 在本项目中承担“本局收获结算”职责，而不是失败语义。\n- **规则定义**:\n  - 场景流转为 `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene`。\n  - `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。\n  - 场景键名清单: `Preloader`、`TitleScreen`、`EndlessMineRunScene`、`UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。\n  - `EndlessMineRunScene` 是单场景持续生成式关卡。\n- **资源关联**:\n  - 依赖 `src/LevelManager.ts`、`src/main.ts`、`src/scenes/TitleScreen.ts`、`src/scenes/EndlessMineRunScene.ts`、`src/scenes/GameOverUIScene.ts`。\n- **边界与异常**:\n  - `checkWinCondition()` 恒为 `false`，不进入胜利流程。\n  - `VictoryUIScene`、`GameCompleteUIScene` 保留注册，但无尽模式 P0 不以其作为主结算页。\n  - 缺失信息：暂停页在本模式中的具体入口、返回、退出和结算关系未在 PRD 明确。\n\n### 3.2 运行时状态模型系统\n\n- **系统概述**: 维护无尽矿井单局内深度、深度区、工具、补给、收益和结算状态。\n- **核心流程**:\n  1. 进入一局后初始化深度、深度区、工具、补给和收益字段。\n  2. 每次点击或炸弹释放后进入处理流水线。\n  3. 破坏、掉落、补给、深度推进后同步运行态字段。\n  4. 状态变化后刷新 HUD、深度牌、顶部累计区和结算数据。\n- **规则定义**:\n  - 必须维护字段:\n    - `currentDepth: number`\n    - `currentBiomeIndex: number`\n    - `currentBiomeName: string`\n    - `supplyPoints: number`\n    - `supplyTarget: number`\n    - `woodPick: number`\n    - `rowBomb: number`\n    - `areaBomb: number`\n    - `selectedTool: 'pick' | 'rowBomb' | 'areaBomb'`\n    - `runStatus: '推进中' | '工具耗尽' | '结算中'`\n    - `runLoot.gold: number`\n    - `runLoot.ore: number`\n    - `runLoot.material: number`\n    - `runLoot.openedChests: number`\n    - `rareOreUnlockedShown: boolean`\n  - 初始工具: `woodPick = 20`、`rowBomb = 0`、`areaBomb = 0`。\n  - 默认工具: `pick`。\n  - 开始一局体力消耗: `startEnergyCost = 1`。\n- **资源关联**:\n  - HUD 展示、棋盘处理、补给发放、掉落结算和结算页均读取该运行态。\n- **边界与异常**:\n  - 工具库存三项均小于等于 0 时进入工具耗尽结算路径。\n  - 主动返场将 `runStatus` 设为 `结算中` 并进入同一结算跳转。\n  - 缺失信息：主矿区真实货币、体力与宿主系统的接口、扣减失败回滚、跨局持久化未在 PRD 明确；PRD 约定独立 Demo 先以场景内本地展示字段代替。\n\n### 3.3 棋盘编码与格子元数据系统\n\n- **系统概述**: 使用格子数值与场景内 metadata 组合表达可挖内容、不可敲砖、遮挡层、提示和奖励表。\n- **核心流程**:\n  1. 初始化 `7 x 6` 可视棋盘。\n  2. Terrain layer 记录基础格类型。\n  3. `SPECIAL` 格额外挂载 metadata。\n  4. 点击或炸弹命中时先根据格类型与 metadata 判断伤害、显露、掉落和空洞状态。\n- **规则定义**:\n  - `CellType.EMPTY (0)`: 已挖空通路。\n  - `CellType.WALL (1)`: 不可敲砖。\n  - `CellType.FLOOR (2)`: 预留，不直接用于 P0 主要内容。\n  - `CellType.SPECIAL (6)`: 所有可破坏砖内容的统一外层表示。\n  - `SPECIAL` metadata 字段:\n    - `coverVisible: boolean`\n    - `contentType: 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal'`\n    - `durability: number`\n    - `hasOreHint: boolean`\n    - `hasToolHint: boolean`\n    - `rewardTableId: string`\n- **资源关联**:\n  - 与挖掘点击、炸弹命中、掉落、补给、深度推进和 HUD 刷新系统关联。\n- **边界与异常**:\n  - `WALL` 不可被木镐或炸弹破坏。\n  - 深红遮挡层存在时，点击只能作用于遮挡层，不能越过遮挡层直接伤害真实内容。\n  - 缺失信息：`rewardTableId` 的完整枚举、每个掉落表的精确内容和概率未在 PRD 中以表格完全展开。\n\n### 3.4 输入、连通与工具释放系统\n\n- **系统概述**: 处理木镐、横排炸弹、九宫格炸弹的选择、合法性校验、消耗和命中范围。\n- **核心流程**:\n  1. 玩家选中当前工具，默认 `pick`。\n  2. 点击目标格后校验当前工具是否可用。\n  3. 校验落点是否符合当前坑道连通或边缘合法操作规则。\n  4. 合法时保存撤销状态并调用 `runProcessingPipeline()`。\n  5. `onProcessComplete()` 结算耐久、显露、破坏、资源、飞字和音效。\n- **规则定义**:\n  - 单次点击视为一次 action。\n  - `onCellClicked()` 处理木镐挖掘、横排炸弹释放、九宫格炸弹释放。\n  - `pick`: 消耗 `1` 木镐，对目标格造成 `1` 点伤害。\n  - `rowBomb`: 消耗 `1` 横排炸弹，命中当前行全部可破坏格。\n  - `areaBomb`: 消耗 `1` 九宫格炸弹，命中目标 `3x3` 全部可破坏格。\n  - 点击 `WALL`: 不消耗工具，播放无效反馈。\n  - 炸弹对 `WALL` 无效。\n  - 木镐只能点击“与当前坑道连通”的格。\n  - 当前坑道连通判定: 目标格与任一 `CellType.EMPTY` 坑道格在四方向邻接意义上连通，或目标格本身就是紧贴当前坑道边缘的第一层可破坏格。\n  - 四方向邻接，不采用斜向连通。\n  - 炸弹允许波及未连通但可见的格；炸弹施放落点必须是当前坑道可达或当前坑道边缘合法点击位。\n  - 不能把炸弹直接放在完全不可操作的封闭格上。\n  - 最底行与其余 `7x6` 可视区域完全同规则，不是预览层。\n  - 输入防抖: `inputDebounceMs = 120ms`。\n- **资源关联**:\n  - 消耗 `woodPick`、`rowBomb`、`areaBomb`。\n  - 触发格子 metadata 更新、掉落和 HUD 刷新。\n- **边界与异常**:\n  - 当前工具数量不足时不得释放该工具。\n  - 未连通格不能作为木镐目标。\n  - 未显露格不能跳过遮挡层直接操作第二层真实内容。\n  - 缺失信息：多指同时点击、拖动取消、长按时长、桌面 Hover 预览的精确触发阈值未在 PRD 明确。\n\n### 3.5 挖掘处理流水线与模板钩子系统\n\n- **系统概述**: 将一次点击动作映射到模板生命周期钩子，完成破坏、掉落、补给、推进和状态刷新。\n- **核心流程**:\n  1. `onCellClicked(gridX, gridY)`: 选择目标、校验工具、校验合法性、保存 undo 状态、触发处理流水线。\n  2. `onProcessComplete()`: 当前点击造成耐久变化、炸弹范围破坏、砖块碎裂、飞字、命中音效。\n  3. `onWorldPhase()`: 自动开箱、工具增加、资源入账、积分条积累、阶段提升 toast。\n  4. `onEnemyPhase()`: 空实现。\n  5. `onMoveProcessed()`: 若底部形成真实通路，上卷棋盘并生成新底行；如仍需继续推进则返回 `true` 继续链式处理。\n  6. `onBoardStateChanged()`: HUD 文案刷新、当前深度类型刷新、顶部累计区刷新。\n  7. `onLoseConditionMet()`: 打开结算页并写入本局深度、矿石、材料、金币、宝箱次数。\n- **规则定义**:\n  - `EndlessMineRunScene` 必须实现 `getBoardConfig()`、`getTurnConfig()`、`createEnvironment()`、`createEntities()`、`checkWinCondition()`、`checkLoseCondition()`。\n  - 建议重写 `onCellClicked()`、`onProcessComplete()`、`onWorldPhase()`、`onMoveProcessed()`、`onBoardStateChanged()`、`onLoseConditionMet()`、`onActionInput()`、`onCellHovered()`。\n  - `onEnemyPhase()` 保持空实现。\n- **资源关联**:\n  - 关联棋盘、实体展示、HUD、音效、背景、掉落、结算数据。\n- **边界与异常**:\n  - P0 尽量少建实体，避免和模板能力冲突。\n  - 可选轻量展示实体包括 `ChestMarkerEntity`、`OreHintEntity`、`ToolHintEntity`；若实现成本过高，退化为 Scene 内直接绘制 image/sprite，而非 BoardManager tracked entity。\n\n### 3.6 初始棋盘与新行生成系统\n\n- **系统概述**: 定义首屏固定棋盘与推进一层后的底部新行生成规则。\n- **核心流程**:\n  1. 初始进入时使用固定 `7 x 6` 首屏棋盘保证手感一致。\n  2. 玩家挖掘并在底部形成真实通路。\n  3. 每推进一层，棋盘整体上卷 1 行，删除顶部 1 行，在底部生成 1 行新数据。\n  4. 根据当前深度区调整内容概率和背景。\n- **规则定义**:\n  - 初始 Terrain layer:\n\n```text\n_ _ _ _ _ _ _\n_ * * # * * _\n_ * * * * # _\n_ # * * * * _\n_ * * # * * _\n_ * * * * * _\n```\n\n  - Terrain 约定: `_ = CellType.EMPTY`，`# = CellType.WALL`，`* = CellType.SPECIAL`。\n  - 初始 metadata layer:\n\n```text\nE S O X S S E\nS O S W B X S\nS S O S T W S\nE W S O S S E\nS T S W O S S\nS S O S S B T\n```\n\n  - Metadata 约定: `S = sand`，`O = ore`，`B = blindBox`，`W = indestructible wall`，`T = tool hint brick`，`X = chest`，`E = empty reveal`。\n  - 首屏目标:\n    - 教会玩家“多数格先有遮挡层”。\n    - 保证至少 2 条向下可推进路线。\n    - 首屏允许出现 1 个工具格和 1 个宝箱。\n    - 首屏不出现稀有矿石提示。\n  - 新行生成规则:\n    1. 至少保留 1 条从当前底部可继续向下的可破坏路径。\n    2. 浅红色沙砖是所有深度区中概率最高内容。\n    3. 深度越深，`coverVisible` 概率更高、`WALL` 占比更高、`ore` 更分散、`blindBox` 与 `chest` 概率逐步提高。\n    4. `chest` 仅 biome 2 及以后可出现。\n    5. `blindBox` 与 rare ore 仅 biome 3 及以后可出现。\n    6. 每个深度区内 `supplyTarget` 增长，补给更难积满。\n- **资源关联**:\n  - 关联深度区、背景资源、格子 metadata、补给目标和掉落内容。\n- **边界与异常**:\n  - 生成新行时必须保证玩家始终至少存在一条继续向下扩张的合法操作链，而不是仅存在理论上的视觉通路。\n  - 缺失信息：新行内容的逐格精确概率表未在 PRD 明确。\n\n### 3.7 深度区与背景切换系统\n\n- **系统概述**: 根据当前深度划分矿区阶段，切换背景资源与内容侧重点。\n- **核心流程**:\n  1. 当前深度增加后计算深度区编号和名称。\n  2. 切换对应背景资源。\n  3. 更新 HUD 的当前深度类型。\n  4. 到达稀有矿首次解锁条件时显示一次提示。\n- **规则定义**:\n\n| 深度区编号 | 深度区名称 | 深度范围 | 对应背景资源 | 内容侧重点 |\n|------------|-----------|------------|-------------------|------------------|\n| 1 | 地表矿区 | 1-30 | `mine_surface_bg` | 沙砖多，障碍少，开局教学 |\n| 2 | 深地表 | 31-80 | `mine_mid_bg` | 开始出现宝箱，路径略绕 |\n| 3 | 浅海 | 81-150 | `mine_shallow_sea_bg` | 首次解锁稀有矿、盲盒矿 |\n| 4 | 深海 | 151-260 | `mine_deep_sea_bg` | 宝箱与盲盒概率上升，墙面更密 |\n| 5 | 地心火山泥 | 261+ | `mine_core_bg` | 高价值最高，遮挡和障碍最强 |\n\n  - `rareOreUnlockBiomeIndex = 3`。\n  - `chestUnlockBiomeIndex = 2`。\n  - `blindBoxUnlockBiomeIndex = 3`。\n  - `firstRareToastEnabled = true`。\n- **资源关联**:\n  - 背景资源: `mine_surface_bg`、`mine_mid_bg`、`mine_shallow_sea_bg`、`mine_deep_sea_bg`、`mine_core_bg`。\n  - HUD 文案: `当前深度类型：{biomeName}`。\n- **边界与异常**:\n  - 深度 `261+` 均归入地心火山泥。\n  - 缺失信息：每个深度区内精确难度曲线和精确掉落概率未在 PRD 明确。\n\n### 3.8 掉落、收益与补给积分系统\n\n- **系统概述**: 处理挖掘内容带来的金币、矿石、材料、工具、积分、宝箱和补给奖励。\n- **核心流程**:\n  1. 挖开内容格或宝箱后，根据 `contentType` 结算收益。\n  2. 资源即时入账并播放飞入顶部 HUD 的反馈。\n  3. 推进深度或随机积分掉落增加 `supplyPoints`。\n  4. 当 `supplyPoints >= supplyTarget` 时，扣除一轮目标值或清空一轮目标值，并按当前深度区发放工具补给。\n  5. 刷新工具数量与补给条。\n- **规则定义**:\n  - `sand`: 不直接掉金币或材料，只承担打通与推进。\n  - `ore`: 掉落金币、矿石、材料三选二或三选三。\n  - `blindBox`: 掉落工具、积分、宝箱中的高波动组合。\n  - `chest`: 自动开启，掉落工具和矿石中的一种或多种。\n  - `tool`: 只掉落 `woodPick / rowBomb / areaBomb`。\n  - `emptyReveal`: 仅显露坑道，不掉收益。\n  - 每推进 1 层: `supplyPoints +1`。\n  - 掉落积分奖励时: 立即增加 `supplyPoints`。\n  - `supplyPoints >= supplyTarget` 时:\n    - 清空或扣除一轮目标值。\n    - 根据当前深度区发一份工具补给。\n    - 触发轻量奖励反馈。\n  - 补给奖励表:\n\n| 深度区 | 补给奖励 |\n|------|---------------|\n| 地表矿区 | `woodPick +4` |\n| 深地表 | `woodPick +3`, `rowBomb +1` |\n| 浅海 | `woodPick +3`, `rowBomb +1` |\n| 深海 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |\n| 地心火山泥 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |\n\n- **资源关联**:\n  - 写入 `runLoot.gold`、`runLoot.ore`、`runLoot.material`、`runLoot.openedChests`、`woodPick`、`rowBomb`、`areaBomb`、`supplyPoints`。\n- **边界与异常**:\n  - PRD 中存在“清空或扣除一轮目标值”的二选一描述；缺失信息：最终采用清空还是扣除目标值未唯一明确。\n  - 缺失信息：金币、矿石、材料的精确掉落数量、每类内容的精确概率、宝箱掉落表、盲盒掉落表未在 PRD 明确。\n\n### 3.9 HUD、工具栏与结算展示系统\n\n- **系统概述**: 固定展示顶部状态、顶部收益、底部工具区和结算页数据。\n- **核心流程**:\n  1. 游戏中持续展示顶部状态行、顶部收益行和底部工具区。\n  2. 每次棋盘状态变化后刷新 HUD。\n  3. 主动返场或工具耗尽时进入结算页。\n  4. 结算页展示本局最终深度、深度类型、金币、矿石、材料和开启宝箱次数。\n- **规则定义**:\n  - 顶部状态行固定展示:\n    - `当前深度类型：{biomeName}`\n    - `本局推进：{supplyPoints}/{supplyTarget}`\n    - `本局状态：{runStatus}`\n  - 顶部收益行固定展示:\n    - `金币 {runLoot.gold}`\n    - `矿石 {runLoot.ore}`\n    - `材料 {runLoot.material}`\n  - 底部工具区固定展示:\n    - `[镐子 {woodPick}]`\n    - `[横炸 {rowBomb}]`\n    - `[九炸 {areaBomb}]`\n    - `[背包]`\n    - `[收队返场]`\n  - 结算页展示:\n    - 最终深度\n    - 深度类型\n    - 金币\n    - 矿石\n    - 材料\n    - 本局开启宝箱次数\n- **资源关联**:\n  - 读取运行态字段和结算数据。\n  - 使用 `GameOverUIScene` 作为“本局收获结算”承载页。\n- **边界与异常**:\n  - `GameOverUIScene` 文案需从失败改为结算。\n  - 缺失信息：背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互未在 PRD 明确。\n\n### 3.10 资源注册与音画反馈系统\n\n- **系统概述**: 继承用户 PRD 中的背景、瓦片、图标、宝箱、提示标记和音频资源需求。\n- **核心流程**:\n  1. 按深度区加载或切换对应背景。\n  2. 用 tileset 表达墙面、沙砖、矿砖、盲盒砖、不可破坏岩石、空洞、宝箱、矿石提示和工具提示。\n  3. 点击、破坏、炸弹、奖励、深度提升时播放对应 SFX/BGM。\n- **规则定义**:\n\n| type | key | description | params |\n|------|-----|-------------|--------|\n| background | `title_bg` | warm cartoon mining camp entrance with wood scaffold, lantern glow, elevator cage, FRONT VIEW, mobile game title backdrop | resolution: `1536*1024` |\n| background | `mine_surface_bg` | bright near-surface mine shaft with dusty brown walls, wood braces, soft sunlight spill, layered tunnel depth | resolution: `1536*1024` |\n| background | `mine_mid_bg` | deeper earth mine with cooler rocks, denser scaffold, dim lamps, stronger dust haze and depth shadows | resolution: `1536*1024` |\n| background | `mine_shallow_sea_bg` | underground shallow-sea cavern mine, teal moisture glow, wet stone, shells and mineral veins | resolution: `1536*1024` |\n| background | `mine_deep_sea_bg` | dark deep-sea cavern shaft, blue-black humidity, rare crystal gleam, heavy contrast | resolution: `1536*1024` |\n| background | `mine_core_bg` | volcanic mud-core mine with ember cracks, red heat bloom, dense smoke and unstable rock | resolution: `1536*1024` |\n| tileset | `mine_blocks_tiles` | chunky mining tiles for wall cover, sand brick, stone ore, blind-box brick, indestructible rock, empty tunnel pit, chest, ore hint, tool hint | tileset_size: `3` |\n| image | `hud_pickaxe_icon` | simple mobile UI icon for wooden pickaxe count, warm wood and iron head | - |\n| image | `hud_row_bomb_icon` | mobile UI icon for horizontal bomb, long stick explosive with fuse | - |\n| image | `hud_area_bomb_icon` | mobile UI icon for 3x3 bomb, compact satchel explosive with fuse | - |\n| image | `chest_closed` | chunky treasure chest for mine grid, brass corners, readable from top-front angle | - |\n| image | `ore_hint_marker` | glowing ore marker embedded in block center, gem sparkle, readable at small size | - |\n| image | `tool_hint_marker` | glowing tool marker embedded in block center, wrench and pickaxe motif | - |\n| audio | `mine_hit_sfx` | crisp single pickaxe hit on dirt and stone | audioType: `sfx` |\n| audio | `mine_break_sfx` | satisfying block crumble with debris fall | audioType: `sfx` |\n| audio | `mine_bomb_row_sfx` | horizontal blasting explosion with rolling debris | audioType: `sfx` |\n| audio | `mine_bomb_area_sfx` | compact heavy area explosion with echo | audioType: `sfx` |\n| audio | `mine_reward_sfx` | reward pop with coin and gem sparkle | audioType: `sfx` |\n| audio | `mine_depth_up_sfx` | short celebratory progression sting for entering deeper layer | audioType: `sfx` |\n| audio | `mine_bgm` | light but addictive mining expedition music, playful groove with tension rising in deeper zones | audioType: `bgm`, duration: `20` |\n\n- **资源关联**:\n  - `createEnvironment()`、点击反馈、破坏反馈、资源飞入、深度提升、HUD 图标。\n- **边界与异常**:\n  - 缺失信息：音量、静音入口、音频失败降级、资源加载失败占位表现未在 PRD 明确。\n\n### 3.11 实施路线与验收映射系统\n\n- **系统概述**: 继承用户 PRD 的开发任务和验收要求，保证 P0 MVP 可接入模板流程。\n- **核心流程 / 规则定义**:\n  1. 更新 `src/LevelManager.ts`: 将 `LEVEL_ORDER` 改为 `['EndlessMineRunScene']`。\n  2. 更新 `src/main.ts`: 导入并注册 `EndlessMineRunScene`，保留 `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。\n  3. 更新 `src/gameConfig.json`: 合并 `gridConfig`、`mineRunConfig`、`mineLayerConfig`、`mineDepthConfig`、`mineRewardConfig`、`mineToolRewardConfig`、`mineMetaConfig`。\n  4. 更新 `src/scenes/TitleScreen.ts`: 标题替换为“无限矿井”，入口按钮文案改为“进入无尽矿井”。\n  5. 复制 `_TemplateGridLevel.ts` 为 `EndlessMineRunScene.ts`，场景 key 改为 `EndlessMineRunScene`。\n  6. `getBoardConfig()` 设定 `7x6` 可视棋盘、首屏 terrain layer 和初始 metadata。\n  7. `getTurnConfig()` 使用 `mode: 'freeform'`，`maxMoves: -1`。\n  8. `createEnvironment()` 根据 biome 切换背景图，绘制棋盘、深度线、补给条和深度牌。\n  9. `createEntities()` P0 可保持空实现，或仅创建宝箱/提示 marker 的轻量展示对象。\n  10. `onCellClicked()` 实现木镐、横排炸弹、九宫格炸弹、不可敲砖无效反馈、连通合法性校验、炸弹施放落点合法性校验。\n  11. `onProcessComplete()` 处理砖块减耐久、显露内容、遮挡层先破再显露、炸弹范围命中、飞字和音效。\n  12. `onWorldPhase()` 处理宝箱自动开启、资源即时入账、积分条增长、补给发放、首次稀有矿 toast。\n  13. `onMoveProcessed()` 当底部形成可推进通路时，上卷 1 行并生成新底行；如仍需继续推进则返回 `true`。\n  14. `onBoardStateChanged()` 同步刷新 `UIScene` 所需状态文案与顶部收获区。\n  15. `checkWinCondition()` 永远返回 `false`。\n  16. `checkLoseCondition()` 当三类工具都为 `0` 时返回 `true`。\n  17. `onLoseConditionMet()` 跳转到 `GameOverUIScene`，将其作为“本局收获结算”使用。\n  18. `GameOverUIScene` 文案从失败改为结算，展示深度与本局收益。\n  19. 可选复制 `_TemplateEntity.ts` 为 `ChestMarkerEntity.ts`、`OreHintEntity.ts`、`ToolHintEntity.ts`。\n- **验收要求**:\n  - `TitleScreen` 的入口目标、`main.ts` 注册和 `LevelManager.LEVEL_ORDER[0]` 一致。\n  - 最终 `gameConfig.json` 保留 `screenSize`、`debugConfig`、`renderConfig`。\n  - 工具耗尽自动结算。\n  - 主动返场结算。\n  - 炸弹不破坏不可敲砖。\n  - 木镐只能点击与当前坑道连通的格。\n  - 炸弹允许波及未连通可视格但施放落点必须合法。\n  - 最底行与其他可视格完全同规则。\n  - 至少始终存在一条向下路径。\n- **边界与异常**:\n  - PRD 中标记可选的实体复制不作为 P0 必须项。\n\n---\n\n## 四、数值平衡\n\n> 本节严格继承用户 PRD 已明确数值。用户 PRD 未明确的数值按特殊要求标注“缺失信息”，不自行补默认值。\n\n### 4.1 关键数值表\n\n| 参数 | 值 | 来源 | 设计意图 / 说明 |\n|------|---|------|---------|\n| 运行分辨率 | `1152 x 768` | 继承 | 移动端优先 Demo 画布规格。 |\n| 背景资源分辨率 | `1536*1024` | 继承 | 用于标题与各深度矿区背景。 |\n| 可视棋盘宽度 | `7` | 继承 | 移动端可读的横向格数。 |\n| 可视棋盘高度 | `6` | 继承 | 单屏可操作深度。 |\n| 格子尺寸 | `88 px` | 继承 | 适配 `7x6` 棋盘。 |\n| `maxMoves` | `-1` | 继承 | 无行动次数上限，直到工具耗尽或玩家退出。 |\n| 默认动画时长 | `180 ms` | 继承 | 单元格动画节奏。 |\n| 输入防抖 | `120 ms` | 继承 | 降低快速点击误触。 |\n| 开局体力消耗 | `1` | 继承 | 每局入口消耗。 |\n| 初始木镐 | `20` | 继承 | 开局基础续航。 |\n| 初始横排炸弹 | `0` | 继承 | 炸弹通过局内奖励获得。 |\n| 初始九宫格炸弹 | `0` | 继承 | 炸弹通过局内奖励获得。 |\n| 推进 1 行增加深度 | `1` | 继承 | 深度与棋盘上卷绑定。 |\n| 深度线展示行 | `4` | 继承 | 显示在第 4 行和第 5 行之间。 |\n| 结算延迟 | `600 ms` | 继承 | 结束后进入结算页的延迟。 |\n| 遮挡墙耐久 | `1` | 继承 | 深红遮挡层一次破坏。 |\n| 沙砖耐久 | `1` | 继承 | 基础砖一次破坏。 |\n| 矿砖耐久 | `2` | 继承 | 矿砖需要更多消耗。 |\n| 盲盒砖耐久 | `1` | 继承 | 盲盒内容快速反馈。 |\n| 不可破坏砖占位耐久 | `999` | 继承 | 不被常规工具破坏。 |\n| 炸弹影响不可破坏砖 | `false` | 继承 | 保持墙体边界。 |\n| 空格编码 | `0` | 继承 | `CellType.EMPTY`。 |\n| 墙格编码 | `1` | 继承 | `CellType.WALL`。 |\n| 预留地板编码 | `2` | 继承 | `CellType.FLOOR`。 |\n| 可破坏内容编码 | `6` | 继承 | `CellType.SPECIAL`。 |\n| 地表矿区深度 | `1-30` | 继承 | 开局教学。 |\n| 深地表深度 | `31-80` | 继承 | 宝箱开始出现。 |\n| 浅海深度 | `81-150` | 继承 | 稀有矿与盲盒矿首次解锁。 |\n| 深海深度 | `151-260` | 继承 | 宝箱、盲盒、墙面密度上升。 |\n| 地心火山泥深度 | `261+` | 继承 | 高价值与最高阻碍。 |\n| 稀有矿解锁深度区 | `3` | 继承 | 浅海开始。 |\n| 宝箱解锁深度区 | `2` | 继承 | 深地表开始。 |\n| 盲盒砖解锁深度区 | `3` | 继承 | 浅海开始。 |\n| 首次稀有矿提示 | `true` | 继承 | 只显示一次解锁提示。 |\n| 每推进 1 层补给积分 | `+1` | 继承 | 推进转化为续航资源。 |\n| 随机积分掉落最小值 | `1` | 继承 | 积分奖励下限。 |\n| 随机积分掉落最大值 | `4` | 继承 | 积分奖励上限。 |\n| 基础补给目标 | `12` | 继承 | 首个深度区补给条目标。 |\n| 每深度区补给目标增量 | `4` | 继承 | 深层补给更难积满。 |\n| 金币飞字时长 | `550 ms` | 继承 | 金币反馈表现。 |\n| 资源飞入 HUD 时长 | `420 ms` | 继承 | 资源反馈表现。 |\n| 早期补给木镐奖励 | `+4` | 继承 | 地表矿区补给。 |\n| 中深层补给横炸奖励 | `+1` | 继承 | 深地表/浅海/深海/地心补给。 |\n| 深层补给九炸奖励 | `+1` | 继承 | 深海/地心补给。 |\n| 工具提示木镐奖励 | `+3` | 继承 | 工具格木镐收益。 |\n| 工具提示横炸奖励 | `+1` | 继承 | 工具格横炸收益。 |\n| 工具提示九炸奖励 | `+1` | 继承 | 工具格九炸收益。 |\n| 木镐单次消耗 | `1` | 继承 | 基础点击成本。 |\n| 木镐单次伤害 | `1` | 继承 | 与耐久结合。 |\n| 横排炸弹单次消耗 | `1` | 继承 | 横排范围工具成本。 |\n| 九宫格炸弹单次消耗 | `1` | 继承 | `3x3` 范围工具成本。 |\n| 横排炸弹命中范围 | 当前行全部可破坏格 | 继承 | 行范围爆破。 |\n| 九宫格炸弹命中范围 | 目标 `3x3` 全部可破坏格 | 继承 | 区域爆破。 |\n| BGM 时长 | `20 s` | 继承 | 循环音乐素材时长。 |\n| 金币、矿石、材料精确掉落数量 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 各内容类型出现概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 宝箱/盲盒掉落概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |\n| 社交/排行榜奖励数值 | 缺失信息 | 用户 PRD 未提及 | 不新增系统。 |\n\n### 4.2 资源流转\n\n```text\n开局输入:\n  startEnergyCost = 1\n  startWoodPick = 20\n  startRowBomb = 0\n  startAreaBomb = 0\n\n单次行动消耗:\n  pick 点击合法可破坏格 -> woodPick -1 -> 目标格 durability -1\n  rowBomb 合法施放 -> rowBomb -1 -> 当前行全部可破坏格受影响\n  areaBomb 合法施放 -> areaBomb -1 -> 目标 3x3 可破坏格受影响\n  点击 WALL -> 不消耗工具\n\n行动产出:\n  sand -> 打通与推进，不直接掉金币或材料\n  ore -> 金币、矿石、材料三选二或三选三\n  blindBox -> 工具、积分、宝箱中的高波动组合\n  chest -> 自动开启，掉落工具和矿石中的一种或多种\n  tool -> woodPick / rowBomb / areaBomb\n  emptyReveal -> 显露坑道，不掉收益\n\n推进产出:\n  底部形成真实通路 -> currentDepth + 1 -> supplyPoints + 1 -> 棋盘上卷 1 行并生成新底行\n\n补给闭环:\n  supplyPoints >= supplyTarget -> 清空或扣除一轮目标值 -> 按当前深度区发工具补给 -> 延长挖掘续航\n\n结束输出:\n  工具耗尽或主动返场 -> GameOverUIScene 结算 -> 展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数\n```\n\n- **数值验算（继承 PRD 可验算部分）**:\n  - 开局仅有 `20` 次木镐基础行动，若不获得任何工具或补给，最多消耗 `20` 次木镐后触发工具耗尽结算。\n  - 地表矿区补给目标初始为 `12`，每推进 1 层获得 `1` 积分；若没有随机积分掉落，至少推进 `12` 层可触发一次地表矿区补给，获得 `woodPick +4`。\n  - 深度区补给目标随 biome 每级 `+4`，目标序列按已明确配置为 `12 / 16 / 20 / 24 / 28`。\n  - 缺失信息：`supplyPoints >= supplyTarget` 后是清空全部积分还是扣除一轮目标值，PRD 未唯一明确，因此不能计算溢出积分保留策略。\n  - 缺失信息：掉落金币、矿石、材料、工具和积分的概率与数量表未明确，因此不能完成完整经济闭环期望值验算。\n\n### 4.3 成长曲线\n\n| 阶段 | 深度范围 | 已明确变化 | 数值 |\n|------|----------|------------|------|\n| 前期 | `1-30` 地表矿区 | 沙砖多、障碍少、开局教学；补给为木镐。 | 补给目标 `12`；补给 `woodPick +4`。 |\n| 中前期 | `31-80` 深地表 | 开始出现宝箱，路径略绕。 | 补给目标 `16`；补给 `woodPick +3`, `rowBomb +1`。 |\n| 中期 | `81-150` 浅海 | 首次解锁稀有矿、盲盒矿。 | 补给目标 `20`；补给 `woodPick +3`, `rowBomb +1`。 |\n| 后期 | `151-260` 深海 | 宝箱与盲盒概率上升，墙面更密。 | 补给目标 `24`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |\n| 深后期 | `261+` 地心火山泥 | 高价值最高，遮挡和障碍最强。 | 补给目标 `28`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |\n\n### 4.4 概率公示\n\n| 事件 | 概率 | 来源 | 说明 |\n|------|------|------|------|\n| 宝箱出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 2 及以后可出现。 |\n| 盲盒砖出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后可出现。 |\n| 稀有矿出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后解锁。 |\n| WALL 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深占比更高。 |\n| ore 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深更分散。 |\n| coverVisible 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深概率更高。 |\n| randomPointDrop 概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确单次掉落积分范围为 `1-4`。 |\n| ore 掉落金币/矿石/材料组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确三选二或三选三。 |\n| blindBox 掉落工具/积分/宝箱组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确高波动组合。 |\n| chest 掉落工具/矿石组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确一种或多种。 |\n\n---\n\n## 五、核心状态机\n\n### 5.1 状态枚举\n\n| 状态 | 含义 | 进入条件 | 退出条件 |\n|------|------|---------|---------|\n| `preloading` | 资源预加载 | 启动项目进入 `Preloader` | 资源加载完成后进入 `title` |\n| `title` | 标题页 | `Preloader` 完成 | 点击“进入无尽矿井”进入 `run_initializing` |\n| `run_initializing` | 单局初始化 | 从 `TitleScreen` 进入 `EndlessMineRunScene` | 初始化棋盘、工具、深度、补给、收益后进入 `running_idle` |\n| `running_idle` / `推进中` | 等待玩家操作 | 单局初始化完成或一次处理流水线结束 | 合法点击进入 `processing_action`；主动返场进入 `settling_manual`; 工具耗尽进入 `settling_exhausted` |\n| `processing_action` | 处理一次点击动作 | 合法木镐/炸弹点击并调用 `runProcessingPipeline()` | `onProcessComplete()` 完成后进入 `world_phase` |\n| `world_phase` | 世界阶段结算 | 一次点击破坏结算完成 | 宝箱、资源、补给、toast 处理完成后进入 `advance_check` |\n| `advance_check` | 推进检测 | `onWorldPhase()` 完成 | 底部形成真实通路时进入 `rolling_board`；否则进入 `state_refresh` |\n| `rolling_board` | 棋盘上卷与新行生成 | `onMoveProcessed()` 判断可推进 | 上卷 1 行并生成新底行后，如果仍需继续推进则保持该状态继续链式处理；否则进入 `state_refresh` |\n| `state_refresh` | 刷新展示与结束检测 | 推进检测或上卷结束 | HUD 刷新后，若工具耗尽进入 `settling_exhausted`，否则回到 `running_idle` |\n| `settling_manual` / `结算中` | 主动返场结算 | 点击 `[收队返场]` | 设置 `runStatus = 结算中` 并进入 `settlement_delay` |\n| `settling_exhausted` / `工具耗尽` | 工具耗尽结算 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 设置工具耗尽状态并进入 `settlement_delay` |\n| `settlement_delay` | 结算前延迟 | 主动返场或工具耗尽 | `600ms` 后进入 `settlement_scene` |\n| `settlement_scene` | 本局收获结算页 | 跳转 `GameOverUIScene` | 缺失信息：结算页返回标题页、再来一局或退出路径未在 PRD 明确 |\n\n### 5.2 运行态 `runStatus` 枚举\n\n| `runStatus` | 含义 | 进入条件 | 退出条件 |\n|-------------|------|----------|----------|\n| `推进中` | 单局正常推进 | 初始化完成，且工具未耗尽，且未主动返场 | 工具耗尽或主动返场 |\n| `工具耗尽` | 无工具可继续行动 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 进入结算跳转 |\n| `结算中` | 主动返场或正在结算 | 点击 `[收队返场]` 或结算流程开始 | 进入 `GameOverUIScene` |\n\n### 5.3 状态流转图\n\n```text\nPreloader\n  -> TitleScreen\n  -> EndlessMineRunScene.run_initializing\n  -> EndlessMineRunScene.running_idle / 推进中\n\nrunning_idle / 推进中\n  -> 合法木镐点击 -> processing_action\n  -> 合法横排炸弹释放 -> processing_action\n  -> 合法九宫格炸弹释放 -> processing_action\n  -> 点击 WALL 或非法目标 -> running_idle / 推进中（播放无效反馈，不消耗工具）\n  -> 点击 收队返场 -> settling_manual / 结算中\n  -> 工具耗尽 -> settling_exhausted / 工具耗尽\n\nprocessing_action\n  -> onProcessComplete\n  -> world_phase\n  -> onWorldPhase\n  -> advance_check\n\nadvance_check\n  -> 底部形成真实通路 -> rolling_board\n  -> 未形成推进通路 -> state_refresh\n\nrolling_board\n  -> 上卷 1 行 + 生成新底行 + currentDepth + 1 + supplyPoints + 1\n  -> 如继续触发通路 -> rolling_board\n  -> 链式处理结束 -> state_refresh\n\nstate_refresh\n  -> onBoardStateChanged\n  -> 工具仍可用 -> running_idle / 推进中\n  -> woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0 -> settling_exhausted / 工具耗尽\n\nsettling_manual / 结算中\n  -> settlementDelayMs 600\n  -> GameOverUIScene（本局收获结算）\n\nsettling_exhausted / 工具耗尽\n  -> settlementDelayMs 600\n  -> GameOverUIScene（本局收获结算）\n```\n\n---\n\n## 六、信息架构\n\n### 6.1 页面层级结构\n\n```text\nGame App\n├── Preloader\n├── TitleScreen\n│   └── 入口按钮：进入无尽矿井\n├── EndlessMineRunScene\n│   ├── 顶部状态行\n│   │   ├── 当前深度类型：{biomeName}\n│   │   ├── 本局推进：{supplyPoints}/{supplyTarget}\n│   │   └── 本局状态：{runStatus}\n│   ├── 顶部收益行\n│   │   ├── 金币 {runLoot.gold}\n│   │   ├── 矿石 {runLoot.ore}\n│   │   └── 材料 {runLoot.material}\n│   ├── 矿井棋盘 7 x 6\n│   │   ├── EMPTY 坑道格\n│   │   ├── WALL 不可敲砖\n│   │   └── SPECIAL 可破坏内容格 + metadata\n│   ├── 深度线\n│   ├── 补给条\n│   ├── 深度牌\n│   └── 底部工具区\n│       ├── [镐子 {woodPick}]\n│       ├── [横炸 {rowBomb}]\n│       ├── [九炸 {areaBomb}]\n│       ├── [背包]\n│       └── [收队返场]\n└── GameOverUIScene（本局收获结算）\n    ├── 最终深度\n    ├── 深度类型\n    ├── 金币\n    ├── 矿石\n    ├── 材料\n    └── 本局开启宝箱次数\n```\n\n### 6.2 页面流程图\n\n```text\n启动\n  -> Preloader\n  -> TitleScreen\n  -> 点击“进入无尽矿井”\n  -> EndlessMineRunScene\n     -> 挖掘 / 炸弹 / 补给 / 深度推进循环\n     -> 点击“收队返场” -> GameOverUIScene（本局收获结算）\n     -> 工具耗尽 -> GameOverUIScene（本局收获结算）\n```\n\n- 缺失信息：结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航未在 PRD 明确。\n\n---\n\n## 七、功能清单\n\n1. `grid_logic` + `freeform` 模板接入。\n2. `1152 x 768` 分辨率配置。\n3. `7 x 6` 可视棋盘。\n4. `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene` 场景流转。\n5. `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。\n6. 标题替换为“无限矿井”。\n7. 入口按钮文案改为“进入无尽矿井”。\n8. `EndlessMineRunScene` 继承 `BaseGridScene`。\n9. `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` 保留注册。\n10. 不创建玩家可移动实体。\n11. 不创建敌人实体。\n12. 不创建移动收集物实体。\n13. 可选宝箱、矿石提示、工具提示轻量展示实体。\n14. Terrain layer 编码: EMPTY、WALL、FLOOR、SPECIAL。\n15. SPECIAL metadata: 遮挡层、内容类型、耐久、矿石提示、工具提示、掉落表编号。\n16. 固定首屏 Terrain layer。\n17. 固定首屏 metadata layer。\n18. 初始木镐 `20`、横排炸弹 `0`、九宫格炸弹 `0`。\n19. 默认工具 `pick`。\n20. 木镐点击合法格消耗 `1` 木镐并造成 `1` 伤害。\n21. 横排炸弹消耗 `1` 并命中当前行全部可破坏格。\n22. 九宫格炸弹消耗 `1` 并命中目标 `3x3` 全部可破坏格。\n23. 点击 WALL 不消耗工具并播放无效反馈。\n24. 炸弹不破坏 WALL。\n25. 木镐只能点击与当前坑道连通的格。\n26. 连通判定采用四方向邻接。\n27. 遮挡层必须先破坏，不能越层伤害真实内容。\n28. 炸弹可波及未连通但可见格，但施放落点必须合法。\n29. 最底行与其他行同规则，不是预览层。\n30. 每推进一层，棋盘上卷 1 行并生成新底行。\n31. 新行至少保留 1 条从当前底部继续向下的可破坏路径。\n32. 深度区系统: 地表矿区、深地表、浅海、深海、地心火山泥。\n33. 按深度切换背景资源。\n34. 稀有矿 biome 3 解锁。\n35. 宝箱 biome 2 解锁。\n36. 盲盒 biome 3 解锁。\n37. 首次稀有矿 toast。\n38. sand、ore、blindBox、chest、tool、emptyReveal 收益规则。\n39. 每推进 1 层 `supplyPoints +1`。\n40. 随机积分掉落范围 `1-4`。\n41. `supplyPoints >= supplyTarget` 时发放当前深度区工具补给。\n42. 基础补给目标 `12`，每深度区 `+4`。\n43. 顶部状态行展示当前深度类型、本局推进、本局状态。\n44. 顶部收益行展示金币、矿石、材料。\n45. 底部工具区展示镐子、横炸、九炸、背包、收队返场。\n46. 无通关条件。\n47. 主动返场结算退出。\n48. 工具耗尽自动结算退出。\n49. `GameOverUIScene` 改为“本局收获结算”语义。\n50. 结算页展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数。\n51. 音画资源注册: 标题背景、五个矿区背景、矿块 tileset、HUD 工具图标、宝箱、矿石提示、工具提示、挖掘/破坏/炸弹/奖励/深度提升 SFX、BGM。\n52. 验收: 场景注册一致、配置合并保留基础配置、工具耗尽自动结算、主动返场结算、炸弹不破坏不可敲砖、木镐连通限制、炸弹落点合法、最底行同规则、始终存在向下路径。\n\n---\n\n## 八、视觉与情绪基调（视觉锚点）\n\n> 以下内容仅继承桥接文档中的视觉锚点与概念图引用，不参与业务语义判定。\n\n移动端卡通矿井风格，强调厚重泥土体块、矿灯暖光、分层矿洞背景和随深度变化的色带。首层偏明亮暖棕与木架矿灯，中层转向更冷的岩层与尘雾，浅海与深海矿区加入青蓝湿润洞穴光感，地心火山泥区域使用红色热光、烟雾与不稳定岩层。整体反馈应突出点击后的挖空下陷、砖块碎裂、资源飞入顶部 HUD 的爽感。\n\n### 视觉锚点\n\n- 主视觉锚点: 方案A 主概念图\n- 风格传递方式: 使用下方 `selected_concept_url` 作为后续 img2img seed-ref；本文档不从 PNG 中提取 hex、材质、光影等文字化风格描述。\n- PRD 未明确: 除用户 PRD / GDD 与脑暴方案已明确内容外的额外美术细节、色号、材质参数、构图参数和镜头参数。\n\n### 概念图引用\n\nselected_concept_path: \"assets/refs/concepts-brainstorm/concept_a_main.png\"  \nselected_concept_url: \"https://game.kg.qq.com/walle-img-gen/output/bj21BQO6FHyYspbvhm_W4.png\"\n\n---\n\n## 九、用户 PRD 覆盖清单摘要\n\n| 用户 PRD 章节 | 覆盖状态 | 本 GDD 覆盖位置 |\n|--------------|----------|----------------|\n| 0. 技术架构 | 已覆盖 | 二、三、五、六、七 |\n| 0.1 模板归类与运行方式 | 已覆盖 | 二、三.1、七 |\n| 0.2 场景流转 | 已覆盖 | 三.1、五、六 |\n| 0.3 场景键名清单 | 已覆盖 | 三.1、七 |\n| 0.4 `LevelManager.LEVEL_ORDER` | 已覆盖 | 三.1、三.11、七 |\n| 0.5 P0 技术说明 | 已覆盖 | 二、三.2、三.5、三.11、五 |\n| 1. 视觉风格与资源注册表 | 已覆盖 | 三.10、八 |\n| 2. 游戏配置 | 已覆盖 | 四.1、四.2、四.3 |\n| 3. 实体与场景结构 | 已覆盖 | 三.2、三.3、三.4、三.5 |\n| 3.1 场景职责 | 已覆盖 | 三.5、三.11 |\n| 3.2 运行时状态模型 | 已覆盖 | 三.2、五.2 |\n| 3.3 棋盘编码方式 | 已覆盖 | 三.3 |\n| 3.4 实体策略 | 已覆盖 | 三.5、七 |\n| 3.5 输入与点击规则 | 已覆盖 | 三.4、五、七 |\n| 3.6 结束与结算规则 | 已覆盖 | 三.1、三.9、五 |\n| 3.7 钩子与功能映射 | 已覆盖 | 三.5、三.11 |\n| 4. 关卡与内容设计 | 已覆盖 | 三.6、三.7、三.8、四 |\n| 4.1 初始可视棋盘 | 已覆盖 | 三.6 |\n| 4.2 新行生成规则 | 已覆盖 | 三.6、三.7 |\n| 4.3 可挖掘范围与目标合法性 | 已覆盖 | 三.4、七 |\n| 4.4 深度区表 | 已覆盖 | 三.7、四.3 |\n| 4.5 掉落与收益规则 | 已覆盖 | 三.8、四.2、四.4 |\n| 4.6 补给积分规则 | 已覆盖 | 三.8、四.1、四.2、四.3 |\n| 4.7 界面展示内容 | 已覆盖 | 三.9、六、七 |\n| 4.8 P0 结束与退出内容 | 已覆盖 | 三.9、五、六 |\n| 5. 实施路线图 | 已覆盖 | 三.11、七 |\n| 约定与假设 | 已覆盖 | 二、三.1、三.2 |\n\n### 明确标注的缺失信息\n\n1. 目标用户画像、年龄段、地区、付费倾向或具体使用场景。\n2. 断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理。\n3. 社交、分享、排行榜、好友互动、邀请、外部活动结算。\n4. 暂停页在本模式中的具体入口、返回、退出和结算关系。\n5. 主矿区真实货币、体力与宿主系统接口、扣减失败回滚、跨局持久化。\n6. `rewardTableId` 完整枚举、每个掉落表的精确内容和概率。\n7. 新行内容逐格精确概率表。\n8. 金币、矿石、材料精确掉落数量。\n9. 宝箱掉落表、盲盒掉落表、各内容类型出现概率。\n10. `supplyPoints >= supplyTarget` 后清空全部积分还是扣除一轮目标值的唯一规则。\n11. 背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互。\n12. 音量、静音入口、音频失败降级、资源加载失败占位表现。\n13. 结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航。\n",
      "size": 46484,
      "truncated": false
    },
    {
      "id": "design-plan",
      "label": "设计方案",
      "type": "md",
      "file": "架构-设计方案.md",
      "stepId": 5,
      "exists": false,
      "path": "架构-设计方案.md"
    },
    {
      "id": "tech-plan",
      "label": "技术方案",
      "type": "md",
      "file": "架构-技术方案.md",
      "stepId": 5,
      "exists": false,
      "path": "架构-技术方案.md"
    },
    {
      "id": "overview-image",
      "label": "全页面总览图",
      "type": "overview",
      "file": "设计-总览图引用.json",
      "stepId": 6,
      "exists": false,
      "path": "设计-总览图引用.json",
      "overviewCount": 0,
      "refsExists": false,
      "generatedAt": ""
    },
    {
      "id": "page-images",
      "label": "页面 Page 图",
      "type": "pages",
      "file": "设计-页面设计图引用.json",
      "stepId": 6,
      "exists": false,
      "path": "设计-页面设计图引用.json",
      "pageCount": 0,
      "refsExists": false,
      "generatedAt": ""
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
      "exists": false,
      "path": "设计-元素实现清单.html"
    },
    {
      "id": "element-list-md-visual",
      "label": "元素实现清单 MD",
      "type": "md",
      "file": "设计-元素实现清单.md",
      "stepId": 6,
      "exists": false,
      "path": "设计-元素实现清单.md"
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
      "exists": false,
      "path": "设计-design-sheet提示词.html"
    },
    {
      "id": "asset-prompt-md",
      "label": "Asset Sheet 提示词 MD",
      "type": "md",
      "file": "设计-design-sheet提示词.md",
      "stepId": 6,
      "exists": false,
      "path": "设计-design-sheet提示词.md"
    },
    {
      "id": "review-report",
      "label": "评审报告",
      "type": "md",
      "file": "评审-评审报告.md",
      "stepId": 8,
      "exists": false,
      "path": "评审-评审报告.md"
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
  "overviews": [],
  "pages": [],
  "serverBaseUrl": "http://127.0.0.1:4192",
  "conceptRefs": {
    "file": "策划-概念图引用.json",
    "exists": true,
    "generatedAt": "2026-06-21T10:16:17.801Z",
    "readError": ""
  },
  "overviewRefs": {
    "file": "设计-总览图引用.json",
    "exists": false,
    "generatedAt": "",
    "readError": ""
  },
  "overviewPrompts": {
    "file": "设计-design-sheet提示词.md",
    "exists": false,
    "count": 0,
    "readError": ""
  },
  "pageRefs": {
    "file": "设计-页面设计图引用.json",
    "exists": false,
    "generatedAt": "",
    "readError": ""
  },
  "pagePrompts": {
    "file": "设计-design-sheet提示词.md",
    "exists": false,
    "count": 0,
    "readError": ""
  }
};
