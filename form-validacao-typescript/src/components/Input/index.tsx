import { InputContainer } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";


const Input = ({ errorMessage, control, name, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          name={name} 
          control={control}
          render={({field: { onChange, onBlur, value, ref }})=><input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref}/>}
        />
        </InputContainer>
        {errorMessage ? <p>{errorMessage}</p> : null}
    </>
  );
};

export default Input;
