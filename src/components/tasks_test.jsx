import { render, screen } from "@testing-library/react";
import Tasks from "./tasks";
import { describe, it, expect } from "vitest";

describe("Tasks component", () => {
  it("renderiza as tarefas na tela", () => {
    const mockTasks = [
      { id: 1, title: "Tarefa 1", description: "Desc 1", isCompleted: false },
      { id: 2, title: "Tarefa 2", description: "Desc 2", isCompleted: true },
    ];

    render(
      <Tasks
        tasks={mockTasks}
        onTaskClick={() => {}}
        onDeleteTaskClick={() => {}}
      />
    );

    expect(screen.getByText("Tarefa 1")).toBeDefined();
    expect(screen.getByText("Tarefa 2")).toBeDefined();
  });
});