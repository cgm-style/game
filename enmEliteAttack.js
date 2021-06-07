function anmSldEliteAttack(enemysAmy)   {   // 적의 엘리트 공격 이벤트
    const    EliteattackBox = document.querySelector("#attackBox"),  // document의 공격들의 box
        anmEliteAttackPoint1 = document.createElement("div"),  // 공격 미사일? 생성 박스
        //anmEliteAttackPoint2 = document.createElement("div"),
        anmEliteAttackPoint3 = document.createElement("div"),
        //anmEliteAttackPoint4 = document.createElement("div"),
        anmEliteAttackPoint5 = document.createElement("div");

        anmEliteAttackPoint1.className = "enmEliteattactPoint";    // 미사일 클래스
        //anmEliteAttackPoint2.className = "enmEliteattactPoint";    // 미사일 클래스
        anmEliteAttackPoint3.className = "enmEliteattactPoint";    // 미사일 클래스
        //anmEliteAttackPoint4.className = "enmEliteattactPoint";    // 미사일 클래스
        anmEliteAttackPoint5.className = "enmEliteattactPoint";    // 미사일 클래스
    
        EliteattackBox.appendChild(anmEliteAttackPoint1);   // 미사일 생성
        //EliteattackBox.appendChild(anmEliteAttackPoint2);   // 미사일 생성
        EliteattackBox.appendChild(anmEliteAttackPoint3);   // 미사일 생성
        //EliteattackBox.appendChild(anmEliteAttackPoint4);   // 미사일 생성
        EliteattackBox.appendChild(anmEliteAttackPoint5);   // 미사일 생성

        anmEliteAttackPoint1.style.top = `${enemysAmy.offsetTop + 10}px`;  // 미사일1의 top값
        anmEliteAttackPoint1.style.left = `${enemysAmy.offsetLeft - 60}px`;    // 미사일1의 left 값
        //anmEliteAttackPoint2.style.top = `${enemysAmy.offsetTop + 20}px`;  // 미사일2의 top값
        //anmEliteAttackPoint2.style.left = `${enemysAmy.offsetLeft - 20}px`;    // 미사일2의 left 값
        anmEliteAttackPoint3.style.top = `${enemysAmy.offsetTop + 30}px`;  // 미사일3의 top값
        anmEliteAttackPoint3.style.left = `${enemysAmy.offsetLeft + 20}px`;    // 미사일3의 left 값
        //anmEliteAttackPoint4.style.top = `${enemysAmy.offsetTop + 20}px`;  // 미사일4의 top값
        //anmEliteAttackPoint4.style.left = `${enemysAmy.offsetLeft + 60}px`;    // 미사일4의 left 값
        anmEliteAttackPoint5.style.top = `${enemysAmy.offsetTop + 10}px`;  // 미사일5의 top값
        anmEliteAttackPoint5.style.left = `${enemysAmy.offsetLeft + 80}px`;    // 미사일5의 left 값

        const myCtNowTop = myCrt.offsetTop,    // 캐릭터의 top값
            myCtNowLeft = myCrt.offsetLeft;

        setInterval((event) => {    // 0.05초 마다 실행
            if(game === true)   {
                let flyTop1 = anmEliteAttackPoint1.offsetTop + 15,  // 미사일의 현재 위치에서 -10
                    //flyTop2 = anmEliteAttackPoint2.offsetTop + 10,  
                    flyTop3 = anmEliteAttackPoint3.offsetTop + 15, 
                    //flyTop4 = anmEliteAttackPoint4.offsetTop + 10,  
                    flyTop5 = anmEliteAttackPoint5.offsetTop + 15,
                    flyLeft1 = anmEliteAttackPoint1.offsetLeft -2,
                    flyRight1 = anmEliteAttackPoint1.offsetLeft +2,
                    //flyLeft2 = anmEliteAttackPoint2.offsetLeft -1,
                    //flyRight2 = anmEliteAttackPoint2.offsetLeft +1,
                    flyLeft3 = anmEliteAttackPoint3.offsetLeft -2,
                    flyRight3 = anmEliteAttackPoint3.offsetLeft +2,
                    //flyLeft4 = anmEliteAttackPoint4.offsetLeft -1,
                    //flyRight4 = anmEliteAttackPoint4.offsetLeft +1,
                    flyLeft5 = anmEliteAttackPoint5.offsetLeft -2,
                    flyRight5 = anmEliteAttackPoint5.offsetLeft +2;

                    if(anmEliteAttackPoint1.offsetLeft < myCtNowLeft)   {
                        anmEliteAttackPoint1.style.left = `${flyRight1}px`;
                    }else if (anmEliteAttackPoint1.offsetLeft > myCtNowLeft)   {
                        anmEliteAttackPoint1.style.left = `${flyLeft1}px`;
                    }

                    /*if(anmEliteAttackPoint2.offsetLeft < myCtNowLeft)   {
                        anmEliteAttackPoint2.style.left = `${flyRight2}px`;
                    }else if(anmEliteAttackPoint2.offsetLeft > myCtNowLeft)   {
                        anmEliteAttackPoint2.style.left = `${flyLeft2}px`;
                    }*/


                    if(anmEliteAttackPoint3.offsetLeft < myCtNowLeft)   {
                        anmEliteAttackPoint3.style.left = `${flyRight3}px`;
                    }else if(anmEliteAttackPoint3.offsetLeft > myCtNowLeft)   {
                        anmEliteAttackPoint3.style.left = `${flyLeft3}px`;
                    }


                    /*if(anmEliteAttackPoint4.offsetLeft < myCtNowLeft)   {
                        anmEliteAttackPoint4.style.left = `${flyRight4}px`;
                    }else if(anmEliteAttackPoint4.offsetLeft > myCtNowLeft)   {
                        anmEliteAttackPoint4.style.left = `${flyLeft4}px`;
                    }*/


                    if(anmEliteAttackPoint5.offsetLeft < myCtNowLeft)   {
                        anmEliteAttackPoint5.style.left = `${flyRight5}px`;
                    }else if(anmEliteAttackPoint5.offsetLeft > myCtNowLeft)   {
                        anmEliteAttackPoint5.style.left = `${flyLeft5}px`;
                    }


                anmEliteAttackPoint1.style.top = `${flyTop1}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop1 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint1.remove(); 
                }
                /*anmEliteAttackPoint2.style.top = `${flyTop2}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop2 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint2.remove(); 
                }*/

                anmEliteAttackPoint3.style.top = `${flyTop3}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop3 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint3.remove(); 
                }

                /*anmEliteAttackPoint4.style.top = `${flyTop4}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop4 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint4.remove(); 
                }*/

                anmEliteAttackPoint5.style.top = `${flyTop5}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop5 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint5.remove(); 
                }

            myAttackHit(anmEliteAttackPoint1);    // 미사일이 날아가며 히트 판정 확인
            //myAttackHit(anmEliteAttackPoint2);    
            myAttackHit(anmEliteAttackPoint3);    
            //myAttackHit(anmEliteAttackPoint4);   
            myAttackHit(anmEliteAttackPoint5);  
            }
        }, 50);

    
        function myAttackHit(anmAttackPoint)    {   // 미사일 히트 판정
            const enemysAttk = document.querySelectorAll(".enmEliteattactPoint"); // 적 미사일을 선택
    
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

function anmEliteAttack(enemysAmy)   {   // 적의 엘리트 공격 이벤트
    const    EliteattackBox = document.querySelector("#attackBox"),  // document의 공격들의 box
        anmEliteAttackPoint1 = document.createElement("div"),  // 공격 미사일? 생성 박스
        //anmEliteAttackPoint2 = document.createElement("div"),
        anmEliteAttackPoint3 = document.createElement("div"),
        //anmEliteAttackPoint4 = document.createElement("div"),
        anmEliteAttackPoint5 = document.createElement("div");

        anmEliteAttackPoint1.className = "enmEliteattactPoint";    // 미사일 클래스
        //anmEliteAttackPoint2.className = "enmEliteattactPoint";    // 미사일 클래스
        anmEliteAttackPoint3.className = "enmEliteattactPoint";    // 미사일 클래스
        //anmEliteAttackPoint4.className = "enmEliteattactPoint";    // 미사일 클래스
        anmEliteAttackPoint5.className = "enmEliteattactPoint";    // 미사일 클래스
    
        EliteattackBox.appendChild(anmEliteAttackPoint1);   // 미사일 생성
        //EliteattackBox.appendChild(anmEliteAttackPoint2);   // 미사일 생성
        EliteattackBox.appendChild(anmEliteAttackPoint3);   // 미사일 생성
        //EliteattackBox.appendChild(anmEliteAttackPoint4);   // 미사일 생성
        EliteattackBox.appendChild(anmEliteAttackPoint5);   // 미사일 생성

        anmEliteAttackPoint1.style.top = `${enemysAmy.offsetTop + 10}px`;  // 미사일1의 top값
        anmEliteAttackPoint1.style.left = `${enemysAmy.offsetLeft - 60}px`;    // 미사일1의 left 값
        //anmEliteAttackPoint2.style.top = `${enemysAmy.offsetTop + 20}px`;  // 미사일2의 top값
        //anmEliteAttackPoint2.style.left = `${enemysAmy.offsetLeft - 20}px`;    // 미사일2의 left 값
        anmEliteAttackPoint3.style.top = `${enemysAmy.offsetTop + 30}px`;  // 미사일3의 top값
        anmEliteAttackPoint3.style.left = `${enemysAmy.offsetLeft + 20}px`;    // 미사일3의 left 값
        //anmEliteAttackPoint4.style.top = `${enemysAmy.offsetTop + 20}px`;  // 미사일4의 top값
        //anmEliteAttackPoint4.style.left = `${enemysAmy.offsetLeft + 60}px`;    // 미사일4의 left 값
        anmEliteAttackPoint5.style.top = `${enemysAmy.offsetTop + 10}px`;  // 미사일5의 top값
        anmEliteAttackPoint5.style.left = `${enemysAmy.offsetLeft + 80}px`;    // 미사일5의 left 값

        setInterval((event) => {    // 0.05초 마다 실행
            if(game === true)   {
                let flyTop1 = anmEliteAttackPoint1.offsetTop + 15,  // 미사일의 현재 위치에서 -10
                    //flyTop2 = anmEliteAttackPoint2.offsetTop + 10,  
                    flyTop3 = anmEliteAttackPoint3.offsetTop + 15, 
                    //flyTop4 = anmEliteAttackPoint4.offsetTop + 10,  
                    flyTop5 = anmEliteAttackPoint5.offsetTop + 15;


                anmEliteAttackPoint1.style.top = `${flyTop1}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop1 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint1.remove(); 
                }
                /*anmEliteAttackPoint2.style.top = `${flyTop2}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop2 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint2.remove(); 
                }*/

                anmEliteAttackPoint3.style.top = `${flyTop3}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop3 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint3.remove(); 
                }

                /*anmEliteAttackPoint4.style.top = `${flyTop4}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop4 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint4.remove(); 
                }*/

                anmEliteAttackPoint5.style.top = `${flyTop5}px`;    // 위의 값을 미사일에 적용하여 날아가도록 설정
                if(flyTop5 >= map.clientHeight) {   // 미사일이 맨위 벽에 닿으면 삭제
                    anmEliteAttackPoint5.remove(); 
                }

            myAttackHit(anmEliteAttackPoint1);    // 미사일이 날아가며 히트 판정 확인
            //myAttackHit(anmEliteAttackPoint2);    
            myAttackHit(anmEliteAttackPoint3);    
            //myAttackHit(anmEliteAttackPoint4);   
            myAttackHit(anmEliteAttackPoint5);  
            }
        }, 50);

    
        function myAttackHit(anmAttackPoint)    {   // 미사일 히트 판정
            const enemysAttk = document.querySelectorAll(".enmEliteattactPoint"); // 적 미사일을 선택
    
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

function eliteAttackTime(enmattk)  {
    setTimeout(() => {
        anmSldEliteAttack(enmattk);
    }, 100);
    setTimeout(() => {
        anmEliteAttack(enmattk);
    }, 300);
}