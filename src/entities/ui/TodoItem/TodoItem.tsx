import { PointerEvent } from "react";

import { Flex, Typography } from "antd";
import { EditFilled } from "@ant-design/icons";
import { gray } from "@ant-design/colors";

import { CheckIcon } from "@/shared";

export interface ITodoItem {
  id: string;
  title: string;
  done: boolean;
}

const { Text } = Typography;

export interface ITodoItemProps {
  item: ITodoItem;
  onClick?: (event: PointerEvent<HTMLDivElement>) => void;
  onEdit?: (value: string) => void;
}

export const TodoItem = ({ item, onClick, onEdit }: ITodoItemProps) => (
  <Flex gap="middle" align="center" data-cy="todo-item">
    <CheckIcon
      data-cy="todo-check-icon"
      check={item.done}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />

    <Text
      data-cy="todo-content"
      editable={{
        icon: <EditFilled />,
        tooltip: "click to edit text",
        triggerType: ["icon", "text"],
        onChange: onEdit,
      }}
      style={
        item.done
          ? {
              textDecoration: "line-through",
              color: gray.primary,
            }
          : {}
      }
    >
      {item.title}
    </Text>
  </Flex>
);
