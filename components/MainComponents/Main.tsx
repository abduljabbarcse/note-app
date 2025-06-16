import styles from "./Main.module.css";
import PathBreadcrumb from "./PathCrumb";

const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={styles.mainBody}>
      <PathBreadcrumb />
      {children}
    </main>
  );
};

export default Main;
