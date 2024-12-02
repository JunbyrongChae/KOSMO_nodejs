
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//구글 파이어베이스에서 제공하는 firebase-app.jsp에 initializeApp함수가 정의되어 있다.
//외부에 js파일에 제공하는 함수를 사용하려면 import를 할 수 있다. -NodeJS - 브라우저와 별개로 작업이 가능함
    const firebaseConfig = {
        apiKey: "AIzaSyBYY7Y93-fyQAG-NuOYyJgnvo8j3J00jiU",
        authDomain: "wnsqud-kosmo152.firebaseapp.com",
        projectId: "wnsqud-kosmo152",
        storageBucket: "wnsqud-kosmo152.firebasestorage.app",
        messagingSenderId: "832716956927",
        appId: "1:832716956927:web:e8ba47283e9f5ee03858ca"
    };
    //이 파일에서 생성된 객체를 외부에서 사용하려면 변수 선언 앞에 export붙임
//initializeApp호출할 때 파라미터로 firebaseConfig객체가 제공하는 값들을 넘김
//인증된 클라이언트 정보 쥔다.
//header.ejs에서 사용하기 위해서 변수 선언 앞에 export를 붙임
//로그인(구글 이메일과 비번)을 진행하는 login.ejs에서도 app객체를 사용함 
//해당 파일(login.ejs, header.ejs)에서 app출력해 보면 위 firebaseConfig에 내용이 있다. v
export const app = initializeApp(firebaseConfig);