import React from 'react';
import './index.750.less';

export const TopHud: React.FC<{ energy: number; coin: number; premiumCurrency: number; onBack?: () => void; onSetting?: () => void }> = ({ energy, coin, premiumCurrency, onBack, onSetting }) => (
  <div className="top-hud">
    <button className="top-hud__back" onClick={onBack} aria-label="返回" />
    <img className="top-hud__energy-icon" src="./assets/imgs/icon_energy.png" alt="" />
    <span className="top-hud__energy-value">{energy}</span>
    <img className="top-hud__coin-icon" src="./assets/imgs/icon_coin.png" alt="" />
    <span className="top-hud__coin-value">{coin}</span>
    <img className="top-hud__premium-icon" src="./assets/imgs/icon_premium.png" alt="" />
    <span className="top-hud__premium-value">{premiumCurrency}</span>
    <button className="top-hud__setting" onClick={onSetting} aria-label="设置" />
  </div>
);
