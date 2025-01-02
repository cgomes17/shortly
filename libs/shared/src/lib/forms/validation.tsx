import { FieldError } from 'react-hook-form';
import ControlError from './control-error/control-error';

export const httpPattern =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

export const errorValidation = (fieldError: FieldError | undefined) => ({
  color: fieldError && 'failure',
  helperText: <ControlError error={fieldError} />,
});
