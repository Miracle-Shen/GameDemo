# 《无限矿井》无尽模式 GDD

基于 PRD：`/Users/miracleshen/Documents/endless-codex/PRD-无限矿井无尽模式.md`

实现归类：`grid_logic`（格子逻辑模板）
子类型：`freeform`（自由点击结算）
设计目标：将 PRD 中的移动端无尽下挖玩法压缩为 OpenGame 可实现的 6 段式技术规格，优先保证 P0 MVP 可接入模板流程。

---

## 0. 技术架构

### 0.1 模板归类与运行方式

- 模板类型（Archetype）: `grid_logic`
- 结算节奏（Timing mode）: `freeform`
- 核心交互: 点击格子直接结算一次挖掘或范围工具释放，不使用方向移动主角
- 分辨率（Resolution）: `1152 x 768`
- 可视棋盘（Visible board）: `7 x 6`
- 核心场景基类: `BaseGridScene`
- 界面场景: `UIScene`
- P0 结算方案: 复用 `GameOverUIScene` 作为“本局收获结算”承载页，在文案和展示数据上改为结算语义，而不是失败语义

### 0.2 场景流转

```text
Preloader
  -> TitleScreen
  -> EndlessMineRunScene
  -> GameOverUIScene
```

说明：

- `TitleScreen` 进入唯一可玩关卡 `EndlessMineRunScene`
- `EndlessMineRunScene` 是单场景持续生成式关卡，不切分多个固定关卡
- 玩家主动点击 `收队返场` 或工具耗尽时，统一进入 `GameOverUIScene`
- `GameOverUIScene` 在本项目中承担“本局收获结算”职责

### 0.3 场景键名清单

- `Preloader`
- `TitleScreen`
- `EndlessMineRunScene`
- `UIScene`
- `PauseUIScene`
- `VictoryUIScene`
- `GameCompleteUIScene`
- `GameOverUIScene`

### 0.4 LevelManager.LEVEL_ORDER

```ts
['EndlessMineRunScene']
```

### 0.5 P0 技术说明

- 不创建玩家可移动实体；核心状态由棋盘格内容、工具库存、深度和收益累计驱动
- 单次点击视为一次 action，调用 `runProcessingPipeline()`
- 通过 `onCellClicked()` 处理木镐挖掘和炸弹释放
- 通过 `onProcessComplete()` 结算当前点击造成的破坏、掉落、耐久变化和资源飞入
- 通过 `onWorldPhase()` 处理自动开箱、积分条奖励、深度推进和新行生成
- `onEnemyPhase()` 保持空实现
- 通过 `onMoveProcessed()` 在棋盘底部被打通时触发“棋盘整体上卷 + 追加新行”的链式补充
- `checkWinCondition()` 恒为 `false`
- `checkLoseCondition()` 在 `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` 时返回 `true`

---

## 1. 视觉风格与资源注册表

风格锚点（Style Anchor）: 带有厚重泥土体块、矿灯暖光和深度色带变化的移动端卡通矿井，点击后要有明显“挖空下陷”和资源飞入顶部 HUD 的爽感。

| type | key | description | params |
|------|-----|-------------|--------|
| background | title_bg | warm cartoon mining camp entrance with wood scaffold, lantern glow, elevator cage, FRONT VIEW, mobile game title backdrop | resolution: "1536*1024" |
| background | mine_surface_bg | bright near-surface mine shaft with dusty brown walls, wood braces, soft sunlight spill, layered tunnel depth | resolution: "1536*1024" |
| background | mine_mid_bg | deeper earth mine with cooler rocks, denser scaffold, dim lamps, stronger dust haze and depth shadows | resolution: "1536*1024" |
| background | mine_shallow_sea_bg | underground shallow-sea cavern mine, teal moisture glow, wet stone, shells and mineral veins | resolution: "1536*1024" |
| background | mine_deep_sea_bg | dark deep-sea cavern shaft, blue-black humidity, rare crystal gleam, heavy contrast | resolution: "1536*1024" |
| background | mine_core_bg | volcanic mud-core mine with ember cracks, red heat bloom, dense smoke and unstable rock | resolution: "1536*1024" |
| tileset | mine_blocks_tiles | chunky mining tiles for wall cover, sand brick, stone ore, blind-box brick, indestructible rock, empty tunnel pit, chest, ore hint, tool hint | tileset_size: 3 |
| image | hud_pickaxe_icon | simple mobile UI icon for wooden pickaxe count, warm wood and iron head | - |
| image | hud_row_bomb_icon | mobile UI icon for horizontal bomb, long stick explosive with fuse | - |
| image | hud_area_bomb_icon | mobile UI icon for 3x3 bomb, compact satchel explosive with fuse | - |
| image | chest_closed | chunky treasure chest for mine grid, brass corners, readable from top-front angle | - |
| image | ore_hint_marker | glowing ore marker embedded in block center, gem sparkle, readable at small size | - |
| image | tool_hint_marker | glowing tool marker embedded in block center, wrench and pickaxe motif, readable at small size | - |
| audio | mine_hit_sfx | crisp single pickaxe hit on dirt and stone | audioType: "sfx" |
| audio | mine_break_sfx | satisfying block crumble with debris fall | audioType: "sfx" |
| audio | mine_bomb_row_sfx | horizontal blasting explosion with rolling debris | audioType: "sfx" |
| audio | mine_bomb_area_sfx | compact heavy area explosion with echo | audioType: "sfx" |
| audio | mine_reward_sfx | reward pop with coin and gem sparkle | audioType: "sfx" |
| audio | mine_depth_up_sfx | short celebratory progression sting for entering deeper layer | audioType: "sfx" |
| audio | mine_bgm | light but addictive mining expedition music, playful groove with tension rising in deeper zones | audioType: "bgm", duration: 20 |

---

## 2. 游戏配置

```json
{
  "screenSize": {
    "width": {
      "value": 1152,
      "type": "number",
      "description": "Game screen width in pixels"
    },
    "height": {
      "value": 768,
      "type": "number",
      "description": "Game screen height in pixels"
    }
  },
  "debugConfig": {
    "showGrid": {
      "value": false,
      "type": "boolean",
      "description": "Show debug grid overlay"
    },
    "showCellTypes": {
      "value": false,
      "type": "boolean",
      "description": "Show cell type colors"
    },
    "showEntityIds": {
      "value": false,
      "type": "boolean",
      "description": "Show entity IDs on grid"
    },
    "debug": {
      "value": false,
      "type": "boolean",
      "description": "Enable arcade debug rendering"
    }
  },
  "renderConfig": {
    "pixelArt": {
      "value": true,
      "type": "boolean",
      "description": "Use pixel art rendering"
    }
  },
  "gridConfig": {
    "cellSize": {
      "value": 88,
      "type": "number",
      "description": "Grid cell size in pixels for a 7x6 board on mobile-first layout"
    },
    "gridWidth": {
      "value": 7,
      "type": "number",
      "description": "Visible board width in cells"
    },
    "gridHeight": {
      "value": 6,
      "type": "number",
      "description": "Visible board height in cells"
    },
    "maxMoves": {
      "value": -1,
      "type": "number",
      "description": "Unlimited actions until tools are exhausted or player exits"
    },
    "animationSpeed": {
      "value": 180,
      "type": "number",
      "description": "Default cell animation duration in ms"
    },
    "inputDebounceMs": {
      "value": 120,
      "type": "number",
      "description": "Tap debounce for fast mining input"
    }
  },
  "mineRunConfig": {
    "startEnergyCost": {
      "value": 1,
      "type": "number",
      "description": "Energy cost to start one run"
    },
    "startWoodPick": {
      "value": 20,
      "type": "number",
      "description": "Fixed wooden pickaxe count granted at run start"
    },
    "startRowBomb": {
      "value": 0,
      "type": "number",
      "description": "Horizontal bomb count granted at run start"
    },
    "startAreaBomb": {
      "value": 0,
      "type": "number",
      "description": "3x3 bomb count granted at run start"
    },
    "rowAdvanceDepth": {
      "value": 1,
      "type": "number",
      "description": "Depth gained when the active tunnel advances by one row"
    },
    "depthLineVisibleRow": {
      "value": 4,
      "type": "number",
      "description": "Depth line is displayed between row 4 and row 5 of the visible board"
    },
    "settlementDelayMs": {
      "value": 600,
      "type": "number",
      "description": "Delay before opening the settlement scene after run ends"
    }
  },
  "mineLayerConfig": {
    "coverDurability": {
      "value": 1,
      "type": "number",
      "description": "Durability of dark red cover wall"
    },
    "sandDurability": {
      "value": 1,
      "type": "number",
      "description": "Durability of sand brick"
    },
    "oreDurability": {
      "value": 2,
      "type": "number",
      "description": "Durability of stone ore brick"
    },
    "blindBoxDurability": {
      "value": 1,
      "type": "number",
      "description": "Durability of red blind-box brick"
    },
    "indestructibleDurability": {
      "value": 999,
      "type": "number",
      "description": "Durability placeholder for indestructible block"
    },
    "bombAffectsIndestructible": {
      "value": false,
      "type": "boolean",
      "description": "Bombs never break indestructible blocks"
    },
    "emptyCellValue": {
      "value": 0,
      "type": "number",
      "description": "CellType.EMPTY represents mined tunnel"
    },
    "specialCellValue": {
      "value": 6,
      "type": "number",
      "description": "CellType.SPECIAL used for destructible mining content"
    },
    "wallCellValue": {
      "value": 1,
      "type": "number",
      "description": "CellType.WALL used for indestructible rock"
    }
  },
  "mineDepthConfig": {
    "surfaceMaxDepth": {
      "value": 30,
      "type": "number",
      "description": "Depth cap of surface mine biome"
    },
    "midMaxDepth": {
      "value": 80,
      "type": "number",
      "description": "Depth cap of deep surface biome"
    },
    "shallowSeaMaxDepth": {
      "value": 150,
      "type": "number",
      "description": "Depth cap of shallow sea biome"
    },
    "deepSeaMaxDepth": {
      "value": 260,
      "type": "number",
      "description": "Depth cap of deep sea biome"
    },
    "rareOreUnlockBiomeIndex": {
      "value": 3,
      "type": "number",
      "description": "Rare ores unlock from biome 3"
    },
    "chestUnlockBiomeIndex": {
      "value": 2,
      "type": "number",
      "description": "Chests unlock from biome 2"
    },
    "blindBoxUnlockBiomeIndex": {
      "value": 3,
      "type": "number",
      "description": "Blind-box bricks unlock from biome 3"
    },
    "firstRareToastEnabled": {
      "value": true,
      "type": "boolean",
      "description": "Show one-time toast when rare ore first becomes available"
    }
  },
  "mineRewardConfig": {
    "depthPointPerRow": {
      "value": 1,
      "type": "number",
      "description": "Supply progress gained per depth row advanced"
    },
    "randomPointDropMin": {
      "value": 1,
      "type": "number",
      "description": "Minimum instant progress points from random drop"
    },
    "randomPointDropMax": {
      "value": 4,
      "type": "number",
      "description": "Maximum instant progress points from random drop"
    },
    "baseSupplyTarget": {
      "value": 12,
      "type": "number",
      "description": "Initial supply bar target for the first biome"
    },
    "supplyTargetStepPerBiome": {
      "value": 4,
      "type": "number",
      "description": "Additional supply target required per deeper biome"
    },
    "goldFlyTextDurationMs": {
      "value": 550,
      "type": "number",
      "description": "Floating text duration for gold gain"
    },
    "resourceFlyDurationMs": {
      "value": 420,
      "type": "number",
      "description": "Duration for resource fly-to-HUD animation"
    }
  },
  "mineToolRewardConfig": {
    "supplyPickReward": {
      "value": 4,
      "type": "number",
      "description": "Default wooden pick reward when supply bar fills in early biome"
    },
    "supplyRowBombReward": {
      "value": 1,
      "type": "number",
      "description": "Default row bomb reward for mid/deep biome supply fill"
    },
    "supplyAreaBombReward": {
      "value": 1,
      "type": "number",
      "description": "Default area bomb reward for deep biome supply fill"
    },
    "toolHintPickReward": {
      "value": 3,
      "type": "number",
      "description": "Wood pick reward from one tool hint cell"
    },
    "toolHintRowBombReward": {
      "value": 1,
      "type": "number",
      "description": "Row bomb reward from one tool hint cell"
    },
    "toolHintAreaBombReward": {
      "value": 1,
      "type": "number",
      "description": "Area bomb reward from one tool hint cell"
    }
  },
  "mineMetaConfig": {
    "mineTypes": {
      "value": [
        "地表矿区",
        "深地表",
        "浅海",
        "深海",
        "地心火山泥"
      ],
      "type": "string[]",
      "description": "Biome names shown in HUD"
    },
    "oreRarityNames": {
      "value": [
        "普通石",
        "萤石",
        "青金石",
        "紫晶",
        "蓝晶",
        "玉石",
        "火曜石",
        "陨铁",
        "星辉石"
      ],
      "type": "string[]",
      "description": "Ordered ore rarity names used by settlement and toasts"
    }
  }
}
```

---

## 3. 实体与场景结构

### 3.1 场景职责

#### `EndlessMineRunScene` 继承 `BaseGridScene`

必须实现：

- `getBoardConfig()`
- `getTurnConfig()`
- `createEnvironment()`
- `createEntities()`
- `checkWinCondition()`
- `checkLoseCondition()`

建议重写：

- `onCellClicked(gridX, gridY)`: 处理点击木镐、横排炸弹、九宫格炸弹
- `onProcessComplete()`: 结算本次目标格与范围破坏、耐久递减、格子显露、资源掉落、音效与打击动画
- `onWorldPhase()`: 处理宝箱自动开启、工具入包、积分条增长、阶段提示、HUD 状态刷新
- `onMoveProcessed()`: 当打通底部可推进路径时返回 `true`，驱动“棋盘上卷一行 + 新底行生成”的链式刷新
- `onBoardStateChanged()`: 更新顶部收获、本局状态、当前深度牌、补给条显示
- `onLoseConditionMet()`: 进入 `GameOverUIScene`，但传入“本局收获结算”数据
- `onActionInput()`: 可选绑定为“切换当前工具到木镐”，P0 可留空
- `onCellHovered(gridX, gridY)`: 桌面端显示炸弹预览范围；移动端长按或选中态时复用

### 3.2 运行时状态模型

`EndlessMineRunScene` 需要维护以下运行态字段：

- `currentDepth: number`：当前深度
- `currentBiomeIndex: number`：当前深度区编号
- `currentBiomeName: string`：当前深度区名称
- `supplyPoints: number`：当前补给积分
- `supplyTarget: number`：当前补给积分目标值
- `woodPick: number`：木镐剩余数量
- `rowBomb: number`：横排炸弹剩余数量
- `areaBomb: number`：九宫格炸弹剩余数量
- `selectedTool: 'pick' | 'rowBomb' | 'areaBomb'`：当前选中工具
- `runStatus: '推进中' | '工具耗尽' | '结算中'`：本局状态
- `runLoot.gold: number`：本局金币累计
- `runLoot.ore: number`：本局矿石累计
- `runLoot.material: number`：本局材料累计
- `runLoot.openedChests: number`：本局已开启宝箱次数
- `rareOreUnlockedShown: boolean`：是否已显示“稀有矿石解锁”首次提示

### 3.3 棋盘编码方式

P0 采用“格子数值 + 场景内附加元数据（metadata）”混合方案：

- `CellType.EMPTY (0)`: 已挖空通路
- `CellType.WALL (1)`: 不可敲砖
- `CellType.FLOOR (2)`: 预留，不直接用于 P0 主要内容
- `CellType.SPECIAL (6)`: 所有可破坏砖内容的统一外层表示

每个 `SPECIAL` 格额外挂载一份元数据（metadata）：

- `coverVisible: boolean`：遮挡层是否可见
- `contentType: 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal'`：内容类型，分别表示沙砖、矿砖、盲盒砖、宝箱、工具砖、挖开即为空
- `durability: number`：当前可破坏层耐久
- `hasOreHint: boolean`：是否带矿石提示标记
- `hasToolHint: boolean`：是否带工具提示标记
- `rewardTableId: string`：掉落表编号

### 3.4 实体策略

P0 尽量少建实体，避免和模板能力冲突。

- 不创建“玩家实体”
- 不创建“敌人实体”
- 不创建“移动收集物实体”
- 可选创建轻量展示实体：
  - `ChestMarkerEntity` 继承 `_TemplateEntity.ts`
  - `OreHintEntity` 继承 `_TemplateEntity.ts`
  - `ToolHintEntity` 继承 `_TemplateEntity.ts`

如果实现成本过高，以上三类均可退化为 Scene 内直接绘制的 image/sprite，而不是 BoardManager tracked entity。

### 3.5 输入与点击规则

- 默认工具为 `pick`
- `合法点击起点` 只能是“与当前坑道连通”的格；未与当前坑道连通的格即使在 `7x6` 可视区域内，也不能作为木镐点击目标
- `当前坑道连通` 的判定标准：目标格与任一 `CellType.EMPTY` 坑道格在四方向邻接意义上连通，或目标格本身就是紧贴当前坑道边缘的第一层可破坏格
- 深红遮挡层下未显露的格，不允许跳过遮挡层直接点击其第二层真实内容；必须先破坏遮挡层，再对显露出的真实内容继续挖掘
- 点击可破坏格：
  - `pick`: 消耗 `1` 木镐，对目标格造成 `1` 点伤害
  - `rowBomb`: 消耗 `1` 横排炸弹，命中当前行全部可破坏格
  - `areaBomb`: 消耗 `1` 九宫格炸弹，命中目标 `3x3` 全部可破坏格
- 点击 `WALL`：
  - 不消耗工具
  - 播放无效反馈
- 炸弹对 `WALL` 无效
- 炸弹允许对“未连通但可见”的格产生破坏效果，但炸弹的放置落点必须是当前坑道可达或当前坑道边缘合法点击位，不能把炸弹直接放在完全不可操作的封闭格上
- 最底行与其余 `7x6` 可视区域使用完全一致的点击、连通、遮挡层和炸弹规则；它不是预览层，也不是特殊交互层

### 3.6 结束与结算规则

- `checkWinCondition()`: 永远返回 `false`
- `checkLoseCondition()`: 当 `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` 返回 `true`
- 主动点击 `收队返场`：
  - 将 `runStatus` 设为 `结算中`
  - 直接调用与 `onLoseConditionMet()` 相同的结算跳转

### 3.7 钩子与功能映射

| 钩子（Hook） | 对应功能 |
|------|---------|
| `onCellClicked` | 选择目标、校验当前工具是否可用、保存撤销（undo）状态、触发处理流水线 |
| `onProcessComplete` | 当前点击造成的耐久变化、炸弹范围破坏、砖块碎裂、飞字、命中音效 |
| `onWorldPhase` | 宝箱自动开启、工具增加、资源入账、积分条积累、阶段提升提示（toast） |
| `onEnemyPhase` | 空实现 |
| `onMoveProcessed` | 若底部形成真实通路则上卷棋盘并生成新底行；若继续触发通路则返回 `true` 继续链式处理 |
| `onBoardStateChanged` | HUD 文案刷新、当前深度类型刷新、顶部累计区刷新 |
| `onLoseConditionMet` | 打开结算页并写入本局深度、矿石、材料、金币、宝箱次数 |

---

## 4. 关卡与内容设计

### 4.1 初始可视棋盘

P0 初始可视棋盘固定 `7 x 6`，用于保证首屏手感一致。以下为首屏模板。

地形层（Terrain layer）：

```text
_ _ _ _ _ _ _
_ * * # * * _
_ * * * * # _
_ # * * * * _
_ * * # * * _
_ * * * * * _
```

约定：

- `_` = `CellType.EMPTY`，用于已经打通或预留可视坑道边缘
- `#` = `CellType.WALL`，不可敲砖
- `*` = `CellType.SPECIAL`，具体内容由 metadata 决定

初始内容元数据层（Initial content metadata layer）：

```text
E S O X S S E
S O S W B X S
S S O S T W S
E W S O S S E
S T S W O S S
S S O S S B T
```

说明：

- `S` = sand
- `O` = ore
- `B` = blindBox
- `W` = indestructible wall
- `T` = tool hint brick
- `X` = chest
- `E` = empty reveal

首屏目标：

- 教会玩家“多数格先有遮挡层”
- 保证至少 2 条向下可推进路线
- 首屏允许出现 1 个工具格和 1 个宝箱
- 首屏不出现稀有矿石提示

### 4.2 新行生成规则

每次“推进一层”时，在棋盘底部生成 1 行新数据，并删除顶部 1 行。

新行生成遵守：

1. 至少保留 1 条从当前底部可继续向下的可破坏路径
2. 浅红色沙砖是所有深度区（biome）中概率最高内容
3. 深度越深：
   - `coverVisible` 概率更高
   - `WALL` 占比更高
   - `ore` 更分散
   - `blindBox`、`chest` 概率逐步提高
4. `chest` 仅 biome 2 及以后可出现
5. `blindBox` 与 rare ore 仅 biome 3 及以后可出现
6. 每个深度区（biome）内 `supplyTarget` 增长，补给更难积满

### 4.3 可挖掘范围与目标合法性

P0 必须明确“能看到”不等于“能直接挖到”。目标合法性规则如下：

1. 木镐只能点击“与当前坑道连通”的格。
2. 连通判定采用四方向邻接，不采用斜向连通。
3. 若格子上仍有深红遮挡层，则本次点击只能作用于遮挡层本身，不能越过遮挡层直接伤害第二层内容。
4. 深红遮挡层破坏后，格子下方真实内容才转为可继续点击状态。
5. 炸弹可以波及未连通但处于可视区域内的格，只要这些格位于炸弹命中范围中。
6. 炸弹的施放落点本身必须是当前坑道可达格，或当前坑道边缘的合法操作格；不能把炸弹直接投放到完全隔绝且不可操作的封闭位置。
7. 最底行不是预览层，和其余可视格完全同规则；若它与当前坑道连通，则可被木镐点击，也可作为炸弹合法施放落点。
8. 生成新行时，必须保证玩家始终至少存在一条继续向下扩张的合法操作链，而不是仅存在理论上的视觉通路。

### 4.4 深度区表

| 深度区编号 | 深度区名称 | 深度范围 | 对应背景资源 | 内容侧重点 |
|------------|-----------|------------|-------------------|------------------|
| 1 | 地表矿区 | 1-30 | `mine_surface_bg` | 沙砖多，障碍少，开局教学 |
| 2 | 深地表 | 31-80 | `mine_mid_bg` | 开始出现宝箱，路径略绕 |
| 3 | 浅海 | 81-150 | `mine_shallow_sea_bg` | 首次解锁稀有矿、盲盒矿 |
| 4 | 深海 | 151-260 | `mine_deep_sea_bg` | 宝箱与盲盒概率上升，墙面更密 |
| 5 | 地心火山泥 | 261+ | `mine_core_bg` | 高价值最高，遮挡和障碍最强 |

### 4.5 掉落与收益规则

- `sand`: 不直接掉金币或材料，只承担打通与推进
- `ore`: 掉落金币、矿石、材料三选二或三选三
- `blindBox`: 掉落工具、积分、宝箱中的高波动组合
- `chest`: 自动开启，掉落工具和矿石中的一种或多种
- `tool`: 只掉落 `woodPick / rowBomb / areaBomb`
- `emptyReveal`: 仅显露坑道，不掉收益

### 4.6 补给积分规则

- 每推进 1 层：`supplyPoints +1`
- 掉落积分奖励时：立即增加 `supplyPoints`
- `supplyPoints >= supplyTarget` 时：
  - 清空或扣除一轮目标值
  - 根据当前深度区（biome）发一份工具补给
  - 触发轻量奖励反馈

推荐补给：

| 深度区 | 补给奖励 |
|------|---------------|
| 地表矿区 | `woodPick +4` |
| 深地表 | `woodPick +3`, `rowBomb +1` |
| 浅海 | `woodPick +3`, `rowBomb +1` |
| 深海 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |
| 地心火山泥 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |

### 4.7 界面展示内容

顶部状态行固定展示：

- `当前深度类型：{biomeName}`（建议后续实现时可直接替换为 `currentBiomeName`）
- `本局推进：{supplyPoints}/{supplyTarget}`
- `本局状态：{runStatus}`

顶部收益行固定展示：

- `金币 {runLoot.gold}`
- `矿石 {runLoot.ore}`
- `材料 {runLoot.material}`

底部工具区固定展示：

- `[镐子 {woodPick}]`
- `[横炸 {rowBomb}]`
- `[九炸 {areaBomb}]`
- `[背包]`
- `[收队返场]`

### 4.8 P0 结束与退出内容

- 无通关条件
- 主动返场 = 结算退出
- 工具耗尽 = 自动结算退出
- 结算页展示：
  - 最终深度
  - 深度类型
  - 金币
  - 矿石
  - 材料
  - 本局开启宝箱次数

---

## 5. 实施路线图

1. UPDATE `src/LevelManager.ts`: 将 `LEVEL_ORDER` 改为 `['EndlessMineRunScene']`。
2. UPDATE `src/main.ts`: 导入并注册 `EndlessMineRunScene`，保留 `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。
3. UPDATE `src/gameConfig.json`: 合并 Section 2 中的 `gridConfig`、`mineRunConfig`、`mineLayerConfig`、`mineDepthConfig`、`mineRewardConfig`、`mineToolRewardConfig`、`mineMetaConfig`。
4. UPDATE `src/scenes/TitleScreen.ts`: 将标题替换为“无限矿井”，入口按钮文案改为“进入无尽矿井”。
5. COPY `src/scenes/_TemplateGridLevel.ts` -> `src/scenes/EndlessMineRunScene.ts`: 场景 key 改为 `EndlessMineRunScene`。
6. UPDATE `src/scenes/EndlessMineRunScene.ts:getBoardConfig()`: 设定 `7x6` 可视棋盘、首屏 terrain layer 和初始 metadata。
7. UPDATE `src/scenes/EndlessMineRunScene.ts:getTurnConfig()`: 使用 `mode: 'freeform'`，`maxMoves: -1`。
8. UPDATE `src/scenes/EndlessMineRunScene.ts:createEnvironment()`: 根据 biome 切换背景图，绘制棋盘、深度线、补给条和深度牌。
9. UPDATE `src/scenes/EndlessMineRunScene.ts:createEntities()`: P0 可保持空实现，或仅创建宝箱/提示 marker 的轻量展示对象。
10. UPDATE `src/scenes/EndlessMineRunScene.ts:onCellClicked()`: 实现木镐点击、横排炸弹选择释放、九宫格炸弹选择释放、不可敲砖无效反馈。
11. UPDATE `src/scenes/EndlessMineRunScene.ts:onCellClicked()`: 增加“只有与当前坑道连通的格才能被木镐点击”的合法性校验；炸弹施放落点也必须经过同类合法性校验。
12. UPDATE `src/scenes/EndlessMineRunScene.ts:onProcessComplete()`: 处理砖块减耐久、显露内容、遮挡层先破再显露、炸弹范围命中、飞字和音效。
13. UPDATE `src/scenes/EndlessMineRunScene.ts:onWorldPhase()`: 处理宝箱自动开启、资源即时入账、积分条增长、补给发放、首次稀有矿 toast。
14. UPDATE `src/scenes/EndlessMineRunScene.ts:onMoveProcessed()`: 当底部形成可推进通路时，上卷 1 行并生成新底行；如仍需继续推进则返回 `true`。
15. UPDATE `src/scenes/EndlessMineRunScene.ts:onBoardStateChanged()`: 同步刷新 `UIScene` 所需状态文案与顶部收获区。
16. UPDATE `src/scenes/EndlessMineRunScene.ts:checkWinCondition()`: 永远返回 `false`。
17. UPDATE `src/scenes/EndlessMineRunScene.ts:checkLoseCondition()`: 当三类工具都为 `0` 时返回 `true`。
18. UPDATE `src/scenes/EndlessMineRunScene.ts:onLoseConditionMet()`: 跳转到 `GameOverUIScene`，将其作为“本局收获结算”使用。
19. UPDATE `src/scenes/GameOverUIScene.ts`: 文案从失败改为结算，展示深度与本局收益。
20. OPTIONAL COPY `src/entities/_TemplateEntity.ts` -> `src/entities/ChestMarkerEntity.ts`: 如需要将宝箱做成棋盘实体。
21. OPTIONAL COPY `src/entities/_TemplateEntity.ts` -> `src/entities/OreHintEntity.ts`: 如需要将矿石提示做成棋盘实体。
22. OPTIONAL COPY `src/entities/_TemplateEntity.ts` -> `src/entities/ToolHintEntity.ts`: 如需要将工具提示做成棋盘实体。
23. VERIFY scene registration: `TitleScreen` 的入口目标、`main.ts` 注册和 `LevelManager.LEVEL_ORDER[0]` 一致。
24. VERIFY config merge: 最终 `gameConfig.json` 保留 `screenSize`、`debugConfig`、`renderConfig`。
25. VERIFY runtime rules: 工具耗尽自动结算、主动返场结算、炸弹不破坏不可敲砖、木镐只能点击与当前坑道连通的格、炸弹允许波及未连通可视格但施放落点必须合法、最底行与其他可视格完全同规则、至少始终存在一条向下路径。

---

## 约定与假设

- 本 GDD 按 OpenGame `grid_logic`（格子逻辑）模板生成，因为玩法核心是离散棋盘点击与链式状态更新。
- 由于模板默认没有“结算场景”专用基类，P0 方案复用 `GameOverUIScene` 承载结算是最小实现路径。
- PRD 中“顶部 HUD 继续展示主矿区真实货币和体力”在独立 Demo 中会先以场景内本地展示字段代替，真正联动主系统时再接宿主数据源。
