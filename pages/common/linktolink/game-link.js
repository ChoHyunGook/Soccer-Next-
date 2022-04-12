import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function MyGame(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/game/game-list'>게임 일정</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/game/team-list'>팀 리스트</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}