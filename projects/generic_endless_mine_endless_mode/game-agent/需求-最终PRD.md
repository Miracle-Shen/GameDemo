# 《无限矿井》无尽模式 游戏设计文档（GDD）

> 阶段: Game Design Document  
> 日期: 2026-06-21  
> 输入模式: PRD 输入  
> 业务输入: `/Users/miracleshen/GameAgent/GDD-无限矿井无尽模式.md`  
> 视觉锚点: `/Users/miracleshen/GameAgent/projects/generic_endless_mine_endless_mode/game-agent/策划-玩法概念文档.md`  
> SSOT 说明: 用户 PRD 是业务唯一事实源；桥接文档仅用于 `selected_concept_path`、`selected_concept_url`、视觉基调和概念图引用。

---

## 一、需求审查结果

| # | 维度 | 状态 | 说明 |
|---|------|------|------|
| 1 | 产品定位 | ✅ | 《无限矿井》无尽模式，移动端卡通矿井下挖玩法 Demo；实现归类为 `grid_logic`，子类型 `freeform`，核心交互为点击格子直接结算挖掘或范围工具释放。 |
| 2 | 核心体验 | ✅ | 以持续向更深矿层推进、挖空下陷、资源飞入 HUD、补给续航和本局收获结算为核心体验；视觉强调厚重泥土体块、矿灯暖光和深度色带变化。 |
| 3 | 核心循环 | ✅ | 开始一局并消耗体力 → 获得初始工具 → 点击合法格挖掘/释放炸弹 → 破坏格子并获得资源/补给积分/工具 → 底部打通后推进深度并生成新行 → 工具耗尽或主动返场 → 结算页展示本局收获。 |
| 4 | 视觉基调 | ✅ | 用户 PRD 明确移动端卡通矿井风格、分深度背景资源和资源注册表；桥接文档提供主概念图引用。 |
| 5 | 平台与环境 | ✅ | PRD 明确分辨率 `1152 x 768`、移动端优先布局、OpenGame `grid_logic` 模板、`BaseGridScene` 与 `UIScene`；未要求渲染框架选型。 |
| 6 | 开始/结束条件 | ✅ | `TitleScreen` 进入唯一可玩关卡 `EndlessMineRunScene`；无通关条件；工具耗尽或点击 `收队返场` 进入 `GameOverUIScene` 作为本局收获结算页。 |
| 7 | 异常与边界 | ✅ | PRD 明确点击合法性、连通判定、遮挡层、WALL、炸弹范围、最底行规则、至少一条下行路径、输入防抖、工具耗尽和主动返场等边界。缺失信息：断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理未在 PRD 明确。 |
| 8 | 社交与传播 | ❓ | 缺失信息：PRD 未提及分享、排行榜、好友互动、邀请、社交传播或外部活动结算规则。 |

---

## 二、产品定位（继承用户 PRD）

- **项目名称**: 《无限矿井》无尽模式
- **一句话定位**: 基于 OpenGame `grid_logic` 模板实现的移动端卡通矿井无尽下挖 Demo，玩家通过点击格子挖掘和使用工具持续向下推进，并在本局结束后查看本局收获。
- **目标用户**: 缺失信息：用户 PRD 未明确人群画像、年龄段、地区、付费倾向或使用场景。
- **平台与环境**:
  - 模板类型: `grid_logic`
  - 子类型 / 结算节奏: `freeform`
  - 运行分辨率: `1152 x 768`
  - 可视棋盘: `7 x 6`
  - 核心场景基类: `BaseGridScene`
  - 界面场景: `UIScene`
  - P0 结算承载页: 复用 `GameOverUIScene`，语义改为“本局收获结算”。
- **核心交互**: 点击格子直接结算一次挖掘或范围工具释放，不使用方向移动主角。
- **业务边界**:
  - 不创建玩家可移动实体。
  - 不创建敌人实体。
  - 不切分多个固定关卡，`EndlessMineRunScene` 为单场景持续生成式关卡。
  - P0 以棋盘格内容、工具库存、深度和收益累计驱动状态。

---

## 三、系统设计

### 3.1 场景流转与关卡入口系统

- **系统概述**: 管理从预加载、标题页、无尽矿井运行场景到结算页的固定流程。
- **核心流程**:
  1. `Preloader` 完成资源预加载。
  2. 进入 `TitleScreen`。
  3. `TitleScreen` 的入口按钮文案为“进入无尽矿井”。
  4. 点击后进入唯一可玩关卡 `EndlessMineRunScene`。
  5. 玩家点击 `收队返场` 或工具耗尽时，进入 `GameOverUIScene`。
  6. `GameOverUIScene` 在本项目中承担“本局收获结算”职责，而不是失败语义。
- **规则定义**:
  - 场景流转为 `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene`。
  - `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。
  - 场景键名清单: `Preloader`、`TitleScreen`、`EndlessMineRunScene`、`UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。
  - `EndlessMineRunScene` 是单场景持续生成式关卡。
- **资源关联**:
  - 依赖 `src/LevelManager.ts`、`src/main.ts`、`src/scenes/TitleScreen.ts`、`src/scenes/EndlessMineRunScene.ts`、`src/scenes/GameOverUIScene.ts`。
- **边界与异常**:
  - `checkWinCondition()` 恒为 `false`，不进入胜利流程。
  - `VictoryUIScene`、`GameCompleteUIScene` 保留注册，但无尽模式 P0 不以其作为主结算页。
  - 缺失信息：暂停页在本模式中的具体入口、返回、退出和结算关系未在 PRD 明确。

### 3.2 运行时状态模型系统

- **系统概述**: 维护无尽矿井单局内深度、深度区、工具、补给、收益和结算状态。
- **核心流程**:
  1. 进入一局后初始化深度、深度区、工具、补给和收益字段。
  2. 每次点击或炸弹释放后进入处理流水线。
  3. 破坏、掉落、补给、深度推进后同步运行态字段。
  4. 状态变化后刷新 HUD、深度牌、顶部累计区和结算数据。
- **规则定义**:
  - 必须维护字段:
    - `currentDepth: number`
    - `currentBiomeIndex: number`
    - `currentBiomeName: string`
    - `supplyPoints: number`
    - `supplyTarget: number`
    - `woodPick: number`
    - `rowBomb: number`
    - `areaBomb: number`
    - `selectedTool: 'pick' | 'rowBomb' | 'areaBomb'`
    - `runStatus: '推进中' | '工具耗尽' | '结算中'`
    - `runLoot.gold: number`
    - `runLoot.ore: number`
    - `runLoot.material: number`
    - `runLoot.openedChests: number`
    - `rareOreUnlockedShown: boolean`
  - 初始工具: `woodPick = 20`、`rowBomb = 2`、`areaBomb = 2`（2026-06-21 用户确认：进入游戏后每个炸弹类型的个数增加为 2）。
  - 默认工具: `pick`。
  - 开始一局体力消耗: `startEnergyCost = 1`。
- **资源关联**:
  - HUD 展示、棋盘处理、补给发放、掉落结算和结算页均读取该运行态。
- **边界与异常**:
  - 工具库存三项均小于等于 0 时进入工具耗尽结算路径。
  - 主动返场将 `runStatus` 设为 `结算中` 并进入同一结算跳转。
  - 缺失信息：主矿区真实货币、体力与宿主系统的接口、扣减失败回滚、跨局持久化未在 PRD 明确；PRD 约定独立 Demo 先以场景内本地展示字段代替。

### 3.3 棋盘编码与格子元数据系统

- **系统概述**: 使用格子数值与场景内 metadata 组合表达可挖内容、不可敲砖、遮挡层、提示和奖励表。
- **核心流程**:
  1. 初始化 `7 x 6` 可视棋盘。
  2. Terrain layer 记录基础格类型。
  3. `SPECIAL` 格额外挂载 metadata。
  4. 点击或炸弹命中时先根据格类型与 metadata 判断伤害、显露、掉落和空洞状态。
- **规则定义**:
  - `CellType.EMPTY (0)`: 已挖空通路。
  - `CellType.WALL (1)`: 不可敲砖。
  - `CellType.FLOOR (2)`: 预留，不直接用于 P0 主要内容。
  - `CellType.SPECIAL (6)`: 所有可破坏砖内容的统一外层表示。
  - `SPECIAL` metadata 字段:
    - `coverVisible: boolean`
    - `contentType: 'sand' | 'ore' | 'blindBox' | 'chest' | 'tool' | 'emptyReveal'`
    - `durability: number`
    - `hasOreHint: boolean`
    - `hasToolHint: boolean`
    - `rewardTableId: string`
- **资源关联**:
  - 与挖掘点击、炸弹命中、掉落、补给、深度推进和 HUD 刷新系统关联。
- **边界与异常**:
  - `WALL` 不可被木镐或炸弹破坏。
  - 深红遮挡层存在时，点击只能作用于遮挡层，不能越过遮挡层直接伤害真实内容。
  - 缺失信息：`rewardTableId` 的完整枚举、每个掉落表的精确内容和概率未在 PRD 中以表格完全展开。

### 3.4 输入、连通与工具释放系统

- **系统概述**: 处理木镐、横排炸弹、九宫格炸弹的选择、合法性校验、消耗和命中范围。
- **核心流程**:
  1. 玩家选中当前工具，默认 `pick`。
  2. 点击目标格后校验当前工具是否可用。
  3. 校验落点是否合法：木镐目标需与当前坑道四方向连通或位于坑道边缘第一层可破坏格；炸弹落点必须是已连通的坑道格本身。
  4. 合法时保存撤销状态并调用 `runProcessingPipeline()`。
  5. `onProcessComplete()` 结算耐久、显露、破坏、资源、飞字和音效。
- **规则定义**:
  - 单次点击视为一次 action。
  - `onCellClicked()` 处理木镐挖掘、横排炸弹释放、九宫格炸弹释放。
  - `pick`: 消耗 `1` 木镐，对目标格造成 `1` 点伤害。
  - `rowBomb`: 消耗 `1` 横排炸弹，命中当前行全部可破坏格。
  - `areaBomb`: 消耗 `1` 九宫格炸弹，命中目标 `3x3` 全部可破坏格。
  - 点击 `WALL`: 不消耗工具，播放无效反馈。
  - 炸弹对 `WALL` 无效。
  - 木镐只能点击“与当前坑道连通”的格。
  - 当前坑道连通判定: 目标格与任一 `CellType.EMPTY` 坑道格在四方向邻接意义上连通，或目标格本身就是紧贴当前坑道边缘的第一层可破坏格。
  - 四方向邻接，不采用斜向连通。
  - 炸弹允许波及未连通但可见的格；炸弹施放落点必须是已连通的 `CellType.EMPTY` 坑道格本身，且该坑道格必须属于当前四方向可达坑道集合。
  - 不能把炸弹直接放在坑道边缘可破坏格、未连通格、封闭格或 `WALL` 上。
  - 最底行与其余 `7x6` 可视区域完全同规则，不是预览层。
  - 输入防抖: `inputDebounceMs = 120ms`。
- **资源关联**:
  - 消耗 `woodPick`、`rowBomb`、`areaBomb`。
  - 触发格子 metadata 更新、掉落和 HUD 刷新。
- **边界与异常**:
  - 当前工具数量不足时不得释放该工具。
  - 未连通格不能作为木镐目标。
  - 未显露格不能跳过遮挡层直接操作第二层真实内容。
  - 缺失信息：多指同时点击、拖动取消、长按时长、桌面 Hover 预览的精确触发阈值未在 PRD 明确。

### 3.5 挖掘处理流水线与模板钩子系统

- **系统概述**: 将一次点击动作映射到模板生命周期钩子，完成破坏、掉落、补给、推进和状态刷新。
- **核心流程**:
  1. `onCellClicked(gridX, gridY)`: 选择目标、校验工具、校验合法性、保存 undo 状态、触发处理流水线。
  2. `onProcessComplete()`: 当前点击造成耐久变化、炸弹范围破坏、砖块碎裂、飞字、命中音效。
  3. `onWorldPhase()`: 自动开箱、工具增加、资源入账、积分条积累、阶段提升 toast。
  4. `onEnemyPhase()`: 空实现。
  5. `onMoveProcessed()`: 若底部形成真实通路，上卷棋盘并生成新底行；如仍需继续推进则返回 `true` 继续链式处理。
  6. `onBoardStateChanged()`: HUD 文案刷新、当前深度类型刷新、顶部累计区刷新。
  7. `onLoseConditionMet()`: 打开结算页并写入本局深度、矿石、材料、金币、宝箱次数。
- **规则定义**:
  - `EndlessMineRunScene` 必须实现 `getBoardConfig()`、`getTurnConfig()`、`createEnvironment()`、`createEntities()`、`checkWinCondition()`、`checkLoseCondition()`。
  - 建议重写 `onCellClicked()`、`onProcessComplete()`、`onWorldPhase()`、`onMoveProcessed()`、`onBoardStateChanged()`、`onLoseConditionMet()`、`onActionInput()`、`onCellHovered()`。
  - `onEnemyPhase()` 保持空实现。
- **资源关联**:
  - 关联棋盘、实体展示、HUD、音效、背景、掉落、结算数据。
- **边界与异常**:
  - P0 尽量少建实体，避免和模板能力冲突。
  - 可选轻量展示实体包括 `ChestMarkerEntity`、`OreHintEntity`、`ToolHintEntity`；若实现成本过高，退化为 Scene 内直接绘制 image/sprite，而非 BoardManager tracked entity。

### 3.6 初始棋盘与新行生成系统

- **系统概述**: 定义首屏固定棋盘与推进一层后的底部新行生成规则。
- **核心流程**:
  1. 初始进入时使用固定 `7 x 6` 首屏棋盘保证手感一致。
  2. 玩家挖掘并在底部形成真实通路。
  3. 每推进一层，棋盘整体上卷 1 行，删除顶部 1 行，在底部生成 1 行新数据。
  4. 根据当前深度区调整内容概率和背景。
- **规则定义**:
  - 初始 Terrain layer:

```text
_ _ _ _ _ _ _
_ * * # * * _
_ * * * * # _
_ # * * * * _
_ * * # * * _
_ * * * * * _
```

  - Terrain 约定: `_ = CellType.EMPTY`，`# = CellType.WALL`，`* = CellType.SPECIAL`。
  - 初始 metadata layer:

```text
E S O X S S E
S O S W B X S
S S O S T W S
E W S O S S E
S T S W O S S
S S O S S B T
```

  - Metadata 约定: `S = sand`，`O = ore`，`B = blindBox`，`W = indestructible wall`，`T = tool hint brick`，`X = chest`，`E = empty reveal`。
  - 首屏目标:
    - 教会玩家“多数格先有遮挡层”。
    - 保证至少 2 条向下可推进路线。
    - 首屏允许出现 1 个工具格和 1 个宝箱。
    - 首屏不出现稀有矿石提示。
  - 新行生成规则:
    1. 至少保留 1 条从当前底部可继续向下的可破坏路径。
    2. 浅红色沙砖是所有深度区中概率最高内容。
    3. 深度越深，`coverVisible` 概率更高、`WALL` 占比更高、`ore` 更分散、`blindBox` 与 `chest` 概率逐步提高。
    4. `chest` 仅 biome 2 及以后可出现。
    5. `blindBox` 与 rare ore 仅 biome 3 及以后可出现。
    6. 每个深度区内 `supplyTarget` 增长，补给更难积满。
- **资源关联**:
  - 关联深度区、背景资源、格子 metadata、补给目标和掉落内容。
- **边界与异常**:
  - 生成新行时必须保证玩家始终至少存在一条继续向下扩张的合法操作链，而不是仅存在理论上的视觉通路。
  - 缺失信息：新行内容的逐格精确概率表未在 PRD 明确。

### 3.7 深度区与背景切换系统

- **系统概述**: 根据当前深度划分矿区阶段，切换背景资源与内容侧重点。
- **核心流程**:
  1. 当前深度增加后计算深度区编号和名称。
  2. 切换对应背景资源。
  3. 更新 HUD 的当前深度类型。
  4. 到达稀有矿首次解锁条件时显示一次提示。
- **规则定义**:

| 深度区编号 | 深度区名称 | 深度范围 | 对应背景资源 | 内容侧重点 |
|------------|-----------|------------|-------------------|------------------|
| 1 | 地表矿区 | 1-30 | `mine_surface_bg` | 沙砖多，障碍少，开局教学 |
| 2 | 深地表 | 31-80 | `mine_mid_bg` | 开始出现宝箱，路径略绕 |
| 3 | 浅海 | 81-150 | `mine_shallow_sea_bg` | 首次解锁稀有矿、盲盒矿 |
| 4 | 深海 | 151-260 | `mine_deep_sea_bg` | 宝箱与盲盒概率上升，墙面更密 |
| 5 | 地心火山泥 | 261+ | `mine_core_bg` | 高价值最高，遮挡和障碍最强 |

  - `rareOreUnlockBiomeIndex = 3`。
  - `chestUnlockBiomeIndex = 2`。
  - `blindBoxUnlockBiomeIndex = 3`。
  - `firstRareToastEnabled = true`。
- **资源关联**:
  - 背景资源: `mine_surface_bg`、`mine_mid_bg`、`mine_shallow_sea_bg`、`mine_deep_sea_bg`、`mine_core_bg`。
  - HUD 文案: `当前深度类型：{biomeName}`。
- **边界与异常**:
  - 深度 `261+` 均归入地心火山泥。
  - 缺失信息：每个深度区内精确难度曲线和精确掉落概率未在 PRD 明确。

### 3.8 掉落、收益与补给积分系统

- **系统概述**: 处理挖掘内容带来的金币、矿石、材料、工具、积分、宝箱和补给奖励。
- **核心流程**:
  1. 挖开内容格或宝箱后，根据 `contentType` 结算收益。
  2. 资源即时入账并播放飞入顶部 HUD 的反馈。
  3. 推进深度或随机积分掉落增加 `supplyPoints`。
  4. 当 `supplyPoints >= supplyTarget` 时，扣除一轮目标值或清空一轮目标值，并按当前深度区发放工具补给。
  5. 刷新工具数量与补给条。
- **规则定义**:
  - `sand`: 不直接掉金币或材料，只承担打通与推进。
  - `ore`: 掉落金币、矿石、材料三选二或三选三。
  - `blindBox`: 掉落工具、积分、宝箱中的高波动组合。
  - `chest`: 自动开启，掉落工具和矿石中的一种或多种。
  - `tool`: 只掉落 `woodPick / rowBomb / areaBomb`。
  - `emptyReveal`: 仅显露坑道，不掉收益。
  - 每推进 1 层: `supplyPoints +1`。
  - 掉落积分奖励时: 立即增加 `supplyPoints`。
  - `supplyPoints >= supplyTarget` 时:
    - 清空或扣除一轮目标值。
    - 根据当前深度区发一份工具补给。
    - 触发轻量奖励反馈。
  - 补给奖励表:

| 深度区 | 补给奖励 |
|------|---------------|
| 地表矿区 | `woodPick +4` |
| 深地表 | `woodPick +3`, `rowBomb +1` |
| 浅海 | `woodPick +3`, `rowBomb +1` |
| 深海 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |
| 地心火山泥 | `woodPick +2`, `rowBomb +1`, `areaBomb +1` |

- **资源关联**:
  - 写入 `runLoot.gold`、`runLoot.ore`、`runLoot.material`、`runLoot.openedChests`、`woodPick`、`rowBomb`、`areaBomb`、`supplyPoints`。
- **边界与异常**:
  - PRD 中存在“清空或扣除一轮目标值”的二选一描述；缺失信息：最终采用清空还是扣除目标值未唯一明确。
  - 缺失信息：金币、矿石、材料的精确掉落数量、每类内容的精确概率、宝箱掉落表、盲盒掉落表未在 PRD 明确。

### 3.9 HUD、工具栏与结算展示系统

- **系统概述**: 固定展示顶部状态、顶部收益、底部工具区和结算页数据。
- **核心流程**:
  1. 游戏中持续展示顶部状态行、顶部收益行和底部工具区。
  2. 每次棋盘状态变化后刷新 HUD。
  3. 主动返场或工具耗尽时进入结算页。
  4. 结算页展示本局最终深度、深度类型、金币、矿石、材料和开启宝箱次数。
- **规则定义**:
  - 顶部状态行固定展示:
    - `当前深度类型：{biomeName}`
    - `本局推进：{supplyPoints}/{supplyTarget}`
    - `本局状态：{runStatus}`
  - 顶部收益行固定展示:
    - `金币 {runLoot.gold}`
    - `矿石 {runLoot.ore}`
    - `材料 {runLoot.material}`
  - 底部工具区固定展示:
    - `[镐子 {woodPick}]`
    - `[横炸 {rowBomb}]`
    - `[九炸 {areaBomb}]`
    - `[背包]`
    - `[收队返场]`
  - 结算页展示:
    - 最终深度
    - 深度类型
    - 金币
    - 矿石
    - 材料
    - 本局开启宝箱次数
- **资源关联**:
  - 读取运行态字段和结算数据。
  - 使用 `GameOverUIScene` 作为“本局收获结算”承载页。
- **边界与异常**:
  - `GameOverUIScene` 文案需从失败改为结算。
  - 缺失信息：背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互未在 PRD 明确。

### 3.10 资源注册与音画反馈系统

- **系统概述**: 继承用户 PRD 中的背景、瓦片、图标、宝箱、提示标记和音频资源需求。
- **核心流程**:
  1. 按深度区加载或切换对应背景。
  2. 用 tileset 表达墙面、沙砖、矿砖、盲盒砖、不可破坏岩石、空洞、宝箱、矿石提示和工具提示。
  3. 点击、破坏、炸弹、奖励、深度提升时播放对应 SFX/BGM。
- **规则定义**:

| type | key | description | params |
|------|-----|-------------|--------|
| background | `title_bg` | warm cartoon mining camp entrance with wood scaffold, lantern glow, elevator cage, FRONT VIEW, mobile game title backdrop | resolution: `1536*1024` |
| background | `mine_surface_bg` | bright near-surface mine shaft with dusty brown walls, wood braces, soft sunlight spill, layered tunnel depth | resolution: `1536*1024` |
| background | `mine_mid_bg` | deeper earth mine with cooler rocks, denser scaffold, dim lamps, stronger dust haze and depth shadows | resolution: `1536*1024` |
| background | `mine_shallow_sea_bg` | underground shallow-sea cavern mine, teal moisture glow, wet stone, shells and mineral veins | resolution: `1536*1024` |
| background | `mine_deep_sea_bg` | dark deep-sea cavern shaft, blue-black humidity, rare crystal gleam, heavy contrast | resolution: `1536*1024` |
| background | `mine_core_bg` | volcanic mud-core mine with ember cracks, red heat bloom, dense smoke and unstable rock | resolution: `1536*1024` |
| tileset | `mine_blocks_tiles` | chunky mining tiles for wall cover, sand brick, stone ore, blind-box brick, indestructible rock, empty tunnel pit, chest, ore hint, tool hint | tileset_size: `3` |
| image | `hud_pickaxe_icon` | simple mobile UI icon for wooden pickaxe count, warm wood and iron head | - |
| image | `hud_row_bomb_icon` | mobile UI icon for horizontal bomb, long stick explosive with fuse | - |
| image | `hud_area_bomb_icon` | mobile UI icon for 3x3 bomb, compact satchel explosive with fuse | - |
| image | `chest_closed` | chunky treasure chest for mine grid, brass corners, readable from top-front angle | - |
| image | `ore_hint_marker` | glowing ore marker embedded in block center, gem sparkle, readable at small size | - |
| image | `tool_hint_marker` | glowing tool marker embedded in block center, wrench and pickaxe motif | - |
| audio | `mine_hit_sfx` | crisp single pickaxe hit on dirt and stone | audioType: `sfx` |
| audio | `mine_break_sfx` | satisfying block crumble with debris fall | audioType: `sfx` |
| audio | `mine_bomb_row_sfx` | horizontal blasting explosion with rolling debris | audioType: `sfx` |
| audio | `mine_bomb_area_sfx` | compact heavy area explosion with echo | audioType: `sfx` |
| audio | `mine_reward_sfx` | reward pop with coin and gem sparkle | audioType: `sfx` |
| audio | `mine_depth_up_sfx` | short celebratory progression sting for entering deeper layer | audioType: `sfx` |
| audio | `mine_bgm` | light but addictive mining expedition music, playful groove with tension rising in deeper zones | audioType: `bgm`, duration: `20` |

- **资源关联**:
  - `createEnvironment()`、点击反馈、破坏反馈、资源飞入、深度提升、HUD 图标。
- **边界与异常**:
  - 缺失信息：音量、静音入口、音频失败降级、资源加载失败占位表现未在 PRD 明确。

### 3.11 实施路线与验收映射系统

- **系统概述**: 继承用户 PRD 的开发任务和验收要求，保证 P0 MVP 可接入模板流程。
- **核心流程 / 规则定义**:
  1. 更新 `src/LevelManager.ts`: 将 `LEVEL_ORDER` 改为 `['EndlessMineRunScene']`。
  2. 更新 `src/main.ts`: 导入并注册 `EndlessMineRunScene`，保留 `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene`。
  3. 更新 `src/gameConfig.json`: 合并 `gridConfig`、`mineRunConfig`、`mineLayerConfig`、`mineDepthConfig`、`mineRewardConfig`、`mineToolRewardConfig`、`mineMetaConfig`。
  4. 更新 `src/scenes/TitleScreen.ts`: 标题替换为“无限矿井”，入口按钮文案改为“进入无尽矿井”。
  5. 复制 `_TemplateGridLevel.ts` 为 `EndlessMineRunScene.ts`，场景 key 改为 `EndlessMineRunScene`。
  6. `getBoardConfig()` 设定 `7x6` 可视棋盘、首屏 terrain layer 和初始 metadata。
  7. `getTurnConfig()` 使用 `mode: 'freeform'`，`maxMoves: -1`。
  8. `createEnvironment()` 根据 biome 切换背景图，绘制棋盘、深度线、补给条和深度牌。
  9. `createEntities()` P0 可保持空实现，或仅创建宝箱/提示 marker 的轻量展示对象。
  10. `onCellClicked()` 实现木镐、横排炸弹、九宫格炸弹、不可敲砖无效反馈、连通合法性校验、炸弹施放落点合法性校验。
  11. `onProcessComplete()` 处理砖块减耐久、显露内容、遮挡层先破再显露、炸弹范围命中、飞字和音效。
  12. `onWorldPhase()` 处理宝箱自动开启、资源即时入账、积分条增长、补给发放、首次稀有矿 toast。
  13. `onMoveProcessed()` 当底部形成可推进通路时，上卷 1 行并生成新底行；如仍需继续推进则返回 `true`。
  14. `onBoardStateChanged()` 同步刷新 `UIScene` 所需状态文案与顶部收获区。
  15. `checkWinCondition()` 永远返回 `false`。
  16. `checkLoseCondition()` 当三类工具都为 `0` 时返回 `true`。
  17. `onLoseConditionMet()` 跳转到 `GameOverUIScene`，将其作为“本局收获结算”使用。
  18. `GameOverUIScene` 文案从失败改为结算，展示深度与本局收益。
  19. 可选复制 `_TemplateEntity.ts` 为 `ChestMarkerEntity.ts`、`OreHintEntity.ts`、`ToolHintEntity.ts`。
- **验收要求**:
  - `TitleScreen` 的入口目标、`main.ts` 注册和 `LevelManager.LEVEL_ORDER[0]` 一致。
  - 最终 `gameConfig.json` 保留 `screenSize`、`debugConfig`、`renderConfig`。
  - 工具耗尽自动结算。
  - 主动返场结算。
  - 炸弹不破坏不可敲砖。
  - 木镐只能点击与当前坑道连通的格。
  - 炸弹允许波及未连通可视格，但施放落点必须是已连通的 `CellType.EMPTY` 坑道格。
  - 最底行与其他可视格完全同规则。
  - 至少始终存在一条向下路径。
- **边界与异常**:
  - PRD 中标记可选的实体复制不作为 P0 必须项。

---

## 四、数值平衡

> 本节严格继承用户 PRD 已明确数值。用户 PRD 未明确的数值按特殊要求标注“缺失信息”，不自行补默认值。

### 4.1 关键数值表

| 参数 | 值 | 来源 | 设计意图 / 说明 |
|------|---|------|---------|
| 运行分辨率 | `1152 x 768` | 继承 | 移动端优先 Demo 画布规格。 |
| 背景资源分辨率 | `1536*1024` | 继承 | 用于标题与各深度矿区背景。 |
| 可视棋盘宽度 | `7` | 继承 | 移动端可读的横向格数。 |
| 可视棋盘高度 | `6` | 继承 | 单屏可操作深度。 |
| 格子尺寸 | `88 px` | 继承 | 适配 `7x6` 棋盘。 |
| `maxMoves` | `-1` | 继承 | 无行动次数上限，直到工具耗尽或玩家退出。 |
| 默认动画时长 | `180 ms` | 继承 | 单元格动画节奏。 |
| 输入防抖 | `120 ms` | 继承 | 降低快速点击误触。 |
| 开局体力消耗 | `1` | 继承 | 每局入口消耗。 |
| 初始木镐 | `20` | 继承 | 开局基础续航。 |
| 初始横排炸弹 | `2` | 用户变更 | 进入游戏后横排炸弹初始数量为 2，后续仍可通过局内奖励获得。 |
| 初始九宫格炸弹 | `2` | 用户变更 | 进入游戏后九宫格炸弹初始数量为 2，后续仍可通过局内奖励获得。 |
| 推进 1 行增加深度 | `1` | 继承 | 深度与棋盘上卷绑定。 |
| 深度线展示行 | `4` | 继承 | 显示在第 4 行和第 5 行之间。 |
| 结算延迟 | `600 ms` | 继承 | 结束后进入结算页的延迟。 |
| 遮挡墙耐久 | `1` | 继承 | 深红遮挡层一次破坏。 |
| 沙砖耐久 | `1` | 继承 | 基础砖一次破坏。 |
| 矿砖耐久 | `2` | 继承 | 矿砖需要更多消耗。 |
| 盲盒砖耐久 | `1` | 继承 | 盲盒内容快速反馈。 |
| 不可破坏砖占位耐久 | `999` | 继承 | 不被常规工具破坏。 |
| 炸弹影响不可破坏砖 | `false` | 继承 | 保持墙体边界。 |
| 空格编码 | `0` | 继承 | `CellType.EMPTY`。 |
| 墙格编码 | `1` | 继承 | `CellType.WALL`。 |
| 预留地板编码 | `2` | 继承 | `CellType.FLOOR`。 |
| 可破坏内容编码 | `6` | 继承 | `CellType.SPECIAL`。 |
| 地表矿区深度 | `1-30` | 继承 | 开局教学。 |
| 深地表深度 | `31-80` | 继承 | 宝箱开始出现。 |
| 浅海深度 | `81-150` | 继承 | 稀有矿与盲盒矿首次解锁。 |
| 深海深度 | `151-260` | 继承 | 宝箱、盲盒、墙面密度上升。 |
| 地心火山泥深度 | `261+` | 继承 | 高价值与最高阻碍。 |
| 稀有矿解锁深度区 | `3` | 继承 | 浅海开始。 |
| 宝箱解锁深度区 | `2` | 继承 | 深地表开始。 |
| 盲盒砖解锁深度区 | `3` | 继承 | 浅海开始。 |
| 首次稀有矿提示 | `true` | 继承 | 只显示一次解锁提示。 |
| 每推进 1 层补给积分 | `+1` | 继承 | 推进转化为续航资源。 |
| 随机积分掉落最小值 | `1` | 继承 | 积分奖励下限。 |
| 随机积分掉落最大值 | `4` | 继承 | 积分奖励上限。 |
| 基础补给目标 | `12` | 继承 | 首个深度区补给条目标。 |
| 每深度区补给目标增量 | `4` | 继承 | 深层补给更难积满。 |
| 金币飞字时长 | `550 ms` | 继承 | 金币反馈表现。 |
| 资源飞入 HUD 时长 | `420 ms` | 继承 | 资源反馈表现。 |
| 早期补给木镐奖励 | `+4` | 继承 | 地表矿区补给。 |
| 中深层补给横炸奖励 | `+1` | 继承 | 深地表/浅海/深海/地心补给。 |
| 深层补给九炸奖励 | `+1` | 继承 | 深海/地心补给。 |
| 工具提示木镐奖励 | `+3` | 继承 | 工具格木镐收益。 |
| 工具提示横炸奖励 | `+1` | 继承 | 工具格横炸收益。 |
| 工具提示九炸奖励 | `+1` | 继承 | 工具格九炸收益。 |
| 木镐单次消耗 | `1` | 继承 | 基础点击成本。 |
| 木镐单次伤害 | `1` | 继承 | 与耐久结合。 |
| 横排炸弹单次消耗 | `1` | 继承 | 横排范围工具成本。 |
| 九宫格炸弹单次消耗 | `1` | 继承 | `3x3` 范围工具成本。 |
| 横排炸弹命中范围 | 当前行全部可破坏格 | 继承 | 行范围爆破。 |
| 九宫格炸弹命中范围 | 目标 `3x3` 全部可破坏格 | 继承 | 区域爆破。 |
| BGM 时长 | `20 s` | 继承 | 循环音乐素材时长。 |
| 金币、矿石、材料精确掉落数量 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |
| 各内容类型出现概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |
| 宝箱/盲盒掉落概率 | 缺失信息 | 用户 PRD 未明确 | 不自行补值。 |
| 社交/排行榜奖励数值 | 缺失信息 | 用户 PRD 未提及 | 不新增系统。 |

### 4.2 资源流转

```text
开局输入:
  startEnergyCost = 1
  startWoodPick = 20
  startRowBomb = 2
  startAreaBomb = 2

单次行动消耗:
  pick 点击合法可破坏格 -> woodPick -1 -> 目标格 durability -1
  rowBomb 合法施放 -> rowBomb -1 -> 当前行全部可破坏格受影响
  areaBomb 合法施放 -> areaBomb -1 -> 目标 3x3 可破坏格受影响
  点击 WALL -> 不消耗工具

行动产出:
  sand -> 打通与推进，不直接掉金币或材料
  ore -> 金币、矿石、材料三选二或三选三
  blindBox -> 工具、积分、宝箱中的高波动组合
  chest -> 自动开启，掉落工具和矿石中的一种或多种
  tool -> woodPick / rowBomb / areaBomb
  emptyReveal -> 显露坑道，不掉收益

推进产出:
  底部形成真实通路 -> currentDepth + 1 -> supplyPoints + 1 -> 棋盘上卷 1 行并生成新底行

补给闭环:
  supplyPoints >= supplyTarget -> 清空或扣除一轮目标值 -> 按当前深度区发工具补给 -> 延长挖掘续航

结束输出:
  工具耗尽或主动返场 -> GameOverUIScene 结算 -> 展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数
```

- **数值验算（继承 PRD 可验算部分）**:
  - 开局拥有 `20` 次木镐基础行动、`2` 次横排炸弹和 `2` 次九宫格炸弹；若不获得任何工具或补给，最多消耗完这些初始工具后触发工具耗尽结算。
  - 地表矿区补给目标初始为 `12`，每推进 1 层获得 `1` 积分；若没有随机积分掉落，至少推进 `12` 层可触发一次地表矿区补给，获得 `woodPick +4`。
  - 深度区补给目标随 biome 每级 `+4`，目标序列按已明确配置为 `12 / 16 / 20 / 24 / 28`。
  - 缺失信息：`supplyPoints >= supplyTarget` 后是清空全部积分还是扣除一轮目标值，PRD 未唯一明确，因此不能计算溢出积分保留策略。
  - 缺失信息：掉落金币、矿石、材料、工具和积分的概率与数量表未明确，因此不能完成完整经济闭环期望值验算。

### 4.3 成长曲线

| 阶段 | 深度范围 | 已明确变化 | 数值 |
|------|----------|------------|------|
| 前期 | `1-30` 地表矿区 | 沙砖多、障碍少、开局教学；补给为木镐。 | 补给目标 `12`；补给 `woodPick +4`。 |
| 中前期 | `31-80` 深地表 | 开始出现宝箱，路径略绕。 | 补给目标 `16`；补给 `woodPick +3`, `rowBomb +1`。 |
| 中期 | `81-150` 浅海 | 首次解锁稀有矿、盲盒矿。 | 补给目标 `20`；补给 `woodPick +3`, `rowBomb +1`。 |
| 后期 | `151-260` 深海 | 宝箱与盲盒概率上升，墙面更密。 | 补给目标 `24`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |
| 深后期 | `261+` 地心火山泥 | 高价值最高，遮挡和障碍最强。 | 补给目标 `28`；补给 `woodPick +2`, `rowBomb +1`, `areaBomb +1`。 |

### 4.4 概率公示

| 事件 | 概率 | 来源 | 说明 |
|------|------|------|------|
| 宝箱出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 2 及以后可出现。 |
| 盲盒砖出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后可出现。 |
| 稀有矿出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确 biome 3 及以后解锁。 |
| WALL 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深占比更高。 |
| ore 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深更分散。 |
| coverVisible 出现概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确深度越深概率更高。 |
| randomPointDrop 概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确单次掉落积分范围为 `1-4`。 |
| ore 掉落金币/矿石/材料组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确三选二或三选三。 |
| blindBox 掉落工具/积分/宝箱组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确高波动组合。 |
| chest 掉落工具/矿石组合概率 | 缺失信息 | 用户 PRD 未明确 | 仅明确一种或多种。 |

---

## 五、核心状态机

### 5.1 状态枚举

| 状态 | 含义 | 进入条件 | 退出条件 |
|------|------|---------|---------|
| `preloading` | 资源预加载 | 启动项目进入 `Preloader` | 资源加载完成后进入 `title` |
| `title` | 标题页 | `Preloader` 完成 | 点击“进入无尽矿井”进入 `run_initializing` |
| `run_initializing` | 单局初始化 | 从 `TitleScreen` 进入 `EndlessMineRunScene` | 初始化棋盘、工具、深度、补给、收益后进入 `running_idle` |
| `running_idle` / `推进中` | 等待玩家操作 | 单局初始化完成或一次处理流水线结束 | 合法点击进入 `processing_action`；主动返场进入 `settling_manual`; 工具耗尽进入 `settling_exhausted` |
| `processing_action` | 处理一次点击动作 | 合法木镐/炸弹点击并调用 `runProcessingPipeline()` | `onProcessComplete()` 完成后进入 `world_phase` |
| `world_phase` | 世界阶段结算 | 一次点击破坏结算完成 | 宝箱、资源、补给、toast 处理完成后进入 `advance_check` |
| `advance_check` | 推进检测 | `onWorldPhase()` 完成 | 底部形成真实通路时进入 `rolling_board`；否则进入 `state_refresh` |
| `rolling_board` | 棋盘上卷与新行生成 | `onMoveProcessed()` 判断可推进 | 上卷 1 行并生成新底行后，如果仍需继续推进则保持该状态继续链式处理；否则进入 `state_refresh` |
| `state_refresh` | 刷新展示与结束检测 | 推进检测或上卷结束 | HUD 刷新后，若工具耗尽进入 `settling_exhausted`，否则回到 `running_idle` |
| `settling_manual` / `结算中` | 主动返场结算 | 点击 `[收队返场]` | 设置 `runStatus = 结算中` 并进入 `settlement_delay` |
| `settling_exhausted` / `工具耗尽` | 工具耗尽结算 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 设置工具耗尽状态并进入 `settlement_delay` |
| `settlement_delay` | 结算前延迟 | 主动返场或工具耗尽 | `600ms` 后进入 `settlement_scene` |
| `settlement_scene` | 本局收获结算页 | 跳转 `GameOverUIScene` | 缺失信息：结算页返回标题页、再来一局或退出路径未在 PRD 明确 |

### 5.2 运行态 `runStatus` 枚举

| `runStatus` | 含义 | 进入条件 | 退出条件 |
|-------------|------|----------|----------|
| `推进中` | 单局正常推进 | 初始化完成，且工具未耗尽，且未主动返场 | 工具耗尽或主动返场 |
| `工具耗尽` | 无工具可继续行动 | `woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0` | 进入结算跳转 |
| `结算中` | 主动返场或正在结算 | 点击 `[收队返场]` 或结算流程开始 | 进入 `GameOverUIScene` |

### 5.3 状态流转图

```text
Preloader
  -> TitleScreen
  -> EndlessMineRunScene.run_initializing
  -> EndlessMineRunScene.running_idle / 推进中

running_idle / 推进中
  -> 合法木镐点击 -> processing_action
  -> 合法横排炸弹释放 -> processing_action
  -> 合法九宫格炸弹释放 -> processing_action
  -> 点击 WALL 或非法目标 -> running_idle / 推进中（播放无效反馈，不消耗工具）
  -> 点击 收队返场 -> settling_manual / 结算中
  -> 工具耗尽 -> settling_exhausted / 工具耗尽

processing_action
  -> onProcessComplete
  -> world_phase
  -> onWorldPhase
  -> advance_check

advance_check
  -> 底部形成真实通路 -> rolling_board
  -> 未形成推进通路 -> state_refresh

rolling_board
  -> 上卷 1 行 + 生成新底行 + currentDepth + 1 + supplyPoints + 1
  -> 如继续触发通路 -> rolling_board
  -> 链式处理结束 -> state_refresh

state_refresh
  -> onBoardStateChanged
  -> 工具仍可用 -> running_idle / 推进中
  -> woodPick <= 0 && rowBomb <= 0 && areaBomb <= 0 -> settling_exhausted / 工具耗尽

settling_manual / 结算中
  -> settlementDelayMs 600
  -> GameOverUIScene（本局收获结算）

settling_exhausted / 工具耗尽
  -> settlementDelayMs 600
  -> GameOverUIScene（本局收获结算）
```

---

## 六、信息架构

### 6.1 页面层级结构

```text
Game App
├── Preloader
├── TitleScreen
│   └── 入口按钮：进入无尽矿井
├── EndlessMineRunScene
│   ├── 顶部状态行
│   │   ├── 当前深度类型：{biomeName}
│   │   ├── 本局推进：{supplyPoints}/{supplyTarget}
│   │   └── 本局状态：{runStatus}
│   ├── 顶部收益行
│   │   ├── 金币 {runLoot.gold}
│   │   ├── 矿石 {runLoot.ore}
│   │   └── 材料 {runLoot.material}
│   ├── 矿井棋盘 7 x 6
│   │   ├── EMPTY 坑道格
│   │   ├── WALL 不可敲砖
│   │   └── SPECIAL 可破坏内容格 + metadata
│   ├── 深度线
│   ├── 补给条
│   ├── 深度牌
│   └── 底部工具区
│       ├── [镐子 {woodPick}]
│       ├── [横炸 {rowBomb}]
│       ├── [九炸 {areaBomb}]
│       ├── [背包]
│       └── [收队返场]
└── GameOverUIScene（本局收获结算）
    ├── 最终深度
    ├── 深度类型
    ├── 金币
    ├── 矿石
    ├── 材料
    └── 本局开启宝箱次数
```

### 6.2 页面流程图

```text
启动
  -> Preloader
  -> TitleScreen
  -> 点击“进入无尽矿井”
  -> EndlessMineRunScene
     -> 挖掘 / 炸弹 / 补给 / 深度推进循环
     -> 点击“收队返场” -> GameOverUIScene（本局收获结算）
     -> 工具耗尽 -> GameOverUIScene（本局收获结算）
```

- 缺失信息：结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航未在 PRD 明确。

---

## 七、功能清单

1. `grid_logic` + `freeform` 模板接入。
2. `1152 x 768` 分辨率配置。
3. `7 x 6` 可视棋盘。
4. `Preloader -> TitleScreen -> EndlessMineRunScene -> GameOverUIScene` 场景流转。
5. `LevelManager.LEVEL_ORDER = ['EndlessMineRunScene']`。
6. 标题替换为“无限矿井”。
7. 入口按钮文案改为“进入无尽矿井”。
8. `EndlessMineRunScene` 继承 `BaseGridScene`。
9. `UIScene`、`PauseUIScene`、`VictoryUIScene`、`GameCompleteUIScene`、`GameOverUIScene` 保留注册。
10. 不创建玩家可移动实体。
11. 不创建敌人实体。
12. 不创建移动收集物实体。
13. 可选宝箱、矿石提示、工具提示轻量展示实体。
14. Terrain layer 编码: EMPTY、WALL、FLOOR、SPECIAL。
15. SPECIAL metadata: 遮挡层、内容类型、耐久、矿石提示、工具提示、掉落表编号。
16. 固定首屏 Terrain layer。
17. 固定首屏 metadata layer。
18. 初始木镐 `20`、横排炸弹 `2`、九宫格炸弹 `2`。
19. 默认工具 `pick`。
20. 木镐点击合法格消耗 `1` 木镐并造成 `1` 伤害。
21. 横排炸弹消耗 `1` 并命中当前行全部可破坏格。
22. 九宫格炸弹消耗 `1` 并命中目标 `3x3` 全部可破坏格。
23. 点击 WALL 不消耗工具并播放无效反馈。
24. 炸弹不破坏 WALL。
25. 木镐只能点击与当前坑道连通的格。
26. 连通判定采用四方向邻接。
27. 遮挡层必须先破坏，不能越层伤害真实内容。
28. 炸弹可波及未连通但可见格，但施放落点必须是已连通的 `CellType.EMPTY` 坑道格。
29. 最底行与其他行同规则，不是预览层。
30. 每推进一层，棋盘上卷 1 行并生成新底行。
31. 新行至少保留 1 条从当前底部继续向下的可破坏路径。
32. 深度区系统: 地表矿区、深地表、浅海、深海、地心火山泥。
33. 按深度切换背景资源。
34. 稀有矿 biome 3 解锁。
35. 宝箱 biome 2 解锁。
36. 盲盒 biome 3 解锁。
37. 首次稀有矿 toast。
38. sand、ore、blindBox、chest、tool、emptyReveal 收益规则。
39. 每推进 1 层 `supplyPoints +1`。
40. 随机积分掉落范围 `1-4`。
41. `supplyPoints >= supplyTarget` 时发放当前深度区工具补给。
42. 基础补给目标 `12`，每深度区 `+4`。
43. 顶部状态行展示当前深度类型、本局推进、本局状态。
44. 顶部收益行展示金币、矿石、材料。
45. 底部工具区展示镐子、横炸、九炸、背包、收队返场。
46. 无通关条件。
47. 主动返场结算退出。
48. 工具耗尽自动结算退出。
49. `GameOverUIScene` 改为“本局收获结算”语义。
50. 结算页展示最终深度、深度类型、金币、矿石、材料、本局开启宝箱次数。
51. 音画资源注册: 标题背景、五个矿区背景、矿块 tileset、HUD 工具图标、宝箱、矿石提示、工具提示、挖掘/破坏/炸弹/奖励/深度提升 SFX、BGM。
52. 验收: 场景注册一致、配置合并保留基础配置、工具耗尽自动结算、主动返场结算、炸弹不破坏不可敲砖、木镐连通限制、炸弹落点必须在已连通坑道格、最底行同规则、始终存在向下路径。

---

## 八、视觉与情绪基调（视觉锚点）

> 以下内容仅继承桥接文档中的视觉锚点与概念图引用，不参与业务语义判定。

移动端卡通矿井风格，强调厚重泥土体块、矿灯暖光、分层矿洞背景和随深度变化的色带。首层偏明亮暖棕与木架矿灯，中层转向更冷的岩层与尘雾，浅海与深海矿区加入青蓝湿润洞穴光感，地心火山泥区域使用红色热光、烟雾与不稳定岩层。整体反馈应突出点击后的挖空下陷、砖块碎裂、资源飞入顶部 HUD 的爽感。

### 视觉锚点

- 主视觉锚点: 方案A 主概念图
- 风格传递方式: 使用下方 `selected_concept_url` 作为后续 img2img seed-ref；本文档不从 PNG 中提取 hex、材质、光影等文字化风格描述。
- PRD 未明确: 除用户 PRD / GDD 与脑暴方案已明确内容外的额外美术细节、色号、材质参数、构图参数和镜头参数。

### 概念图引用

selected_concept_path: "assets/refs/concepts-brainstorm/concept_a_main.png"  
selected_concept_url: "https://game.kg.qq.com/walle-img-gen/output/bj21BQO6FHyYspbvhm_W4.png"

---

## 九、用户 PRD 覆盖清单摘要

| 用户 PRD 章节 | 覆盖状态 | 本 GDD 覆盖位置 |
|--------------|----------|----------------|
| 0. 技术架构 | 已覆盖 | 二、三、五、六、七 |
| 0.1 模板归类与运行方式 | 已覆盖 | 二、三.1、七 |
| 0.2 场景流转 | 已覆盖 | 三.1、五、六 |
| 0.3 场景键名清单 | 已覆盖 | 三.1、七 |
| 0.4 `LevelManager.LEVEL_ORDER` | 已覆盖 | 三.1、三.11、七 |
| 0.5 P0 技术说明 | 已覆盖 | 二、三.2、三.5、三.11、五 |
| 1. 视觉风格与资源注册表 | 已覆盖 | 三.10、八 |
| 2. 游戏配置 | 已覆盖 | 四.1、四.2、四.3 |
| 3. 实体与场景结构 | 已覆盖 | 三.2、三.3、三.4、三.5 |
| 3.1 场景职责 | 已覆盖 | 三.5、三.11 |
| 3.2 运行时状态模型 | 已覆盖 | 三.2、五.2 |
| 3.3 棋盘编码方式 | 已覆盖 | 三.3 |
| 3.4 实体策略 | 已覆盖 | 三.5、七 |
| 3.5 输入与点击规则 | 已覆盖 | 三.4、五、七 |
| 3.6 结束与结算规则 | 已覆盖 | 三.1、三.9、五 |
| 3.7 钩子与功能映射 | 已覆盖 | 三.5、三.11 |
| 4. 关卡与内容设计 | 已覆盖 | 三.6、三.7、三.8、四 |
| 4.1 初始可视棋盘 | 已覆盖 | 三.6 |
| 4.2 新行生成规则 | 已覆盖 | 三.6、三.7 |
| 4.3 可挖掘范围与目标合法性 | 已覆盖 | 三.4、七 |
| 4.4 深度区表 | 已覆盖 | 三.7、四.3 |
| 4.5 掉落与收益规则 | 已覆盖 | 三.8、四.2、四.4 |
| 4.6 补给积分规则 | 已覆盖 | 三.8、四.1、四.2、四.3 |
| 4.7 界面展示内容 | 已覆盖 | 三.9、六、七 |
| 4.8 P0 结束与退出内容 | 已覆盖 | 三.9、五、六 |
| 5. 实施路线图 | 已覆盖 | 三.11、七 |
| 约定与假设 | 已覆盖 | 二、三.1、三.2 |

### 明确标注的缺失信息

1. 目标用户画像、年龄段、地区、付费倾向或具体使用场景。
2. 断网、关闭 App、后台恢复、宿主数据同步失败、快速双击以外的多指并发输入处理。
3. 社交、分享、排行榜、好友互动、邀请、外部活动结算。
4. 暂停页在本模式中的具体入口、返回、退出和结算关系。
5. 主矿区真实货币、体力与宿主系统接口、扣减失败回滚、跨局持久化。
6. `rewardTableId` 完整枚举、每个掉落表的精确内容和概率。
7. 新行内容逐格精确概率表。
8. 金币、矿石、材料精确掉落数量。
9. 宝箱掉落表、盲盒掉落表、各内容类型出现概率。
10. `supplyPoints >= supplyTarget` 后清空全部积分还是扣除一轮目标值的唯一规则。
11. 背包按钮的 P0 具体功能、背包页展示内容、背包是否可交互。
12. 音量、静音入口、音频失败降级、资源加载失败占位表现。
13. 结算页之后的“返回标题页”“再来一局”“关闭页面”等按钮与导航。
