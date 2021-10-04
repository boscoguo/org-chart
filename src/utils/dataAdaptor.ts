export const attachRel = (data:any, flags:string) => {
  if (String(data.id).indexOf("m") === -1) {
    data.id = "m" + data.id;
  }
  data.relationship =
    flags + (data.reports && data.reports.length > 0 ? 1 : 0);
  if (data.reports) {
    data.reports.forEach(function (item: any) {
      attachRel(item, "1" + (data.reports.length > 1 ? 1 : 0));
    });
  }
  return data;
};
