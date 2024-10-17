import styles from '../styles/components/Header.module.css'
import { useContext } from 'react'
import { ProjectContext } from '../contexts/ProjectContext'
import Link from "next/link"

interface HeaderProps{
    openProjects: () => void;
}

export default function Header({openProjects}:HeaderProps){

    const days = ['thứ 2','thứ 3','thứ 4 ','thứ 5','Thứ 6','thứ 7 ','chủ nhật ']
    const months = ['tháng ','tháng 2','tháng 3 ','tháng 4 ','tháng 5','tháng 6','tháng 7','tháng 8','tháng 9','tháng 10','tháng 11','tháng 12']

    function getCurrentDate(){
        const date = new Date()
        return days[date.getDay()]+', '+date.getDate()+'  '+months[date.getMonth()]+' , '+date.getFullYear()
    }

    const {currentProject} = useContext(ProjectContext)

    return(
        <header className={styles.head}>
            <div className={`${styles.headContent} centerContainer`}>
                <div className={styles.logoAndProject}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/todo-app-logo_begPyVFhCQy-.svg?updatedAt=1636031123870" />
                        </a>
                    </Link>
                    <button className={styles.currentProject} onClick={openProjects}>
                        {currentProject}
                        <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/project-icon_1RFrQOmw6A.svg?updatedAt=1636031123903" />
                    </button>
                </div>
                <span className={styles.headToday}>
                    { getCurrentDate() }
                </span>
            </div>
        </header>
    )
}