import { ChangeEvent } from "react";

interface InputFileProps {
    onChange: (e: any) => void;
}

const InputFile = ({onChange}: InputFileProps) => {

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    onChange(e.target.result as string);
                } else {
                    onChange(null);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default InputFile;