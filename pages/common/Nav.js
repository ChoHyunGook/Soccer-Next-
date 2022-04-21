import React,{useState} from 'react'
import Link from "next/link";
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import tableStyles from "./style/table.module.css";
import MenuItem from '@mui/material/MenuItem';

export default function Nav(){
    const basicLink = ["/basic/counter","/basic/calc","/basic/bmi",'basic/enchant','basic/grade','basic/rps']
    const basicSubTitle = ["카운터","계산기","BMI계산기",'무기강화게임','성적표','가위바위보']
    const userLink = ["/user/join","/user/login","/user/logout","/user/profile","/user/modifyUser","/user/withdrawUser","user/getUsers"]
    const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
    const todoLink = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
    const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
    const gameLink = ["/game/addGame","/game/getGames","/game/modifyGame","/game/removeGame"]
    const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
    const teamLink = ["/team/addTeam","/team/getTeams","/team/modifyTeam","/team/removeTeam"]
    const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
    const articleLink = ["/article/addArticle","/article/getArticles","/article/modifyArticle","/article/removeArticle"]
    const articleSubTitle = ["글등록","글목록","글수정","글삭제"]

return (
    <table className={tableStyles.table}>
      <tr>
      <td>
        <li className={tableStyles.li}> <Link href='/'>홈</Link> </li>
        <SubMenu title={"기본"} urls={basicLink} subTitles={basicSubTitle}/>
        <SubMenu title={"사용자"} urls={userLink} subTitles={userSubTitle}/>
        <SubMenu title={"일정"} urls={todoLink} subTitles={todoSubTitle}/>
        <SubMenu title={"게임"} urls={gameLink} subTitles={gameSubTitle}/>
        <SubMenu title={"팀"} urls={teamLink} subTitles={teamSubTitle}/>
        <SubMenu title={"게시판"} urls={articleLink} subTitles={articleSubTitle}/>
        </td>
      </tr>
    </table>
  );
}
const SubMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return <><Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {props.title}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
        {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose}><Link href={url} key={i}>{props.subTitles[i]}</Link></MenuItem>
          })}
        </Menu></>
  }


 
