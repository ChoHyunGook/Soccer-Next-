import style from "./style/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
        <Footer/>
        </div>
      
    </>
  );
}