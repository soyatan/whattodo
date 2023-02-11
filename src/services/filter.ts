import { stringInclues } from "../util/common";

export const FILTER_ALL = "all";
export const FILTER_ACTIVE = "active";
export const FILTER_COMPLETED = "completed";

export function applyFilter(list: any, filter: any) {
  switch (filter) {
    case FILTER_COMPLETED:
      return list.filter((item: any) => item.completed === true);

    case FILTER_ACTIVE:
      return list.filter((item: any) => item.completed !== true);

    default:
      return list;
  }
}

export function search(list: any, query: any) {
  let q = query.trim().toLowerCase();

  return list.filter(({ text }: any) => stringInclues(text.toLowerCase(), q));
}

export function getOptions() {
  return {
    [FILTER_ALL]: "All",
    [FILTER_ACTIVE]: "Active",
    [FILTER_COMPLETED]: "Completed",
  };
}
