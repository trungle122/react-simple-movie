import { ButtonProps } from '../../types/movie.type';

const Button = ({
  onClick,
  className,
  type = 'button',
  bgColor = 'primary',
  children,
}: ButtonProps) => {
  let bgClassName = 'bg-primary';
  switch (bgColor) {
    case 'primary':
      bgClassName = 'bg-primary';
      break;

    case 'secondary':
      bgClassName = 'bg-secondary';
      break;

    default:
      break;
  }

  return (
    <button
      type={type}
      className={`w-full rounded-lg bg-primary px-6 py-3 capitalize ${bgClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
