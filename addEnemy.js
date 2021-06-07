
function addEnemys(x,y)   {    // 적 생성
    const     enemysAmy = document.createElement("div");    // 적 박스 선택

    let levelHpAmy = level / difficulty  * 15;   // 적의 hp 설정

    enemysAmy.className = "enemysAmy";  // 적의 스타일 설정
    enemysLenght = enemysLenght + 1;    // 적에게 부여할 id
    enemysAmy.id = enemysLenght;    // 적에게 id 부여

    enemyBox.appendChild(enemysAmy);    // 적 생성

    enemyState[enemysLenght] = {id:enemysLenght,hp:levelHpAmy}  // 적의 스테이터스를 함수로 저장
    
    
    enemysMove(x,y);    // 적의 위치 생성
    
    function enemysMove(x,y)   {    // 적의 움직임 제어값을 받는 함수
        enemysAmy.style.top = `${x}px`  // 적의 생성 top 값
        enemysAmy.style.left = `${y}px` // 적의 생성 left 값

        if(Number(enemysAmy.id) > 0 && Number(enemysAmy.id) <= 5) {  // 생성되는 몬스터 id ~몇번까지는 밑의 이벤트를 하라
            enemyMoveLeft(enemysAmy)   
        }else if(Number(enemysAmy.id) >= 6 && Number(enemysAmy.id) <= 10)  {
            enemyMoveRight(enemysAmy)   
        }
    }
}