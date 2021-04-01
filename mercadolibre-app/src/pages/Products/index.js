import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import productAction from '../../store/actions/products';
import Breadcrumb from '../../componets/Breadcrumb';
import styles from './pruducts.module.scss';
import Item from '../../componets/Item';
import Loader from '../../componets/Spinner';

const Index = ({ location, items, getItems, categories, isFetching }) => {
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    getItems({ query: new URLSearchParams(location.search).get('q') });
  }, [getItems, location]);

  return (
    <>
      <div>
        {isFetching === true ? (
          <Loader />
        ) : (
          <>
            (<Breadcrumb categories={categories} />
            <main className={styles.container}>
              {items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </main>{' '}
            )
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  items: state.products.items,
  categories: state.products.categories,
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  getItems: productAction.fetchProducts,
}; //
//export default index
//export default withRouter(index)

/*export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);*/ export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Index));
