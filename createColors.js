import rgbGenerator from "./.internal/rgbGenerator";
import rgb2Hex from "./.internal/rgb2Hex"
const createColors = (count) =>{
    let colors =[]
 for (let i=0; i<count; i++) {
     colors.push(rgb2Hex(rgbGenerator()));
 }
 return colors;
}

export default createColors;
