import Service from "@/utils/axios";

export default {
  getTaskList: (params) => {
    return Service.get("/api/todolist", params);
  },

  addTask: (data) => {
    return Service.post("/api/todolist", data);
  },

  updateTask: (data) => {
    const { id, ...restData } = data;
    return Service.put(`/api/todolist/${id}`, restData);
  },

  deleteTask: (params) => {
    const { id, ...restParams } = params;
    return Service.delete(`/api/todolist/${id}`, restParams);
  },
};
