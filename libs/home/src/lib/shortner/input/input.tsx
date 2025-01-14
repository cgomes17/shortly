import { errorValidation, httpPattern } from '@shortly/shared';
import { useMutation } from '@tanstack/react-query';
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { ShortnerService } from '../shortner.utils';

interface ShortnerForm {
  fullLink: string;
}

export function ShortnerInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShortnerForm>({});

  const mutation = useMutation({
    mutationFn: ShortnerService.shortenLink,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (data: ShortnerForm) => {
    mutation.mutate(data.fullLink);
  };

  return (
    <form
      className="flex flex-row gap-6 -mb-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col flex-1 h-[82px]">
        <Label htmlFor="fullLink" hidden>
          Full Link
        </Label>
        <TextInput
          sizing="lg"
          {...register('fullLink', {
            required: 'Please add a link',
            pattern: {
              value: httpPattern,
              message: 'Looks like this is not an valid link',
            },
          })}
          id="fullLink"
          type="text"
          placeholder="Shorten a link here..."
          {...errorValidation(errors?.fullLink)}
        />
      </div>
      <Button
        type="submit"
        className="flex flex-col p-0 h-[58px]"
        size="lg"
        color="info"
      >
        Shorten it!
      </Button>
    </form>
  );
}

export default ShortnerInput;
