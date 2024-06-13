import { Space, Card, Typography, Button, Segmented } from "antd";

import {
  useStoredTodos,
  useFilteredTodos,
  FilterValues,
} from "@/widgets/hooks";
import { InputConfirm } from "@/shared";

import { TodoItem } from "@/entities";

const { Text } = Typography;

export const Todos = () => {
  const {
    todos,
    toggleDoneTodo,
    createTodo,
    updateTodo,
    removeDoneTodos,
    undoneTodosCount,
  } = useStoredTodos();

  const { filteredTodos, setFilters } = useFilteredTodos(todos);

  const handleConfirmTodo = (content: string) => {
    createTodo(content);
  };

  const handleToggleTodo = (id: string) => () => {
    toggleDoneTodo(id);
  };

  const handleEditTodo = (id: string) => (title: string) => {
    const todoToEdit = todos.find((item) => item.id === id);

    if (!todoToEdit || title === "") {
      return;
    }

    updateTodo({ ...todoToEdit, title });
  };

  return (
    <Card
      title="todos"
      actions={[
        <Text data-cy="todos-counter">{undoneTodosCount} items left</Text>,
        <Segmented options={FilterValues} onChange={setFilters} />,
        <Button
          type="text"
          onClick={removeDoneTodos}
          data-cy="remove-completed"
        >
          clear completed
        </Button>,
      ]}
    >
      <Space direction="vertical">
        <InputConfirm onConfirm={handleConfirmTodo} />

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onClick={handleToggleTodo(todo.id)}
            onEdit={handleEditTodo(todo.id)}
          />
        ))}
      </Space>
    </Card>
  );
};
