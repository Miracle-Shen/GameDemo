// 本文件由 pipeline-dashboard.mjs 自动生成，请勿手改
window.PIPELINE_STATUS = {
  "meta": {
    "project": "kg_ai_anchor_sticker_pack",
    "version": "2026/5/27.01",
    "updatedAt": "2026/6/4 20:24:13"
  },
  "current": 9,
  "steps": [
    {
      "id": 1,
      "name": "场景清单",
      "hint": "梳理玩法涉及哪些场景 / 页面",
      "artifact": "需求-场景清单.html",
      "status": "done",
      "todoCount": 3
    },
    {
      "id": 2,
      "name": "PRD生成",
      "hint": "需求收敛成结构化 PRD",
      "artifact": "需求-最终PRD.html",
      "status": "done",
      "todoCount": 5
    },
    {
      "id": 3,
      "name": "读视觉图",
      "hint": "读图回补 PRD + 拆元素清单",
      "artifact": "设计-元素实现清单.html",
      "status": "done",
      "todoCount": 7
    },
    {
      "id": 4,
      "name": "方案草案",
      "hint": "定渲染框架 + 后台 API 字典",
      "artifact": "架构-技术方案.html",
      "status": "done",
      "todoCount": 4
    },
    {
      "id": 5,
      "name": "完整方案",
      "hint": "补全技术方案与元素实现",
      "artifact": "架构-技术方案.html",
      "status": "done",
      "todoCount": 2
    },
    {
      "id": 6,
      "name": "视觉设计",
      "hint": "出设计令牌 / 素材",
      "artifact": "",
      "status": "done",
      "todoCount": 1
    },
    {
      "id": 7,
      "name": "代码开发",
      "hint": "按组件树生成可运行代码",
      "artifact": "",
      "status": "done",
      "todoCount": 0
    },
    {
      "id": 8,
      "name": "上报接入",
      "hint": "接数据上报",
      "artifact": "",
      "status": "done",
      "todoCount": 0
    },
    {
      "id": 9,
      "name": "独立评审",
      "hint": "三轨审查出报告",
      "artifact": "评审-评审报告.html",
      "status": "current",
      "todoCount": 1
    }
  ],
  "gates": [
    {
      "gate": "review",
      "gateName": "评审确认",
      "note": "以实际运行结果为准；发现问题直接把现象反馈给 agent 修复，不要在报告里改。",
      "todos": [
        {
          "text": "运行代码是否正常，有问题则把问题反馈给 agent",
          "link": "评审-评审报告.md"
        }
      ]
    }
  ],
  "artifacts": [
    {
      "name": "场景清单",
      "file": "需求-场景清单.html",
      "state": "done",
      "exists": true
    },
    {
      "name": "PRD",
      "file": "需求-最终PRD.html",
      "state": "done",
      "exists": true
    },
    {
      "name": "元素清单",
      "file": "设计-元素实现清单.html",
      "state": "done",
      "exists": true
    },
    {
      "name": "技术方案",
      "file": "架构-技术方案.html",
      "state": "done",
      "exists": true
    },
    {
      "name": "评审报告",
      "file": "评审-评审报告.html",
      "state": "current",
      "exists": false
    }
  ]
};
