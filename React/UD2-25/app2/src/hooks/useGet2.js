import { useEffect, useState } from "react";

const useGet2 = (url) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    console.log("Custom effecto,");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos del efecto", data);
        if (!Array.isArray(data)) {
          data = [data];
        }
        setData([...data]);
        setCargando(false);
      });
  }, []);

  return { data, cargando };
};

export default useGet2;
