import client from "webpack-theme-color-replacer/client";
import generate from "@ant-design/colors/lib/generate";

export default {
  getAntdSerials(color) {
    // 淡化（即less的tint）
    const lightens = new Array(9).fill().map((t, i) => {
      return client.varyColor.lighten(color, i / 10);
    });
    // colorPalette变换得到颜色值
    const colorPalettes = generate(color);
    // const rgb = client.varyColor.toNum3(color.replace("#", "")).join(",");
    return lightens.concat(colorPalettes).concat(color);
  },
  changeColor(newColor) {
    var options = {
      newColors: this.getAntdSerials(newColor) // new colors array, one-to-one corresponde with `matchColors`
      // changeUrl(cssUrl) {
      //   return `/${cssUrl}`; // 如果是history模式,使用这个!!!!!!!!!!!
      // }
    };
    return client.changer.changeColor(options, Promise);
  }
};
