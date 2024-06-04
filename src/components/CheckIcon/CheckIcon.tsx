import { Flex, FlexProps } from "antd";
import { CheckOutlined } from "@ant-design/icons";

import { green, gray } from "@ant-design/colors";

export interface ICheckIcon extends Omit<FlexProps, "children"> {
  check?: boolean;
}

export const CheckIcon = ({
  check = false,
  style = {},
  ...props
}: ICheckIcon) => (
  <Flex
    {...props}
    align="center"
    justify="center"
    style={{
      ...style,
      color: green.primary,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: gray.primary,
      borderRadius: "50%",
      height: "1.5em",
      width: "1.5em",
    }}
  >
    {check ? <CheckOutlined /> : " "}
  </Flex>
);
