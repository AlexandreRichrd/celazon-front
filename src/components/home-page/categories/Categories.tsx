import './styles.scss'

import CategoriesItem from './categories-item/CategoriesItem';

const Categories = () => {
    return (
        <div id="categories">
            <div className="categories">
                <h2>Catégories Tendances 🔥</h2>
                <div className="category-cards">
                    <CategoriesItem title="Chaussures" image="http://localhost:8081/images/baskets.png" id={1} />
                    <CategoriesItem title="Vélo" image="http://localhost:8081/images/velo.png" id={2}/>
                    <CategoriesItem title="Vêtements" image="http://localhost:8081/images/t-shirt.png" id={3}/>
                    <CategoriesItem title="Meubles" image="http://localhost:8081/images/canape.png" id={4}/>
                    <CategoriesItem title="Audio" image="http://localhost:8081/images/casque.png" id={5}/>
                    <CategoriesItem title="Téléphonie" image="http://localhost:8081/images/smartphone.png" id={6}/>
                    <CategoriesItem title="Informatique" image="http://localhost:8081/images/ordinateur.png" id={7}/>
                    <CategoriesItem title='Beauté' image='http://localhost:8081/images/rouge-a-levres.png' id={8}/>
                    <CategoriesItem title="Électroménager" image="http://localhost:8081/images/machine-a-laver.png" id={9}/>
                    <CategoriesItem title="Jeux Vidéo" image="http://localhost:8081/images/manette.png" id={10}/>
                    <CategoriesItem title="Sport" image="http://localhost:8081/images/poids.png" id={11}/>
                    <CategoriesItem title="Jardin" image='http://localhost:8081/images/jardin.png' id={12}/>
                    <CategoriesItem title="Livres" image='http://localhost:8081/images/livre.png' id={13}/>
                    <CategoriesItem title='Bricolage' image='http://localhost:8081/images/outils.png' id={14}/>
                </div>
            </div>
        </div>
    );
}


export default Categories