import { useFieldArray } from 'react-hook-form';
import type { UseFormRegister, Control, FieldErrors } from 'react-hook-form';
import { FormField } from 'shared/ui/FormField';
import { Button } from 'shared/ui/Button';
import type { RegistrationFormValues } from '../model/schema';
import styles from './SocialLinksField.module.css';

interface Props {
  register: UseFormRegister<RegistrationFormValues>;
  control: Control<RegistrationFormValues>;
  errors: FieldErrors<RegistrationFormValues>['socialLinks'];
}

export function SocialLinksField({ register, control, errors }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socialLinks',
  });

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Социальные ссылки</legend>

      {fields.map((field, index) => (
        <div key={field.id} className={styles.row}>
          <FormField
            label={`Ссылка ${index + 1}`}
            id={`socialLinks.${index}.url`}
            error={errors?.[index]?.url}
            type="url"
            placeholder="https://github.com/username"
            {...register(`socialLinks.${index}.url` as const)}
          />
          <Button
            type="button"
            variant="danger"
            onClick={() => remove(index)}
            disabled={fields.length === 1}
            title={
              fields.length === 1
                ? 'Нельзя удалить единственное поле'
                : 'Удалить'
            }
          >
            Удалить
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="secondary"
        className={styles.addButton}
        onClick={() => append({ url: '' })}
      >
        + Добавить ссылку
      </Button>
    </fieldset>
  );
}