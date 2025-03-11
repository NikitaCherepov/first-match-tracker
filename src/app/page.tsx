'use client'
import styles from './page.module.scss'

import { useMatchesInfo } from './hooks/useMatchesInfo'
import {motion, AnimatePresence} from 'framer-motion'
import Status from './components/status'
import Score from './components/Score'
import Image from 'next/image'

interface PlayerType {
  kills: number,
  username: string
}

interface TeamType {
  name: string,
  place: number,
  players: PlayerType[],
  points: number,
  total_kills: number
}

interface MatchType {
  awayScore: number,
  awayTeam: TeamType,
  homeScore: number,
  homeTeam: TeamType,
  status: 'Finished' | 'Ongoing' | 'Scheduled',
  time: string,
  title: string
}

export default function MainPage() {
  const { data, isLoading, isSuccess, isError, refetch, isFetching } = useMatchesInfo();

  return (

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Match Tracker</h1>

          <div className={styles.header__buttons}>

            <AnimatePresence>
            {isError && (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration: 0.5}}
            className={styles.header__buttons__error}>
              <Image width={50} height={50} priority alt='Предупреждение об ошибке' src='/icons/error.svg'></Image>
              <p>Ошибка: не удалось загрузить информацию</p>
            </motion.div>
            )}
            </AnimatePresence>
            <button onClick={() => refetch()} className={styles.header__buttons__refreshButton}>
              <p>Обновить</p>
              <motion.img animate={isLoading || isFetching ? {rotate: [0, 360]} : {rotate: 0}} transition={isLoading || isFetching ? { repeat: Infinity, duration: 1, type:'tween', ease:'linear' } : undefined} src='/icons/refresh.svg'></motion.img>
            </button>
          </div>

          
        </div>

        {isSuccess && (
          <div className={styles.commands}>
            <AnimatePresence>
            {data?.data?.matches?.map((obj: MatchType, index: number) => (
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              layout
              transition={{duration: 0.5, delay: index * 0.1}}
              key={index} className={styles.commands__card}>

                <div className={styles.commands__card__teamName}>
                  <Image alt='Логотип команды' width={50} height={50} priority src='/icons/teamLogo.svg'></Image>
                  <p>{obj.awayTeam.name}</p>
                </div>

                <div className={styles.commands__card__status}>
                <Score key={obj.title} matchId={obj.title} awayScore={obj.awayScore} homeScore={obj.homeScore} />
                  <Status type={obj.status}/>
                </div>

                <div className={styles.commands__card__teamName}>
                  <p>{obj.homeTeam.name}</p>
                  <Image alt='Логотип команды' width={50} height={50} priority src='/icons/teamLogo.svg'></Image>
                </div>


              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        )}


      </div>
  )
}