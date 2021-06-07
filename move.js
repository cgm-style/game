document.addEventListener("keydown", handleKeyDown);    // 키 다운 이벤트

document.addEventListener("keyup", handleKeyUp);    // 키 업 이벤트


function handleKeyDown(event)   {
    if(game === true)   {
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
}

function handleKeyUp(event) {   // 키가 업 떨어졌을때
    if(game === true)   {
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
}
map.addEventListener("click",function(event){   // 모바일 최적화 화면 클릭시 공격 토글
    if(game === true)   {
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