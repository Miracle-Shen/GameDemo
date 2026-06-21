// 本文件由 idea-pipeline-dashboard.mjs 自动生成，请勿手改
window.IDEA_PIPELINE_DATA = {
  "meta": {
    "project": "generic_infinite_mine_endless_mode",
    "version": "2026/5/11.01",
    "updatedAt": "2026/6/21 18:26:10",
    "dashboardFile": "流水线总览.html",
    "dataFile": "idea-pipeline-data.js"
  },
  "current": 1,
  "steps": [
    {
      "id": 1,
      "name": "脑暴",
      "hint": "产出 3×3 方案矩阵或 PRD 单方案包装文档",
      "status": "current",
      "todoCount": 1,
      "artifactCount": 1,
      "existsCount": 0
    },
    {
      "id": 2,
      "name": "生成概念图",
      "hint": "生成概念图提示词、概念图引用和图片资源",
      "status": "pending",
      "todoCount": 1,
      "artifactCount": 2,
      "existsCount": 0
    },
    {
      "id": 3,
      "name": "Draft Concept",
      "hint": "锁定方案，生成玩法概念文档与视觉锚点",
      "status": "pending",
      "todoCount": 0,
      "artifactCount": 1,
      "existsCount": 0
    },
    {
      "id": 4,
      "name": "需求澄清",
      "hint": "输出最终 PRD / GDD，作为业务 SSOT",
      "status": "pending",
      "todoCount": 2,
      "artifactCount": 1,
      "existsCount": 0
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
  "todosByArtifact": {
    "策划-脑暴方案.md": [
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
      "exists": false,
      "path": "策划-脑暴方案.md"
    },
    {
      "id": "concept-prompts",
      "label": "概念图提示词",
      "type": "md",
      "file": "策划-脑暴方案概念图提示词.md",
      "stepId": 2,
      "exists": false,
      "path": "策划-脑暴方案概念图提示词.md"
    },
    {
      "id": "concept-images",
      "label": "概念图",
      "type": "concepts",
      "file": "策划-概念图引用.json",
      "stepId": 2,
      "exists": false,
      "path": "策划-概念图引用.json",
      "conceptCount": 0,
      "refsExists": false,
      "generatedAt": ""
    },
    {
      "id": "draft-concept",
      "label": "玩法概念文档",
      "type": "md",
      "file": "策划-玩法概念文档.md",
      "stepId": 3,
      "exists": false,
      "path": "策划-玩法概念文档.md"
    },
    {
      "id": "final-prd",
      "label": "最终 PRD",
      "type": "md",
      "file": "需求-最终PRD.md",
      "stepId": 4,
      "exists": false,
      "path": "需求-最终PRD.md"
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
  "concepts": [],
  "overviews": [],
  "pages": [],
  "serverBaseUrl": "",
  "conceptRefs": {
    "file": "策划-概念图引用.json",
    "exists": false,
    "generatedAt": "",
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
