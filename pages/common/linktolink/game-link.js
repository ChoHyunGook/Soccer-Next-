import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function GameLink(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/game/addGame'>경기 추가</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/game/getGames'>경기 리스트</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/game/modifyGame'>경기 수정</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/game/removeGame'>경기 삭제</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}