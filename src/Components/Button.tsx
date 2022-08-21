

interface ButtonProps {
    label: string;
    handleClick: () => void;
}


//label -> string, onClick
const Button = (props: ButtonProps) => {
    const {label, handleClick} = props;
    
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button