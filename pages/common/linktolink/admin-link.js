import Link from "next/link";
import styles from "../style/Nav.module.css";

export default function AdminLink(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/admin/dashboard'>대시보드</Link> </li>
        </ul>
        </nav>
    );
}