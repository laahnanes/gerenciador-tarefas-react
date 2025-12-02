import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("App component", () => {
  it("renderiza o título do aplicativo", () => {
    render(<App />);
    expect(screen.getByText("Gerenciador de Tarefas")).toBeDefined();
  });
});
