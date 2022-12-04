const Button = ({props , name}) => {
    return <button className="py-1 pl-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black" {...props}> {name}</button>
}

export default Button;