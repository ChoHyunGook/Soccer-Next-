import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}> <Link href='/'>홈</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/admin-link'>로그인</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>대시보드</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/board-link'>게시글</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/todo-link'>스케쥴</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/game-link'>게임</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/basic-link'>베이직</Link> </li>
        </ul>
        </nav>
    );
}