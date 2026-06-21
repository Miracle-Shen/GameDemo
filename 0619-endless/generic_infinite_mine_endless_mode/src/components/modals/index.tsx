import React from 'react';
import { ModalType } from '@/constants';
import { OverlayStage } from '@/components/Stage';
import { sumHarvest } from '@/game/BoardModel';
import type { SettlementData } from '@/game/types';
import './index.750.less';

export const ModalLayer: React.FC<{
  activeModal: ModalType | null;
  payload: Record<string, unknown> | null;
  settlement: SettlementData | null;
  onClose: () => void;
  onContinue: () => void;
  onConfirmReturn: () => void;
  onResultConfirm: () => void;
}> = ({ activeModal, payload, settlement, onClose, onContinue, onConfirmReturn, onResultConfirm }) => {
  if (!activeModal) return null;
  if (activeModal === ModalType.ConfirmReturn) {
    return (
      <OverlayStage className="modal-layer" onMaskClick={onClose}>
        <div className="modal-mask-confirm" />
        <div className="modal-confirm" onClick={(event) => event.stopPropagation()}>
          <button className="modal-confirm__close" onClick={onClose} aria-label="关闭" />
          <div className="modal-confirm__title">确定收队返场？</div>
          <div className="modal-confirm__desc">当前已获得的收益会立即结算并带回矿区。</div>
          <button className="modal-confirm__continue" onClick={onContinue}><span>继续下挖</span></button>
          <button className="modal-confirm__confirm" onClick={onConfirmReturn}><span>确认返场</span></button>
        </div>
      </OverlayStage>
    );
  }
  if (activeModal === ModalType.Result && settlement) {
    const sums = sumHarvest(settlement.harvest);
    return (
      <OverlayStage className="modal-layer" onMaskClick={onResultConfirm}>
        <div className="modal-mask-result" />
        <div className="modal-result" onClick={(event) => event.stopPropagation()}>
          <button className="modal-result__close" onClick={onResultConfirm} aria-label="关闭" />
          <div className="modal-result__title">本局收获</div>
          <div className="modal-result__depth">本局深度：{settlement.depth}米</div>
          <div className="modal-result__list">
            <img className="modal-result__coin" src="./assets/imgs/icon_coin.png" alt="" />
            <img className="modal-result__ore" src="./assets/imgs/icon_ore.png" alt="" />
            <img className="modal-result__material" src="./assets/imgs/icon_material.png" alt="" />
            <span className="modal-result__value modal-result__value--coin">+{settlement.harvest.coin}</span>
            <span className="modal-result__value modal-result__value--ore">+{sums.ore}</span>
            <span className="modal-result__value modal-result__value--material">+{sums.material}</span>
          </div>
          <button className="modal-result__button" onClick={onResultConfirm}><span>返回矿区主页</span></button>
        </div>
      </OverlayStage>
    );
  }
  const title = typeof payload?.title === 'string' ? payload.title : '提示';
  const content = typeof payload?.content === 'string' ? payload.content : '体力不足，无法继续操作';
  return (
    <OverlayStage className="modal-layer" onMaskClick={onClose}>
      <div className="modal-mask-blocker" />
      <div className="modal-blocker" onClick={(event) => event.stopPropagation()}>
        <button className="modal-blocker__close" onClick={onClose} aria-label="关闭" />
        <div className="modal-blocker__title">{title}</div>
        <div className="modal-blocker__content">{content}</div>
        <button className="modal-blocker__button" onClick={onClose}><span>我知道了</span></button>
      </div>
    </OverlayStage>
  );
};
