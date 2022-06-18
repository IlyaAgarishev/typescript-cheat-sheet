function patchField<T extends object, U extends keyof T, V extends T[U]>(
  obj: T,
  field: U,
  val: V
) {}

// Не можем пропаптчить с другим типом
// patchField({ f: "s" }, "f", 2);

patchField({ f: "s" }, "f", "2");
