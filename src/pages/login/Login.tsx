import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import Box from "../../components/box/Box";
import {
  Description,
  Error,
  Form,
  H1,
  Header,
  InputContainer,
  Label,
  LoginContainer,
} from "./Login.styles";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {
  HeaderBox,
  HeaderDescription,
  HeaderLogo,
} from "../../components/header/logo.styles";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = () => {
    navigate("/home");
  };

  return (
    <div>
      <LoginContainer>
        <Box>
          <Header>
            <H1>Faça seu login</H1>
            <Description>Seja bem vindo ao nosso app!</Description>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
              {errors.email && <Error>{errors.email.message}</Error>}
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && <Error>{errors.password.message}</Error>}
            </InputContainer>
            <Button type="submit" disabled={!isValid}>
              Continuar
            </Button>
          </Form>
        </Box>
      </LoginContainer>
    </div>
  );
};

export default LoginPage;
