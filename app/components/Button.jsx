const Button = ({className,text}) => {
  return (
    <button className={`bg-buttonBgPrimaryColor text-buttonTextPrimaryColor rounded-full ${className}`}>
            {text}
    </button>
  )
}

export default Button