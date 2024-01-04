class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 最大等级
  maxLevel: number;
  // 升级所需分数
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  // 加分
  addScore() {
    this.scoreEle.innerHTML = (++this.score).toString();
    if (this.score % this.upScore === 0) {
      this.levelUp();
      // 等级提升后，重新设置速度
    }
  }
  // 升级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = (++this.level).toString();
    }
  }
}
export default ScorePanel;