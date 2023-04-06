import { FC, useState } from "react";
import classes from "./ProductSelf.module.css";
import { IProductItem } from "./IProductItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { plusToCart } from "../../store/cart-slice";
import AmountControl from "../UI/AmountControl";
import Accordeon from "../UI/Accordeon";
import Button from "../UI/Button";
import Price from "../UI/Price";
import ProductFeautere from "./ProductFeature";
import ProductSize from "./ProductSize";
import VerticalGap from "../Layout/HorisontalGap";

const ProductSelf: FC<{ product: IProductItem }> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={product.url} alt='' />
      </div>
      <div className={classes.info}>
        <div className={classes.header}>
          <p>
            <span className={classes.accent}>{product.title}</span>
            {product.description}
          </p>
          <ProductSize type={product.sizeType} value={product.size} />
        </div>
        <div className={classes.buy}>
          <Price currency='KZT' value={product.price} type='large' />
          <AmountControl
            startWith={1}
            onPlus={() => setQuantity(quantity + 1)}
            onMinus={() => setQuantity(quantity - 1)}
          />
          <Button
            variant='buy-large'
            onClick={() => {
              dispatch(plusToCart({ product, quantity }));
            }}>
            В корзину
          </Button>
        </div>
        <div className={classes.action}>
          <div>
            <button>
              <img src='/share-img.png' alt='' width={24} />
            </button>
          </div>
          <div>
            <p>
              При покупке от <span className={classes.accent}>10 000 ₸</span>{" "}
              бесплатная <br />
              доставка по Кокчетаву и области
            </p>
          </div>
          <div>
            <button>Прайс-лист</button>
          </div>
        </div>
        <VerticalGap gap='30px' />
        <div className={classes.features}>
          <ProductFeautere name='Производитель' value={product.manufacturer} />
          <ProductFeautere name='Бренд' value={product.brand} />
          <ProductFeautere
            name='Артикул'
            value={product.barcode.toString().slice(0, 4)}
          />
          <ProductFeautere name='Штрихкод' value={product.barcode} />
        </div>
        <Accordeon title='Описание'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eum
          cumque voluptatibus, fugit tempora asperiores consequatur enim,
          laudantium sit animi ducimus modi quas dolorum blanditiis commodi
          quam, ipsum voluptatum perspiciatis?
        </Accordeon>
        <VerticalGap gap='20px' />
        <div className={classes.line} />
        <VerticalGap gap='20px' />
        <Accordeon title='Характеристики'>
          <div className={classes.features}>
            <ProductFeautere name='Тип' value={product.care.join(", ")} />
            <ProductFeautere
              name='Производитель'
              value={product.manufacturer}
            />
            <ProductFeautere name='Бренд' value={product.barcode} />
            <ProductFeautere name='Артикул' value={product.barcode} />
            <ProductFeautere name='Штрихкод' value={product.barcode} />
            <ProductFeautere name='Вес' value={product.size} />
            <ProductFeautere name='Объем' value={product.size} />
            <ProductFeautere name='Количество в коробке' value={product.size} />
          </div>
        </Accordeon>
      </div>
    </div>
  );
};

export default ProductSelf;
