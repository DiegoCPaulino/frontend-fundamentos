interface ButtonProps {
    title: string;
    description?: string;
}

export const Button = ({title, description}: ButtonProps) => {
    return (
        <button> {title} {description} </button>
    )
}
