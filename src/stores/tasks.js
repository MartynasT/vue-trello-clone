import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    allTasks: [
      {
        boardTitle: "To Do",
        boardId: 'da_232_43d',
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
        boardId: 'wer_24234_fdc',
        cards: [
          {
            title: "card 3",
            body: "card 3 description",
          },
        ],
      },
    ],
  }),
  getters:{

  },
  actions: {
    //add board
    createBoard(title, id){
      this.allTasks.push({
        boardTitle: title,
        boardId: id,
        cards: []
      })
    },
    //delete board
    //update board

    //add task
    createTask(boardId, taskTitle, taskId){
      let currentBoard = this.allTasks.find(board=> board.boardId === boardId)
      let task = {
        id: taskId,
        title: taskTitle,
        body: "card 3 description",
      }

      currentBoard.cards.push(task)
    }
    //delete task
    //update task
  }
});
