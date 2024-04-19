import { IBrand } from '@interfaces/brand.interface';
import './styles.scss'

interface ISelectProps {
    label: string;
    brands?: IBrand[];
    onChange: (e: any) => void;
}

const Select = ({label, brands}: ISelectProps) => {

    const generateOptions = () => {
        if (!brands || brands.length === 0) {
            return <option value="1">Aucune marque</option>
        }
        return brands.map((brand) => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
        ));
    }


    const handleChange = (e: any) => {
        console.log(e.target.value);
    }

    return (
        <div id='select-input'>
            <label>{label}</label>
            <select onChange={handleChange}>
                {generateOptions()}
            </select>
        </div>
    )
}

export default Select