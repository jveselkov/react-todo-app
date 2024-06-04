import { Flex, Button, Input, Form, FormProps } from "antd";

import { PlusOutlined, DownOutlined } from "@ant-design/icons";

const { useForm } = Form;

export interface IInputConfirm {
  onConfirm: (content: string) => void;
}

interface IFormValues {
  content: string;
}

export const InputConfirm = ({ onConfirm }: IInputConfirm) => {
  const [form] = useForm<IFormValues>();

  const onFinish: FormProps<IFormValues>["onFinish"] = ({ content }) => {
    onConfirm(content);
    form.resetFields();
  };

  return (
    <Flex gap="small">
      <Form form={form} layout={"inline"} onFinish={onFinish}>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "required" }]}
        >
          <Input prefix={<DownOutlined />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" icon={<PlusOutlined />} htmlType="submit" />
        </Form.Item>
      </Form>
    </Flex>
  );
};
