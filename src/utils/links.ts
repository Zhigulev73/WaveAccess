export type LinksType = {
  to: string;
  title: string;
};

const navlinks: LinksType[] = [
  {
    to: "/",
    title: "Главная",
  },
  {
    to: "/schedule",
    title: "Расписание на день",
  },
  {
    to: "/task",
    title: "Добавление задачи",
  },
];

export default navlinks;
