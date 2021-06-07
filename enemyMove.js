
function enemyMoveLeft(enemysAmy)    {  // 몹이 오른쪽에서 생성되면
    if(game === true)   {
        if(enemysAmy.className === "enemysAmy")   {
            for(let left=0; left<Math.random() * (120 - 20) + 20; left++){   // 몹을 왼쪽으로 이동
                (x => {
                  setTimeout(() => {    // for 문으로 인해 left번 까지 20초마다 실행
                    let leftMove = enemysAmy.offsetLeft - 10;   // 10px씩 이동
                    enemysAmy.style.left = `${leftMove}px`  // 위의 내용
                  },50*left)
                })(left)
              }

              setTimeout(function(){enemyMoveTop(enemysAmy)},4000);   // 이동 후 4초가 지나면 아래로 이동 시작
        }else if(enemysAmy.className === "enemysElite") {
            for(let left=0; left<Math.random() * (120 - 20) + 20; left++){   // 몹을 왼쪽으로 이동
                (x => {
                  setTimeout(() => {    // for 문으로 인해 left번 까지 20초마다 실행
                    let leftMove = enemysAmy.offsetLeft - 10;   // 10px씩 이동
                    enemysAmy.style.left = `${leftMove}px`  // 위의 내용
                  },30*left)
                })(left)
              }

              setTimeout(function(){enemyMoveTop(enemysAmy)},2000);   // 이동 후 3초가 지나면 아래로 이동 시작
        }
    }
}

function enemyMoveRight(enemysAmy)    {  // 몹이 왼쪽에서 생성될때
    if(game === true)   {
        if(enemysAmy.className === "enemysAmy")   {
            for(let right=0; right<Math.random() * (120 - 20) + 20; right++){   // 몹을 오른쪽으로 이동
                (x => {
                  setTimeout(() => {    // for 문으로 인해 left번 까지 20초마다 실행
                    let leftMove = enemysAmy.offsetLeft + 10;   // 10px씩 이동
                    enemysAmy.style.left = `${leftMove}px`  // 위의 내용
                  },50*right)
                })(right)
              }

              setTimeout(function(){enemyMoveTop(enemysAmy)},4000);   // 이동 후 4초가 지나면 아래로 이동 시작
        }else if(enemysAmy.className === "enemysElite") {
            for(let right=0; right<Math.random() * (120 - 20) + 20; right++){   // 몹을 오른쪽으로 이동
                (x => {
                  setTimeout(() => {    // for 문으로 인해 left번 까지 20초마다 실행
                    let leftMove = enemysAmy.offsetLeft + 10;   // 10px씩 이동
                    enemysAmy.style.left = `${leftMove}px`  // 위의 내용
                  },30*right)
                })(right)
              }

              setTimeout(function(){enemyMoveTop(enemysAmy)},2000);   // 이동 후 3초가 지나면 아래로 이동 시작
        }
        
    }
}

function enemyMoveTop(enemysAmy)    {   // 적이 아래로 이동
    let minMove = level*1,  // 적의 이동 값
        enemysAmyClass = enemysAmy.className;
    setInterval((event) => {    // 20초 마다 실행
        if(game === true)   {
            let topMove = enemysAmy.offsetTop + minMove; // 레벨/어려움*20px씩 이동
            enemysAmy.style.top = `${topMove}px`    // 위의 내용

            if(topMove >= map.clientHeight) {   // 몹의 top 위치가 맵의 height 크기에 맞으면
            enemysAmy.remove();     // 몬스터 삭제
            return false;
        }
        }
    }, 20);
    if(enemysAmyClass === "enemysAmy"){
        setTimeout(() => {  // 노멀 어택
            anmAttack(enemysAmy);
        }, 1000);
    }else if(enemysAmyClass === "enemysElite")    {
        setTimeout(() => {   // 엘리트 어택
            eliteAttackTime(enemysAmy);
        }, 1000);
    }
}
