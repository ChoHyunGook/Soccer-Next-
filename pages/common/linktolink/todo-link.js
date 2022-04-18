import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function TodoLink(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/todo/addTodo'>스케쥴 추가</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/todo/getTodos'>스케쥴 리스트</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/todo/modifyTodo'>스케쥴 수정</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/todo/removeTodo'>스케쥴 삭제</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}