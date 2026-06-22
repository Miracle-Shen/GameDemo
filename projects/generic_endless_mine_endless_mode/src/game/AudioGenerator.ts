type AudioCue = 'mineHit' | 'mineBreak' | 'rowBomb' | 'areaBomb' | 'reward' | 'depthUp' | 'bgm';

export const AUDIO_MANIFEST: Record<AudioCue, { id: string; type: 'SFX' | 'BGM'; description: string }> = {
  mineHit: { id: 'mine_hit_sfx', type: 'SFX', description: '挖掘命中' },
  mineBreak: { id: 'mine_break_sfx', type: 'SFX', description: '方块破坏' },
  rowBomb: { id: 'mine_bomb_row_sfx', type: 'SFX', description: '横排炸弹' },
  areaBomb: { id: 'mine_bomb_area_sfx', type: 'SFX', description: '九宫格炸弹' },
  reward: { id: 'mine_reward_sfx', type: 'SFX', description: '奖励入账' },
  depthUp: { id: 'mine_depth_up_sfx', type: 'SFX', description: '深度提升' },
  bgm: { id: 'mine_bgm', type: 'BGM', description: '矿井循环 BGM' },
};

export class AudioGenerator {
  private context: AudioContext | null = null;
  private bgmNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
  private bgmPlaying = false;

  register(): Record<AudioCue, string> {
    const manifest: Partial<Record<AudioCue, string>> = {};
    (Object.keys(AUDIO_MANIFEST) as AudioCue[]).forEach((cue) => {
      manifest[cue] = AUDIO_MANIFEST[cue].id;
    });
    return manifest as Record<AudioCue, string>;
  }

  playMineHit(): void { this.playTone(155, 0.055, 'square', 0.035); }
  playMineBreak(): void { this.playNoise(0.12, 0.065); }
  playBomb(type: 'rowBomb' | 'areaBomb'): void {
    this.playTone(type === 'rowBomb' ? 92 : 72, 0.18, 'sawtooth', 0.055);
    window.setTimeout(() => this.playNoise(0.16, 0.08), 25);
  }
  playReward(): void {
    [523, 659, 784].forEach((freq, index) => window.setTimeout(() => this.playTone(freq, 0.07, 'sine', 0.035), index * 55));
  }
  playDepthUp(): void {
    [220, 330, 440].forEach((freq, index) => window.setTimeout(() => this.playTone(freq, 0.11, 'triangle', 0.04), index * 65));
  }

  playBgm(): void {
    const ctx = this.ensureContext();
    if (!ctx || this.bgmPlaying) return;
    this.resume();
    const master = ctx.createGain();
    master.gain.value = 0.018;
    master.connect(ctx.destination);
    this.bgmNodes = [110, 146.83].map((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = 0.5;
      osc.connect(gain).connect(master);
      osc.start();
      return { osc, gain };
    });
    this.bgmPlaying = true;
  }

  stopBgm(): void {
    this.bgmNodes.forEach(({ osc }) => {
      try { osc.stop(); } catch { /* already stopped */ }
    });
    this.bgmNodes = [];
    this.bgmPlaying = false;
  }

  resume(): void {
    const ctx = this.ensureContext();
    if (ctx?.state === 'suspended') void ctx.resume();
  }

  destroy(): void {
    this.stopBgm();
    void this.context?.close();
    this.context = null;
  }

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.context) {
      const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextCtor) return null;
      this.context = new AudioContextCtor();
    }
    return this.context;
  }

  private playTone(freq: number, duration: number, type: OscillatorType, volume: number): void {
    const ctx = this.ensureContext();
    if (!ctx) return;
    this.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  private playNoise(duration: number, volume: number): void {
    const ctx = this.ensureContext();
    if (!ctx) return;
    this.resume();
    const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = volume;
    source.buffer = buffer;
    source.connect(gain).connect(ctx.destination);
    source.start();
  }
}
