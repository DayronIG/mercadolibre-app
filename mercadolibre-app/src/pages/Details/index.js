import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import productDetail from '../../store/actions/products';
import Breadcrumb from '../../componets/Breadcrumb';
import styles from './detail.module.scss';
import Loader from '../../componets/Spinner';
const Index = ({
  match: {
    params: { id },
  },
  item,
  categories,
  fetchProductDetail,
  isFetching
}) => {

  const decimals =
    item.price  &&
    (item.price.amount % 1).toString().slice(2, 2 + item.price.decimals);

console.log(decimals)
  useEffect(() => {
    fetchProductDetail(id);
  }, [fetchProductDetail, id]);

  return (
    <>
    {isFetching && <Loader/>}
      {item.price && (
        <>
          <Breadcrumb categories={categories.concat([item.title])} />
          <div className={styles.container}>
            <div className={styles.productDetails}>
              <img
                src={item.picture}
                className={styles.picture}
                alt={item.title}
              />
              <div>
                <p className={styles.firstParagraph}>
                  {item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                  {item.sold_quantity} vendidos
                </p>
                <p className={styles.secondParagraph}>{item.title}</p>
                <p className={styles.thirdParagraph}>
                  $ {parseInt(item.price.amount, 0)}{'.'}
                  {item.price.decimals && <sup>{decimals}</sup>}
                </p>
                <button type="button">Comprar</button>
              </div>
            </div>
            <div className={styles.productDescription}>
              <p className={styles.descriptionTitle}>
                Descripción del producto
              </p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  item: state.products.detail,
  categories: state.products.categories,
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  fetchProductDetail: productDetail.fetchDetail,
};
// export default index;
export default connect(mapStateToProps, mapDispatchToProps)(Index);
