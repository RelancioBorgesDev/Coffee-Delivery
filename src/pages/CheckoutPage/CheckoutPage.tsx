import { CompleteOrderContainer } from "./CheckoutPage.styles";

import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import FormPayment from "./_components/FormPayment";
import SelectedCoffees from "./_components/SelectedCoffees";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export default function CheckoutPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  async function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        id="form-payment"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <FormPayment />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
