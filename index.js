const readLineSync=require('readline-sync');

const rgbToHex=(red,green,blue)=>'#'+[red,green,blue].map(x=>{
    const hex=x.toString(16);
    return hex.length==1?`0${hex}`:hex;
}).join('');

function HexToRgb(hex)
{
  const red=parseInt(hex[0]+hex[1],16);
  const green=parseInt(hex[2]+hex[3],16);
  const blue=parseInt(hex[4]+hex[5],16);

  return [red,green,blue];
}
function mainFunction(selectOption)
{
  switch(selectOption)
  {
    case 1:
    const red=parseInt(readLineSync.question("Enter the RED value: "));
    const green=parseInt(readLineSync.question("Enter the GREEN value: "));
    const blue=parseInt(readLineSync.question("Enter the BLUE value: "));

    console.log(`\nThe hex value is ${rgbToHex(red,green,blue)} `);
    break;
    case 2:
      hex=readLineSync.question("\nEnter the Hex Value: ");
      const output=HexToRgb(hex);
      console.log(`\nThe RGB value is: red:${output[0]},green:${output[1]},blue:${output[2]}`);
    break;
  }
}



















console.log('Welcome To  RGB & HEX Converters Application. \n\n');

console.log('1)RGB to HEX\n2)HEX to RGB\n');

const selectOption=parseInt(readLineSync.question('For Utilising the Service,choose the Particular option: '));

mainFunction(selectOption);
