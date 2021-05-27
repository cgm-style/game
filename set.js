const myCrt =   document.querySelector("#jscharacter"), // 캐릭터 선택
enemyBox = document.querySelector("#enemy"),    // 적이 존재하는 박스 선택
score = document.querySelector("#jsMyScore"),   // 스코어 선택
chackAnemy = document.querySelector(".enemysAmy"),
map = document.querySelector("#contantBox"),
mapMove = document.querySelector("#map"), // 맵 선택
set = document.querySelector("#set");   // hp/damege 택스트

let difficulty = "5",   // 난이도 설정 1로 갈수록 어려워짐
    level = "1",       // 레벨 스테이지 클리어시 높아짐
    enemyState = {},    //적 스탯
    KEY_DOWN = "",  // 이동키 입력을 감지하여 함수로 저장
    myCrtTop = myCrt.style.top, // 캐릭터의 현재 상하 위치 
    myCrtLeft = myCrt.style.left,   // 캐릭터의 현재 좌우 위치
    attackStart = false,    // 공격 토글 확인
    Myscore = 0,    // 내 스코어 점수
    enemysLenght = 0;    // 적 숫자 넘버

myCrtTop = myCrt.offsetTop; //offsetTop 값을 top left에 실제로 주기
myCrtLeft = myCrt.offsetLeft; //offsetTop 값을 top left에 실제로 주기



    // console.dir(myCrtTop);
document.addEventListener("keydown", handleKeyDown);    // 키 다운 이벤트

document.addEventListener("keyup", handleKeyUp);    // 키 업 이벤트


function handleKeyDown(event)   {
    const   keyName = event.key; // 눌린 키 감지
    if(!KEY_DOWN.includes("w"))   { // w를 눌렀을때
        if(keyName === "ArrowUp" || keyName === "w" || keyName === "W") {  // w 혹은 화살표 위가 눌렸을때 함수에 눌린 키를 저장
            KEY_DOWN = `${KEY_DOWN}w`;
        };
    }

    if(!KEY_DOWN.includes("s"))   {
        if(keyName === "ArrowDown" || keyName === "s" || keyName === "S") {
            KEY_DOWN = `${KEY_DOWN}s`
        };
        
    }

    if(!KEY_DOWN.includes("a"))   {
        if(keyName === "ArrowLeft" || keyName === "a" || keyName === "A") {
            KEY_DOWN = `${KEY_DOWN}a`
        };
    }

    if(!KEY_DOWN.includes("d"))   {
        if(keyName === "ArrowRight" || keyName === "d" || keyName === "D") {
            KEY_DOWN = `${KEY_DOWN}d`
        };
    }
    if(keyName === "z") {   // 어택 이벤트
        // 이 부분에 적으면 꾹 누르면 연사가 가능하나 방향키 조작시 끊김
    }
}

function handleKeyUp(event) {   // 키가 업 떨어졌을때
    const myCrt =   document.querySelector("#jscharacter"), // 현재 캐릭터 div 선택
          keyName = event.key;  // 눌린 키 감지 
        
        if(keyName === "ArrowUp" || keyName === "w" || keyName === "W") {  // 화살표 위 키 또는 w 키가 눌렸을때
            KEY_DOWN = KEY_DOWN.replaceAll("w","");     // 만약 키 다운 변수에 w가 존재시 삭제
        } else if(keyName === "ArrowDown" || keyName === "s" || keyName === "S") {
            KEY_DOWN = KEY_DOWN.replaceAll("s","");
        } else if(keyName === "ArrowLeft" || keyName === "a" || keyName === "A") {
            KEY_DOWN = KEY_DOWN.replaceAll("a","");
        } else if(keyName === "ArrowRight" || keyName === "d" || keyName === "D") {
            KEY_DOWN = KEY_DOWN.replaceAll("d","");
        };
        if(keyName === "z" || keyName === "Z") {   // 어택 이벤트
            if(!attackStart)    {   // 토글 어택버튼 체크
                attackStart = true; // 토클 on
                playAlert = setInterval(function(){ // 0.1초마다 어택 실행
                    attack()
                },100)
            } else  {   // 토글버튼이 아닐때
                attackStart = false;    // 토글 off
                clearInterval(playAlert);   // 0.1초 실행 함수 off
            }
        }
}
map.addEventListener("click",function(event){   // 모바일 최적화 화면 클릭시 공격 토글
    if(!attackStart)    {   // 토글 어택버튼 체크
        attackStart = true; // 토클 on
        playAlert = setInterval(function(){ // 0.1초마다 어택 실행
            attack()
        },100)
    } else  {   // 토글버튼이 아닐때
        attackStart = false;    // 토글 off
        clearInterval(playAlert);   // 0.1초 실행 함수 off
    }
})

setInterval(function(){ // 주기적으로 검사
    if(KEY_DOWN.includes('w')){ // w 가 눌렸을때
        if(myCrtTop >= 10)  {   // top 값이 container를 넘지 않도록
            myCrtTop = myCrtTop - 4 ;  // 현재 값에 -10을 줌
            myCrt.style.top = `${myCrtTop}px`;  // -10값을 현재 top값에 px로 적용
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('s')){ // w키가 눌렸을때의 위 주석과 똑같음
        if(myCrtTop <= map.offsetHeight-(map.offsetHeight/17))  {
            myCrtTop = myCrtTop + 4 ;
            myCrt.style.top = `${myCrtTop}px`;
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('a')){
        if(myCrtLeft >= 10)  {
            myCrtLeft = myCrtLeft - 4 ;
            myCrt.style.left = `${myCrtLeft}px`;
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('d')){
        if(myCrtLeft <= map.clientWidth-(map.clientWidth/8))  {
            myCrtLeft = myCrtLeft + 4 ;
            myCrt.style.left = `${myCrtLeft}px`;
        }else   {
            return false;
        }
    }
}, 10); // 매 0.01 초마다 실행


/*function moveEvent()    {   // 구버전 이동 이벤트 너무 끊김...ㅠ
    if(KEY_DOWN.includes('w')){ // w 가 눌렸을때
        if(myCrtTop >= 10)  {   // top 값이 container를 넘지 않도록
            myCrtTop = myCrtTop - 10 ;  // 현재 값에 -10을 줌
            myCrt.style.top = `${myCrtTop}px`;  // -10값을 현재 top값에 px로 적용
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('s')){ // w키가 눌렸을때의 위 주석과 똑같음
        if(myCrtTop <= map.offsetHeight-(map.offsetHeight/17))  {
            myCrtTop = myCrtTop + 10 ;
            myCrt.style.top = `${myCrtTop}px`;
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('a')){
        if(myCrtLeft >= 10)  {
            myCrtLeft = myCrtLeft - 10 ;
            myCrt.style.left = `${myCrtLeft}px`;
        }else   {
            return false;
        }
    }
    if(KEY_DOWN.includes('d')){
        if(myCrtLeft <= map.clientWidth-(map.clientWidth/8))  {
            myCrtLeft = myCrtLeft + 10 ;
            myCrt.style.left = `${myCrtLeft}px`;
        }else   {
            return false;
        }
    }
}*/

function attack()   {   // 공격 이벤트
const    attackBox = document.querySelector("#attackBox"),  // document의 공격들의 box
    myAttackPoint = document.createElement("div");  // 공격 미사일? 생성 박스

    myAttackPoint.className = "attactPoint";    // 미사일 클래스

    attackBox.appendChild(myAttackPoint);   // 미사일 생성

    myAttackPoint.style.top = `${myCrtTop}px`;  // 미사일의 top값
    myAttackPoint.style.left = `${myCrtLeft +20}px`;    // 미사일의 left 값
    setInterval((event) => {    // 0.1초 마다 실행
        let flyTop = myAttackPoint.offsetTop - 30;  // 미사일의 현재 위치에서 -10
        myAttackPoint.style.top = `${flyTop}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
        if(flyTop <= 0) {   // 미사일이 맨위 벽에 닿으면 삭제
            myAttackPoint.remove(); 
            return false;
        }
        attackHit();    // 미사일이 날아가며 히트 판정 확인
    }, 50);

    function attackHit()    {   // 미사일 히트 판정
        const enemysList = document.querySelectorAll(".enemysAmy"); // 적 몬스터를 타겟

        for(let length  of enemysList) {    // 적 몬스터의 수 만큼 대조하여 체크
            let attackTop = myAttackPoint.offsetTop,    // 공격 미사일의 top값
            attackLeft = myAttackPoint.offsetLeft-20;   // 공격 미사일의 중앙을 맞추기 위해 -20 한 왼쪽값

            const enmTop = length.offsetTop,    // 적의 top값
                  enmLeft = length.offsetLeft,  // 적의 left값
                  minenmLeft = enmLeft-25,  // 적의 맨 왼쪽값
                  maxenmLeft = enmLeft+25,  // 적의 맨 오른쪽값
                  minenmTop = enmTop-25,    // 적의 맨 윗값
                  maxenmTop = enmTop+25;    // 적의 맨 아랫값
            if(attackLeft > minenmLeft && attackLeft < maxenmLeft && attackTop > minenmTop && attackTop < maxenmTop)    {   // 히트 판정 체크 미사일이 적의 맨 왼쪽~ 맨 오른쪽 안이며 맨 위쪽~ 아랫쪽 안이라면
                    myAttackPoint.remove(); // 미사일 삭제
                    enemyStatusChack(length); // 적의 스테이터스 체크 
                    return false;
            }
        }
    }
}

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

        if(Number(enemysAmy.id) <= 150) {  // 생성되는 몬스터 id ~몇번까지는 밑의 이벤트를 하라
            enemyMoveLeft(enemysAmy)   
        }
    }
}

function enemyStatusChack(length)  {    // 적 스테이터스 체크
    Myscore = Myscore + 10; // 스코어 점수 추가

    const enmId = length.id;    // 적의 식별 넘버
    let enmHp = enemyState[enmId].hp,  // 적의 hp 체크
        attackPower = difficulty / level; // 어택 미사일 데미지 체크 (수정필요)

    enemyState[enmId].hp = enmHp - attackPower;  // 적의 hp 하락
    // console.log(enemyState[enmId].hp);  현재 적 hp 콘솔 체크

    if (enemyState[enmId].hp <= 0) {   // 만약 적의 hp가 0이 된다면
        length.remove(); //  적을 삭제
        Myscore = Myscore + 100;    // 적을 잡으면 점수 추가
    }
    score.innerText = `Score : ${Myscore}`  // 스코어 점수 표시
}

function enemyMoveLeft(enemysAmy)    {  // 몹이 왼쪽에서 생성되면

    for(let left=0; left<Math.random() * (120 - 20) + 20; left++){   // 몹을 왼쪽으로 이동
        (x => {
          setTimeout(() => {    // for 문으로 인해 left번 까지 75초마다 실행
            let leftMove = enemysAmy.offsetLeft - 10;   // 10px씩 이동
            enemysAmy.style.left = `${leftMove}px`  // 위의 내용
          },75*left)
        })(left)
      }
    
    setTimeout(function(){enemyMoveTop(enemysAmy)},4000);   // 이동 후 4초가 지나면 아래로 이동 시작
}

function enemyMoveRight()    {  // 몹이 오른쪽에서 생성될때
    
}

function enemyMoveTop(enemysAmy)    {   // 적이 아래로 이동
    let minMove = level/difficulty*10;  // 적의 이동 값
    console.log("실행");    
    setInterval((event) => {    // 75초 마다 실행
        let topMove = enemysAmy.offsetTop + minMove; // 레벨/어려움*20px씩 이동
            enemysAmy.style.top = `${topMove}px`    // 위의 내용

        if(topMove >= map.clientHeight) {   // 몹의 top 위치가 맵의 height 크기에 맞으면
            enemysAmy.remove();     // 몬스터 삭제
            return false;
        }
    }, 20);
}

function chack()  { // 난이도 설정
    let levelHpAmy = level / difficulty  * 15,  // 난이도에 맞춰 적의 피를 설정
        attackPower = parseInt(difficulty / level);   // 난이도에 맞춰 공격력 설정
        if(attackPower === 0)   {   // 만약 데미지가 0이면
            attackPower = 1;    // 최소 데미지 1로 설정
        }

    set.innerText = `적 hp:${levelHpAmy}/내 공격력:${attackPower}`; // 현재 설정 표시
}

function handleDifficulty(name) {
    difficulty = name;  // 현재 선택한 난이도
    chack();    // 선택한 난이도를 설정단으로 보냄
    const startbn = document.querySelector("#startBtnBox"); // 시작 버튼 선택
    startbn.style.display = "block";    // 시작버튼 보이게
}

function start()    {
    const mapLeft = map.offsetLeft - 60, // 맵의 왼쪽 부분
          mapRight = map.offsetLeft + 180;
    setTimeout(() => { // 게임 시작
        setTimeout(() => {  // 첫번째 웨이브
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapRight - mapLeft) + mapLeft); // math.random() * (최대값 - 최소값) + 최소값 ) 최대값과 최소값사이를 랜덤으로
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapRight - mapLeft) + mapLeft);   // addEnemys(top값,left값);
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapRight - mapLeft) + mapLeft); 
        }, 1000);
    
        /*setTimeout(() => {  // 두번째 웨이브
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660);
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
        }, 5000);


        setTimeout(() => {  // 세번째 웨이브
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660);
            addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
        }, 14000);*/

        setTimeout(() => {  // 라운드 클리어
            levelUp();  // 스테이지 레벨업 함수 실행
            stopGame(); // 맵 이동 css 중지
        }, 5000);
    }, 1000);
}

function levelUp()  {
    level = Number(level) + 1;  // 스테이지 클리어 후 스테이지레벨 상승
    setTimeout(() => {
        mapMove.style.animation = "mapMove 5s infinite linear" ;     // 스테이지 클리어 후 멈춘 맵 다시 play
        chack();    // 변경된 레벨에 따른 난이도등 체크
        if(level > 5) { // 지금은 레벨이 5 넘어가면 게임 클리어로 넘어가지만 추후 레벨마다 start 함수를 다르게줘 스테이지 설정 가능
            gameClear();    // 게임 클리어 함수
        } else{
            start();    // 스타트 함수
        }
    }, 1000);

}

function stopGame() {   // 스테이지 클리어 게임 클리어가 아님
    mapMove.style.animation = "";   // 스테이지 클리어 후 잠시 맵 멈춤
}

function startBtn()    {    // 스타트 버튼 클릭
    mapMove.style.animation = "mapMove 5s infinite linear" ;    // 맵을 이동하는 느낌이 하는 CSS
    start();    // 게임 스타트
}

function gameClear()    {   // 게임 클리어
    mapMove.style.animation = "";
    set.innerText ="게임 클리어!!";
}


//  해야하는것
//  모바일 최적화 -> 모바일 일때 이동 이벤트
//  보스 설정 / 스테이지 설정 / 적팀 탄 설정(생성,날아가는것) / 적팀 탄 피격 설정
