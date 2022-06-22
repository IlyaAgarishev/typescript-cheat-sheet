// Readonly
// Добавляет каждому полю объекта модификатор readonly делая их  тем самым доступными только для чтения.

type Task = Readonly<{
  id: number;
  text: string;
  isCompleted?: boolean;
  completedDate?: Date | undefined;
}>;

// equals...
type SameTask = {
  readonly id: number;
  readonly text: string;
  readonly isCompleted?: boolean;
  readonly completedDate?: Date | undefined;
};

const task: Task = {
  id: 0,
  text: "text",
};

// Мутировать объект нельзя:
// task.isCompleted = false;
// task.id = 1;
