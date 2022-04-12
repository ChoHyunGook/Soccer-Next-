import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function MyBasic(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/board/board-list'>게시판</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/board/board-form'>게시글 등록</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}