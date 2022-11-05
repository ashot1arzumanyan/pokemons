const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json() as T;
      return data;
    }
    return null;
  } catch (err) {
    return null;
  }
};

export default fetcher;
