import { useState, useEffect } from "react";
import { useTable } from "../context/TableContext";

export default function TableTimer() {
  const { timeRemaining, hasTable, tableId, resetTableTimer } = useTable();
  const [formattedTime, setFormattedTime] = useState<string>("");

  // Formatea el tiempo restante en formato HH:MM:SS
  useEffect(() => {
    if (timeRemaining === null || !hasTable) {
      setFormattedTime("");
      return;
    }

    // Convertimos milisegundos a formato hh:mm:ss
    const formatTime = (ms: number) => {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    setFormattedTime(formatTime(timeRemaining));
  }, [timeRemaining, hasTable]);

  // Si no hay mesa, no mostramos nada
  if (!hasTable || !tableId) {
    return null;
  }
}
