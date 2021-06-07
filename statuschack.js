function myStatusChack()  {    // 나의 스테이터스 체크
    if(hp.childElementCount === 1) {
        hp.childNodes[hp.childElementCount-1].remove();
        game = false;
        gameOver();
    } else  {
        hp.childNodes[hp.childElementCount-1].remove();
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
        let enemysChackClass = length.className;
        length.remove(); //  적을 삭제
        if(enemysChackClass === "enemysAmy"){
            Myscore = Myscore + 100;    // 일반 적을 잡으면 점수 추가
        }else if(enemysChackClass === "enemysElite")    {
            Myscore = Myscore + 300;    // 엘리트 적을 잡으면 점수 추가
        }
    }
    score.innerText = `Score : ${Myscore}`  // 스코어 점수 표시
}