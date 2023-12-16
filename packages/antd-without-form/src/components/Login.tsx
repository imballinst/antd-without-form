import { Button, Input } from "antd";
import { useForm } from "react-hook-form";

export function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Input {...register("username", { required: true })} />
      </div>

      <div>
        <Input.Password {...register("password", { required: true })} />
      </div>

      <Button htmlType="submit">Log in</Button>
    </form>
  );
}
