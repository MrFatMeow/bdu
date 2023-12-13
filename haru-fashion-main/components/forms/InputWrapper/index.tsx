import { Controller } from 'react-hook-form'
import { RequiredAsterisk } from '../RequiredAsterisk'

export interface InputWrapperProps {
  field: string
  control: any
  component: any
  required?: boolean
  label?: any
  errors?: any
  labelPosition?: 'top' | 'right' | 'left' | 'bottom'
  align?: 'center' | 'baseline'
  className?: string
  disabled?: boolean
}
export const InputWrapper = (props: InputWrapperProps) => {
  const {
    required = false,
    label,
    errors = [],
    field = '',
    control,
    component,
    labelPosition = 'top',
    align = 'baseline',
    className,
    disabled = false,
  } = props

  const getLabelPosition = () => {
    if (labelPosition == 'left') return 'flex items-center'
    if (labelPosition == 'right')
      return 'flex flex-row-reverse items-center justify-end'
    if (labelPosition == 'bottom') return 'flex flex-col-reverse items-center'
    return 'flex flex-col'
  }

  const labelPos = getLabelPosition()

  const getErrorContext = () => {
    const fieldNameFlows = field.split('.')

    if (fieldNameFlows.length == 1) {
      return errors[field]
    }

    let errorContext = errors

    for (const sub of fieldNameFlows) {
      if (!errorContext) {
        break
      }
      errorContext = errorContext[sub]
    }
    return errorContext
  }

  const errorContext = getErrorContext()

  return (
    <>
      <div
        className={`${labelPos} ${align} ${
          label ? 'gap-2' : null
        } ${className}`}
      >
        <label className="text-sm font-medium text-labelInput flex gap-1 items-center">
          {label} {required && <RequiredAsterisk />}
        </label>
        <div className="flex flex-col">
          <Controller
            name={field}
            control={control}
            render={({ field: fieldProps }) => {
              return (
                <>
                  {component({
                    // ...fieldProps,
                    value: fieldProps?.value,
                    onChange: disabled ? () => {} : fieldProps?.onChange,
                    validatestatus: errorContext ? 'error' : '',
                  })}
                </>
              )
            }}
          />
          {errors && errorContext && (
            <div className="text-red-500 mt-1">{errorContext?.message}</div>
          )}
        </div>
      </div>
    </>
  )
}
