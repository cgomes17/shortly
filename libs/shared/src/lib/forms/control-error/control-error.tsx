import { FieldError } from 'react-hook-form';

export function ControlError({ error }: { error: FieldError | undefined }) {
  return (
    error && (
      <div className="flex flex-row text-xs text-secondary">
        <span>{error?.message}</span>
      </div>
    )
  );
}

export default ControlError;
