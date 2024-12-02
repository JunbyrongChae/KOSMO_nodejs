//클래스 선언
class AuthLogic{
  //생성자 함수 - 전변 초기화 담당
  //사용자 정의 함수 구현 가능
}

export default AuthLogic //외부 js에서 사용할 때 반드시 추가

//로그아웃 버튼 클릭시 호출
export const logout = auth => {
  return new Promise((resolve, reject) => {
    //로그아웃 처리
    localStorage.removeItem("mem_id")
    resolve()
  })
}

//카카오로그인
export const loginKakao = auth => {
  return new Promise((resolve, reject) => {
    localStorage.setItem("mem_id","kakaoid")
    resolve()
  })
}

//구글 로그인
export const loginGoogle = auth => {
  return new Promise((resolve, reject) => {
    localStorage.setItem("mem_id","googleid")
    resolve()
  })
}