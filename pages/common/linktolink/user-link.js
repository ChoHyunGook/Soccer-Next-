import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function UserLink(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/user/logout'>로그아웃</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/user/getUsers'>사용자 목록</Link> </li><br/><br/><br/>
        <li className={styles.li}> <Link href='/user/updateUser'>사용자수정</Link> </li><br/><br/><br/>
        <li className={styles.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li><br/><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}