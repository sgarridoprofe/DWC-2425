import { useEffect, useState } from "react";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    console.log("Efecto de useGet,");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos del efecto useGet", data);
        if (!Array.isArray(data)) {
          data = [data];
        }
        setData([...data]);
        setCargando(false);
      });
  }, [url]);

  return { data, cargando };
};

export default useGet;
