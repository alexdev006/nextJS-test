import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Users list | Home</title>
        <meta name="keywords" content="users"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cum
          maiores, nemo vel facilis quidem sequi voluptatem magnam distinctio
          officiis, eum, consequatur quae tempora. Aliquam dolorum blanditiis
          voluptas commodi molestias!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cum
          maiores, nemo vel facilis quidem sequi voluptatem magnam distinctio
          officiis, eum, consequatur quae tempora. Aliquam dolorum blanditiis
          voluptas commodi molestias!
        </p>
        <Link href='/usersList' >
        <a  className={styles.btn}>See all users</a>
        </Link>
      </div>
    </>
  );
}
