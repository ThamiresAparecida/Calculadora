let runningTotal= 0;
let buffer="0";
let previuosOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText=buffer 
}
function handSymbol(symbol){
    switch(symbol){
        case'C':
            buffer = '0';
            runningTotal= 0;
            break;
        case '=':
            if(previousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            break;
        case'←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0,buffer.length - 1);

            }
            break;
        case '+':
        case'-':
        case'x':
            handleMath(symbol)
            break;
    }
    
    }
    function handleMath(symbol){
        if(buffer === '0'){
            return;
        }

        const intBuffer = parseInt(buffer);

        if(runningTotal === 0){
            runningTotal = intBuffer;
        }else{
            flushOperation(intBuffer);
        }
        previuosOperator = symbol;
        buffer = '0';
        }
    function flushOperation(intBuffer){
        if(previuosOperator === '+'){
            runningTotal += intBuffer;
        }else if(previuosOperator === '-'){
            runningTotal -= intBuffer;
        }else if (previuosOperator === 'x'){
            runningTotal *= intBuffer
        }else if (previuosOperator === '÷'){
            runningTotal /=intBuffer;
        }

    }
    function handleNumber(numberString){
        if(buffer === '0'){
            buffer = numberString;
        }else{
            buffer += numberString
        }
    }
    
    function init(){
        document.querySelector('.calc-buttons').addEventListener('click',function(event){
            buttonCLick(event.target,innerText);

        })
    }
    init();