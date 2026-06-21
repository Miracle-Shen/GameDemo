import React from 'react';
import { STAGE_LABEL } from '@/constants';
import type { DepthStageId, RunState } from '@/constants';
import { readableRunState } from '@/game/BoardModel';
import './index.750.less';

export const StatusInfo: React.FC<{ depthStageId: DepthStageId; stageProgressText: string; runState: RunState }> = ({ depthStageId, stageProgressText, runState }) => (
  <div className="status-info">
    <span className="status-info__stage">{STAGE_LABEL[depthStageId]}</span>
    <span className="status-info__progress">本局深度：{stageProgressText}</span>
    <span className="status-info__state">{readableRunState(runState)}</span>
  </div>
);
