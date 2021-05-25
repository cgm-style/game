const myCrt =   document.querySelector("#jscharacter"),
enemyBox = document.querySelector("#enemy");

let difficulty = "1",
    level = "1";

let KEY_DOWN = "",  // 이동키 입력을 감지하여 함수로 저장
    myCrtTop = myCrt.style.top, // 캐릭터의 현재 상하 위치 
    myCrtLeft = myCrt.style.left;   // 캐릭터의 현재 좌우 위치

myCrtTop = myCrt.offsetTop; //offsetTop 값을 top left에 실제로 주기
myCrtLeft = myCrt.offsetLeft; //offsetTop 값을 top left에 실제로 주기



    // console.dir(myCrtTop);
document.addEventListener("keydown", handleKeyDown);    // 키 다운 이벤트

document.addEventListener("keyup", handleKeyUp);    // 키 업 이벤트


function handleKeyDown(event)   {
    const   keyName = event.key; // 눌린 키 감지
    if(!KEY_DOWN.includes("w"))   { // w를 눌렀을때
        if(keyName === "ArrowUp" || keyName === "w") {  // w 혹은 화살표 위가 눌렸을때 함수에 눌린 키를 저장
            KEY_DOWN = `${KEY_DOWN}w`;
        };
    }

    if(!KEY_DOWN.includes("s"))   {
        if(keyName === "ArrowDown" || keyName === "s") {
            KEY_DOWN = `${KEY_DOWN}s`
        };
        
    }

    if(!KEY_DOWN.includes("a"))   {
        if(keyName === "ArrowLeft" || keyName === "a") {
            KEY_DOWN = `${KEY_DOWN}a`
        };
    }

    if(!KEY_DOWN.includes("d"))   {
        if(keyName === "ArrowRight" || keyName === "d") {
            KEY_DOWN = `${KEY_DOWN}d`
        };
    }
    moveEvent();    // 저장한 함수를 가지고 function 실행

    if(keyName === "z") {   // 어택 이벤트
        attack();
        enemys(100,680);
    }
}

function handleKeyUp(event) {   // 키가 업 떨어졌을때
    const myCrt =   document.querySelector("#jscharacter"), // 현재 캐릭터 div 선택
          keyName = event.key;  // 눌린 키 감지 
        
        if(keyName === "ArrowUp" || keyName === "w") {  // 화살표 위 키 또는 w 키가 눌렸을때
            KEY_DOWN = KEY_DOWN.replaceAll("w","");     // 만약 키 다운 변수에 w가 존재시 삭제
        } else if(keyName === "ArrowDown" || keyName === "s") {
            KEY_DOWN = KEY_DOWN.replaceAll("s","");
        } else if(keyName === "ArrowLeft" || keyName === "a") {
            KEY_DOWN = KEY_DOWN.replaceAll("a","");
        } else if(keyName === "ArrowRight" || keyName === "d") {
            KEY_DOWN = KEY_DOWN.replaceAll("d","");
        };
        moveEvent();    // 키 다운 함수를 다시 실행
}

function moveEvent()    {   // 이동 이벤트
    if(KEY_DOWN.includes('w')){ // w 가 눌렸을때
        myCrtTop = myCrtTop - 10 ;  // 현재 값에 -10을 줌
        myCrt.style.top = `${myCrtTop}px`;  // -10값을 현재 top값에 px로 적용
    }
    if(KEY_DOWN.includes('s')){
        myCrtTop = myCrtTop + 10 ;
        myCrt.style.top = `${myCrtTop}px`;
    }
    if(KEY_DOWN.includes('a')){
        myCrtLeft = myCrtLeft - 10 ;
        myCrt.style.left = `${myCrtLeft}px`;
    }
    if(KEY_DOWN.includes('d')){
        myCrtLeft = myCrtLeft + 10 ;
        myCrt.style.left = `${myCrtLeft}px`;
    }
}

function attack()   {
const    attackBox = document.querySelector("#attackBox"),
    myAttackPoint = document.createElement("div");

    myAttackPoint.className = "attactPoint";

    attackBox.appendChild(myAttackPoint);

    myAttackPoint.style.top = `${myCrtTop}px`;
    myAttackPoint.style.left = `${myCrtLeft}px`;

    setInterval((event) => {
        let flyTop = myAttackPoint.offsetTop - 20;
        myAttackPoint.style.top = `${flyTop}px`;
        if(flyTop <= 0) {
            myAttackPoint.remove();
            console.dir(myAttackPoint);
            false;
        }
    }, 100);
}

function enemys(x,y)   {
    const     enemysAmy = document.createElement("div"),
              enemysLenght = enemyBox.childElementCount + 1;

    enemysAmy.className = "enemysAmy";
    enemysAmy.id = enemysLenght;

    enemyBox.appendChild(enemysAmy);

    enemysMoveLeft(x,y);
    function enemysMoveTop()   {
        enemysAmy.style.top = `${x}px`
        enemysAmy.style.left = `${y}px`

        attackHit();
    }
    
    function enemysMoveLeft(x,y)   {
    
        enemysAmy.style.top = `${x}px`
        enemysAmy.style.left = `${y}px`

        attackHit();
    }
    function attackHit()    {
        const hitPoint = document.querySelectorAll(".attactPoint");

        console.dir(enemysAmy);
    }
}

