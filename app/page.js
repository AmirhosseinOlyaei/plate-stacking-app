import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import PlateStack from "./PlateStack";
import AddPlateForm from "./AddPlateForm";
import RemovePlateForm from "./RemovePlateForm";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          <div>
            <h1>Plate Stacking Application</h1>
            <PlateStack />
            <AddPlateForm />
            <RemovePlateForm />
          </div>
        </p>
      </div>
    </main>
  );
}
