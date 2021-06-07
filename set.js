const myCrt =   document.querySelector("#jscharacter"), // 캐릭터 선택
enemyBox = document.querySelector("#enemy"),    // 적이 존재하는 박스 선택
score = document.querySelector("#jsMyScore"),   // 스코어 선택
chackAnemy = document.querySelector(".enemysAmy"),  // 적 박스
map = document.querySelector("#contantBox"),    // 맵 박스
mapMove = document.querySelector("#map"), // 맵 선택
set = document.querySelector("#set"),   // hp/damege 택스트
hp  = document.querySelector("#hp"),    // 나의 hp
skill = document.querySelector("#skill"), // 남은 스킬 수
startbn = document.querySelector("#startBtnBox"), // 시작 버튼 선택
gameOverText = document.querySelector("#gameOver"); // 게임 끝 텍스트 

let difficulty = "5",   // 난이도 설정 1로 갈수록 어려워짐
    level = "1",       // 레벨 스테이지 클리어시 높아짐
    enemyState = {},    //적 스탯
    KEY_DOWN = "",  // 이동키 입력을 감지하여 함수로 저장
    myCrtTop = myCrt.style.top, // 캐릭터의 현재 상하 위치 
    myCrtLeft = myCrt.style.left,   // 캐릭터의 현재 좌우 위치
    attackStart = false,    // 공격 토글 확인
    Myscore = 0,    // 내 스코어 점수
    enemysLenght = 0,    // 적 숫자 넘버
    enemysEliteLenght = 0,  // 엘리트 적 숫자 넘버
    hitMyCt = false,    // 나의 히트시 무적
    game = true;    // 게임 on/off

myCrtTop = myCrt.offsetTop; //offsetTop 값을 top left에 실제로 주기
myCrtLeft = myCrt.offsetLeft; //offsetTop 값을 top left에 실제로 주기



function chack()  { // 난이도 설정
    let levelHpAmy = level / difficulty  * 15,  // 난이도에 맞춰 적의 피를 설정
    levelHpElite = level / difficulty  * 30,
        attackPower = parseInt(difficulty / level);   // 난이도에 맞춰 공격력 설정
        if(attackPower === 0)   {   // 만약 데미지가 0이면
            attackPower = 1;    // 최소 데미지 1로 설정
        }

    set.innerText = `적 일반 hp:${levelHpAmy}/적 엘리트 hp:${levelHpElite} /내 공격력:${attackPower}`; // 현재 설정 표시
}

function handleDifficulty(name) {
    difficulty = name;  // 현재 선택한 난이도
    chack();    // 선택한 난이도를 설정단으로 보냄
    startbn.style.display = "block";    // 시작버튼 보이게
}
console.dir(map);
function start()    {
    const mapLeft = map.clientWidth*2 - map.clientWidth, // 맵의 왼쪽 부분
          mapLeftOfSet = map.clientWidth*2.4 - map.clientWidth,
          marRight = map.clientWidth - map.clientWidth*1.1,
          marRightOfSet = map.clientWidth - map.clientWidth*1.3;



    setTimeout(() => { // 게임 시작
        if(game === true)   {
            setTimeout(() => {  // 오른쪽에서 나오는 첫번째 웨이브
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapLeftOfSet - mapLeft) + mapLeft); // math.random() * (최대값 - 최소값) + 최소값 ) 최대값과 최소값사이를 랜덤으로
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapLeftOfSet - mapLeft) + mapLeft);   // addEnemys(top값,left값);
                addEliteEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapLeftOfSet - mapLeft) + mapLeft); 
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapLeftOfSet - mapLeft) + mapLeft); 
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (mapLeftOfSet - mapLeft) + mapLeft); 
            }, 1000);
        }
        if(game === true)   {
            setTimeout(() => {  // 왼쪽에서 나오는 두번째 웨이브
                addEliteEnemys(Math.random() * (200 - 10) + 10,Math.random() * (marRightOfSet - marRight) + marRight); // math.random() * (최대값 - 최소값) + 최소값 ) 최대값과 최소값사이를 랜덤으로
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (marRightOfSet - marRight) + marRight);   // addEnemys(top값,left값);
                addEliteEnemys(Math.random() * (200 - 10) + 10,Math.random() * (marRightOfSet - marRight) + marRight); 
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (marRightOfSet - marRight) + marRight); 
                addEliteEnemys(Math.random() * (200 - 10) + 10,Math.random() * (marRightOfSet - marRight) + marRight); 
            }, 8000);
        }

        /*if(game === true)   {
            setTimeout(() => {  // 세번째 웨이브
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660);
                addEnemys(Math.random() * (200 - 10) + 10,Math.random() * (780 - 660) + 660); 
            }, 14000);
        }*/

        if(game === true)   {
            setTimeout(() => {  // 라운드 클리어
                levelUp();  // 스테이지 레벨업 함수 실행
                stopGame(); // 맵 이동 css 중지
            }, 45000);
        }
    }, 1000);
}

function levelUp()  {
    if(game === true)   {
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
}

function stopGame() {   // 스테이지 클리어 게임 클리어가 아님
    mapMove.style.animation = "";   // 스테이지 클리어 후 잠시 맵 멈춤
}

function gameOver() {   // 게임이 끝남.
    if(game === false)  {
        mapMove.style.animation = "";
        gameOverText.style.display = "block";
        game = false;
        clearInterval();
        clearTimeout();
    }
}

function startBtn()    {    // 스타트 버튼 클릭
    mapMove.style.animation = "mapMove 5s infinite linear" ;    // 맵을 이동하는 느낌이 하는 CSS

    for(let firstHp = 1 ; firstHp <= 3 ; firstHp++)   {
        let addHp = document.createElement("div");
        addHp.className = "hp";
        hp.appendChild(addHp);
    }

    const difficultyBox = document.querySelector("#difficultyBox");
    console.log(difficultyBox);
    difficultyBox.style.display = "none";
    startbn.style.display = "none";

    start();    // 게임 스타트
}

function gameClear()    {   // 게임 클리어
    mapMove.style.animation = "";
    set.innerText ="게임 클리어!!";
}


//  해야하는것
//  모바일 최적화 -> 모바일 일때 이동 이벤트
//  보스 설정 / 스테이지 설정 / 적팀 탄 설정(생성,날아가는것) / 적팀 탄 피격 설정