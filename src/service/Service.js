const Datafilter = (table, nameData, datap) => {
  const params = new URLSearchParams(window.location.search);
  const datareturn = table[0].filter((item) => item.user === "utibe");
  if (datap) {
    if (datareturn.length) return datareturn[0][datap];
  } else {
    if (datareturn.length) return datareturn[0].info[nameData];
  }
};
export default Datafilter;
