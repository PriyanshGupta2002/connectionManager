const Button = ({className,text,onClick,disabled}) => {
  return (
    <button className={`bg-buttonBgPrimaryColor text-buttonTextPrimaryColor rounded-full ${className}`} onClick={onClick} disabled={disabled}>
            {text}
    </button>
  )
}

export default Button