import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Post({ children, frontMatter }) {
  const { title, author } = frontMatter;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <h2> {author} </h2>
        <div className={styles.review}> {children} </div>
        <p>
          <Link href="/">
            <a className={styles.card}>Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
