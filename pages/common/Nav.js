import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}> <Link href='/'>홈</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/user-link'>사용자</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/admin-link'>어드민</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/article-link'>게시판</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/todo-link'>스케쥴</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/game-link'>게임</Link> </li>
        <li className={styles.li}> <Link href='/common/linktolink/basic-link'>베이직</Link> </li>
        </ul>
        </nav>
    );
}