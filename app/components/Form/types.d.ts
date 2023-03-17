
type FieldProps = {
  type:
    | 'text'
    | 'textarea'
    | 'password'
    | 'number'
    | 'email'
    | 'textarea'
    | 'select'
    | 'datepicker'
    | 'upload'
    | 'checkbox'
    | 'radiobox';
  id: string;
  autoComplete?: 'off' | 'new-password';
  label: string;
  variant: string;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  uploadFile?: any;
  options?: [];
  hidden?: boolean;
  defaultValue: string;
  validation?: any;
}[];


type ButtonProps = {
  text: string;
  loading?: boolean;
  icon?: 'string';
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  rounded?: 'small' | 'medium' | 'full';
  customCss?: string;
};

type FormProps = {
  type?: 'default' | 'stepper' | 'fetcher' | 'remix' | 'body';
  fields: FieldProps;
  id?: string;
  action?: string | undefined;
  debug: boolean;
  button: ButtonProps;
  component?: React.ElementType
  transition?: any,
  actionData?: any,
  fetcher?: any
};

type DefaultFormProps = {
  fields: FieldProps;
  action?: string; 
  debug: boolean;
  button: ButtonProps;
};

type DynamicFormProps = {
  fields: FieldProps;
  action?: string; 
  debug: boolean;
  button: ButtonProps;
};

type FetcherFormProps = {
  fields: FieldProps;
  action?: string; 
  debug: boolean;
  button: ButtonProps;
  component: React.ElementType
};