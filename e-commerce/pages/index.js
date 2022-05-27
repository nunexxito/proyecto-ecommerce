import Head from 'next/head'
import DetailsProducts from '../components/DetailsProducts'
import Featured from '../components/Featured';
import Menu from '../components/Menu';
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="best e-commerce in the city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <p>homepage</p> */}
      {/* <DetailsProducts/> */}
      <Featured/>
      <Menu/>
    </div>
  );
}
