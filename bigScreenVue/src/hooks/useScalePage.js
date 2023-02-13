import { onMounted, onUnmounted } from "vue";

import { throttle } from "lodash";
export default function useScalePage(option) {
  const resizeFunc = throttle(function () {
    //动态缩放网页
    triggerScale();
  }, 100);

  onMounted(() => {
    triggerScale();
    window.addEventListener("resize", resizeFunc);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", resizeFunc);
  });
  function triggerScale() {
    //设计稿尺寸
    let targetX = option.targetX || 1920;
    let targetY = option.targetY || 1080;
    //宽高比
    let targetRatio = option.targetRatio || 16 / 9;
    //获取当前浏览器的宽度
    let currentX =
      document.documentElement.clientWidth || document.body.clientWidth;
    let currentY =
      document.documentElement.clientHeight || document.body.clientHeight;

    //计算缩放比例
    let scaleRatio = currentX / targetX; //参照宽度进行缩放（默认情况）
    let currentRatio = currentX / currentY; //宽高比率

    //超宽屏
    if (currentRatio > targetRatio) {
      //参照高度进行缩放
      scaleRatio = currentY / targetY;
      document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio})translateX(-50%);left:50%`;
    } else {
      document.body.style = `width:${targetX}px;height:${targetY}px;transform:scale(${scaleRatio})`;
    }
  }
}
