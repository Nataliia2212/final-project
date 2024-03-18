export const loadFromLS = (keyLS) => {
  const zip = localStorage.getItem(keyLS);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return zip;
  }
}

export const saveToLS = (key, info) => {
    const zip = JSON.stringify(info)
    localStorage.setItem(key, zip)
}


