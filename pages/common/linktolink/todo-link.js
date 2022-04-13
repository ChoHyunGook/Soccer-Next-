import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function MyGame(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/todo/todo-list'>스케쥴 리스트</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/todo/todo'>스케쥴</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}