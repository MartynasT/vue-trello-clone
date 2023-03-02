import { defineStore } from "pinia";

export default useTasksStore = defineStore("tasks", {
  state: () => ({
    allTasks: [
      {
        boardTitle: "To Do",
        cards: [
          {
            title: "card 1",
            body: "lorem ipsum description",
          },
          {
            title: "card 2",
            body: "",
          },
        ],
      },
      {
        boardTitle: "In progress",
        cards: [
          {
            title: "card 3",
            body: "card 3 description",
          },
        ],
      },
      {
        boardTitle: "Done",
        cards: [
          {
            title: "card 4",
            body: "card 4 desciprion",
          },
        ],
      },
    ],
  }),
});
