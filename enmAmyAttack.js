function anmAttack(enemysAmy)   {   // 적의 공격 이벤트
    const    attackBox = document.querySelector("#attackBox"),  // document의 공격들의 box
        anmAttackPoint = document.createElement("div");  // 공격 미사일? 생성 박스
    
        anmAttackPoint.className = "enmattactPoint";    // 미사일 클래스
    
        attackBox.appendChild(anmAttackPoint);   // 미사일 생성
    
        anmAttackPoint.style.top = `${enemysAmy.offsetTop+30}px`;  // 미사일의 top값
        anmAttackPoint.style.left = `${enemysAmy.offsetLeft+20}px`;    // 미사일의 left 값

        setInterval((event) => {    // 0.05초 마다 실행
            if(game === true)   {
                let flyTop = anmAttackPoint.offsetTop + 10;  // 미사일의 현재 위치에서 -10
                anmAttackPoint.style.top = `${flyTop}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                anmAttackPoint.remove(); 
                return false;
                }
            myAttackHit(anmAttackPoint);    // 미사일이 날아가며 히트 판정 확인
            }
        }, 50);
    
        function myAttackHit(anmAttackPoint)    {   // 미사일 히트 판정
            const enemysAttk = document.querySelectorAll(".enmattactPoint"); // 적 미사일을 선택
    
            for(let length  of enemysAttk) {    // 적 미사일의 수 만큼 대조하여 체크
                let enmattackTop = length.offsetTop,    // 적 미사일의 top값
                enmattackLeft = length.offsetLeft-20;   // 적 미사일의 중앙을 맞추기 위해 -20 한 왼쪽값
                
                const myctTop = myCrt.offsetTop,    // 캐릭터의 top값
                  myctLeft = myCrt.offsetLeft,  // 캐릭터의 left값
                  minmyctLeft = myctLeft-15,  // 캐릭터 왼쪽값
                  maxmyctLeft = myctLeft+15,  // 캐릭터 오른쪽값
                  minmyctTop = myctTop-15,    // 캐릭터 윗값
                  maxmyctTop = myctTop+15;    // 캐릭터 아랫값

                if(enmattackLeft > minmyctLeft && enmattackLeft < maxmyctLeft && enmattackTop > minmyctTop && enmattackTop < maxmyctTop)    {   // 히트 판정 체크 미사일이 적의 맨 왼쪽~ 맨 오른쪽 안이며 맨 위쪽~ 아랫쪽 안이라면
                        anmAttackPoint.remove(); // 미사일 삭제
                        if(hitMyCt === false)   {   // 첫 히트시 판정
                            myStatusChack(); // 나의 스테이터스 체크 
                            hitMyCt = true;
                        } else  {   // 히트 후 1초간 무적
                            setTimeout(() => {
                                hitMyCt = false;
                            }, 1000);
                        }
                        return false;
                }
            }
        }
}