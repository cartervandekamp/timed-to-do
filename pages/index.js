import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Playlist from "../components/Playlist";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Manage your Tasks!</h2>
        <Playlist />
      </main>
    </div>
  );
}
