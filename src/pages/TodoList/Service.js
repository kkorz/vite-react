import Service from "@/utils/axios";

export default {
  getTaskList: (params) => {
    return Service.get("/todolist", params);
  },

  addTask: (data) => {
    return Service.post("/todolist", data);
  },

  updateTask: (data) => {
    const { id, ...restData } = data;
    return Service.patch(`/todolist/${id}`, restData);
  },

  deleteTask: (params) => {
    const { id, ...restParams } = params;
    return Service.delete(`/todolist/${id}`, restParams);
  },
};
