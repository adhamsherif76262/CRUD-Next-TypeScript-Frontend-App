// import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/Components/Header";
import Description from "@/Components/Description";
import Link from "next/link";


export default function Home() {

  const lang_Ar = true;

  return (
    <div className={styles.page}>
        <>
      <main className={styles.main}>
        <p>Hello World</p>
          <Header header_Sub_Text="The Optional One" header_Text="My Final Header"></Header>
          {
            lang_Ar &&  <Description></Description>
            // lang_Ar ?  <Description></Description> : null
          }
          {/* <button name="To_About_Us_Btn" type="button"> Go To About Us</button> */}
          {/* In The href Property of Link tag we reference the folder containing the page.tsx file not the page file itself */}
          <Link href="/Pages/About_Us"> Go To About Us</Link>
      </main>
        </>
    </div>
  );
}
