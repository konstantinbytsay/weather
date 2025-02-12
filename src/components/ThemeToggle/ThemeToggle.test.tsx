import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle Component", () => {
  it("toggles theme mode on button click", () => {
    render(<ThemeToggle />);

    // Проверяем начальное состояние
    expect(screen.getByTestId("togle-hint")).toBeInTheDocument();
    expect(document.body.classList.contains("dark-mode")).toBe(false);

    // Находим чекбокс и кликаем по нему
    const toggleButton = screen.getByRole("checkbox");
    fireEvent.click(toggleButton);

    // Проверяем изменение состояния
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
    expect(document.body.classList.contains("dark-mode")).toBe(true);

    // Кликаем ещё раз для возврата к исходному состоянию
    fireEvent.click(toggleButton);

    // Проверяем возврат к исходному состоянию
    expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
    expect(document.body.classList.contains("dark-mode")).toBe(false);
  });
});
