var generateColors = (howManyColors) =>{
    let colorList = [];
    let color = '';
    for(let i=0; i<howManyColors;i++){
        do{
            let firstColor = Math.floor(Math.random() * 256);
            let secondColor = Math.floor(Math.random() * 256);
            let thirdColor = Math.floor(Math.random() * 256);
            color = `rgba(${firstColor},${secondColor}, ${thirdColor},1)`;
        } while(colorList.indexOf(color)>-1)

        colorList.push(color);
    }
    colorList.sort();
    return colorList;
}