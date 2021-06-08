
function addEliteEnemys(x,y,leftOrRight)   {    // 1엘리트 적 생성
    const     enemysElite = document.createElement("div");    // 적 박스 선택

    let levelHpElite = level / difficulty  * 30;   // 적의 hp 설정

    enemysElite.className = "enemysElite";  // 적의 스타일 설정
    enemysEliteLenght = enemysEliteLenght + 1;    // 적에게 부여할 id
    enemysElite.id = enemysEliteLenght;    // 적에게 id 부여

    enemyBox.appendChild(enemysElite);    // 적 생성

    enemyState[enemysEliteLenght] = {id:enemysEliteLenght,hp:levelHpElite}  // 적의 스테이터스를 함수로 저장
    
    
    enemysMove(x,y,leftOrRight);    // 적의 위치 생성
    
    function enemysMove(x,y)   {    // 적의 움직임 제어값을 받는 함수
        enemysElite.style.top = `${x}px`  // 적의 생성 top 값
        enemysElite.style.left = `${y}px` // 적의 생성 left 값

        if(leftOrRight === "left")  {
            enemyMoveLeft(enemysElite)
        }else if(leftOrRight === "right")   {
            enemyMoveRight(enemysElite)   
        }
    }
}