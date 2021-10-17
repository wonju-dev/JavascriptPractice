import { useEffect, useState } from "react";

export default function useFetch(todos, setTodos) {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch("./dummy.json");
    const initialData = await response.json();
    setTodos(initialData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
}
