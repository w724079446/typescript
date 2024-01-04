class Snake {
  snake: HTMLElement;
  // 蛇头
  snakeHead: HTMLElement;
  // 蛇的身体（包括蛇头）
  snakeBody: HTMLCollection;

  constructor() {
    this.snake = document.getElementById('snake')!;
    this.snakeHead = document.querySelector('#snake>div') as HTMLElement;
    this.snakeBody = this.snake!.getElementsByTagName('div');
  }
  // 获取蛇的X的坐标
  get X() {
    return this.snakeHead.offsetLeft;
  }
  // 获取蛇的Y的坐标
  get Y() {
    return this.snakeHead.offsetTop;
  }
  set X(val) {
    if (this.X === val) return;
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === val) {
      if (val > this.X) {
        val = this.X - 10
      } else {
        val = this.X + 10
      }
    }
    this.moveBody();
    this.snakeHead.style.left = `${val}px`;
    this.checkHeadBody();

  }
  set Y(val) {
    if (this.Y === val) return;
    if (val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.Y - 10
      } else {
        val = this.Y + 10
      }
    }
    this.moveBody();

    this.snakeHead.style.top = `${val}px`;
    this.checkHeadBody();
  }
  // 设置蛇增加身体长度的方法
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
  moveBody() {
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      // 获取到蛇身体的前面位置的X和Y坐标
      let x = (this.snakeBody[i - 1] as HTMLElement).offsetLeft;
      let y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;
      // 将值设置到当前身体的位置上
      (this.snakeBody[i] as HTMLElement).style.left = `${x}px`;
      (this.snakeBody[i] as HTMLElement).style.top = `${y}px`;

    }
  };
  checkHeadBody() {
    for (let i = 1; i < this.snakeBody.length; i++) {
      let bd = this.snakeBody[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('蛇撞到自己了')
      }
    }
  };
}
export default Snake;