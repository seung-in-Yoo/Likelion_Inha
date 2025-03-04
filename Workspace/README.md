# git & gitHub 실습하기

지금부터 아래의 안내사항에 따라 과제를 수행하시길 바랍니다!



# 주의사항

0. 세션 설명을 기반으로 과제가 진행됩니다.
1. 과제를 바로 수행하지 말고 과제의 요구 사항을 충분히 숙지한 상태에서 수행하셔야 올바른 과제를 수행하실 수 있습니다!
2. 혹시라도 기억나지 않는 부분이 있으시면 세션 자료를 참고하셔도 좋습니다~
3. 과제를 진행하는 과정에서 이해가 되지 않는 부분이 있으시다면 언제든 운영진에게 질문해주세요.
4. 다만, 아기 사자 여러분들의 무한한 성장을 위해 최대한 스스로의 힘으로 과제를 수행해보시길 권장드립니다!!!



# 실습과제

1. LikeLion 이라는 새 폴더를 만듭니다.
2. LikeLion 폴더 내에서 git 저장소를 생성합니다.
3. FE.txt 라는 파일을 생성합니다.
4. BE.txt 라는 또 다른 파일도 생성합니다. 
5. 두 파일을 생성하고 "create FE & BE" 라는 메세지로 새로운 커밋을 만드세요.<br/>

* LikeLion 폴더 내부에 FE.txt / BE.txt 파일 2개가 존재하는 지 확인해주세요!<br/>

6. FE.txt 파일 내부를 다음과 같이 변경하세요.
    
    ```
    - HTML & CSS
    - Java
    - React
    ```

7. BE.txt 파일 내부를 다음과 같이 변경하세요.
    
    ```
    - Python
    - Django
    - React
    ```

8. FE.txt 의 변경 사항만을 포함하는 새로운 커밋을 만드세요.
   <br/>커밋 메세지는 "add FE curriculum" 입니다.

9. BE.txt 의 변경 사항만을 포함하는 새로운 커밋을 만드세요.
   <br/>커밋 메세지는 "add BE curriculum" 입니다.<br/>

* 절대로 FE.txt 의 변경사항과 BE.txt 의 변경사항이 동시에 커밋에 포함되서는 안됩니다!<br/>

10. FE.txt 파일 내부를 다음과 같이 변경하세요.
    
    ```
    - HTML & CSS
    - JavaScript
    - React
    ```

11. BE.txt 파일 내부를 다음과 같이 변경하세요.
    
    ```
    - Python
    - Database
    - Django
    - Restful api
    ```

12. FE.txt와 BE.txt 두 파일의 변경 사항을 포함하는 새로운 커밋을 만드세요.
    <br/>커밋 메세지는 "modify LikeLion curriculum" 입니다.

13. git log 명령어를 사용하여 커밋 목룍을 표시합니다. 
    <br/>다음과 같이 4개의 커밋이 표시되어야 합니다!
    ```
    create FE & BE
    add FE curriculum
    add BE curriculum
    modify LikeLion curriculum
    ```



# (참고)cmd 명령어
- mkdir <폳더명> : 해당 이름으로 폴더 생성
- cd <폴더명> : 들어가고 싶은 폴더에 접속하기
- cd .. : 상위 폴더에 들어가기
- touch <파일명> : 해당 이름으로 파일 생성
- vim <파일명> : 해당 이름으로 된 파일 에디터로 접속
- pwd : 현재 폴더(root 폴더)
- ls : 현재 폴더에 어떤 폴더와 파일이 있는지 확인
- ls -al : 숨겨진 폴더/파일도 확인할 수 있음<br/>

# (참고)vim 명령어
- ESC + i : insert 모드, 자유롭게 수정가능
- ESC + : + wq : 변경 사항 저장 후, vim 종료
- ESC + q! : 변경 사항을 저장하지 않고, vim 종료



# 모두 git천재가 되어보아용 :D 