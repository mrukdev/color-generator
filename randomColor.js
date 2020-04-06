class Color{
    constructor(red, green, blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}

let colorCheck = (colorList, color) =>{
    if(colorList.length==0)
    {
        console.log('colorListLength==0');
        return true;
    }
    if(!color){
        console.log('color false');
        return false;
    }
    if(colorList.includes(color)){
        return false;
    }
    return true;
}

let colorToRgbString = (colorList) =>{
    let colorRgbString = [];
    for(let i=0;i<colorList.length;i++){
        let color = `rgba(${colorList[i].red}, ${colorList[i].green}, ${colorList[i].blue})`;
        colorRgbString.push(color);
    }
    return colorRgbString;
}

let generateColors = (howManyColors) => {
    let colorList = [];
    let color;
    for(let i=0; i<howManyColors;i++){
        let color;        
        do{
            color = new Color(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
        }
        while(!colorCheck(colorList, color));
        colorList.push(color);
    }
    return colorToRgbString(colorList);
}

