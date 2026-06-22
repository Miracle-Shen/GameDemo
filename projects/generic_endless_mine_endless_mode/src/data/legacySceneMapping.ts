import { AppRoute } from '@/constants/enum';
import { DESIGN_CANVAS } from '@/constants/game';

export const STANDALONE_ACCEPTANCE_PROFILE = {
  template: 'grid_logic',
  mode: 'freeform',
  board: { cols: 7, rows: 6, connectivity: 'four-direction' },
  visualOverride: '9:16 mobile fixed-stage',
  designCanvas: DESIGN_CANVAS,
  legacyCanvas: { width: 1152, height: 768 },
  acceptanceNote: 'PRD legacy 1152 x 768 and scene names map to the standalone 750 x 1334 fixed-stage canvas after approved vertical visual override.',
} as const;

export const LEGACY_SCENE_MAPPING = {
  Preloader: { standaloneRoute: AppRoute.Title, equivalentEntry: 'App mount -> getHomePage -> TitlePage' },
  TitleScreen: { standaloneRoute: AppRoute.Title, equivalentEntry: 'TitlePage' },
  EndlessMineRunScene: { standaloneRoute: AppRoute.Running, equivalentEntry: 'RunPage + EndlessMineGame' },
  UIScene: { standaloneRoute: AppRoute.Running, equivalentEntry: 'RunPage HUD overlays: biome/depth/loot/supply/tool bar/toast' },
  PauseUIScene: { standaloneRoute: AppRoute.Running, equivalentEntry: 'RunPage return-to-camp control + input lock route guard' },
  VictoryUIScene: { standaloneRoute: AppRoute.Settlement, equivalentEntry: 'SettlementPage manual-return final snapshot presentation' },
  GameCompleteUIScene: { standaloneRoute: AppRoute.Settlement, equivalentEntry: 'SettlementPage exhausted-run final snapshot presentation' },
  GameOverUIScene: { standaloneRoute: AppRoute.Settlement, equivalentEntry: 'SettlementPage' },
} as const;

export const LevelManager = {
  LEVEL_ORDER: ['EndlessMineRunScene'],
  resolveStandaloneRoute(sceneName: keyof typeof LEGACY_SCENE_MAPPING): AppRoute {
    return LEGACY_SCENE_MAPPING[sceneName].standaloneRoute;
  },
} as const;
