export const time = (date = new Date()) => {
  const api = {
    formate: (pattern = "YYYY-MM-DD") => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const msecond = date.getMilliseconds();
      return pattern.replace(/YYYY/g, year.toString())
      .replace(/MM/,month.toString())
      .replace(/DD/,day.toString())
      .replace(/hh/,hour.toString())
      .replace(/mm/,minute.toString())
      .replace(/ss/,second.toString())
      .replace(/SSS/,msecond.toString())
    },
  };
  return api
};