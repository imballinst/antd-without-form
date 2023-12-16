import { Button, Form, Input } from "antd";

export function Login() {
  return (
    <Form
      onFinish={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form.Item rules={[{ required: true }]}>
        <Input name="username" />
      </Form.Item>

      <Form.Item rules={[{ required: true }]}>
        <Input.Password name="password" />
      </Form.Item>

      <Button htmlType="submit">Log in</Button>
    </Form>
  );
}
