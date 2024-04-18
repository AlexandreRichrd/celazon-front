import { IBackOfficeBrand } from '@interfaces/brand.interface';
import './styles.scss';
import { IBackOfficeProductTabHeader, IProduct } from '@interfaces/product.interface';

interface IBackOfficeTableProps {
    headers: IBackOfficeProductTabHeader[];
    products?: IProduct[];
    brands?: IBackOfficeBrand[];
    type: 'products' | 'brands';
}

const BackOfficeTable: React.FC<IBackOfficeTableProps> = ({ headers, products, brands, type }) => {
    const generateTableRows = () => {
        if(type === 'brands'){
            if (!brands || brands.length === 0) {
                return (<tr><td colSpan={headers.length}>Aucune marque</td></tr>);
            }
            return brands.map((brand, index) => (
                <tr key={brand.id}>
                    <td>{brand.id}</td>
                    <td><img src={brand.cover} alt={brand.name} className='cover-in-table' /></td>
                    <td>{brand.name}</td>
                </tr>
            ));
        }
        if (!products || products.length === 0) {
            return (<tr><td colSpan={headers.length}>Aucun produit</td></tr>);
        }
        return products.map((product, index) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={product.cover} alt={product.title} className='cover-in-table' /></td>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.type}</td>
                <td>{product.score}</td>
            </tr>
        ));
    };

    return (
        <table id='back-office-products-table'>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {generateTableRows()}
            </tbody>
        </table>
    );
};

export default BackOfficeTable;
