import { z } from "zod";

export const testSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório"),
});

export type TestSchema = z.infer<typeof testSchema>;