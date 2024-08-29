

interface FormInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;
}

interface FormSelectProps {
    value: string;
    name: string;
    option: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    className?: string;
}
