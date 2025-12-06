import { render, screen } from "@testing-library/react";
import AddTask from "./components/addTask";
import { describe, it, expect } from "vitest";

describe("AddTask component", () => {
  it("renderiza os campos e o botão", () => {
    render(<AddTask onAddTaskSubmit={() => {}} />);

    expect(
      screen.getByPlaceholderText("Digite o título da tarefa")
    ).toBeDefined();
    expect(
      screen.getByPlaceholderText("Digite a descrição da tarefa")
    ).toBeDefined();
    expect(screen.getByText("Adicionar")).toBeDefined();
  });
});