import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "Right";
  isLive: boolean = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    this.food.change()
    // 绑定键盘按键事件
    document.addEventListener("keydown", this.keyDOwnHandler.bind(this));
    // 使蛇移动
    this.run();

  };
  keyDOwnHandler(event: KeyboardEvent) {
    /**
     *  上 ArrowUp Up
     *  下 ArrowDown Down
     *  左 ArrowLeft Left
     *  右 ArrowRight Right
     */
    this.direction = event.key;
  };
  run() {
    /**
     * 根据方向使蛇的位置改变
     * 向上 top 减少
     * 向下 top 增加
     * 向左 left 减少
     * 向右 left 增加
     */
    // 获取蛇现在的位置
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
      default:
        break;
    }
    this.checkEat(X, Y)
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      alert(error.message + " GAME OVER!");
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
  // 吃到食物之后的操作
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  };


}
export default GameControl;