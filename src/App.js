import './ProductPrice.css';
import flowers from './flowers.jpg'
import {ProductPrice} from './ProductPrice'

function App() {
  return (
    <div className = "content">
        <h1>Fancy Florist</h1>
        <ProductPrice
          name="Congratulations Bouquet"
          pic={flowers}
          description="The perfect bouquet for a celebration such as a birthday or graduation."
          price={70}
          sale={false} />
        <ProductPrice
          name="Apology Bouquet"
          pic={flowers}
          description="You need something extra when you know you messed up."
          price={150}
          sale={true} />
        <ProductPrice
          name="Wedding Bouquet"
          pic={flowers}
          description="Beautiful collection of flowers to turn heads on your special day!"
          price={200}
          sale={false} />
    </div>
  );
}

export default App;