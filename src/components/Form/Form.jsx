import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        
        onSubmit ({name, email});
    }

    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -m-20 mx-5">
        <Input type="text" required placeholder="Insira seu nome..." />
        <Input type={"email"} required placeholder={"Insira seu e-mail..."} />
        <Button type="submit" name={"Seguir"}   />
    </form>
}

export default Form;