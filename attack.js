
function attack()   {   // 공격 이벤트
    const    attackBox = document.querySelector("#attackBox"),  // document의 공격들의 box
        myAttackPoint = document.createElement("div");  // 공격 미사일? 생성 박스
    
        myAttackPoint.className = "attactPoint";    // 미사일 클래스
    
        attackBox.appendChild(myAttackPoint);   // 미사일 생성
    
        myAttackPoint.style.top = `${myCrtTop}px`;  // 미사일의 top값
        myAttackPoint.style.left = `${myCrtLeft +20}px`;    // 미사일의 left 값
        setInterval((event) => {    // 0.1초 마다 실행
            if(game === true)   {
                let flyTop = myAttackPoint.offsetTop - 30;  // 미사일의 현재 위치에서 -10
                myAttackPoint.style.top = `${flyTop}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop <= 0) {   // 미사일이 맨위 벽에 닿으면 삭제
                myAttackPoint.remove(); 
                return false;
                }
                attackHit();    // 미사일이 날아가며 히트 판정 확인
            }
        }, 50);
    
        function attackHit()    {   // 미사일 히트 판정
            const enemysList = document.querySelectorAll(".enemysAmy"), // 적 몬스터를 타겟
                  eliteEnemysList = document.querySelectorAll(".enemysElite");
    
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

            for(let length  of eliteEnemysList) {    // 적 몬스터의 수 만큼 대조하여 체크
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
    
