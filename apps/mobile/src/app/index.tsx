import { Alert, Button, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { testSchema, TestSchema } from "@/schemas/testSchema";

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TestSchema>({
    resolver: zodResolver(testSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data: TestSchema) {
    Alert.alert("Sucesso", `Olá, ${data.name}!`);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 24,
        gap: 12,
      }}
    >
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Digite seu nome"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 12,
              borderRadius: 8,
            }}
          />
        )}
      />

      {errors.name && (
        <Text style={{ color: "red" }}>
          {errors.name.message}
        </Text>
      )}

      <Button
        title="Enviar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}