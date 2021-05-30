import {
  FormControl, FormLabel, Input as ChakraInput, InputProps as ChackraInputProps, FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase:
  ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
    name, label, error, ...rest
  }, ref) => (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />

      { !!error && (
      <FormErrorMessage>
        {error.message}
      </FormErrorMessage>
      )}
    </FormControl>
  );

export const Input = forwardRef(InputBase);
