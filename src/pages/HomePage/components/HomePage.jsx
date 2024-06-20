import styles from "./HomePage.module.scss";
import GameSection from "../../../modules/GameSection";
import Layout from "../../../modules/Layout";

function HomePage() {
  return (
    <div className={styles.home__page}>
      <Layout>
        <GameSection />
      </Layout>
    </div>
  );
}

export default HomePage;
