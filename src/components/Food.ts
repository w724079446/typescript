class Food {
  element: HTMLElement;
  constructor() {
    // ! 表示不会为空
    this.element = document.getElementById('food')!;
  }
  // 获取食物X轴坐标
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物Y轴坐标
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物坐标
  change() {
    /**
     *  生成食物的位置 最小0，最大290,坐标是是的倍数
     *  蛇一次移动一个
    */
    const left = Math.round(Math.random() * 29) * 10;
    const top = Math.round(Math.random() * 29) * 10;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }
}
export default Food;