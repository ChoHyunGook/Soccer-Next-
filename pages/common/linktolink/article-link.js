import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function ArticleLink(){
    return (
        <nav>
        <ul>
        <li className={styles.li}> <Link href='/article/addArticle'>게시판 작성</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/article/getArticles'>게시판</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/article/modifyArticle'>게시글 수정</Link> </li><br/><br/>
        <li className={styles.li}> <Link href='/article/removeArticle'>게시글 삭제</Link> </li><br/><br/>
        <button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        </ul>
        </nav>
    );
}