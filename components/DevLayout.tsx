import React from 'react'
import PropTypes from 'prop-types'
import { FC } from 'react'
import styles from "../styles/DevPages.module.css"
import { FaGithub, FaHome } from "react-icons/fa"
import Link from 'next/link'

interface DevLayoutProps {
    showcase: React.Component;
    title: string;
    description: string;
    githubURL: string;
}

const DevLayout:FC<DevLayoutProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
          <div className={styles.home}>
            <Link href="/">
              <a>
                <FaHome className={styles.icon}/>
              </a>
            </Link>
          </div>
        <a href={props.githubURL}>
          <FaGithub className={styles.icon}/>
        </a>
      </div>
      <h1>{props.title}</h1>
      {props.showcase}
      <p className={styles.description}>{props.description}</p>
    </div>
  )
}


export default DevLayout
