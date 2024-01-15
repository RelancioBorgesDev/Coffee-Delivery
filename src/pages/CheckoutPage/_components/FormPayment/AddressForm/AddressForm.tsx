import { useFormContext } from "react-hook-form";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export default function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;
  return (
    <AddressFormContainer>
      <input
        className="cep"
        placeholder="CEP"
        type="text"
        {...register("cep")}
      />
      {errors.cep && <small>{errors.cep.message}</small>}

      <input
        className="rua"
        placeholder="Rua"
        type="text"
        {...register("street")}
      />
      {errors.street && <small>{errors.street.message}</small>}
      <input
        className="numero"
        placeholder="Número"
        type="number"
        {...register("number")}
      />
      {errors.number && <small>{errors.number.message}</small>}
      <div className="complemento-container">
        <input
          className="complemento"
          placeholder="Complemento"
          type="text"
          {...register("complement")}
        />
        {errors.complement && <small>{errors.complement.message}</small>}
        <p>Opcional</p>
      </div>
      <input
        className="bairro"
        placeholder="Bairro"
        type="text"
        {...register("district")}
      />
      {errors.neighborhood && <small>{errors.neighborhood.message}</small>}
      <input
        className="cidade"
        placeholder="Cidade"
        type="text"
        {...register("city")}
      />
      <input className="uf" placeholder="UF" type="text" {...register("uf")} />
      {errors.uf && <small>{errors.uf.message}</small>}
    </AddressFormContainer>
  );
}
